import React, { useState } from 'react';
import { Search, X, ShoppingBag, Scissors, Sparkles, ArrowRight } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/productsData';
import { DOG_GROOMING_PACKAGES, CAT_GROOMING_PACKAGES, SPA_ADDONS } from '../data/groomingData';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/whatsapp';
import { Product, GroomingPackage } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { addToCart, setSelectedProductForDetail, openGroomingEnquiry } = useCart();
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingProducts = cleanQuery
    ? ALL_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.brand.toLowerCase().includes(cleanQuery) ||
          p.categoryLabel.toLowerCase().includes(cleanQuery) ||
          p.tags.some((t) => t.toLowerCase().includes(cleanQuery))
      )
    : [];

  const allPackages = [...DOG_GROOMING_PACKAGES, ...CAT_GROOMING_PACKAGES];
  const matchingPackages = cleanQuery
    ? allPackages.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(cleanQuery) ||
          pkg.description.toLowerCase().includes(cleanQuery) ||
          pkg.includedTreatments.some((t) => t.toLowerCase().includes(cleanQuery))
      )
    : [];

  const matchingAddOns = cleanQuery
    ? SPA_ADDONS.filter(
        (addon) =>
          addon.name.toLowerCase().includes(cleanQuery) ||
          addon.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-start justify-center pt-16 p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-2xl overflow-hidden relative">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#0D6E6E] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dog food, cat grooming, leather collar, de-shedding spa..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Search Results / Suggestions */}
        <div className="p-5 max-h-[65vh] overflow-y-auto space-y-6">
          {!query ? (
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Popular Searches in Mangaluru:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Puppy Food',
                  'Cat De-shedding',
                  'Dead Sea Mud Spa',
                  'Royal Canin',
                  'Leather Collar',
                  'No-Pull Harness',
                  'Teddy Haircut',
                  'Mobile Doorstep Grooming',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-xl bg-[#F0FDFB] text-[#0D6E6E] hover:bg-[#E6F7F6] text-xs font-semibold border border-[#2DD4BF]/30 transition-colors"
                  >
                    🔍 {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {matchingProducts.length === 0 &&
                matchingPackages.length === 0 &&
                matchingAddOns.length === 0 && (
                  <div className="text-center py-10 space-y-2">
                    <p className="text-sm font-bold text-slate-700">No matching items found for "{query}"</p>
                    <p className="text-xs text-slate-500">
                      Try searching for "Dog Food", "Cat Grooming", "Shampoo", "Harness" or "Spa".
                    </p>
                  </div>
                )}

              {/* Matching Grooming Packages */}
              {matchingPackages.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#0D6E6E] flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5" />
                    <span>Grooming Packages ({matchingPackages.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="p-3 rounded-2xl border border-slate-100 bg-[#F8FAFA] hover:bg-[#E6F7F6]/50 transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-[#08383B] flex items-center gap-2">
                            <span>{pkg.petType === 'dog' ? '🐶' : '🐱'} {pkg.title}</span>
                            <span className="text-[10px] text-slate-500">({pkg.duration})</span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">{pkg.tagline}</p>
                        </div>
                        <button
                          onClick={() => {
                            onClose();
                            openGroomingEnquiry(pkg, pkg.petType);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-[#0D6E6E] text-white text-xs font-bold shrink-0 hover:bg-[#08383B]"
                        >
                          Ask for Price
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Retail Products */}
              {matchingProducts.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#0D6E6E] flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pet Food & Accessories ({matchingProducts.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="p-2.5 rounded-2xl border border-slate-100 bg-white hover:bg-[#F8FAFA] transition-colors flex items-center justify-between gap-3"
                      >
                        <div
                          onClick={() => {
                            onClose();
                            setSelectedProductForDetail(prod);
                          }}
                          className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"
                        >
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-10 h-10 rounded-lg object-contain bg-slate-50 p-1 shrink-0"
                          />
                          <div className="truncate">
                            <div className="font-bold text-xs text-slate-800 truncate">{prod.name}</div>
                            <div className="text-[10px] text-slate-400">{prod.brand} • {prod.sizeOrWeight}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-extrabold text-xs text-[#08383B]">{formatINR(prod.price)}</span>
                          <button
                            onClick={() => {
                              addToCart(prod, 1);
                              onClose();
                            }}
                            className="p-2 rounded-xl bg-[#0D6E6E] text-white hover:bg-[#08383B] text-xs font-bold"
                            title="Add to cart"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Addons */}
              {matchingAddOns.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#0D6E6E] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Spa Treatments ({matchingAddOns.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingAddOns.map((addon) => (
                      <div
                        key={addon.id}
                        className="p-3 rounded-2xl border border-slate-100 bg-[#F8FAFA] flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-xs text-[#08383B]">{addon.name}</div>
                          <div className="text-[11px] text-slate-500">{addon.description}</div>
                        </div>
                        <button
                          onClick={() => {
                            onClose();
                            openGroomingEnquiry();
                          }}
                          className="px-3 py-1 rounded-lg bg-[#0D6E6E] text-white text-xs font-bold shrink-0"
                        >
                          Enquire
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
