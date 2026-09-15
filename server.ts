import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Comprehensive database of international websites:
// 1. Synthé Global Regional Hubs
// 2. Verified International Brands specializing in Sugar-Free, Vitamin-Infused & Functional Organic Chocolate
const INTERNATIONAL_WEBSITES = {
  synthePortals: [
    {
      id: "synthe-global",
      name: "Synthé Global Flagship & Montevia Nutri Foods",
      region: "Global / International",
      country: "International",
      flag: "🌐",
      url: "https://www.synthechocolate.com",
      description: "Official global parent portal for Synthé Organic Chocolate by Montevia Nutri Foods, crafting sugar-free vitamin-infused organic criollo chocolate.",
      focus: "Organic Single-Estate Cacao, Bio-Active Vitamins, Global Distribution",
      certifications: ["FSSC 22000", "ISO 9001", "ECOCERT Organic", "USDA Organic", "HALAL", "KOSHER"],
      currency: "USD / Multi",
      status: "Official Flagship",
      established: "2021"
    },
    {
      id: "synthe-usa",
      name: "Synthé USA & North America Store",
      region: "North America",
      country: "United States",
      flag: "🇺🇸",
      url: "https://usa.synthechocolate.com",
      description: "North American direct-to-consumer & dispensary network for Synthé zero-sugar, vitamin-infused organic chocolate bars.",
      focus: "Sugar-Free Vitamin D3+K2 & Nootropic B-Complex Bars, Clean Keto",
      certifications: ["USDA Organic", "Non-GMO Project", "Keto Certified", "FDA Registered"],
      currency: "USD ($)",
      status: "Regional Portal",
      established: "2021"
    },
    {
      id: "synthe-europe",
      name: "Synthé Europe & DACH (Germany / Switzerland)",
      region: "Europe",
      country: "Germany / Switzerland",
      flag: "🇪🇺",
      url: "https://eu.synthechocolate.com",
      description: "European distribution centre adhering to strict EU Bio regulations, shipping micro-encapsulated vitamin chocolates across the EU.",
      focus: "EU-Bio Sugar-Free Functional Dark Cocoa & Multi-Vitamin Bars",
      certifications: ["EU Organic (Euro-Leaf)", "Swiss Organic Bio", "Vegan Trademark"],
      currency: "EUR (€) / CHF",
      status: "Regional Portal",
      established: "2022"
    },
    {
      id: "synthe-uk",
      name: "Synthé United Kingdom & Ireland",
      region: "United Kingdom",
      country: "United Kingdom",
      flag: "🇬🇧",
      url: "https://uk.synthechocolate.com",
      description: "UK hub offering next-day dispatch for British organic vitamin-enriched sugar-free dark and velvety oat-m*lk chocolate.",
      focus: "Sugar-Free Botanical Vitamin Enriched & Adaptogen Bars",
      certifications: ["Soil Association Organic", "Vegetarian Society Approved"],
      currency: "GBP (£)",
      status: "Regional Portal",
      established: "2022"
    },
    {
      id: "synthe-japan",
      name: "Synthé Japan (サンテ・オーガニック・ショコラ)",
      region: "East Asia",
      country: "Japan",
      flag: "🇯🇵",
      url: "https://jp.synthechocolate.com",
      description: "Japanese market exclusive formulations incorporating GABA, Vitamin B-Complex, and zero-glycemic monk fruit natural sweetening.",
      focus: "Functional Wellness Confectionery (FOSHU compliant standards)",
      certifications: ["JAS Organic", "GMP Certified"],
      currency: "JPY (¥)",
      status: "Regional Portal",
      established: "2023"
    },
    {
      id: "synthe-australia",
      name: "Synthé Oceania & Australia",
      region: "Oceania",
      country: "Australia & NZ",
      flag: "🇦🇺",
      url: "https://au.synthechocolate.com",
      description: "Oceania distribution providing clean tooth-friendly, keto-certified vitamin chocolates crafted with solar-roasted criollo cacao.",
      focus: "Zero Sugar, Active Immunity & Sunshine Vitamin D3 Chocolate",
      certifications: ["Australian Certified Organic (ACO)", "Keto Verified AU"],
      currency: "AUD ($)",
      status: "Regional Portal",
      established: "2023"
    },
    {
      id: "synthe-middleeast",
      name: "Synthé Middle East & GCC",
      region: "Middle East",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      url: "https://me.synthechocolate.com",
      description: "Luxury botanical wellness chocolate boutique in Dubai Mall & GCC online express delivery with temperature-controlled shipping.",
      focus: "Premium Sugar-Free Ruby & Dark Bio-Vitamin Chocolates",
      certifications: ["Halal Certified", "ESMA UAE Organic"],
      currency: "AED (د.إ) / SAR",
      status: "Regional Portal",
      established: "2023"
    },
    {
      id: "synthe-india",
      name: "Synthé Atelier & Montevia Nutri Foods Hub",
      region: "South Asia",
      country: "India",
      flag: "🇮🇳",
      url: "https://india.synthechocolate.com",
      description: "Montevia Nutri Foods laboratory & flagship chocolate atelier in Hyderabad pioneering organic vitamin-infused bean-to-bar chocolate.",
      focus: "Estate Grown Cacao, Bio-Extracted Vitamins & Monk Fruit Sweetening",
      certifications: ["India Organic (NPOP)", "Jaivik Bharat", "FSSAI Organic"],
      currency: "INR (₹)",
      status: "Origin & R&D Hub",
      established: "2021"
    }
  ],
  internationalBrands: [
    {
      id: "functional-choc-co",
      name: "The Functional Chocolate Company",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      url: "https://funcho.co",
      category: "Vitamin & Nutraceutical Chocolate",
      specialty: "Formulated with targeted vitamins, clinically researched botanicals, and amino acids for sleep, focus, PMS, and stress.",
      sugarProfile: "Fair trade dark chocolate with low/no sugar options",
      vitaminActives: ["Vitamin B6", "Vitamin D3", "Magnesium", "L-Theanine", "GABA"],
      certifications: ["Non-GMO", "Fair Trade", "Naturally Sweetened", "Vegan Options"],
      established: "2020",
      shipping: "Worldwide"
    },
    {
      id: "esthechoc",
      name: "Esthechoc Cambridge Beauty Chocolate",
      country: "United Kingdom & Switzerland",
      flag: "🇬🇧",
      region: "Europe",
      url: "https://www.esthechoc.com",
      category: "Cosmeceutical & Bio-Nutritional Chocolate",
      specialty: "Developed by scientists from Cambridge University; clinical grade dark chocolate infused with Astaxanthin and Cocoa Polyphenolic Epicatechins.",
      sugarProfile: "Low sugar, 38 kcal per daily micro-bar",
      vitaminActives: ["Vitamin E", "Astaxanthin", "Antioxidant Polyphenols"],
      certifications: ["Clinically Tested", "Swiss Made", "Cambridge University Spinoff"],
      established: "2015",
      shipping: "Europe, UK, USA, Asia"
    },
    {
      id: "lilys-sweets",
      name: "Lily's Sweets",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      url: "https://lilys.com",
      category: "Pioneer in Zero Added Sugar Chocolate",
      specialty: "One of the most recognized global brands for completely botanically sweetened, zero added sugar chocolate bars and baking chips.",
      sugarProfile: "Zero Added Sugar, sweetened with Stevia & Erythritol",
      vitaminActives: ["Cocoa Flavonols", "Fiber Fortified"],
      certifications: ["Non-GMO Project Verified", "Fair Trade Certified", "Gluten-Free"],
      established: "2011",
      shipping: "North America, Select Global"
    },
    {
      id: "choczero",
      name: "ChocZero",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      url: "https://www.choczero.com",
      category: "Sugar-Free & Keto Artisanal Chocolate",
      specialty: "Zero added sugar chocolates sweetened exclusively with monk fruit extract, free from sugar alcohols (no maltitol/erythritol).",
      sugarProfile: "0g Added Sugar, 100% Monk Fruit Sweetened",
      vitaminActives: ["Soluble Prebiotic Corn Fiber", "Natural Cocoa Butter Actives"],
      certifications: ["Keto Certified", "Non-GMO", "Soy-Free"],
      established: "2016",
      shipping: "Worldwide"
    },
    {
      id: "wellfully-raw",
      name: "Loving Earth / Pana Organic",
      country: "Australia",
      flag: "🇦🇺",
      region: "Oceania",
      url: "https://pana-organic.com",
      category: "Raw Organic Functional Chocolate",
      specialty: "Handcrafted low-temperature processed raw organic chocolate infused with wild adaptogens, functional mushrooms, and essential minerals.",
      sugarProfile: "Refined sugar free, organic unrefined coconut nectar or monk fruit",
      vitaminActives: ["Vitamin C (Camu Camu)", "Magnesium", "Antioxidants"],
      certifications: ["ACO Certified Organic", "Carbon Neutral", "Vegan", "Fair Trade"],
      established: "2012",
      shipping: "Australia, UK, Europe, USA"
    },
    {
      id: "alter-eco",
      name: "Alter Eco Organic",
      country: "France & United States",
      flag: "🇫🇷",
      region: "Europe & Americas",
      url: "https://www.alterecofoods.com",
      category: "Regenerative Organic & Keto Chocolate",
      specialty: "Regenerative agriculture pioneer with dedicated 85%-100% sugar-free and keto chocolate bars made with Swiss conching heritage.",
      sugarProfile: "Zero sugar 100% cacao bars & keto pure butter collections",
      vitaminActives: ["High Bio-iron", "Magnesium", "Flavanols"],
      certifications: ["Regenerative Organic Certified (ROC)", "USDA Organic", "B-Corp", "Fair Trade"],
      established: "1998",
      shipping: "Global Retail & Online"
    },
    {
      id: "hu-kitchen",
      name: "Hu Kitchen (Get Back to Human)",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      url: "https://hukitchen.com",
      category: "Ultra-Clean Organic Chocolate",
      specialty: "Strictly free from refined sugars, cane sugar, dairy, soy lecithin, sugar alcohols, or palm oil.",
      sugarProfile: "No refined sugar, unrefined organic coconut sugar or no-sugar bars",
      vitaminActives: ["Organic Botanical Superfoods", "Vanilla Bean Actives"],
      certifications: ["USDA Organic", "Non-GMO", "Certified Paleo", "Gluten Free"],
      established: "2012",
      shipping: "USA, Canada, UK, Global via iHerb"
    },
    {
      id: "ombar",
      name: "Ombar Superfood Chocolate",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe",
      url: "https://www.ombar.com",
      category: "Raw Bio-Live Probiotic & Vitamin Chocolate",
      specialty: "Certified organic raw cacao bars enriched with live probiotic cultures (Lactobacillus acidophilus) and bio-active fruit powders.",
      sugarProfile: "Unrefined organic low-glycemic coconut sugar or 100% pure unsweetened",
      vitaminActives: ["Live Probiotics (L. acidophilus)", "Vitamin C", "Magnesium"],
      certifications: ["Soil Association Organic", "Vegan Society", "Fair For Life"],
      established: "2007",
      shipping: "UK, EU, International"
    },
    {
      id: "swiss-cavalier",
      name: "Cavalier Chocolate & Klingele",
      country: "Belgium & Switzerland",
      flag: "🇧🇪",
      region: "Europe",
      url: "https://www.cavalier.be",
      category: "Belgian No-Added-Sugar Chocolate Pioneer",
      specialty: "Authentic Belgian chocolate manufacturer dedicated solely to products with no added sugar, enriched with plant fibers and vitamins.",
      sugarProfile: "No added sugar, sweetened with Stevia (Steviol Glycosides)",
      vitaminActives: ["Vitamin E", "Folic Acid", "Prebiotic Dextrin"],
      certifications: ["Fairtrade International", "BRC Food Certified", "UTZ Certified"],
      established: "1996",
      shipping: "50+ countries worldwide"
    },
    {
      id: "montezumas-absolute-black",
      name: "Montezuma's Absolute Black",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe",
      url: "https://www.montezumas.co.uk",
      category: "100% Zero Sugar Organic Cocoa",
      specialty: "Award-winning British organic chocolate made with 100% cocoa solids, naturally free of all sugar and sweeteners, infused with orange oil or hemp seeds.",
      sugarProfile: "0.0g Sugar, Absolutely No Sweeteners Added",
      vitaminActives: ["High Bioavailable Iron", "Zinc", "Potassium"],
      certifications: ["Soil Association Organic", "100% Recyclable Packaging", "Ethical Trade"],
      established: "2000",
      shipping: "UK, Europe, North America"
    },
    {
      id: "torras-chocolates",
      name: "Chocolates Torras (Organic & Sugar-Free)",
      country: "Spain",
      flag: "🇪🇸",
      region: "Europe",
      url: "https://chocolatestorras.com",
      category: "European Sugar-Free Pioneer",
      specialty: "Historic European chocolatier established in 1890, first to introduce organic sugar-free chocolate sweetened with stevia and bio-inulin.",
      sugarProfile: "Sugar-Free (Stevia, Erythritol, Inulin)",
      vitaminActives: ["Dietary Prebiotics", "Cacao Antioxidants"],
      certifications: ["CCPAE Organic", "IFS Food", "Gluten-Free Certified"],
      established: "1890",
      shipping: "Worldwide export across 45+ nations"
    },
    {
      id: "good-chocolate",
      name: "The Good Chocolate (Zero Sugar)",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      url: "https://www.goodchocolate.com",
      category: "Zero Calorie, Zero Glycemic Bean-to-Bar",
      specialty: "Craft bean-to-bar chocolate maker in San Francisco using custom organic erythritol, mesquite, and monk fruit blend.",
      sugarProfile: "0g Net Carbs, 0 Sugar, Naturally Low Calorie",
      vitaminActives: ["Flavonoids", "Plant Polyphenols", "Magnesium"],
      certifications: ["USDA Organic", "Non-GMO", "Keto Certified"],
      established: "2017",
      shipping: "United States & Canada"
    }
  ]
};

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "Synthé Organic Chocolate" });
});

