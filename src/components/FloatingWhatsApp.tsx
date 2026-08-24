import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { createDirectWhatsAppChatUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    window.open(createDirectWhatsAppChatUrl('Booking & Store Enquiry'), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-800 text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 max-w-[200px] animate-bounce">
          <span>Chat with us on WhatsApp 👋</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button with authentic WhatsApp Icon */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative"
        aria-label="Chat on WhatsApp"
        title="Chat with Coastal Tails on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white border-2 border-[#25D366] rounded-full animate-ping" />
        <WhatsAppIcon className="w-8 h-8 text-white fill-current" />
      </button>
    </div>
  );
};

