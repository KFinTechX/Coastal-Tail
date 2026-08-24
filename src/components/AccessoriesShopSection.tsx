import React, { useState } from 'react';
import { Sparkles, Star, ShoppingBag, ArrowRight, Heart, ShieldCheck, RefreshCw, Truck, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ACCESSORY_PRODUCTS } from '../data/productsData';
import { formatINR } from '../utils/whatsapp';

interface AccessoriesShopSectionProps {
  onExploreFullStore: () => void;
}

export const AccessoriesShopSection: React.FC<AccessoriesShopSectionProps> = ({ onExploreFullStore }) => {
  const { addToCart, setSelectedProductForDetail, isInWishlist, toggleWishlist } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: { id: string; label: string; count: number; icon: string }[] = [
    { id: 'all', label: 'All Accessories', count: 65, icon: '✨' },
    { id: 'collars', label: 'Collars', count: 80, icon: '📿' },
    { id: 'leashes', label: 'Leashes', count: 60, icon: '🪢' },
    { id: 'harnesses', label: 'Harness', count: 40, icon: '🦺' },
    { id: 'beds', label: 'Beds', count: 50, icon: '🛋️' },
    { id: 'toys', label: 'Toys', count: 120, icon: '🎾' },
    { id: 'bowls', label: 'Bowls', count: 30, icon: '🥣' },
    { id: 'grooming-essentials', label: 'Grooming', count: 60, icon: '🧼' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? ACCESSORY_PRODUCTS
      : ACCESSORY_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="pet-accessories-section" className="py-14 sm:py-20 bg-[#FDFBF7] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE8DB] text-[#08383B] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0D6E6E]" />
              <span>STYLISH, SAFE, TAIL-WAG APPROVED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08383B] font-['Outfit'] flex items-center gap-2">
              Shop Pet Accessories 🐾
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Stylish & useful accessories handcrafted for your pet’s comfort and beach walks in Mangaluru.
            </p>
          </div>

          <button
            onClick={onExploreFullStore}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#08383B] hover:bg-[#EFE8DB] border border-[#08383B]/30 transition-colors w-fit"
          >
            <span>Explore Full Accessories Store</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pill Badges (Direct match to reference screenshot) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 pt-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl border text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#08383B] text-white border-[#08383B] shadow-sm scale-102'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.id ? 'bg-[#0D6E6E] text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
          {filteredProducts.slice(0, 4).map((product) => {
            const isFav = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0D6E6E]/30 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Discount Badge */}
                {product.discountPercentage && (
                  <span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-[#FF6B6B] text-white text-[11px] font-black shadow-xs">
                    {product.discountPercentage}% OFF
                  </span>
                )}

                {/* Favorite Heart */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full shadow-xs transition-colors cursor-pointer ${
                    isFav ? 'bg-rose-50 text-rose-500' : 'bg-white/90 text-slate-400 hover:text-rose-500'
                  }`}
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                </button>

                {/* Product Image */}
                <div
                  onClick={() => setSelectedProductForDetail(product)}
                  className="aspect-square rounded-2xl bg-[#FAF7F2] p-3 flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-[#EFE8DB]/40 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#08383B] uppercase tracking-wider text-[10px]">
                      {product.brand}
                    </span>
                    <div className="flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded text-[11px]">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => setSelectedProductForDetail(product)}
                    className="text-sm font-bold text-[#08383B] line-clamp-1 hover:text-[#0D6E6E] cursor-pointer transition-colors"
                  >
                    {product.name}
                  </h3>

                  <div className="text-[11px] text-slate-500">{product.sizeOrWeight}</div>

                  {/* Price & Add to Cart */}
                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <div className="text-base font-black text-[#08383B]">
                        {formatINR(product.price)}
                      </div>
                      {product.originalPrice && (
                        <div className="text-[11px] text-slate-400 line-through">
                          {formatINR(product.originalPrice)}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="px-3.5 py-2 rounded-xl bg-[#08383B] hover:bg-[#0D6E6E] text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5 Trust Badges Row (Direct match to reference screenshot) */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
              <Award className="w-5 h-5 text-[#0D6E6E] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-800">Premium Quality</h4>
                <p className="text-[10px] text-slate-500">Curated Brands</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#0D6E6E] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-800">Secure Payments</h4>
                <p className="text-[10px] text-slate-500">WhatsApp Verified</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
              <RefreshCw className="w-5 h-5 text-[#0D6E6E] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-800">Easy Returns</h4>
                <p className="text-[10px] text-slate-500">& Exchanges</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
              <span className="text-lg">🐾</span>
              <div>
                <h4 className="text-xs font-bold text-slate-800">100% Pet Safe</h4>
                <p className="text-[10px] text-slate-500">Non-toxic materials</p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
              <Truck className="w-5 h-5 text-[#0D6E6E] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-800">Fast Delivery</h4>
                <p className="text-[10px] text-slate-500">Across Mangaluru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
