import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Leaf, Globe, CheckCircle2 } from 'lucide-react';

export const AboutExtraction: React.FC = () => {
  return (
    <section id="about-extraction" className="py-16 bg-[#140e0b] border-t border-[#291b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2a1b14] border border-[#c6934b]/40 text-[#e6b978]">
              <Award className="w-3.5 h-3.5 text-[#e6b978]" />
              Over 50 Years of Botanical Extraction Mastery
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f7f2ea] tracking-tight">
              Single-Estate Cacao Meets <br />
              <span className="text-[#c99a4c]">Precision Botanical Infusion</span>
            </h2>

            <p className="text-sm sm:text-base text-[#b8a698] font-light leading-relaxed">
              Crafted in Hyderabad by Montevia Nutri Foods, Synthé is born from an uncompromising commitment to biological nutrition and conscious indulgence. We source shade-grown single-estate criollo cocoa from bio-diverse estates and blend it with certified bio-active vitamins and pure monk fruit extract.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#1c130e] border border-[#3b271d] space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#f7f2ea]">
                  <Leaf className="w-4 h-4 text-[#7ae08d]" />
                  100% Regenerative Agroforestry
                </div>
                <p className="text-xs text-[#a69284] font-light">
                  Intercropped with organic wild spices—cardamom, black pepper, and vanilla—fostering natural biodiversity and deep soil microbiomes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c130e] border border-[#3b271d] space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#f7f2ea]">
                  <HeartHandshake className="w-4 h-4 text-[#e8bd78]" />
                  Direct Fair-Trade Equity
                </div>
                <p className="text-xs text-[#a69284] font-light">
                  Direct pricing premiums 45% above Fair Trade minimums paid directly to local agrarian families in sustainable shade-grown estates.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#d6c7b7]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7ae08d]" /> Made in Hyderabad
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7ae08d]" /> 100% Plant-Based
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7ae08d]" /> No Refined Sugar
              </span>
            </div>
          </div>

          {/* Right Imagery / Certifications Badge */}
          <div className="lg:col-span-5">
            <div className="bg-[#1b120d] border border-[#3b271d] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="h-64 rounded-xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80"
                  alt="Organic cacao harvesting for Synthé chocolate"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140e0b] via-transparent to-black/20" />
                <div className="absolute bottom-3 left-3 right-3 text-xs bg-[#140e0b]/80 backdrop-blur-md p-2.5 rounded-lg border border-[#3b271d]">
                  <div className="font-semibold text-[#e8bd78]">Montevia Nutri Foods Laboratory & Cacao Estates</div>
                  <div className="text-[11px] text-[#a69284]">Western Ghats UNESCO Biosphere Corridor</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#a69284]">
                  International Compliance Seals:
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold">
                  <div className="p-2 rounded bg-[#140e0b] border border-[#2d1e16] text-[#7ae08d]">
                    USDA Organic
                  </div>
                  <div className="p-2 rounded bg-[#140e0b] border border-[#2d1e16] text-[#e6b978]">
                    EU Euro-Leaf
                  </div>
                  <div className="p-2 rounded bg-[#140e0b] border border-[#2d1e16] text-[#cdb7ff]">
                    India Organic
                  </div>
                  <div className="p-2 rounded bg-[#140e0b] border border-[#2d1e16] text-[#7ae08d]">
                    JAS Organic
                  </div>
                  <div className="p-2 rounded bg-[#140e0b] border border-[#2d1e16] text-[#e6b978]">
                    Fair For Life
                  </div>
                  <div className="p-2 rounded bg-[#140e0b] border border-[#2d1e16] text-[#cdb7ff]">
                    Keto Certified
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
