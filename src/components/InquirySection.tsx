import React, { useState } from 'react';
import { Mail, Phone, MapPin, Store, ShieldCheck, CheckCircle2, Send, Sparkles, Building2, FileText, ArrowRight } from 'lucide-react';
import { ChocolateProduct } from '../types';

interface InquirySectionProps {
  initialProduct?: ChocolateProduct | null;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ initialProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'stockist',
    productInterest: initialProduct ? initialProduct.name : 'All Synthé Formulations',
    location: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update interest if initialProduct changes
  React.useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        productInterest: initialProduct.name,
        message: prev.message || `Inquiring about specifications and availability for ${initialProduct.name}.`
      }));
    }
  }, [initialProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="inquire" className="py-20 bg-[#130d0a] border-t border-[#291b14] relative overflow-hidden">
      <div id="wholesale" className="absolute top-0 left-0" />
      
      {/* Subtle ambient gold glow */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-[#c99a4c]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#2a1b14] border border-[#c99a4c]/40 text-[#e8bd78]">
            <Store className="w-3.5 h-3.5 text-[#e8bd78]" />
            Stock Synthé • Retail, Trade & Consumer Inquiries
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f7f2ea] tracking-tight">
            Partner with Synthé
          </h2>

          <p className="text-sm sm:text-base text-[#b8a698] font-light leading-relaxed">
            Whether you are a specialty organic retailer, integrative health clinic, luxury hotel, or discerning consumer, Montevia Nutri Foods provides direct inquiries, complete clinical dossiers, and temperature-controlled dispatch worldwide.
          </p>
        </div>

        {/* 2-Column Layout: Left Contact Info / Channels, Right Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Channels & Atelier Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Channel Card 1 */}
            <div className="bg-[#1a110d] rounded-xl p-5 border border-[#36241a] space-y-2">
              <div className="flex items-center gap-2.5 text-[#e8bd78] font-serif font-semibold text-base">
                <Building2 className="w-4 h-4 text-[#c99a4c]" />
                <h3>Specialty Retailers & Boutique Grocers</h3>
              </div>
              <p className="text-xs text-[#b8a698] font-light leading-relaxed">
                Offer your clientele India's pioneering functional organic chocolate with zero refined sugar, accredited organic certifications, and luxury gift-ready packaging.
              </p>
              <div className="text-[11px] text-[#7ae08d] flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Low minimum order quantities & display fixtures available</span>
              </div>
            </div>

            {/* Channel Card 2 */}
            <div className="bg-[#1a110d] rounded-xl p-5 border border-[#36241a] space-y-2">
              <div className="flex items-center gap-2.5 text-[#e8bd78] font-serif font-semibold text-base">
                <ShieldCheck className="w-4 h-4 text-[#7ae08d]" />
                <h3>Wellness Clinics & Nutritionists</h3>
              </div>
              <p className="text-xs text-[#b8a698] font-light leading-relaxed">
                Recommend functional chocolate with transparent HPLC assay certificates, exact microgram vitamin dosages, and clean monk fruit sweetening that respects ketogenic and diabetic parameters.
              </p>
              <div className="text-[11px] text-[#7ae08d] flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Practitioner clinical dossiers & sample tasting kits</span>
              </div>
            </div>

            {/* Atelier & Laboratory Address */}
            <div className="bg-[#1f1510] rounded-xl p-6 border border-[#4a3325] space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#c99a4c]">
                Montevia Nutri Foods Atelier
              </div>

              <div className="space-y-3 text-xs text-[#d6c7b7]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#c99a4c] shrink-0 mt-0.5" />
                  <span>
                    <strong>Atelier & Formulation Lab:</strong><br />
                    Montevia Nutri Foods, HITEC City Bio-Corridor, Hyderabad, Telangana 500081, India
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#c99a4c] shrink-0" />
                  <span>concierge@synthechocolate.com</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#c99a4c] shrink-0" />
                  <span>+91 40 4821 9000 (Mon–Fri, 9am–6pm IST)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#312117] text-[11px] text-[#a69284]">
                Export corridors currently serving North America, European Union, United Kingdom, Japan, Australia & United Arab Emirates.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1b120d] rounded-2xl p-6 sm:p-8 border border-[#422e23] shadow-2xl">
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#1a2e1d] border border-[#3b7a48] text-[#7ae08d] flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#f7f2ea]">
                    Inquiry Dispatched
                  </h3>

                  <p className="text-sm text-[#b8a698] font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#f7f2ea]">{formData.name}</strong>. A Synthé concierge representative from Montevia Nutri Foods will review your inquiry regarding <strong className="text-[#e8bd78]">{formData.productInterest}</strong> and provide our formulation catalog and distribution guide within 24 business hours.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          organization: '',
                          inquiryType: 'stockist',
                          productInterest: 'All Synthé Formulations',
                          location: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-lg bg-[#241712] hover:bg-[#322018] text-[#e8bd78] border border-[#c99a4c]/50 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="border-b border-[#2e1f17] pb-3 mb-2">
                    <h3 className="font-serif font-bold text-xl text-[#f7f2ea]">
                      Inquiry & Spec Sheet Request
                    </h3>
                    <p className="text-xs text-[#a69284] mt-0.5">
                      Direct contact with the Montevia Nutri Foods team.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#d6c7b7] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Alistair Wright"
                        className="w-full bg-[#140e0b] border border-[#3b271d] rounded-lg px-3.5 py-2.5 text-xs text-[#f7f2ea] placeholder-[#6b584d] focus:outline-none focus:border-[#c99a4c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#d6c7b7] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. wright@organicwellness.com"
                        className="w-full bg-[#140e0b] border border-[#3b271d] rounded-lg px-3.5 py-2.5 text-xs text-[#f7f2ea] placeholder-[#6b584d] focus:outline-none focus:border-[#c99a4c]"
                      />
                    </div>
                  </div>

                  {/* Organization & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#d6c7b7] mb-1">
                        Company / Organization / Clinic
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={e => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. BioNourish Organic Market"
                        className="w-full bg-[#140e0b] border border-[#3b271d] rounded-lg px-3.5 py-2.5 text-xs text-[#f7f2ea] placeholder-[#6b584d] focus:outline-none focus:border-[#c99a4c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#d6c7b7] mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-[#140e0b] border border-[#3b271d] rounded-lg px-3.5 py-2.5 text-xs text-[#f7f2ea] focus:outline-none focus:border-[#c99a4c]"
                      >
                        <option value="stockist">Retail Stockist / Boutique</option>
                        <option value="practitioner">Healthcare / Integrative Clinic</option>
                        <option value="distributor">International Importer / Distributor</option>
                        <option value="samples">Press / Sample Kit Request</option>
                        <option value="consumer">Consumer Inquiry / Where to Buy</option>
                      </select>
                    </div>
                  </div>

                  {/* Formulation of Interest & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#d6c7b7] mb-1">
                        Formulation of Interest
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={e => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full bg-[#140e0b] border border-[#3b271d] rounded-lg px-3.5 py-2.5 text-xs text-[#f7f2ea] focus:outline-none focus:border-[#c99a4c]"
                      >
                        <option value="All Synthé Formulations">All Synthé Formulations (Full Portfolio)</option>
                        <option value="Synthé Glow (Astaxanthin + Biotin)">Synthé Glow (Astaxanthin + Biotin 72%)</option>
                        <option value="Synthé Boost (Vitamin D3 + K2)">Synthé Boost (Vitamin D3 + K2 74%)</option>
                        <option value="Synthé Calm (Magnesium + L-Theanine)">Synthé Calm (Magnesium + L-Theanine 56%)</option>
                        <option value="Synthé Kids (Active B-Complex + DHA)">Synthé Kids (Active B-Complex + DHA 52%)</option>
                        <option value="Synthé Focus (Lion's Mane + Cordyceps)">Synthé Focus (Lion's Mane + Cordyceps 85%)</option>
                        <option value="Synthé Pure (100% Ceremonial Cacao)">Synthé Pure (100% Ceremonial Pure Cacao)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#d6c7b7] mb-1">
                        Country / City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. London, UK or Dubai, UAE"
                        className="w-full bg-[#140e0b] border border-[#3b271d] rounded-lg px-3.5 py-2.5 text-xs text-[#f7f2ea] placeholder-[#6b584d] focus:outline-none focus:border-[#c99a4c]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#d6c7b7] mb-1">
                      Message & Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know your planned retail channels, volume requirements, or questions regarding formulation assay certificates..."
                      className="w-full bg-[#140e0b] border border-[#3b271d] rounded-lg px-3.5 py-2.5 text-xs text-[#f7f2ea] placeholder-[#6b584d] focus:outline-none focus:border-[#c99a4c] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#a69284]">
                      🔒 Information handled confidentially by Montevia Nutri Foods
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-[#c99a4c] hover:bg-[#d5a359] text-[#140e0b] font-bold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                    >
                      <span>Transmit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
