export type PetCategory = 'dogs' | 'cats' | 'spa' | 'mobile';

export type DogSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface DogSizeInfo {
  id: DogSize;
  name: string;
  weight: string;
  examples: string;
}

export type CatCoatType = 'short' | 'long' | 'matting' | 'senior';

export interface CatCoatInfo {
  id: CatCoatType;
  name: string;
  description: string;
  examples: string;
}

export interface GroomingPackage {
  id: string;
  petType: 'dog' | 'cat';
  title: string;
  tagline: string;
  description: string;
  duration: string;
  isPopular?: boolean;
  badge?: string;
  includedTreatments: string[];
  priceMode: 'ask'; // Strict mandate: Never show prices for grooming
}

export interface GroomingAddOn {
  id: string;
  name: string;
  category: 'spa' | 'hygiene' | 'coat' | 'specialty';
  description: string;
  benefits: string;
  suitableFor: 'dogs' | 'cats' | 'all';
  priceMode: 'ask';
  duration: string;
  iconName: string;
}

export type ProductCategory =
  | 'dog-food'
  | 'cat-food'
  | 'puppy-food'
  | 'kitten-food'
  | 'treats'
  | 'wet-food'
  | 'supplements'
  | 'dental-care'
  | 'wellness'
  | 'collars'
  | 'leashes'
  | 'harnesses'
  | 'beds'
  | 'toys'
  | 'bowls'
  | 'grooming-essentials'
  | 'travel';

export interface Product {
  id: string;
  name: string;
  type: 'food' | 'accessory';
  category: ProductCategory;
  categoryLabel: string;
  brand: string;
  image: string;
  galleryImages?: string[];
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  sizeOrWeight: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  description: string;
  keyFeatures: string[];
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface GroomingEnquiry {
  petType: 'dog' | 'cat';
  petName: string;
  breed: string;
  sizeOrCoat: string;
  coatCondition: 'Healthy' | 'Moderate Tangling' | 'Severe Matting' | 'Sensitive Skin / Allergies' | 'Shedding Heavily';
  requestedPackage: string;
  selectedAddOns: string[];
  preferredDate: string;
  preferredTimeSlot: string;
  serviceMode: 'studio' | 'doorstep';
  customerName: string;
  customerMobile: string;
  notes?: string;
}

export interface ProductOrder {
  customerName: string;
  mobileNumber: string;
  whatsappNumber: string;
  deliveryAddress: string;
  areaLocation: string; // e.g. Kankanady, Kadri, Bejai, Urwa, Falnir, Ullal
  preferredContactTime: string;
  orderNotes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'grooming' | 'happy-pets' | 'studio' | 'before-after' | 'products' | 'cats' | 'spa';
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  petName?: string;
  breed?: string;
  tag?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  petInfo: string;
  rating: number;
  text: string;
  image: string;
  verified: boolean;
}

export type ActivePage =
  | 'home'
  | 'about'
  | 'services'
  | 'dog-grooming'
  | 'cat-grooming'
  | 'spa-addons'
  | 'mobile-grooming'
  | 'shop'
  | 'food'
  | 'accessories'
  | 'membership'
  | 'gallery'
  | 'contact'
  | 'cart';
