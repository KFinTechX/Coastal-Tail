import React from 'react';

interface PawData {
  id: number;
  top: string;
  left: string;
  size: number;
  rotation: number;
  opacity: number;
  animationClass: string;
  blur: string;
  delay?: string;
}

const PAW_POSITIONS: PawData[] = [
  // Top header/hero area
  { id: 1, top: '6%', left: '8%', size: 48, rotation: -18, opacity: 0.22, animationClass: 'animate-float-paw-1', blur: 'blur-[1.5px]' },
  { id: 2, top: '12%', left: '88%', size: 64, rotation: 22, opacity: 0.25, animationClass: 'animate-drift-paw-track', blur: 'blur-[2px]' },
  { id: 3, top: '18%', left: '46%', size: 36, rotation: 8, opacity: 0.16, animationClass: 'animate-float-paw-3', blur: 'blur-[1px]' },
  
  // Upper-middle section (Grooming / How it works)
  { id: 4, top: '26%', left: '4%', size: 56, rotation: 32, opacity: 0.2, animationClass: 'animate-float-paw-2', blur: 'blur-[1.5px]' },
  { id: 5, top: '32%', left: '92%', size: 42, rotation: -25, opacity: 0.18, animationClass: 'animate-float-paw-1', blur: 'blur-[1.5px]' },
  { id: 6, top: '38%', left: '15%', size: 38, rotation: 12, opacity: 0.15, animationClass: 'animate-pulse-paw', blur: 'blur-[1px]' },
  { id: 7, top: '44%', left: '82%', size: 52, rotation: -15, opacity: 0.22, animationClass: 'animate-float-paw-3', blur: 'blur-[2px]' },

  // Middle section (Shop / Products)
  { id: 8, top: '52%', left: '6%', size: 44, rotation: -28, opacity: 0.18, animationClass: 'animate-float-paw-1', blur: 'blur-[1.5px]' },
  { id: 9, top: '58%', left: '94%', size: 60, rotation: 18, opacity: 0.24, animationClass: 'animate-float-paw-2', blur: 'blur-[2px]' },
  { id: 10, top: '64%', left: '48%', size: 34, rotation: -8, opacity: 0.14, animationClass: 'animate-float-paw-3', blur: 'blur-[1px]' },

  // Lower section (Membership / Reviews / FAQ)
  { id: 11, top: '72%', left: '10%', size: 58, rotation: 24, opacity: 0.22, animationClass: 'animate-drift-paw-track', blur: 'blur-[2px]' },
  { id: 12, top: '78%', left: '86%', size: 46, rotation: -35, opacity: 0.2, animationClass: 'animate-float-paw-1', blur: 'blur-[1.5px]' },
  { id: 13, top: '85%', left: '3%', size: 38, rotation: 14, opacity: 0.16, animationClass: 'animate-pulse-paw', blur: 'blur-[1px]' },
  { id: 14, top: '91%', left: '90%', size: 50, rotation: -12, opacity: 0.22, animationClass: 'animate-float-paw-2', blur: 'blur-[1.5px]' },
  { id: 15, top: '96%', left: '50%', size: 40, rotation: 20, opacity: 0.16, animationClass: 'animate-float-paw-3', blur: 'blur-[1px]' },
];

export const PawWatermarkBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {PAW_POSITIONS.map((paw) => (
        <div
          key={paw.id}
          className={`absolute ${paw.animationClass} ${paw.blur} transition-transform`}
          style={{
            top: paw.top,
            left: paw.left,
            transform: `rotate(${paw.rotation}deg)`,
            opacity: paw.opacity,
          }}
        >
          <svg
            width={paw.size}
            height={paw.size}
            viewBox="0 0 100 100"
            fill="#0D6E6E"
            className="text-[#0D6E6E]"
          >
            {/* Outer Left Toe */}
            <ellipse cx="23" cy="38" rx="8.5" ry="11.5" transform="rotate(-24 23 38)" />
            {/* Inner Left Toe */}
            <ellipse cx="40" cy="22" rx="9" ry="13" transform="rotate(-8 40 22)" />
            {/* Inner Right Toe */}
            <ellipse cx="60" cy="22" rx="9" ry="13" transform="rotate(8 60 22)" />
            {/* Outer Right Toe */}
            <ellipse cx="77" cy="38" rx="8.5" ry="11.5" transform="rotate(24 77 38)" />
            
            {/* Soft main bottom palm pad (kidney / rounded triangle shape) */}
            <path
              d="M 28,58 C 22,66 26,82 40,86 C 47,88 53,88 60,86 C 74,82 78,66 72,58 C 66,50 58,54 50,54 C 42,54 34,50 28,58 Z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
