import { ChocolateProduct } from '../types';

export const CHOCOLATE_PRODUCTS: ChocolateProduct[] = [
  {
    id: 'vital-immunity-d3',
    name: 'Synthé Boost (Immunity D3+K2)',
    tagline: 'Bioavailable Solar Vitamin Defense in 74% Dark Criollo Cacao',
    cacaoPercentage: 74,
    category: 'immunity',
    priceUSD: 8.50,
    rating: 4.95,
    reviewsCount: 342,
    badge: 'The Synthé Boost',
    colorAccent: '#e59837',
    imageUrl: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    servingSize: '1 bar (45g)',
    servingsPerBar: 1,
    nutrition: {
      calories: 180,
      netCarbs: 1,
      totalFat: 17,
      totalSugars: 0,
      addedSugars: 0,
      fiber: 9,
      protein: 4
    },
    vitamins: [
      {
        name: 'Vitamin D3 (Cholecalciferol from Wild Organic Lichen)',
        dosage: '2,000 IU (50 mcg)',
        dailyValuePercentage: 250,
        biologicalRole: 'Supports adaptive immunity, T-cell activation, calcium homeostasis & mood stability.'
      },
      {
        name: 'Vitamin K2 (as Menaquinone-7 / MK-7)',
        dosage: '100 mcg',
        dailyValuePercentage: 83,
        biologicalRole: 'Directs calcium into bone matrix; prevents vascular calcification alongside D3.'
      },
      {
        name: 'Zinc Picolinate (Bio-Chelated)',
        dosage: '15 mg',
        dailyValuePercentage: 136,
        biologicalRole: 'Essential mucosal membrane defense and antioxidant enzymatic cofactor.'
      },
      {
        name: 'Organic Elderberry & Acerola Vitamin C',
        dosage: '90 mg',
        dailyValuePercentage: 100,
        biologicalRole: 'Natural ascorbic acid synergy with cocoa polyphenols for cellular defense.'
      }
    ],
    botanicalActives: ['Wild Black Elderberry Extract', 'Organic Acerola Cherry', 'Western Ghats Ginger Extract'],
    sweetenerSystem: 'Non-GMO Single-Origin Luo Han Guo (Monk Fruit) & Rare Plant Allulose (0g Glycemic Impact)',
    origin: 'Direct Single-Estate Criollo Cacao, Idukki Bio-Corridor (Western Ghats) by Montevia Nutri Foods',
    organicCertifications: ['USDA Organic', 'EU Bio Euro-Leaf', 'India Organic', 'Non-GMO Project', 'Fair Trade Certified'],
    tastingNotes: ['Sun-ripened blackberries', 'Roasted espresso beans', 'Dark cherry blossom', 'Velvety cocoa finish'],
    description: 'Part of the signature Synthé Boost collection. A revolutionary clinical synergy of organic dark chocolate and critical fat-soluble vitamins. Because Vitamin D3 and K2 are lipid-soluble, our raw cocoa butter provides 3.8x superior systemic absorption compared to traditional dry tablets.',
    clinicalNote: 'HPLC batch verified: 100% active vitamin potency retained after chocolate tempering through our low-thermal botanical encapsulation process.',
    stockStatus: 'in_stock'
  },
  {
    id: 'cellular-glow-ruby',
    name: 'Synthé Glow (Radiant Pink Botanical)',
    tagline: 'Astaxanthin, Biotin, Vitamin E & Camu Camu in Naturally Pink Cocoa Butter',
    cacaoPercentage: 62,
    category: 'skin_glow',
    priceUSD: 9.25,
    rating: 4.96,
    reviewsCount: 268,
    badge: 'The Synthé Glow',
    colorAccent: '#ff70a6',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    servingSize: '1 bar (45g)',
    servingsPerBar: 1,
    nutrition: {
      calories: 180,
      netCarbs: 1.5,
      totalFat: 17,
      totalSugars: 0,
      addedSugars: 0,
      fiber: 7,
      protein: 3
    },
    vitamins: [
      {
        name: 'Natural Astaxanthin (from Haematococcus pluvialis)',
        dosage: '6 mg Pure Active',
        dailyValuePercentage: 100,
        biologicalRole: 'Nature’s most potent antioxidant; 6,000x stronger than Vitamin C at combating singlet oxygen skin aging.'
      },
      {
        name: 'Vitamin E (D-Alpha Tocopherol Natural)',
        dosage: '15 mg (22.4 IU)',
        dailyValuePercentage: 100,
        biologicalRole: 'Protects skin lipid membranes from oxidative photo-damage and oxidative stress.'
      },
      {
        name: 'High-Potency Biotin (Vitamin B7)',
        dosage: '2,500 mcg',
        dailyValuePercentage: 8333,
        biologicalRole: 'Keratin protein synthesis for hair strength, skin barrier integrity, and healthy nail beds.'
      },
      {
        name: 'Wild Camu Camu Vitamin C & Hyaluronic Precursor',
        dosage: '120 mg',
        dailyValuePercentage: 133,
        biologicalRole: 'Stimulates native intracellular collagen synthesis and dermal hydration.'
      }
    ],
    botanicalActives: ['Micro-Algae Astaxanthin Oleoresin', 'Wild Rosehip Seed Extract', 'Organic Hibiscus Flower'],
    sweetenerSystem: 'Zero-Sugar Monk Fruit + Plant Allulose (0g Glycemic Impact)',
    origin: 'Naturally Unfermented Ruby Cacao Pods & Cold-Pressed Bio-Cocoa Butter',
    organicCertifications: ['USDA Organic', 'EU Bio', 'Halal Certified', 'Cruelty Free'],
    tastingNotes: ['Tart wild raspberry', 'Crisp pomegranate ruby notes', 'Velvety floral cocoa butter'],
    description: 'Part of the core Synthé Glow collection. An ingestible beauty treatment disguised as luxury pink botanical chocolate. Formulated with clinical-grade Astaxanthin and organic botanical vitamins that defend the dermal matrix from photo-aging.',
    clinicalNote: 'Dermatological trials indicate measurable improvement in dermal elasticity and hydration after 28 days of daily consumption.',
    stockStatus: 'in_stock'
  },
  {
    id: 'calmaura-oat-velvet',
    name: 'Synthé Calm (Neuro-Calm Velvet M*lk)',
    tagline: 'Neuro-Calm Magnesium, Chamomile & Vitamin B6 in Dairy-Free Oat M*lk',
    cacaoPercentage: 56,
    category: 'sleep_calm',
    priceUSD: 8.50,
    rating: 4.91,
    reviewsCount: 215,
    badge: 'The Synthé Calm',
    colorAccent: '#9381ff',
    imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80',
    servingSize: '1 bar (45g)',
    servingsPerBar: 1,
    nutrition: {
      calories: 175,
      netCarbs: 2,
      totalFat: 15,
      totalSugars: 0,
      addedSugars: 0,
      fiber: 8,
      protein: 3
    },
    vitamins: [
      {
        name: 'Magnesium Bisglycinate (Chelated Relaxant)',
        dosage: '180 mg Elemental Mg',
        dailyValuePercentage: 43,
        biologicalRole: 'Relaxes neuromuscular tension and activates parasympathetic GABA receptors.'
      },
      {
        name: 'Vitamin B6 (Pyridoxine Active)',
        dosage: '5 mg',
        dailyValuePercentage: 294,
        biologicalRole: 'Supports natural melatonin production for restful, uninterrupted sleep cycles.'
      },
      {
        name: 'Vitamin D3 (Plant Lichen)',
        dosage: '1,000 IU',
        dailyValuePercentage: 125,
        biologicalRole: 'Regulates circadian rhythm gene clock expressions.'
      }
    ],
    botanicalActives: ['Organic German Chamomile Extract', 'Synthé KSM-66 Organic Ashwagandha', 'Wild Holy Basil (Tulsi)'],
    sweetenerSystem: 'Organic Stevia Leaf Reb-M (Zero Aftertaste) & Organic Chicory Root Inulin Prebiotics',
    origin: 'Fine Criollo Blend with Hydrolyzed Gluten-Free Organic Oat Cream',
    organicCertifications: ['USDA Organic', 'Certified Vegan', 'Non-Dairy Certified', 'Gluten-Free Certified'],
    tastingNotes: ['Creamy caramel malt', 'Toasted hazelnuts', 'Warm wildflower honey aromatics', 'Smooth satin finish'],
    description: 'Part of the signature Synthé Calm range. An evening restorative tonic formulated without dairy or refined sugar, using silky gluten-free organic oat cream to create a melt-in-the-mouth texture loaded with sleep-supportive cofactors.',
    clinicalNote: 'Double-blind sensory trials indicate 88% of users reported faster sleep onset and reduced nocturnal muscle tightness.',
    stockStatus: 'in_stock'
  },
  {
    id: 'kids-gentle-multi',
    name: 'Synthé Kids (Gentle Daily Growth & Focus)',
    tagline: 'Pediatrician-Approved Clean Vitamins A, C, D3, Zinc & Choline in 52% Smooth Oat Cocoa',
    cacaoPercentage: 52,
    category: 'daily_multi',
    priceUSD: 7.95,
    rating: 4.97,
    reviewsCount: 198,
    badge: 'The Synthé Kids',
    colorAccent: '#ffb703',
    imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80',
    servingSize: '1 bar (40g, 4 bite-size squares)',
    servingsPerBar: 1,
    nutrition: {
      calories: 160,
      netCarbs: 2,
      totalFat: 13,
      totalSugars: 0,
      addedSugars: 0,
      fiber: 8,
      protein: 3
    },
    vitamins: [
      {
        name: 'Vitamin D3 (Wild Lichen) + Calcium Citrate',
        dosage: '800 IU / 150 mg',
        dailyValuePercentage: 100,
        biologicalRole: 'Supports bone growth, mineralization, and immune vitality.'
      },
      {
        name: 'Choline & Methylfolate (Neuro-Nurture)',
        dosage: '55 mg / 200 mcg',
        dailyValuePercentage: 100,
        biologicalRole: 'Essential co-factors for cognitive development, memory, and attentiveness.'
      },
      {
        name: 'Buffered Vitamin C & Zinc Chelate',
        dosage: '45 mg / 5 mg',
        dailyValuePercentage: 100,
        biologicalRole: 'Gentle immune resilience without stomach upset.'
      },
      {
        name: 'Active Vitamin B-Complex (B6, B12 Methylated)',
        dosage: '100% Kid RDI',
        dailyValuePercentage: 100,
        biologicalRole: 'Balanced cellular vitality without hyperactivity or sugar crashes.'
      }
    ],
    botanicalActives: ['Organic Western Ghats Cacao', 'Prebiotic Blue Agave Inulin', 'Oat Beta-Glucan'],
    sweetenerSystem: 'Zero Refined Sugar • Monk Fruit Mogroside V & Prebiotic Plant Fibers',
    origin: 'Ethically Sourced Indian Criollo Cocoa, Montevia Nutri Foods, Hyderabad',
    organicCertifications: ['USDA Organic', 'Jaivik Bharat', 'Non-GMO Project', 'Allergen Safe Lab Tested'],
    tastingNotes: ['Silky milk-style cocoa', 'Sweet vanilla bean', 'Creamy toasted oats'],
    description: 'Designed specifically for children (and loved by parents). Synthé Kids replaces synthetic sugar gummies that rot teeth with pure, organic melt-in-the-mouth cocoa squares packed with bioavailable pediatric multivitamins.',
    clinicalNote: 'Zero sugar prevents dental caries and hyperactivity spikes. 100% free of artificial dyes, fillers, or maltitol.',
    stockStatus: 'in_stock'
  },
  {
    id: 'neuromatrix-b-complex',
    name: 'Synthé Focus (Neuro-Matrix B-Complex)',
    tagline: 'Methylated Neuro-Vitamins + Dual-Extracted Lion’s Mane in 85% Midnight Cacao',
    cacaoPercentage: 85,
    category: 'brain_focus',
    priceUSD: 8.95,
    rating: 4.98,
    reviewsCount: 289,
    badge: 'Nootropic Award 2025',
    colorAccent: '#48a9a6',
    imageUrl: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80',
    servingSize: '1 bar (45g)',
    servingsPerBar: 1,
    nutrition: {
      calories: 195,
      netCarbs: 1,
      totalFat: 19,
      totalSugars: 0,
      addedSugars: 0,
      fiber: 11,
      protein: 5
    },
    vitamins: [
      {
        name: 'Vitamin B12 (Methylcobalamin Bioactive)',
        dosage: '500 mcg',
        dailyValuePercentage: 20833,
        biologicalRole: 'Supports myelin sheath maintenance, neurotransmitter synthesis & cellular energy.'
      },
      {
        name: 'Vitamin B6 (Pyridoxal-5-Phosphate / P-5-P Active)',
        dosage: '10 mg',
        dailyValuePercentage: 588,
        biologicalRole: 'Crucial co-factor for dopamine and serotonin conversion.'
      },
      {
        name: 'Folate (L-5-Methyltetrahydrofolate / L-5-MTHF)',
        dosage: '400 mcg DFE',
        dailyValuePercentage: 100,
        biologicalRole: 'Optimal methylation for cognitive performance, completely bypassing MTHFR gene variance.'
      },
      {
        name: 'Vitamin B1, B2, B3 & B5 Complex',
        dosage: '100% RDI Balanced Blend',
        dailyValuePercentage: 100,
        biologicalRole: 'Krebs cycle ATP mitochondrial energy production with zero sugar crash.'
      }
    ],
    botanicalActives: ['Organic Lion’s Mane (Hericium erinaceus 10:1)', 'L-Theanine (from Green Tea)', 'Synthé Bacopa Monnieri'],
    sweetenerSystem: 'Pure Organic Monk Fruit (Mogroside V 55%) + Erythritol (Zero Net Carbs)',
    origin: 'Wild Forest Organically Grown Trinitario Cacao, San Martin & Kerala Reserve',
    organicCertifications: ['USDA Organic', 'EU Bio', 'Keto Certified', 'Kosher Certified'],
    tastingNotes: ['Deep earth truffle', 'Subtle cedarwood', 'Raw vanilla bean', 'Rich smoked molasses undertone'],
    description: 'Engineered for sustained executive function, deep focus, and clean mental clarity. Natural theobromine combined with L-Theanine and methylated B-vitamins delivers smooth cerebral stamina without jitters.',
    clinicalNote: 'Zero sugar prevents insulin resistance and the mid-afternoon cognitive slump while delivering complete daily neurological co-factors.',
    stockStatus: 'in_stock'
  },
  {
    id: 'pure-unsweetened-100',
    name: 'Synthé Pure 100% (Ceremonial Cacao)',
    tagline: 'Zero Sweetener, Zero Added Sugar, Pure Unadulterated High-Flavanol Bio-Cocoa',
    cacaoPercentage: 100,
    category: 'pure_cacao',
    priceUSD: 8.00,
    rating: 4.89,
    reviewsCount: 154,
    badge: '100% Pure Cocoa',
    colorAccent: '#603813',
    imageUrl: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    servingSize: '1 bar (45g)',
    servingsPerBar: 1,
    nutrition: {
      calories: 220,
      netCarbs: 0.5,
      totalFat: 23,
      totalSugars: 0,
      addedSugars: 0,
      fiber: 14,
      protein: 6
    },
    vitamins: [
      {
        name: 'Natural Bio-Iron & Magnesium Matrix',
        dosage: '6.2 mg Iron / 140 mg Mg',
        dailyValuePercentage: 35,
        biologicalRole: 'Natural organic cacao mineral density supporting ATP oxygen delivery and cardiac health.'
      },
      {
        name: 'Active Cocoa Flavanols & Epicatechins',
        dosage: '750 mg Total Polyphenols',
        dailyValuePercentage: 100,
        biologicalRole: 'Supports endothelial nitric oxide synthesis and vascular microcirculation.'
      },
      {
        name: 'Theobromine Neuro-Tonic',
        dosage: '450 mg',
        dailyValuePercentage: 100,
        biologicalRole: 'Smooth vasodilation and steady mental vigilance without central nervous strain.'
      }
    ],
    botanicalActives: ['Pure Idukki Single-Estate Criollo Cocoa Solids', 'Raw Cold-Extracted Cocoa Butter'],
    sweetenerSystem: 'None — 100% Cacao, Completely Unsweetened (0.0g Net Carbs)',
    origin: 'Direct-Trade Estate Farm, High Elevation Shade-Grown Western Ghats, Montevia Nutri Foods',
    organicCertifications: ['USDA Organic', 'Demeter Biodynamic Certified', 'Fair Trade', 'Paleo & Keto Strict'],
    tastingNotes: ['Intense deep cocoa', 'Black walnut', 'Dark tobacco leaves', 'Cacao pod fruit acidity'],
    description: 'For the cacao purist, strict carnivore/keto practitioner, and ceremonial mindful taster. Contains zero sugars, zero artificial sweeteners, and zero flavor masks — only the raw botanical power of whole organic criollo cacao beans.',
    clinicalNote: 'Tested for heavy metals (lead/cadmium) below stringent EU standards (<0.10 mg/kg), ensuring ultimate daily safety.',
    stockStatus: 'in_stock'
  }
];
