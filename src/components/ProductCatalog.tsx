import React, { useState } from 'react';
import { ChocolateProduct } from '../types';
import { CHOCOLATE_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ShieldCheck, Sparkles, Filter, PackageCheck, Zap, FileText, ArrowRight, Store } from 'lucide-react';

interface ProductCatalogProps {
  onOpenDetails: (product: ChocolateProduct) => void;
  onRequestSamples?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenDetails,
  onRequestSamples
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Complete Collection (All)' },
    { id: 'immunity', label: 'Immunity & D3+K2' },
    { id: 'brain_focus', label: 'Brain & Focus B-Complex' },
    { id: 'sleep_calm', label: 'Sleep & Calm Oat Velvet' },
    { id: 'daily_multi', label: 'Daily Multi-Bio 70%' },
    { id: 'skin_glow', label: 'Radiant Glow Astaxanthin' },
    { id: 'pure_cacao', label: '100% Ceremonial Pure' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? CHOCOLATE_PRODUCTS
    : CHOCOLATE_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-[#160f0c] border-t border-[#291b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#2a1b14] border border-[#c99a4c]/40 text-[#e8bd78]">
            <Sparkles className="w-3.5 h-3.5 text-[#e8bd78]" />
            Plant-Based • Zero Refined Sugar • Bioactive Vitamins
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f7f2ea] tracking-tight">
            The Synthé Formulations
          </h2>

          <p className="text-sm sm:text-base text-[#b8a698] font-light leading-relaxed">
            Every bar is crafted by Montevia Nutri Foods with certified organic single-estate Criollo cacao, sweetened exclusively with zero-glycemic monk fruit, and calibrated with clinical-grade fat-soluble vitamins.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#a69284] pt-2">
            <span className="flex items-center gap-1.5 text-[#7ae08d]">
              <ShieldCheck className="w-4 h-4 text-[#7ae08d]" /> 0.0g Refined Sugar (Monk Fruit Sweetened)
            </span>
            <span className="flex items-center gap-1.5 text-[#e8bd78]">
              <Zap className="w-4 h-4 text-[#e8bd78]" /> 3.8x Lipid Bioavailability Uptake
            </span>
            <span className="flex items-center gap-1.5 text-[#cdb7ff]">
              <PackageCheck className="w-4 h-4 text-[#cdb7ff]" /> 100% Plant-Based & Gluten-Free
            </span>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#c99a4c] text-[#140e0b] font-bold shadow-md shadow-[#c99a4c]/20'
                  : 'bg-[#221611] text-[#c5b5a6] hover:text-[#f7f2ea] border border-[#38261c]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

        {/* Institutional & Retail Presentation Box */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#241712] via-[#2d1c14] to-[#1f140f] border border-[#4d3425] p-7 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#c99a4c]/20 text-[#e8bd78] border border-[#c99a4c]/40">
              The Master Wellness Protocol
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f7f2ea]">
              Complete Portfolio for Stockists & Practitioners
            </h3>
            <p className="text-sm text-[#b8a698] font-light leading-relaxed">
              Synthesizing clinical nutritional science with fine-flavor single-estate cacao. Synthé supplies specialty organic retailers, luxury hospitality, premium wellness dispensaries, and global distributors seeking zero-sugar, vitamin-fortified confectioneries.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-[#d6c7b7]">
              <span>✓ All 6 Formulations Available</span>
              <span>✓ Batch HPLC Chromatography Certificates</span>
              <span>✓ International Temperature-Controlled Dispatch</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3.5 w-full lg:w-auto shrink-0">
            <button
              onClick={() => {
                if (onRequestSamples) {
                  onRequestSamples();
                } else {
                  const elem = document.getElementById('inquire');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              id="inquire-catalog-btn"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#c99a4c] hover:bg-[#d5a359] text-[#140e0b] font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Store className="w-4 h-4" />
              <span>Inquire & Request Spec Sheet</span>
            </button>
            <span className="text-[11px] text-[#a69284] text-center">
              Direct inquiries via Montevia Nutri Foods
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