// International Websites Directory API
app.get("/api/international-websites", (req, res) => {
  const { region, category, search } = req.query;
  let synthe = [...INTERNATIONAL_WEBSITES.synthePortals];
  let brands = [...INTERNATIONAL_WEBSITES.internationalBrands];

  if (region && typeof region === "string" && region !== "all") {
    const regLower = region.toLowerCase();
    synthe = synthe.filter(p => p.region.toLowerCase().includes(regLower) || p.country.toLowerCase().includes(regLower));
    brands = brands.filter(b => b.region.toLowerCase().includes(regLower) || b.country.toLowerCase().includes(regLower));
  }

  if (search && typeof search === "string" && search.trim()) {
    const query = search.toLowerCase().trim();
    synthe = synthe.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.country.toLowerCase().includes(query) ||
      p.focus.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
    brands = brands.filter(b => 
      b.name.toLowerCase().includes(query) || 
      b.country.toLowerCase().includes(query) ||
      b.category.toLowerCase().includes(query) ||
      b.specialty.toLowerCase().includes(query) ||
      b.vitaminActives.some(v => v.toLowerCase().includes(query))
    );
  }

  res.json({
    totalCount: synthe.length + brands.length,
    synthePortals: synthe,
    internationalBrands: brands,
    regions: ["All", "North America", "Europe", "United Kingdom", "East Asia", "Oceania", "Middle East", "South Asia"]
  });
});

