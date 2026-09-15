import React from 'react';
import { ShieldCheck, Award, Heart, Mail, Store, Building2, FileText } from 'lucide-react';
import { SyntheLogo } from './SyntheLogo';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer className="bg-[#100b08] border-t border-[#291b14] text-[#b8a698] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <SyntheLogo size="md" subtitle="Organic Chocolate • Montevia Nutri Foods" />

            <p className="text-xs text-[#a69284] font-light leading-relaxed max-w-sm">
              Synthé by Montevia Nutri Foods (Made in Hyderabad) crafts high-elevation single-estate organic criollo chocolate infused with essential bio-active vitamins and sweetened purely with botanical monk fruit.
            </p>

            <div className="flex flex-wrap gap-2 text-[10px]">
              <span className="px-2 py-1 bg-[#1a110d] rounded border border-[#2d1e16] text-[#7ae08d]">
                ✓ 0.0g Added Sugar
              </span>
              <span className="px-2 py-1 bg-[#1a110d] rounded border border-[#2d1e16] text-[#e8bd78]">
                ✓ Fat-Soluble Bio-Vitamins
              </span>
              <span className="px-2 py-1 bg-[#1a110d] rounded border border-[#2d1e16] text-[#cdb7ff]">
                ✓ Single-Estate Criollo
              </span>
            </div>
          </div>

          {/* Col 2: Collection Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#f7f2ea] uppercase tracking-wider">
              Formulations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('products')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  Vital-Immunity D3+K2 74%
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('products')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  Neuro-Focus B-Complex 85%
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('products')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  CalmAura Oat Velvet 56%
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('products')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  Daily Multi-Bio Essential 70%
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('products')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  Radiant Glow Astaxanthin Ruby
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('products')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  100% Ceremonial Pure Cacao
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Stockists & Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#f7f2ea] uppercase tracking-wider flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-[#e8bd78]" />
              Trade & Stockists
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('inquire')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>Retail Stockist Inquiries</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('inquire')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>Sample Tasting Kits</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('inquire')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>Clinical Dossiers & Certificates</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('inquire')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>Private Reserve Batches</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('about-extraction')} className="text-[#e8bd78] hover:underline font-semibold text-xs pt-1 flex items-center gap-1 cursor-pointer">
                  <span>Visit Hyderabad Atelier →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Bio-Extraction & Science */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#f7f2ea] uppercase tracking-wider">
              Science & Standards
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('science')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  Lipid Bioavailability Science
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('science')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  Monk Fruit & Allulose Glycemic Testing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('about-extraction')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  Montevia Nutri Foods Estate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('about-extraction')} className="hover:text-[#e8bd78] transition-colors cursor-pointer text-left">
                  ISO 22000 & Clean Room Standards
                </button>
              </li>
              <li>
                <span className="text-[#a69284]">
                  HPLC Batch Tested: Heavy Metals &lt; 0.1 ppm
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Certifications Banner */}
        <div className="py-6 border-y border-[#20150f] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#7ae08d]" />
            <span className="font-semibold text-[#f7f2ea]">Global Quality Audits & Certifications:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#a69284]">
            <span className="bg-[#18100c] px-2.5 py-1 rounded border border-[#2d1e16]">USDA Organic</span>
            <span className="bg-[#18100c] px-2.5 py-1 rounded border border-[#2d1e16]">EU Bio Euro-Leaf</span>
            <span className="bg-[#18100c] px-2.5 py-1 rounded border border-[#2d1e16]">JAS Organic (Japan)</span>
            <span className="bg-[#18100c] px-2.5 py-1 rounded border border-[#2d1e16]">Soil Association (UK)</span>
            <span className="bg-[#18100c] px-2.5 py-1 rounded border border-[#2d1e16]">Fair Trade Certified</span>
            <span className="bg-[#18100c] px-2.5 py-1 rounded border border-[#2d1e16]">Keto Certified</span>
            <span className="bg-[#18100c] px-2.5 py-1 rounded border border-[#2d1e16]">Halal & Kosher</span>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="space-y-3 text-[11px] text-[#78695d] font-light leading-relaxed">
          <p>
            * These statements have not been evaluated by the Food and Drug Administration or European Food Safety Authority. This product is a functional food intended for general wellness and is not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare practitioner before use if pregnant, nursing, or taking medical prescriptions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-[#1a110d]">
            <div>
              © {new Date().getFullYear()} Synthé Organic Chocolate • Montevia Nutri Foods. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[#a69284]">
              <span>Privacy Policy</span>
              <span>Terms of Trade</span>
              <span>Quality Specifications</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
