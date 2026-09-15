import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { VitaminScience } from './components/VitaminScience';
import { AboutExtraction } from './components/AboutExtraction';
import { InquirySection } from './components/InquirySection';
import { SupplementModal } from './components/SupplementModal';
import { Footer } from './components/Footer';
import { ChocolateProduct } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ChocolateProduct | null>(null);
  const [inquiryProduct, setInquiryProduct] = useState<ChocolateProduct | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenInquire = (product?: ChocolateProduct) => {
    if (product) {
      setInquiryProduct(product);
    }
    handleNavigateSection('inquire');
  };

  return (
    <div className="min-h-screen bg-[#140e0b] text-[#f7f2ea] flex flex-col selection:bg-[#c6934b] selection:text-[#140e0b]">
      {/* Navigation Bar */}
      <Navbar
        onNavigateSection={handleNavigateSection}
        activeSection={activeSection}
        onOpenInquire={() => handleOpenInquire()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreProducts={() => handleNavigateSection('products')}
          onExploreScience={() => handleNavigateSection('science')}
          onStockSynthe={() => handleOpenInquire()}
        />

        <ProductCatalog
          onOpenDetails={(p) => setSelectedProduct(p)}
          onRequestSamples={() => handleOpenInquire()}
        />

        <VitaminScience />

        <AboutExtraction />

        <InquirySection initialProduct={inquiryProduct} />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Supplement & Nutritional Specification Facts Sheet Modal */}
      <SupplementModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={(p) => handleOpenInquire(p)}
      />
    </div>
  );
}

