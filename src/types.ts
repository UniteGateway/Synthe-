export interface VitaminActive {
  name: string;
  dosage: string;
  dailyValuePercentage: number;
  biologicalRole: string;
}

export interface ChocolateProduct {
  id: string;
  name: string;
  tagline: string;
  cacaoPercentage: number;
  category: 'immunity' | 'brain_focus' | 'sleep_calm' | 'daily_multi' | 'skin_glow' | 'pure_cacao';
  priceUSD: number;
  rating: number;
  reviewsCount: number;
  badge: string;
  colorAccent: string;
  imageUrl: string;
  servingSize: string;
  servingsPerBar: number;
  nutrition: {
    calories: number;
    netCarbs: number;
    totalFat: number;
    totalSugars: number;
    addedSugars: number;
    fiber: number;
    protein: number;
  };
  vitamins: VitaminActive[];
  botanicalActives: string[];
  sweetenerSystem: string;
  origin: string;
  organicCertifications: string[];
  tastingNotes: string[];
  description: string;
  clinicalNote: string;
  stockStatus: 'in_stock' | 'low_stock';
}

export interface SynthePortal {
  id: string;
  name: string;
  region: string;
  country: string;
  flag: string;
  url: string;
  description: string;
  focus: string;
  certifications: string[];
  currency: string;
  status: string;
  established: string;
}

export interface InternationalBrand {
  id: string;
  name: string;
  country: string;
  flag: string;
  region: string;
  url: string;
  category: string;
  specialty: string;
  sugarProfile: string;
  vitaminActives: string[];
  certifications: string[];
  established: string;
  shipping: string;
}

export interface CartItem {
  product: ChocolateProduct;
  quantity: number;
}

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'AED' | 'INR';

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  rateToUSD: number;
  format: (amountUSD: number) => string;
}

export interface AIFinderResult {
  summary: string;
  recommendations: {
    name: string;
    websiteUrl: string;
    country: string;
    flag: string;
    type: string;
    keyVitaminsAndActives: string[];
    sweetener: string;
    certifications: string[];
    internationalShipping: string;
    whyRecommended: string;
  }[];
  syntheAdvantage?: string;
  dietaryCompliance?: string;
}
