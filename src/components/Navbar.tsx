import React, { useState } from 'react';
import { Globe, ShoppingBag, Sparkles, ShieldCheck, Search, Menu, X, ChevronDown, Store } from 'lucide-react';
import { CurrencyCode, CurrencyInfo } from '../types';
import { CURRENCIES } from '../data/internationalData';
import { SyntheLogo } from './SyntheLogo';

interface NavbarProps {
  currentCurrency: CurrencyCode;
  onSelectCurrency: (code: CurrencyCode) => void;
  cartCount: number;
  onOpenCart: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onSelectCurrency,
  cartCount,
  onOpenCart,
  onNavigateSection,
  activeSection
}) => {
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const currencyList = Object.values(CURRENCIES) as CurrencyInfo[];

  return (
    <header className="sticky top-0 z-40 bg-[#160e0a]/95 backdrop-blur-md border-b border-[#3b2b22] text-[#f7f2ea]">
      {/* Top International Strip */}
      <div className="bg-[#1b110b] text-[#c59b6d] text-xs px-4 py-1.5 border-b border-[#2d1e16] flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="inline-flex items-center gap-1 bg-[#c99a4c]/20 text-[#e8bd78] px-2 py-0.5 rounded text-[11px] font-medium">
            <ShieldCheck className="w-3 h-3 text-[#e8bd78]" /> 100% Organic & Zero Refined Sugar
          </span>
          <span className="hidden md:inline text-[#a69284]">
            • Plant-based • Gluten-free • Micro-encapsulated Vitamins D3, B-Complex & Astaxanthin
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigateSection('international-directory')}
            className="flex items-center gap-1 text-[11px] text-[#e8bd78] hover:text-[#ffffff] transition-colors cursor-pointer"
          >
            <Globe className="w-3 h-3" />
            <span>International Directory & Portals</span>
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
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          <button 
            onClick={() => onNavigateSection('products')}
            className={`cursor-pointer transition-colors ${activeSection === 'products' ? 'text-[#e8bd78]' : 'text-[#d6c7b7] hover:text-white'}`}
          >
            The Synthé Range
          </button>
          <button 
            onClick={() => onNavigateSection('science')}
            className={`cursor-pointer transition-colors ${activeSection === 'science' ? 'text-[#e8bd78]' : 'text-[#d6c7b7] hover:text-white'}`}
          >
            Vitamin Science
          </button>
          <button 
            onClick={() => onNavigateSection('international-directory')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#c99a4c]/40 bg-[#c99a4c]/10 cursor-pointer transition-colors ${activeSection === 'international-directory' ? 'text-[#ffffff] bg-[#c99a4c]/30 border-[#e8bd78]' : 'text-[#e8bd78] hover:bg-[#c99a4c]/20'}`}
          >
            <Globe className="w-3.5 h-3.5 text-[#e8bd78]" />
            <span>Find International Websites</span>
          </button>
          <button 
            onClick={() => onNavigateSection('global-portals')}
            className={`cursor-pointer transition-colors ${activeSection === 'global-portals' ? 'text-[#e8bd78]' : 'text-[#d6c7b7] hover:text-white'}`}
          >
            Global Hubs
          </button>
          <button 
            onClick={() => onNavigateSection('wholesale')}
            className={`cursor-pointer flex items-center gap-1 transition-colors ${activeSection === 'wholesale' ? 'text-[#e8bd78]' : 'text-[#d6c7b7] hover:text-white'}`}
          >
            <Store className="w-3.5 h-3.5 text-[#c99a4c]" />
            <span>Stock Synthé</span>
          </button>
          <button 
            onClick={() => onNavigateSection('about-extraction')}
            className={`cursor-pointer transition-colors ${activeSection === 'about-extraction' ? 'text-[#e8bd78]' : 'text-[#d6c7b7] hover:text-white'}`}
          >
            Heritage
          </button>
        </nav>

        {/* Right Actions: Currency Selector & Cart */}
        <div className="flex items-center gap-3">
          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-md bg-[#241712] border border-[#422e23] hover:border-[#c99a4c] text-[#f7f2ea] transition-colors cursor-pointer"
              title="Select International Currency"
            >
              <Globe className="w-3.5 h-3.5 text-[#c99a4c]" />
              <span>{currentCurrency} ({CURRENCIES[currentCurrency].symbol})</span>
              <ChevronDown className="w-3 h-3 text-[#a69284]" />
            </button>

            {isCurrencyMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1f1511] border border-[#422e23] rounded-lg shadow-2xl py-1 z-50">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-[#a69284] border-b border-[#2d1e16] uppercase tracking-wider">
                  International Currencies
                </div>
                {currencyList.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      onSelectCurrency(curr.code);
                      setIsCurrencyMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#2e1d16] transition-colors cursor-pointer ${
                      currentCurrency === curr.code ? 'text-[#e8bd78] font-bold bg-[#2e1d16]/60' : 'text-[#d6c7b7]'
                    }`}
                  >
                    <span>{curr.code}</span>
                    <span className="text-[#a69284]">{curr.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            id="nav-cart-btn"
            className="relative p-2 rounded-md bg-[#241712] border border-[#422e23] hover:border-[#c99a4c] text-[#f7f2ea] transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#e8bd78]" />
            <span className="hidden sm:inline text-xs font-semibold">Cart</span>
            {cartCount > 0 && (
              <span className="bg-[#c99a4c] text-[#140e0b] font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
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
        <div className="lg:hidden bg-[#1a110d] border-b border-[#3b2b22] px-4 pt-3 pb-5 space-y-3">
          <button
            onClick={() => { onNavigateSection('products'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#f7f2ea] hover:text-[#e8bd78]"
          >
            The Synthé Range (Glow, Boost, Calm, Kids)
          </button>
          <button
            onClick={() => { onNavigateSection('science'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#f7f2ea] hover:text-[#e8bd78]"
          >
            Vitamin Science & Bio-Encapsulation
          </button>
          <button
            onClick={() => { onNavigateSection('international-directory'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#e8bd78] font-semibold flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span>Find All International Websites</span>
          </button>
          <button
            onClick={() => { onNavigateSection('global-portals'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#f7f2ea] hover:text-[#e8bd78]"
          >
            Synthé Regional Hubs (USA, EU, UK, JP, IN)
          </button>
          <button
            onClick={() => { onNavigateSection('wholesale'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#f7f2ea] hover:text-[#e8bd78]"
          >
            Stock Synthé / Retail & Export Inquiries
          </button>
          <button
            onClick={() => { onNavigateSection('about-extraction'); setIsMobileNavOpen(false); }}
            className="block w-full text-left py-2 text-sm text-[#f7f2ea] hover:text-[#e8bd78]"
          >
            Heritage & Purity Testing
          </button>
        </div>
      )}
    </header>
  );
};
