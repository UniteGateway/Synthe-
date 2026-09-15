import React from 'react';
import { X, ShieldCheck, Check, Sparkles, Zap, Award, ExternalLink } from 'lucide-react';
import { ChocolateProduct, CurrencyCode } from '../types';
import { CURRENCIES } from '../data/internationalData';

interface SupplementModalProps {
  product: ChocolateProduct | null;
  onClose: () => void;
  onAddToCart: (product: ChocolateProduct) => void;
  currentCurrency: CurrencyCode;
}

export const SupplementModal: React.FC<SupplementModalProps> = ({
  product,
  onClose,
  onAddToCart,
  currentCurrency
}) => {
  if (!product) return null;

  const currencyInfo = CURRENCIES[currentCurrency];
  const formattedPrice = currencyInfo.format(product.priceUSD);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#1a120e] border border-[#4a3325] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#312117] bg-[#160e0a]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#c6934b]/20 text-[#e6b978] border border-[#c6934b]/40">
              {product.cacaoPercentage}% Single-Origin Cacao
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#1a2e1d] text-[#7ae08d] border border-[#3b7a48]/50">
              0g Added Sugar
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#a69284] hover:text-white bg-[#221611] hover:bg-[#322018] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-left">
          {/* Header Title & Description */}
          <div>
            <h3 className="text-2xl font-display font-bold text-[#f7f2ea]">
              {product.name}
            </h3>
            <p className="text-xs text-[#e6b978] font-medium mt-0.5">
              {product.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#b8a698] font-light mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Official FDA / EU Style Supplement Facts Sheet */}
          <div className="bg-[#140e0b] border-2 border-[#453123] rounded-lg p-4 font-sans text-xs text-[#f7f2ea] space-y-2">
            <div className="border-b-4 border-white pb-1">
              <div className="text-xl font-black uppercase tracking-wider font-display">
                Supplement & Nutrition Facts
              </div>
              <div className="flex justify-between text-[11px] text-[#a69284]">
                <span>Serving Size: {product.servingSize}</span>
                <span>Servings Per Container: {product.servingsPerBar}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline font-bold border-b-2 border-white/60 py-1">
              <span>Calories</span>
              <span className="text-base">{product.nutrition.calories}</span>
            </div>

            <div className="space-y-1 text-[11px] border-b border-[#3b271d] pb-2">
              <div className="flex justify-between">
                <span>Total Fat {product.nutrition.totalFat}g (from Cocoa Butter)</span>
                <span className="font-bold">22% DV</span>
              </div>
              <div className="flex justify-between">
                <span>Total Carbohydrate {product.nutrition.netCarbs + product.nutrition.fiber}g</span>
                <span className="font-bold">4% DV</span>
              </div>
              <div className="flex justify-between pl-3 text-[#a69284]">
                <span>Dietary Fiber {product.nutrition.fiber}g</span>
                <span className="font-bold">32% DV</span>
              </div>
              <div className="flex justify-between pl-3 text-[#7ae08d] font-semibold">
                <span>Total Sugars 0g</span>
                <span>-</span>
              </div>
              <div className="flex justify-between pl-6 text-[#7ae08d] font-bold">
                <span>Includes 0g Added Sugars</span>
                <span>0% DV</span>
              </div>
              <div className="flex justify-between pl-3 text-[#e6b978] font-semibold">
                <span>Net Impact Carbs: {product.nutrition.netCarbs}g</span>
                <span>(Keto Approved)</span>
              </div>
              <div className="flex justify-between">
                <span>Protein {product.nutrition.protein}g</span>
                <span>-</span>
              </div>
            </div>

            {/* Active Vitamins Section */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#e6b978] border-b border-[#3b271d] pb-1 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-[#e6b978]" />
                Micro-Encapsulated Active Bio-Vitamins & Minerals
              </div>

              <div className="divide-y divide-[#241712]">
                {product.vitamins.map((vit, idx) => (
                  <div key={idx} className="py-2 space-y-0.5">
                    <div className="flex justify-between font-semibold text-[#f7f2ea]">
                      <span>{vit.name}</span>
                      <span className="text-[#e6b978]">{vit.dosage} ({vit.dailyValuePercentage}% DV)</span>
                    </div>
                    <p className="text-[10px] text-[#a69284] font-light">
                      {vit.biologicalRole}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sweetener & Origin Science */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-[#160e0a] rounded-lg border border-[#3b271d]">
              <div className="font-semibold text-[#e6b978] mb-1">Zero-Sugar Sweetener Formula:</div>
              <p className="text-[#b8a698] font-light">
                {product.sweetenerSystem}
              </p>
            </div>

            <div className="p-3 bg-[#160e0a] rounded-lg border border-[#3b271d]">
              <div className="font-semibold text-[#e6b978] mb-1">Single-Estate Provenance:</div>
              <p className="text-[#b8a698] font-light">
                {product.origin}
              </p>
            </div>
          </div>

          {/* Clinical Testing Note */}
          <div className="p-3.5 rounded-lg bg-[#1a231b] border border-[#2d4d33] text-xs text-[#d6c7b7] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#7ae08d]">
              <ShieldCheck className="w-4 h-4 text-[#7ae08d]" />
              Batch Chromatography Verification
            </div>
            <p className="text-[11px] text-[#b8a698] font-light">
              {product.clinicalNote} Tested for cadmium, lead, and microbiological safety under ISO 17025 accredited laboratory standards.
            </p>
          </div>

          {/* Certifications Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-[#a69284]">Certifications:</span>
            {product.organicCertifications.map((cert, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-[#241712] text-[#d6c7b7] text-[10px] border border-[#38261c]">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer with Add to Cart */}
        <div className="p-5 border-t border-[#312117] bg-[#160e0a] flex items-center justify-between">
          <div>
            <div className="text-xs text-[#a69284]">Single Bar (45g)</div>
            <div className="text-xl font-bold text-[#e6b978]">{formattedPrice}</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#a69284] hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-[#c6934b] hover:bg-[#d5a359] text-[#140e0b] font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              Add to Box
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
