import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    app: "Synthé Organic Chocolate", 
    company: "Montevia Nutri Foods",
    origin: "Hyderabad, India" 
  });
});

// Partner, Stockist & Consumer Inquiries API
app.post("/api/inquire", (req, res) => {
  const { name, email, organization, inquiryType, message, preferredFormulation } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  console.log(`[Synthé Inquiry] From: ${name} (${email}) | Type: ${inquiryType} | Formulation: ${preferredFormulation || 'None'}`);

  return res.json({
    success: true,
    message: "Thank you for contacting Synthé by Montevia Nutri Foods. Our team will review your inquiry within 24 business hours.",
    referenceId: `SYN-${Date.now().toString().slice(-6)}`
  });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Synthé Organic Chocolate server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
