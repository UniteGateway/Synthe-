import React, { useState } from 'react';
import { ChocolateProduct, CurrencyCode } from '../types';
import { CHOCOLATE_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ShieldCheck, Sparkles, Filter, PackageCheck, Zap } from 'lucide-react';
import { CURRENCIES } from '../data/internationalData';

interface ProductCatalogProps {
  currentCurrency: CurrencyCode;
  onAddToCart: (product: ChocolateProduct) => void;
  onOpenDetails: (product: ChocolateProduct) => void;
  onAddBundleToCart: (products: ChocolateProduct[]) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  currentCurrency,
  onAddToCart,
  onOpenDetails,
  onAddBundleToCart
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

  const currencyInfo = CURRENCIES[currentCurrency];
  const bundleDiscountPrice = currencyInfo.format(44.90);
  const bundleRegularPrice = currencyInfo.format(52.15);

  return (
    <section id="products" className="py-16 bg-[#160f0c] border-t border-[#291b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2a1b14] border border-[#c99a4c]/40 text-[#e8bd78]">
            <Sparkles className="w-3.5 h-3.5 text-[#e8bd78]" />
            Plant-Based • Zero Refined Sugar • Bioactive Vitamins
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f7f2ea] tracking-tight">
            The Synthé Functional Range
          </h2>

          <p className="text-sm sm:text-base text-[#b8a698] font-light">
            Every bar is crafted by Montevia Nutri Foods with certified organic criollo cacao, sweetened exclusively with zero-glycemic monk fruit and allulose, and calibrated with clinical-grade vitamins.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#a69284] pt-2">
            <span className="flex items-center gap-1 text-[#7ae08d]">
              <ShieldCheck className="w-4 h-4 text-[#7ae08d]" /> 0.0g Refined Sugar
            </span>
            <span className="flex items-center gap-1 text-[#e8bd78]">
              <Zap className="w-4 h-4 text-[#e8bd78]" /> Fat-Soluble Vitamin Bioavailability
            </span>
            <span className="flex items-center gap-1 text-[#cdb7ff]">
              <PackageCheck className="w-4 h-4 text-[#cdb7ff]" /> Plant-Based & Gluten-Free
            </span>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              currentCurrency={currentCurrency}
              onAddToCart={onAddToCart}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

        {/* Curated 6-Bar Discovery Set Box Promo */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#241712] via-[#2f1c13] to-[#1f140f] border border-[#4d3425] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-left">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#c99a4c]/20 text-[#e8bd78] border border-[#c99a4c]/40">
              Complete Functional Protocol
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#f7f2ea]">
              Synthé Signature Wellness Vault (6 Bars)
            </h3>
            <p className="text-sm text-[#b8a698] font-light">
              Experience the complete spectrum of botanical wellness: 1x Synthé Glow (Astaxanthin + Biotin), 1x Synthé Boost (D3 + K2), 1x Synthé Calm (Magnesium + L-Theanine), 1x Synthé Kids (B-Complex + DHA), 1x Synthé Focus (Lion's Mane + Cordyceps), and 1x Synthé Pure 100% Ceremonial Cacao.
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs text-[#d6c7b7]">
              <span>✓ All 6 Bars Included</span>
              <span>✓ Free International Express Dispatch</span>
              <span>✓ Certificate of Bio-Analysis included</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 w-full lg:w-auto">
            <div className="text-center lg:text-right">
              <div className="text-xs text-[#a69284] line-through">{bundleRegularPrice}</div>
              <div className="text-2xl font-bold text-[#e8bd78]">{bundleDiscountPrice}</div>
              <div className="text-[11px] text-[#7ae08d]">Save 15% on Master Vault</div>
            </div>
            <button
              onClick={() => onAddBundleToCart(CHOCOLATE_PRODUCTS)}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#c99a4c] hover:bg-[#d5a359] text-[#140e0b] font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <PackageCheck className="w-4 h-4" />
              <span>Add Full Vault to Cart</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
