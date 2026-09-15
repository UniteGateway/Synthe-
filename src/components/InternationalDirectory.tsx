import React, { useState } from 'react';
import { 
  Globe, 
  Search, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Filter, 
  Building2, 
  ArrowUpRight, 
  Compass,
  Zap,
  Info,
  Layers,
  MapPin,
  RefreshCw,
  Award
} from 'lucide-react';
import { SYNTHE_PORTALS, INTERNATIONAL_BRANDS } from '../data/internationalData';
import { SynthePortal, InternationalBrand, AIFinderResult } from '../types';

export const InternationalDirectory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai-finder' | 'synthe-portals' | 'global-directory'>('ai-finder');
  
  // AI Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [targetCountry, setTargetCountry] = useState('Worldwide');
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [aiResult, setAiResult] = useState<AIFinderResult | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  // Directory filter states
  const [dirRegionFilter, setDirRegionFilter] = useState('All');
  const [dirSearchTerm, setDirSearchTerm] = useState('');

  // Sample prompt chips
  const samplePrompts = [
    "Vitamin D3 and B-complex chocolate websites in Europe",
    "Sugar-free monk fruit chocolate brands in the USA",
    "Swiss and Belgian zero added sugar functional chocolate",
    "Websites that ship organic keto chocolate to the UK and Australia",
    "Japanese functional chocolate with GABA or vitamins"
  ];

  const handleAISearch = async (queryToRun?: string) => {
    const q = queryToRun || searchQuery;
    if (!q.trim()) return;

    setIsLoadingAI(true);
    setAiError(null);

    try {
      const response = await fetch('/api/ai-finder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          userCountry: targetCountry,
          specificNeed: 'Find all other international websites specializing in sugar-free and vitamin-based organic chocolate'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to query international chocolate database.');
      }

      const data = await response.json();
      setAiResult(data);
    } catch (err: any) {
      console.error(err);
      setAiError('Could not connect to the international intelligence service. Browsing curated directory below.');
    } finally {
      setIsLoadingAI(false);
    }
  };

  // Filtered curated international brands
  const filteredBrands = INTERNATIONAL_BRANDS.filter(brand => {
    const matchesRegion = dirRegionFilter === 'All' || brand.region.toLowerCase().includes(dirRegionFilter.toLowerCase());
    const matchesSearch = !dirSearchTerm || 
      brand.name.toLowerCase().includes(dirSearchTerm.toLowerCase()) ||
      brand.country.toLowerCase().includes(dirSearchTerm.toLowerCase()) ||
      brand.specialty.toLowerCase().includes(dirSearchTerm.toLowerCase()) ||
      brand.vitaminActives.some(v => v.toLowerCase().includes(dirSearchTerm.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="international-directory" className="py-16 bg-[#130d0a] border-t border-[#291b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2a1b14] border border-[#c99a4c]/50 text-[#e8bd78]">
            <Globe className="w-3.5 h-3.5 text-[#e8bd78]" />
            Global Trade & International Portals
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f7f2ea] tracking-tight">
            Find All Other International Websites
          </h2>

          <p className="text-sm sm:text-base text-[#b8a698] font-light">
            Explore Synthé’s international regional flagship portals, access our live AI global brand explorer, or browse verified international websites producing sugar-free, vitamin-infused, and functional organic chocolates worldwide.
          </p>

          {/* Navigation Sub-Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('ai-finder')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'ai-finder'
                  ? 'bg-[#c99a4c] text-[#140e0b] shadow-lg shadow-[#c99a4c]/20'
                  : 'bg-[#221611] text-[#c5b5a6] hover:text-white border border-[#38261c]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI International Website Finder</span>
            </button>

            <button
              onClick={() => setActiveTab('synthe-portals')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'synthe-portals'
                  ? 'bg-[#c99a4c] text-[#140e0b] shadow-lg shadow-[#c99a4c]/20'
                  : 'bg-[#221611] text-[#c5b5a6] hover:text-white border border-[#38261c]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Synthé Global Regional Hubs ({SYNTHE_PORTALS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('global-directory')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'global-directory'
                  ? 'bg-[#c99a4c] text-[#140e0b] shadow-lg shadow-[#c99a4c]/20'
                  : 'bg-[#221611] text-[#c5b5a6] hover:text-white border border-[#38261c]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>International Brand Directory & Comparator ({INTERNATIONAL_BRANDS.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: AI INTERNATIONAL WEBSITE FINDER */}
        {activeTab === 'ai-finder' && (
          <div className="space-y-8">
            {/* Search Box Card */}
            <div className="max-w-4xl mx-auto bg-[#1c130e] border border-[#3d291e] rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-[#2d1e16] pb-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#f7f2ea] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#e8bd78]" />
                    AI-Assisted International Website Discovery
                  </h3>
                  <p className="text-xs text-[#a69284] font-light">
                    Query our intelligence engine for verified websites specializing in zero-sugar, vitamin-fortified, and functional chocolate by country, nutrient, or shipping region.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#a69284]">Target Region:</span>
                  <select
                    value={targetCountry}
                    onChange={(e) => setTargetCountry(e.target.value)}
                    className="bg-[#2a1b14] border border-[#4a3427] text-[#e8bd78] rounded px-2.5 py-1 text-xs focus:outline-none"
                  >
                    <option value="Worldwide">Worldwide (All Countries)</option>
                    <option value="United States & Canada">North America (USA / Canada)</option>
                    <option value="Europe (Switzerland / Germany / France / UK)">Europe & UK</option>
                    <option value="Japan & Asia">East Asia (Japan / Singapore)</option>
                    <option value="Australia & New Zealand">Oceania (Australia / NZ)</option>
                    <option value="Middle East (UAE / Saudi)">Middle East & GCC</option>
                  </select>
                </div>
              </div>

              {/* Main Search Input */}
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#a69284] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAISearch()}
                    placeholder="Search international websites (e.g. 'Vitamin D3 keto chocolate in Germany & France')..."
                    className="w-full bg-[#140e0b] border border-[#3b271d] focus:border-[#c99a4c] text-[#f7f2ea] text-xs sm:text-sm rounded-lg pl-10 pr-4 py-3 placeholder:text-[#6e584a] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  onClick={() => handleAISearch()}
                  disabled={isLoadingAI}
                  className="px-6 py-3 rounded-lg bg-[#c99a4c] hover:bg-[#d5a359] text-[#140e0b] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
                >
                  {isLoadingAI ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Scanning Websites...</span>
                    </>
                  ) : (
                    <>
                      <Globe className="w-4 h-4" />
                      <span>Find Websites</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Suggestion Chips */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] uppercase tracking-wider text-[#a69284] font-semibold">
                  Popular International Searches:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {samplePrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSearchQuery(prompt);
                        handleAISearch(prompt);
                      }}
                      className="text-[11px] bg-[#241712] hover:bg-[#322018] text-[#d6c7b7] hover:text-[#e8bd78] px-2.5 py-1 rounded border border-[#3b271d] transition-colors cursor-pointer text-left"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Results Presentation */}
            {aiResult && (
              <div className="max-w-5xl mx-auto space-y-6">
                {/* Overview Header */}
                <div className="bg-[#1f1511] border border-[#3d291e] rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#e8bd78] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7ae08d]" />
                      International Intelligence Report for: "{aiResult.summary ? 'Validated Query' : searchQuery}"
                    </span>
                    <span className="text-[11px] text-[#a69284]">
                      {aiResult.recommendations?.length || 0} International Websites Identified
                    </span>
                  </div>
                  <p className="text-sm text-[#f7f2ea] leading-relaxed">
                    {aiResult.summary}
                  </p>
                  {aiResult.syntheAdvantage && (
                    <div className="p-3 bg-[#160e0a] rounded-lg border border-[#c99a4c]/30 text-xs text-[#d6c7b7] flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#c99a4c] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#e8bd78]">The Synthé Formulation Advantage: </strong>
                        {aiResult.syntheAdvantage}
                      </div>
                    </div>
                  )}
                </div>

                {/* Recommendations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {aiResult.recommendations?.map((rec, i) => (
                    <div key={i} className="bg-[#1b120d] border border-[#38261c] rounded-xl p-5 flex flex-col justify-between hover:border-[#c99a4c]/50 transition-colors">
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{rec.flag || '🌐'}</span>
                              <h4 className="font-serif font-bold text-base text-[#f7f2ea]">
                                {rec.name}
                              </h4>
                            </div>
                            <div className="text-xs text-[#a69284] mt-0.5">
                              Origin: <span className="text-[#d6c7b7] font-medium">{rec.country}</span> • Type: <span className="text-[#e8bd78]">{rec.type}</span>
                            </div>
                          </div>
                          <span className="text-[10px] bg-[#2a1b14] text-[#e8bd78] px-2 py-0.5 rounded border border-[#422e23]">
                            Verified
                          </span>
                        </div>

                        <p className="text-xs text-[#b8a698] font-light leading-relaxed">
                          {rec.whyRecommended}
                        </p>

                        {/* Ingredients & Sweeteners */}
                        <div className="space-y-1 text-xs pt-1">
                          <div className="flex items-center gap-1.5 text-[11px] text-[#c5b5a6]">
                            <span className="text-[#a69284]">Sweetener System:</span>
                            <span className="text-[#7ae08d] font-medium">{rec.sweetener}</span>
                          </div>
                          {rec.keyVitaminsAndActives && rec.keyVitaminsAndActives.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1 text-[11px]">
                              <span className="text-[#a69284]">Key Actives:</span>
                              {rec.keyVitaminsAndActives.map((act, idx) => (
                                <span key={idx} className="bg-[#241712] text-[#cdb7ff] px-1.5 py-0.5 rounded text-[10px]">
                                  {act}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Certifications & Shipping */}
                        <div className="pt-2 border-t border-[#2a1b14] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#a69284]">
                          <span>Shipping: <strong className="text-[#d6c7b7]">{rec.internationalShipping}</strong></span>
                        </div>
                      </div>

                      {/* Direct Link */}
                      <div className="pt-4 mt-2">
                        <a
                          href={rec.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 rounded-lg bg-[#241712] hover:bg-[#38261c] text-[#e8bd78] hover:text-white border border-[#422e23] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <span>Visit Official Website ({rec.websiteUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '')})</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SYNTHÉ GLOBAL REGIONAL HUBS & SITES */}
        {activeTab === 'synthe-portals' && (
          <div id="global-portals" className="space-y-6">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-6">
              <h3 className="font-serif font-bold text-2xl text-[#f7f2ea]">
                Synthé Global Regional Hubs & Certified Dispatch Centers
              </h3>
              <p className="text-xs sm:text-sm text-[#a69284]">
                To guarantee peak enzyme and vitamin potency, Synthé by Montevia Nutri Foods operates temperature-controlled bio-certified regional distribution centres across global trade corridors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SYNTHE_PORTALS.map(portal => (
                <div key={portal.id} className="bg-[#1b120d] border border-[#3b271d] rounded-xl p-5 flex flex-col justify-between hover:border-[#c99a4c] transition-all group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{portal.flag}</span>
                      <span className="text-[10px] font-semibold text-[#7ae08d] bg-[#1a2e1d] px-2 py-0.5 rounded border border-[#3b7a48]/40">
                        {portal.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-base text-[#f7f2ea] group-hover:text-[#e8bd78] transition-colors">
                        {portal.name}
                      </h4>
                      <div className="text-[11px] text-[#a69284] mt-0.5">
                        Region: <span className="text-[#d6c7b7]">{portal.region}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#b8a698] font-light line-clamp-3">
                      {portal.description}
                    </p>

                    <div className="space-y-1 text-[11px] pt-2 border-t border-[#2a1b14]">
                      <div className="text-[#e8bd78] font-medium">Core Specialization:</div>
                      <div className="text-[#d6c7b7]">{portal.focus}</div>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {portal.certifications.slice(0, 3).map((cert, idx) => (
                        <span key={idx} className="bg-[#241712] text-[#a69284] text-[10px] px-1.5 py-0.5 rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#2a1b14]">
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-[#241712] hover:bg-[#c99a4c] text-[#e8bd78] hover:text-[#140e0b] border border-[#422e23] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Access Regional Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CURATED GLOBAL BRAND DIRECTORY & COMPARATOR */}
        {activeTab === 'global-directory' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="bg-[#1c130e] border border-[#3b271d] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Region Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                <span className="text-xs text-[#a69284] mr-1 hidden sm:inline">Region:</span>
                {['All', 'North America', 'Europe', 'United Kingdom', 'Oceania'].map(reg => (
                  <button
                    key={reg}
                    onClick={() => setDirRegionFilter(reg)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      dirRegionFilter === reg
                        ? 'bg-[#c99a4c] text-[#140e0b] font-bold'
                        : 'bg-[#251711] text-[#c5b5a6] hover:text-white border border-[#38261c]'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>

              {/* Directory Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-3.5 h-3.5 text-[#a69284] absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={dirSearchTerm}
                  onChange={(e) => setDirSearchTerm(e.target.value)}
                  placeholder="Search brands or active vitamins..."
                  className="w-full bg-[#140e0b] border border-[#38261c] text-xs rounded-lg pl-8 pr-3 py-2 text-[#f7f2ea] placeholder:text-[#6e584a] focus:outline-none focus:border-[#c99a4c]"
                />
              </div>
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredBrands.map(brand => (
                <div key={brand.id} className="bg-[#1b120d] border border-[#3b271d] rounded-xl p-5 flex flex-col justify-between hover:border-[#c99a4c]/60 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{brand.flag}</span>
                          <h4 className="font-serif font-bold text-base text-[#f7f2ea]">
                            {brand.name}
                          </h4>
                        </div>
                        <div className="text-xs text-[#a69284] mt-0.5">
                          {brand.country} • Est. {brand.established}
                        </div>
                      </div>
                      <span className="text-[10px] bg-[#241712] text-[#cdb7ff] px-2 py-0.5 rounded border border-[#3b2a54]">
                        {brand.category.split(' ')[0]}
                      </span>
                    </div>

                    <p className="text-xs text-[#b8a698] font-light leading-relaxed">
                      {brand.specialty}
                    </p>

                    <div className="space-y-1.5 text-xs pt-2 border-t border-[#2a1b14]">
                      <div className="text-[11px] text-[#a69284]">
                        <span className="text-[#c59b6d] font-medium">Sweetening Method: </span>
                        {brand.sugarProfile}
                      </div>

                      <div className="flex flex-wrap items-center gap-1 text-[11px]">
                        <span className="text-[#a69284]">Active Nutrients: </span>
                        {brand.vitaminActives.map((v, i) => (
                          <span key={i} className="bg-[#241712] text-[#e8bd78] px-1.5 py-0.5 rounded text-[10px]">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {brand.certifications.map((cert, i) => (
                        <span key={i} className="text-[10px] bg-[#20140f] text-[#8f7d71] px-1.5 py-0.5 rounded border border-[#2d1e16]">
                          {cert}
                        </span>
                      ))}
                    </div>

                    <div className="text-[11px] text-[#7ae08d]">
                      Shipping: {brand.shipping}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#2a1b14]">
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-[#241712] hover:bg-[#38261c] text-[#e8bd78] hover:text-white border border-[#422e23] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Visit {brand.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Matrix Header Banner */}
            <div className="mt-8 bg-[#1f1511] border border-[#3b271d] rounded-xl p-6 space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#f7f2ea]">
                International Formulation Comparison: Synthé vs. Global Standards
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#3b271d] text-[#e8bd78]">
                      <th className="py-2.5 px-3">Dimension</th>
                      <th className="py-2.5 px-3 bg-[#c99a4c]/10 text-white font-bold">Synthé Organic Chocolate</th>
                      <th className="py-2.5 px-3">Standard Sugar-Free Brands</th>
                      <th className="py-2.5 px-3">Generic Vitamin Chocolates</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2a1b14] text-[#d6c7b7]">
                    <tr>
                      <td className="py-2.5 px-3 font-medium text-white">Sugar Profile</td>
                      <td className="py-2.5 px-3 bg-[#c99a4c]/10 text-[#7ae08d] font-semibold">0.0g Added Sugar (Monk Fruit & Allulose)</td>
                      <td className="py-2.5 px-3">Often uses Maltitol (high GI) or Erythritol alone</td>
                      <td className="py-2.5 px-3">Often high cane sugar or corn syrup base</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-medium text-white">Vitamin Delivery</td>
                      <td className="py-2.5 px-3 bg-[#c99a4c]/10 text-[#e8bd78] font-semibold">Cold Micro-Encapsulated in Bio-Lipids (3.8x Absorption)</td>
                      <td className="py-2.5 px-3">No vitamins added (confectionery only)</td>
                      <td className="py-2.5 px-3">Unprotected powder mixed in hot conch (heat degraded)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-medium text-white">Cacao Purity</td>
                      <td className="py-2.5 px-3 bg-[#c99a4c]/10 text-white font-semibold">100% Certified Organic Single-Origin Criollo</td>
                      <td className="py-2.5 px-3">Conventional bulk blend cacao</td>
                      <td className="py-2.5 px-3">Alkalized / Dutch processed (lost flavanols)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-medium text-white">Heavy Metal Safety</td>
                      <td className="py-2.5 px-3 bg-[#c99a4c]/10 text-[#7ae08d] font-semibold">Below EU limits (&lt;0.1 mg/kg Lead & Cadmium)</td>
                      <td className="py-2.5 px-3">Varies by origin</td>
                      <td className="py-2.5 px-3">Rarely batch verified</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
