import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-24 right-6 z-50 animate-slideIn">
      <div className="bg-[#08383B] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#2DD4BF]/40 flex items-center gap-3 text-xs sm:text-sm font-semibold max-w-sm">
        <div className="w-6 h-6 rounded-full bg-[#0D6E6E] text-[#2DD4BF] flex items-center justify-center shrink-0">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <span className="leading-snug">{toastMessage}</span>
      </div>
    </div>
  );
};