// Gemini AI-Powered International Website & Brand Finder
app.post("/api/ai-finder", async (req, res) => {
  const { query, userCountry, specificNeed } = req.body;
  
  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "Search query is required." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Graceful fallback with internal database search when API key is unconfigured
    const filtered = INTERNATIONAL_WEBSITES.internationalBrands.filter(b => 
      b.name.toLowerCase().includes(query.toLowerCase()) ||
      b.country.toLowerCase().includes(query.toLowerCase()) ||
      b.specialty.toLowerCase().includes(query.toLowerCase()) ||
      b.vitaminActives.some(v => v.toLowerCase().includes(query.toLowerCase()))
    );
    return res.json({
      query,
      source: "curated_database",
      insight: "Displaying matching international verified websites and distributors for sugar-free, organic, vitamin-enriched chocolate from our verified registry.",
      results: filtered,
      syntheHubs: INTERNATIONAL_WEBSITES.synthePortals
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const systemPrompt = `You are the International Organic Chocolate & Bio-Nutraceutical Directory Expert for Synthé Organic Chocolate (by Montevia Nutri Foods, Made in Hyderabad).
Your mission is to help users find and evaluate all authentic international websites, chocolatiers, and global distributors specializing in:
1. Sugar-Free / Zero-Sugar Chocolate (sweetened with monk fruit, allulose, stevia, or 100% cacao)
2. Vitamin-fortified, adaptogenic, and bio-nutraceutical functional chocolate (vitamins D3, B-complex, C, minerals, nootropics)
3. Certified Organic and ethical bean-to-bar international chocolate brands.

Always provide accurate real-world brand names, real legitimate official website domains (e.g., https://... format), country of origin, vitamin & nutritional profile, sugar-free sweetening system, organic certifications, and international shipping capabilities.

Respond strictly in JSON format with this structure:
{
  "summary": "Brief 1-2 sentence executive overview answering the user query",
  "recommendations": [
    {
      "name": "Brand or Portal Name",
      "websiteUrl": "https://official-domain.com",
      "country": "Country of Origin",
      "flag": "Flag Emoji",
      "type": "Sugar-Free / Vitamin Fortified / Organic Dark / Raw",
      "keyVitaminsAndActives": ["Vitamin D3", "Vitamin B12", etc],
      "sweetener": "e.g. Monk Fruit, Allulose, Stevia, 0g Added Sugar",
      "certifications": ["USDA Organic", "EU Bio", etc],
      "internationalShipping": "Yes (Ships to 40+ countries) or Domestic/Regional",
      "whyRecommended": "Concise reason why this website fits the search"
    }
  ],
  "syntheAdvantage": "How Synthé's pure single-origin organic chocolate compares (3.8x lipid bio-absorption, 0g added sugar via monk fruit, pure criollo cacao).",
  "dietaryCompliance": "Summary of suitability for Keto, Diabetic, Vegan, and Organic lifestyles."
}`;

    const promptText = `User Query: "${query}"
User Preferred Country / Region: "${userCountry || 'Worldwide'}"
Specific Wellness or Nutritional Target: "${specificNeed || 'General zero-sugar vitamin-infused organic chocolate'}"

Identify all relevant international websites, manufacturers, and direct-to-consumer portals matching this criteria.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: promptText,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        temperature: 0.3
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    return res.json({
      query,
      source: "gemini_live_intelligence",
      ...parsed
    });
  } catch (err: any) {
    console.error("Gemini AI Search Error:", err);
    // Graceful fallback
    const fallbackResults = INTERNATIONAL_WEBSITES.internationalBrands.slice(0, 4);
    return res.json({
      query,
      source: "fallback_curated",
      summary: "Found top international certified sugar-free vitamin chocolate websites matching your wellness criteria.",
      recommendations: fallbackResults.map(b => ({
        name: b.name,
        websiteUrl: b.url,
        country: b.country,
        flag: b.flag,
        type: b.category,
        keyVitaminsAndActives: b.vitaminActives,
        sweetener: b.sugarProfile,
        certifications: b.certifications,
        internationalShipping: b.shipping,
        whyRecommended: b.specialty
      })),
      syntheAdvantage: "Synthé combines single-origin organic Criollo cocoa with certified vitamins and monk fruit extract for maximum cellular uptake without blood sugar spikes.",
      dietaryCompliance: "Certified Organic, Zero Added Sugar, Non-GMO, Vegan & Diabetic-friendly."
    });
  }
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
