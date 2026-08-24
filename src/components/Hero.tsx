import React from 'react';
import {
  Sparkles,
  ChevronRight,
  Truck,
  Scissors,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Award,
  Heart,
  Calendar,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { COASTAL_TAILS_PHONE } from '../utils/whatsapp';

interface HeroProps {
  onExploreGrooming: () => void;
  onShopEssentials: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreGrooming, onShopEssentials }) => {
  const { openGroomingEnquiry } = useCart();

  return (
    <div className="relative bg-gradient-to-b from-[#DCF4F2] via-[#E8F8F7] to-white pt-6 sm:pt-10 pb-8 sm:pb-12 overflow-hidden">
      {/* Botanical Palm Leaves - Top Left */}
      <div className="absolute -top-6 -left-6 sm:-top-2 sm:-left-2 w-36 h-36 sm:w-56 sm:h-56 pointer-events-none opacity-85 z-0 select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#0D6E6E]/40">
          <path d="M10,10 Q60,80 120,40 Q80,100 160,110 Q100,120 140,180 Q80,150 40,190 Q50,130 10,140 Q40,90 10,10 Z" fill="currentColor" opacity="0.4" />
          <path d="M0,0 Q45,65 95,30 Q65,85 130,95 Q80,105 115,155 Q65,130 30,165 Q40,110 5,120 Q30,75 0,0 Z" stroke="#0D6E6E" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M0,0 L115,155 M30,40 L95,30 M50,75 L130,95 M60,115 L140,180" stroke="#0D6E6E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      {/* Botanical Palm Leaves - Top Right */}
      <div className="absolute -top-6 -right-6 sm:-top-2 sm:-right-2 w-36 h-36 sm:w-56 sm:h-56 pointer-events-none opacity-85 z-0 select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#0D6E6E]/40 transform scale-x-[-1]">
          <path d="M10,10 Q60,80 120,40 Q80,100 160,110 Q100,120 140,180 Q80,150 40,190 Q50,130 10,140 Q40,90 10,10 Z" fill="currentColor" opacity="0.4" />
          <path d="M0,0 Q45,65 95,30 Q65,85 130,95 Q80,105 115,155 Q65,130 30,165 Q40,110 5,120 Q30,75 0,0 Z" stroke="#0D6E6E" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M0,0 L115,155 M30,40 L95,30 M50,75 L130,95 M60,115 L140,180" stroke="#0D6E6E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      {/* Decorative Floating Paw Prints */}
      <div className="absolute top-20 left-12 sm:left-24 opacity-20 pointer-events-none select-none">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#0D6E6E">
          <circle cx="5" cy="8" r="2" />
          <circle cx="10" cy="4" r="2" />
          <circle cx="15" cy="4" r="2" />
          <circle cx="20" cy="8" r="2" />
          <path d="M6 14 C6 11, 8 10, 12 10 C16 10, 18 11, 18 14 C18 17.5, 15 20, 12 20 C9 20, 6 17.5, 6 14 Z" />
        </svg>
      </div>
      <div className="absolute top-36 left-1/3 opacity-15 pointer-events-none select-none">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#0D6E6E">
          <circle cx="5" cy="8" r="2" />
          <circle cx="10" cy="4" r="2" />
          <circle cx="15" cy="4" r="2" />
          <circle cx="20" cy="8" r="2" />
          <path d="M6 14 C6 11, 8 10, 12 10 C16 10, 18 11, 18 14 C18 17.5, 15 20, 12 20 C9 20, 6 17.5, 6 14 Z" />
        </svg>
      </div>
      <div className="absolute top-16 right-1/4 opacity-20 pointer-events-none select-none">
        <svg width="38" height="38" viewBox="0 0 24 24" fill="#0D6E6E">
          <circle cx="5" cy="8" r="2" />
          <circle cx="10" cy="4" r="2" />
          <circle cx="15" cy="4" r="2" />
          <circle cx="20" cy="8" r="2" />
          <path d="M6 14 C6 11, 8 10, 12 10 C16 10, 18 11, 18 14 C18 17.5, 15 20, 12 20 C9 20, 6 17.5, 6 14 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 sm:pt-4">
          {/* Left Column: Eyebrow + Main Title + Subtitle */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            {/* Eyebrow badge matching user reference with orange play icon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#2DD4BF]/50 shadow-xs text-xs font-extrabold text-[#08383B] tracking-wider uppercase backdrop-blur-xs">
              <span className="w-4 h-4 rounded-full bg-[#FF8A3D] text-white flex items-center justify-center text-[9px] font-black shrink-0">
                ▶
              </span>
              <span className="text-[#0D6E6E]">TRANSPARENT GROOMING RATES</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-[#08383B] font-['Outfit'] tracking-tight leading-[1.12]">
              Tailored Grooming Packages & Pricing
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Zero hidden fees. Premium botanical treatments personalized to your pet's breed, coat type, and weight.
            </p>

            {/* Quick Actions & Mangaluru Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('grooming-packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onExploreGrooming();
                }}
                className="px-6 py-3 rounded-2xl bg-[#0D6E6E] hover:bg-[#08383B] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#0D6E6E]/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
              >
                <span>View All Package Rates</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openGroomingEnquiry()}
                className="px-5 py-3 rounded-2xl bg-white hover:bg-[#F0FDFB] text-[#08383B] font-bold text-xs sm:text-sm border border-slate-200 shadow-xs transition-all flex items-center gap-2 cursor-pointer hover:border-[#0D6E6E]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Ask for Price on WhatsApp</span>
              </button>
            </div>

            {/* Studio Hours & Location Pill */}
            <div className="pt-1 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Studio Open Today in Kankanady, Mangaluru • 9:00 AM – 8:00 PM</span>
            </div>
          </div>

          {/* Right Column: Dog in teal towel & Fluffy Cat Visual (Exact match to reference) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main Photo Card with soft wave shape */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-[#08383B]/10 to-[#2DD4BF]/20 p-2 sm:p-2.5 backdrop-blur-xs">
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl aspect-4/3 sm:aspect-16/11">
                  <img
                    src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&auto=format&fit=crop&q=85"
                    alt="Golden Retriever in cozy teal grooming towel and fluffy cat companion"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Soft coastal gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08383B]/75 via-transparent to-transparent" />

                  {/* Bottom Image Overlay Pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/40 shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#E6F7F6] text-[#0D6E6E] flex items-center justify-center text-sm font-bold">
                        🐶🐱
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-[#08383B]">Mangaluru Pet Sanctuary</div>
                        <div className="text-[10px] text-slate-500">Kankanady Studio & Mobile Van</div>
                      </div>
                    </div>

                    <button
                      onClick={() => openGroomingEnquiry()}
                      className="px-2.5 py-1 bg-[#0D6E6E] hover:bg-[#08383B] text-white text-[10px] font-extrabold rounded-lg transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Star Rating Tag */}
              <div className="absolute -top-3 -left-3 sm:-left-5 bg-white rounded-2xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xs">
                  ★ 4.9
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-slate-800">500+ Mangaluru Pets</div>
                  <div className="text-[9px] text-slate-500">Certified gentle stylists</div>
                </div>
              </div>

              {/* Floating Botanical Badge */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-gradient-to-r from-[#0D6E6E] to-[#08383B] text-white rounded-2xl p-2.5 shadow-xl border border-white/20 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span className="text-[10px] font-bold">100% Tearless Botanical Spa</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Trust Indicators Bar */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-100 shadow-xs">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E6F7F6] text-[#0D6E6E] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">Hygienic & Safe</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500">Sterilized tools every session</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-100 shadow-xs">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E6F7F6] text-[#0D6E6E] flex items-center justify-center shrink-0">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">Master Groomers</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500">Certified low-stress handling</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-100 shadow-xs">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E6F7F6] text-[#0D6E6E] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">Organic Botanicals</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500">Tearless, sulfate-free shampoos</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-100 shadow-xs">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E6F7F6] text-[#0D6E6E] flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-[#FF6B6B]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">Mangaluru Loved</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500">Cage-free, calm sanctuary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
