import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Menu, X, Store, Mail, ArrowRight } from 'lucide-react';
import { SyntheLogo } from './SyntheLogo';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
  onOpenInquire?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateSection,
  activeSection,
  onOpenInquire
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#160e0a]/95 backdrop-blur-md border-b border-[#3b2b22] text-[#f7f2ea]">
      {/* Top Brand Strip */}
      <div className="bg-[#1b110b] text-[#c59b6d] text-xs px-4 py-1.5 border-b border-[#2d1e16] flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="inline-flex items-center gap-1 bg-[#c99a4c]/20 text-[#e8bd78] px-2 py-0.5 rounded text-[11px] font-medium">
            <ShieldCheck className="w-3 h-3 text-[#e8bd78]" /> 100% Organic & Zero Refined Sugar
          </span>
          <span className="hidden md:inline text-[#a69284]">
            • Plant-based • Fat-Soluble Vitamins D3, B-Complex & Astaxanthin • Montevia Nutri Foods
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigateSection('inquire')}
            className="flex items-center gap-1.5 text-[11px] text-[#e8bd78] hover:text-[#ffffff] transition-colors cursor-pointer"
          >
            <Store className="w-3 h-3 text-[#c99a4c]" />
            <span>Stockists & Sample Requests</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Botanical Emblem */}
        <button 
          onClick={() => onNavigateSection('hero')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          title="Synthé by Montevia Nutri Foods"
        >
          <SyntheLogo variant="header" size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={() => onNavigateSection('products')}
            className={`cursor-pointer transition-colors ${activeSection === 'products' ? 'text-[#e8bd78]' : 'text-[#d6c7b7] hover:text-white'}`}
          >
            Formulations
          </button>
          <button 
            onClick={() => onNavigateSection('science')}
            className={`cursor-pointer transition-colors ${activeSection === 'science' ? 'text-[#e8bd78]' : 'text-[#d6c7b7] hover:text-white'}`}
          >
            The Science
          </button>
          <button 
            onClick={() => onNavigateSection('about-extraction')}
            className={`cursor-pointer transition-colors ${activeSection === 'about-extraction' ? 'text-[#e8bd78]' : 'text-[#d6c7b7] hover:text-white'}`}
          >
            Heritage & Testing
          </button>
          <button 
            onClick={() => onNavigateSection('inquire')}
            className={`cursor-pointer flex items-center gap-1.5 transition-colors ${activeSection === 'inquire' || activeSection === 'wholesale' ? 'text-[#e8bd78]' : 'text-[#d6c7b7] hover:text-white'}`}
          >
            <Store className="w-3.5 h-3.5 text-[#c99a4c]" />
            <span>Stockists & Trade</span>
          </button>
        </nav>

        {/* Right Actions: Partner / Inquire CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onOpenInquire) {
                onOpenInquire();
              } else {
                onNavigateSection('inquire');
              }
            }}
            id="nav-inquire-btn"
            className="px-4 py-2 rounded-lg bg-[#c99a4c] hover:bg-[#d5a359] text-[#140e0b] font-semibold text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Inquire / Contact</span>
            <span className="sm:hidden">Inquire</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="lg:hidden p-2 rounded-md bg-[#241712] border border-[#422e23] text-[#d6c7b7] hover:text-white"
          >
            {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileNavOpen && (
        <div className="lg:hidden bg-[#1a110d] border-b border-[#3b2b22] px-4 pt-3 pb-5 space-y-3 text-left">
          <button
            onClick={() => { onNavigateSection('products'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#f7f2ea] hover:text-[#e8bd78]"
          >
            The Synthé Formulations (Glow, Boost, Calm, Kids, Focus, Pure)
          </button>
          <button
            onClick={() => { onNavigateSection('science'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#f7f2ea] hover:text-[#e8bd78]"
          >
            Vitamin Science & Lipid Bioavailability
          </button>
          <button
            onClick={() => { onNavigateSection('about-extraction'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#f7f2ea] hover:text-[#e8bd78]"
          >
            Heritage & Laboratory Testing
          </button>
          <button
            onClick={() => { onNavigateSection('inquire'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#c99a4c] font-semibold flex items-center gap-1.5"
          >
            <Store className="w-4 h-4" />
            <span>Partner, Stockists & Inquiries</span>
          </button>
        </div>
      )}
    </header>
  );
};
