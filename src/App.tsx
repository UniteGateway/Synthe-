import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { InternationalDirectory } from './components/InternationalDirectory';
import { VitaminScience } from './components/VitaminScience';
import { AboutExtraction } from './components/AboutExtraction';
import { SupplementModal } from './components/SupplementModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { ChocolateProduct, CartItem, CurrencyCode } from './types';
import { Check } from 'lucide-react';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('USD');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ChocolateProduct | null>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Trigger brief confirmation toast
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add single bar to box
  const handleAddToCart = (product: ChocolateProduct) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to tasting box`);
  };

  // Add entire 6-bar Discovery Vault
  const handleAddBundleToCart = (products: ChocolateProduct[]) => {
    setCartItems(prev => {
      const updated = [...prev];
      products.forEach(p => {
        const idx = updated.findIndex(i => i.product.id === p.id);
        if (idx >= 0) {
          updated[idx].quantity += 1;
        } else {
          updated.push({ product: p, quantity: 1 });
        }
      });
      return updated;
    });
    showToast('Added complete Master Wellness Vault (6 bars) to box!');
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => item.product.id === productId ? { ...item, quantity } : item)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalCartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#140e0b] text-[#f7f2ea] flex flex-col selection:bg-[#c6934b] selection:text-[#140e0b]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1e140f] border border-[#c6934b] text-[#f7f2ea] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-[#7ae08d] text-[#140e0b] flex items-center justify-center font-bold">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        currentCurrency={currentCurrency}
        onSelectCurrency={setCurrentCurrency}
        cartCount={totalCartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateSection={handleNavigateSection}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreProducts={() => handleNavigateSection('products')}
          onExploreInternational={() => handleNavigateSection('international-directory')}
          onExploreScience={() => handleNavigateSection('science')}
          currentCurrency={currentCurrency}
        />

        <ProductCatalog
          currentCurrency={currentCurrency}
          onAddToCart={handleAddToCart}
          onOpenDetails={(p) => setSelectedProduct(p)}
          onAddBundleToCart={handleAddBundleToCart}
        />

        <InternationalDirectory />

        <VitaminScience />

        <AboutExtraction />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Supplement Facts Sheet Modal */}
      <SupplementModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        currentCurrency={currentCurrency}
      />

      {/* Shopping Box Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currentCurrency={currentCurrency}
      />
    </div>
  );
}
