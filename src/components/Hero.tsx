import React from 'react';
import { ShieldCheck, Sparkles, Globe, ArrowRight, Activity, Zap, Check, Store } from 'lucide-react';
import { CurrencyCode } from '../types';
import { SyntheLogo } from './SyntheLogo';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreInternational: () => void;
  onExploreScience: () => void;
  onStockSynthe?: () => void;
  currentCurrency: CurrencyCode;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onExploreInternational,
  onExploreScience,
  onStockSynthe,
  currentCurrency
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#180f0a] via-[#1e130c] to-[#140e0b]">
      {/* Warm ambient lighting */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c99a4c]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#875525]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content - Strictly matching user reference */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tracked Gold Brand Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans tracking-[0.35em] text-[#c99a4c] font-semibold uppercase">
                S Y N T H É
              </span>
              <span className="h-px w-10 bg-[#c99a4c]/40" />
              <span className="text-[11px] font-sans tracking-[0.2em] text-[#a69284] uppercase">
                Montevia Nutri Foods
              </span>
            </div>

            {/* Signature Headline from Reference */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[#f7f2ea] leading-[1.05] tracking-tight">
              Indulge <br />
              <span className="italic font-normal text-[#e8bd78] font-serif">intelligently.</span>
            </h1>

            {/* Exact Subtitle from Reference */}
            <p className="text-lg sm:text-xl text-[#d4c3b3] max-w-2xl leading-relaxed font-light font-sans">
              Organic chocolate infused with essential vitamins, minerals and botanicals — because looking after yourself shouldn't feel like a chore.
            </p>

            {/* 4 Signature Pill Badges from Reference */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#f0e3d2] bg-[#291a12] border border-[#c99a4c]/40 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c99a4c]" />
                Plant-based
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#f0e3d2] bg-[#291a12] border border-[#c99a4c]/40 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c99a4c]" />
                Gluten-free
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#f0e3d2] bg-[#291a12] border border-[#c99a4c]/40 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c99a4c]" />
                No refined sugar
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#f0e3d2] bg-[#291a12] border border-[#c99a4c]/40 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c99a4c]" />
                Made in Hyderabad
              </span>
            </div>

            {/* Functional Vitamin Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#20140e] border border-[#3b271d] rounded-lg p-3 text-center">
                <div className="text-xl font-bold font-serif text-[#e8bd78]">0.0g</div>
                <div className="text-[11px] uppercase tracking-wider text-[#a69284] mt-0.5">Refined Sugar</div>
              </div>
              <div className="bg-[#20140e] border border-[#3b271d] rounded-lg p-3 text-center">
                <div className="text-xl font-bold font-serif text-[#7ae08d]">D3 + B12</div>
                <div className="text-[11px] uppercase tracking-wider text-[#a69284] mt-0.5">Bio-Vitamins</div>
              </div>
              <div className="bg-[#20140e] border border-[#3b271d] rounded-lg p-3 text-center">
                <div className="text-xl font-bold font-serif text-[#cdb7ff]">3.8x</div>
                <div className="text-[11px] uppercase tracking-wider text-[#a69284] mt-0.5">Lipid Absorption</div>
              </div>
              <div className="bg-[#20140e] border border-[#3b271d] rounded-lg p-3 text-center">
                <div className="text-xl font-bold font-serif text-[#f7f2ea]">8+</div>
                <div className="text-[11px] uppercase tracking-wider text-[#a69284] mt-0.5">Global Portals</div>
              </div>
            </div>

            {/* CTAs: Exact Primary Buttons from Reference + International Directory */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onExploreProducts}
                id="hero-shop-btn"
                className="px-7 py-3.5 rounded-md bg-[#c99a4c] hover:bg-[#d8a858] text-[#1a110a] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#c99a4c]/20 transition-all cursor-pointer"
              >
                <span>See the range</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStockSynthe || onExploreProducts}
                id="hero-stock-btn"
                className="px-6 py-3.5 rounded-md bg-transparent hover:bg-[#c99a4c]/10 border border-[#c99a4c] text-[#e8bd78] font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Store className="w-4 h-4 text-[#c99a4c]" />
                <span>Stock Synthé</span>
              </button>

              <button
                onClick={onExploreInternational}
                id="hero-international-btn"
                className="px-5 py-3.5 rounded-md bg-[#241712] hover:bg-[#322018] border border-[#422e23] text-[#d6c7b7] hover:text-[#ffffff] font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Globe className="w-3.5 h-3.5 text-[#c99a4c]" />
                <span>Find International Websites</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual Card - Highlighting the Packaging Box Logo from Reference */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#251711] to-[#180f0a] border border-[#4a3325] p-6 shadow-2xl">
              
              {/* Reference Packaging Mockup Box with the exact Botanical 'S' Logo */}
              <div className="relative h-80 rounded-xl overflow-hidden mb-5 group bg-[#2d1b12] flex items-center justify-center p-6 border border-[#523829]">
                {/* Background Chocolate Texture */}
                <img
                  src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=80"
                  alt="Synthé Organic Chocolate Bar and Packaging"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-30 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b100a] via-[#1b100a]/70 to-transparent" />

                {/* The Exact Packaging Emblem as shown on the Box in IMG_2772.png */}
                <div className="relative z-10 w-full max-w-xs">
                  <SyntheLogo variant="box-emblem" size="lg" className="w-full bg-[#20130c]/90 backdrop-blur-md border-[#c99a4c]/50 py-7" />
                  
                  {/* Subtle packaging badges */}
                  <div className="mt-3 flex items-center justify-center gap-2 text-[10px] tracking-wider uppercase text-[#c99a4c]/90">
                    <span>Glow</span>
                    <span>•</span>
                    <span>Boost</span>
                    <span>•</span>
                    <span>Calm</span>
                    <span>•</span>
                    <span>Kids</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#140e0b]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#c99a4c]/40 text-xs font-semibold text-[#e8bd78]">
                  Zero Refined Sugar
                </div>

                <div className="absolute top-3 right-3 bg-[#1a2e1d]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#3b7a48]/50 text-xs font-semibold text-[#7ae08d]">
                  100% Organic Cacao
                </div>
              </div>

              {/* International Directory Banner in Hero */}
              <div className="bg-[#1c120c] rounded-xl p-4 border border-[#3b271d] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-semibold text-[#e8bd78]">
                    <Globe className="w-3.5 h-3.5 text-[#c99a4c]" />
                    Find All Other International Websites
                  </span>
                  <span className="text-[10px] text-[#7ae08d] bg-[#1a2e1d] px-2 py-0.5 rounded font-medium">
                    Verified Brands
                  </span>
                </div>
                <p className="text-xs text-[#b8a698] font-light">
                  Compare international websites, regional fulfillment centers, and verified brands for sugar-free vitamin chocolate across USA, EU, UK, Japan, Switzerland, Australia & UAE.
                </p>
                <div className="pt-1 flex items-center justify-between text-xs">
                  <span className="text-xs text-[#a69284]">Fulfillment corridors:</span>
                  <span className="text-sm">🇮🇳 🇺🇸 🇪🇺 🇬🇧 🇯🇵 🇦🇺 🇦🇪 🇨🇭</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
