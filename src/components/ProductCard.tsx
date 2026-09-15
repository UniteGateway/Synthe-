import React from 'react';
import { Star, ShieldCheck, Sparkles, Plus, Eye, Zap, Info } from 'lucide-react';
import { ChocolateProduct, CurrencyCode } from '../types';
import { CURRENCIES } from '../data/internationalData';

interface ProductCardProps {
  product: ChocolateProduct;
  currentCurrency: CurrencyCode;
  onAddToCart: (product: ChocolateProduct) => void;
  onOpenDetails: (product: ChocolateProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currentCurrency,
  onAddToCart,
  onOpenDetails
}) => {
  const currencyInfo = CURRENCIES[currentCurrency];
  const formattedPrice = currencyInfo.format(product.priceUSD);

  return (
    <div className="bg-[#1b120d] rounded-xl border border-[#3b271d] hover:border-[#c6934b]/60 transition-all duration-300 flex flex-col overflow-hidden group shadow-lg">
      {/* Product Image & Badges */}
      <div className="relative h-56 overflow-hidden bg-[#140e0b]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b120d] via-transparent to-black/30" />

        {/* Cacao Percentage Tag */}
        <div className="absolute top-3 left-3 bg-[#140e0b]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#c6934b]/40 text-xs font-bold text-[#e6b978]">
          {product.cacaoPercentage}% Cacao
        </div>

        {/* Zero Sugar Badge */}
        <div className="absolute top-3 right-3 bg-[#1a2e1d]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#3b7a48]/50 text-xs font-semibold text-[#7ae08d] flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#7ae08d]" />
          Zero Sugar
        </div>

        {/* Feature / Category Pill */}
        <div className="absolute bottom-3 left-3 bg-[#140e0b]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-medium text-[#cdb7ff] border border-[#523e73]">
          {product.badge}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating */}
          <div className="flex items-center justify-between text-xs text-[#a69284] mb-1.5">
            <div className="flex items-center gap-1 text-[#e6b978]">
              <Star className="w-3.5 h-3.5 fill-[#e6b978] text-[#e6b978]" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-[#a69284]">({product.reviewsCount})</span>
            </div>
            <span className="text-[11px] text-[#7ae08d] font-medium">100% Organic Certified</span>
          </div>

          {/* Product Title & Tagline */}
          <h3 className="font-display font-bold text-lg text-[#f7f2ea] group-hover:text-[#e6b978] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-[#b8a698] font-light mt-1 line-clamp-2">
            {product.tagline}
          </p>

          {/* Active Vitamins Highlights */}
          <div className="mt-3.5 pt-3 border-t border-[#2e1f17] space-y-1.5">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[#c6934b] flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#c6934b]" />
              Therapeutic Vitamin Actives:
            </div>
            <div className="space-y-1">
              {product.vitamins.slice(0, 2).map((vit, idx) => (
                <div key={idx} className="text-xs text-[#d6c7b7] flex items-center justify-between bg-[#241712] px-2 py-1 rounded">
                  <span className="truncate pr-1">{vit.name}</span>
                  <span className="text-[#e6b978] font-semibold whitespace-nowrap text-[11px]">
                    {vit.dosage}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sweetener System */}
          <div className="mt-2 text-[11px] text-[#9a887b]">
            <span className="text-[#c59b6d] font-medium">Sweetened with: </span>
            {product.sweetenerSystem.split('(')[0]}
          </div>
        </div>

        {/* Pricing and Action Buttons */}
        <div className="pt-3 border-t border-[#2e1f17] flex items-center justify-between gap-2">
          <div>
            <div className="text-xs text-[#a69284]">Per 45g bar</div>
            <div className="text-lg font-bold text-[#f7f2ea]">
              {formattedPrice}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetails(product)}
              className="p-2 rounded-lg bg-[#241712] hover:bg-[#322018] text-[#d6c7b7] hover:text-[#f7f2ea] border border-[#422e23] transition-colors cursor-pointer"
              title="View Supplement Facts & Lab Verification"
            >
              <Info className="w-4 h-4" />
            </button>

            <button
              onClick={() => onAddToCart(product)}
              className="px-3.5 py-2 rounded-lg bg-[#c6934b] hover:bg-[#d5a359] text-[#140e0b] font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Box</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
