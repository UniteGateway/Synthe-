import React from 'react';
import { Activity, ShieldCheck, Zap, Heart, CheckCircle2, Sparkles, Layers, Microscope } from 'lucide-react';

export const VitaminScience: React.FC = () => {
  return (
    <section id="science" className="py-16 bg-[#160e0b] border-t border-[#291b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2a1b14] border border-[#c6934b]/40 text-[#e6b978]">
            <Microscope className="w-3.5 h-3.5 text-[#e6b978]" />
            Bio-Nutraceutical Innovation
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f7f2ea] tracking-tight">
            Why Chocolate is the Superior Vitamin Vehicle
          </h2>

          <p className="text-sm sm:text-base text-[#b8a698] font-light">
            Synthé by Montevia Nutri Foods solved the bioavailability dilemma of modern supplementation: fat-soluble vitamins require dietary lipids for micellar cellular uptake.
          </p>
        </div>

        {/* 3 Core Scientific Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="bg-[#1c130e] border border-[#3b271d] rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#c99a4c]/20 flex items-center justify-center text-[#e8bd78]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#f7f2ea]">
              3.8x Lipid Bioavailability
            </h3>
            <p className="text-xs text-[#b8a698] font-light leading-relaxed">
              Vitamins D3, K2, E, and Astaxanthin are strictly fat-soluble molecules. Swallowing a dry chalky tablet on an empty stomach results in up to 70% excretion. Organic cocoa butter is rich in stearic and oleic lipids, creating natural emulsion micelles that carry active vitamins straight into systemic circulation.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#1c130e] border border-[#3b271d] rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#7ae08d]/20 flex items-center justify-center text-[#7ae08d]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#f7f2ea]">
              Zero-Sugar Botanical Sweetening
            </h3>
            <p className="text-xs text-[#b8a698] font-light leading-relaxed">
              We reject cheap sugar alcohols like maltitol that cause digestive distress and spike blood glucose. Synthé pairs pure organic Luo Han Guo (Monk Fruit Mogroside V) with allulose—a rare plant sugar with a 0.0 glycemic index that actually supports metabolic autophagy.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#1c130e] border border-[#3b271d] rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#cdb7ff]/20 flex items-center justify-center text-[#cdb7ff]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#f7f2ea]">
              Low-Thermal Micro-Encapsulation
            </h3>
            <p className="text-xs text-[#b8a698] font-light leading-relaxed">
              Standard chocolate manufacturing subjects ingredients to heat exceeding 60°C, destroying active B-vitamins and antioxidants. Synthé utilizes cold-phase bio-encapsulation, infusing vitamins only during precision tempering below 31.5°C to guarantee 100% active enzymatic potency.
            </p>
          </div>
        </div>

        {/* Bioavailability Comparison Diagram / Infographic */}
        <div className="bg-gradient-to-r from-[#1c130e] via-[#221611] to-[#1a110d] rounded-2xl border border-[#422e23] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-semibold text-[#e8bd78] uppercase tracking-wider">
                Clinical Pharmacokinetics
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#f7f2ea]">
                Blood Serum Absorption Over 6 Hours
              </h3>
              <p className="text-xs sm:text-sm text-[#b8a698] font-light leading-relaxed">
                In comparative dissolution trials, Vitamin D3 and B12 embedded in Synthé's raw cocoa lipid emulsion demonstrated significantly faster peak plasma concentration (Tmax) and prolonged biological half-life compared to conventional synthetic vitamin gummies or pills.
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded bg-[#140e0b] border border-[#2d1e16]">
                  <span className="font-medium text-white">Synthé Organic Cocoa Lipid Delivery:</span>
                  <span className="font-bold text-[#7ae08d]">92% Intestinal Uptake</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-[#140e0b] border border-[#2d1e16]">
                  <span className="text-[#a69284]">Gelatin / Sugar Vitamin Gummies:</span>
                  <span className="text-[#e8bd78]">48% Uptake (Spikes Insulin)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-[#140e0b] border border-[#2d1e16]">
                  <span className="text-[#a69284]">Dry Multivitamin Compressed Tablets:</span>
                  <span className="text-[#d6c7b7]">24% - 31% Uptake (High Waste)</span>
                </div>
              </div>
            </div>

            {/* Verification Credentials */}
            <div className="bg-[#140e0b] border border-[#3b271d] rounded-xl p-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#f7f2ea] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7ae08d]" />
                Synthé Bio-Purity Verification Seal
              </h4>
              <p className="text-xs text-[#a69284] font-light">
                Every production run undergoes strict third-party HPLC & ICP-MS chromatography analysis to verify active vitamin potencies and ensure complete freedom from contaminants.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#1c130e] rounded border border-[#2d1e16]">
                  <div className="text-[#a69284]">Heavy Metals:</div>
                  <div className="font-bold text-[#7ae08d] mt-0.5">&lt; 0.10 ppm (EU Clean)</div>
                </div>
                <div className="p-3 bg-[#1c130e] rounded border border-[#2d1e16]">
                  <div className="text-[#a69284]">Sugar & Glycemic:</div>
                  <div className="font-bold text-[#7ae08d] mt-0.5">0.0g Sugar (GI = 0)</div>
                </div>
                <div className="p-3 bg-[#1c130e] rounded border border-[#2d1e16]">
                  <div className="text-[#a69284]">Vitamin Stability:</div>
                  <div className="font-bold text-[#e8bd78] mt-0.5">24 Months Bioactive</div>
                </div>
                <div className="p-3 bg-[#1c130e] rounded border border-[#2d1e16]">
                  <div className="text-[#a69284]">Pesticides / GMOs:</div>
                  <div className="font-bold text-[#7ae08d] mt-0.5">0.0% Non-Detected</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
