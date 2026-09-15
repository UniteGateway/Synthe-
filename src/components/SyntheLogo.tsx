import React from 'react';

interface SyntheLogoProps {
  variant?: 'full' | 'compact' | 'icon' | 'box-emblem' | 'header';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  goldAccent?: boolean;
}

export const SyntheLogo: React.FC<SyntheLogoProps> = ({
  variant = 'compact',
  size = 'md',
  className = '',
  goldAccent = true
}) => {
  const iconSizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20'
  };

  const primaryColor = goldAccent ? '#c99a4c' : 'currentColor';
  const secondaryColor = goldAccent ? '#e8bd78' : '#f7f2ea';

  // The botanical 'S' with delicate organic leaves matching the reference packaging
  const BotanicalIcon = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizeMap[size]} transition-transform duration-300 group-hover:scale-105`}
      aria-label="Synthé Botanical Emblem"
    >
      {/* Background soft glow when rendered large */}
      <defs>
        <linearGradient id="syntheGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8bd78" />
          <stop offset="50%" stopColor="#c99a4c" />
          <stop offset="100%" stopColor="#9a6e29" />
        </linearGradient>
      </defs>

      {/* Stylized Botanical 'S' Spine */}
      <path
        d="M 68 28 C 66 18, 52 14, 42 16 C 30 18, 25 28, 27 38 C 29 48, 42 52, 56 57 C 72 63, 76 74, 73 83 C 69 93, 53 97, 38 93 C 28 89, 23 80, 24 74"
        stroke="url(#syntheGoldGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Upper Organic Leaf (branching to top right) */}
      <path
        d="M 58 26 C 68 20, 80 20, 85 14 C 84 25, 76 32, 63 33 Z"
        fill="url(#syntheGoldGrad)"
        opacity="0.95"
      />
      {/* Central leaf vein */}
      <path
        d="M 60 26 C 70 21, 78 18, 83 15"
        stroke="#1a110a"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Mid-Lower Botanical Sprout / Leaf (branching outward left) */}
      <path
        d="M 40 54 C 28 54, 18 50, 14 43 C 20 45, 30 48, 38 48 Z"
        fill="url(#syntheGoldGrad)"
        opacity="0.9"
      />

      {/* Lower Leaf Accent (tucked into bottom curve) */}
      <path
        d="M 44 72 C 37 77, 30 81, 22 81 C 28 75, 36 71, 44 72 Z"
        fill="url(#syntheGoldGrad)"
        opacity="0.85"
      />

      {/* Delicate botanical node / bud dots */}
      <circle cx="85" cy="14" r="2" fill="#f5dcab" />
      <circle cx="14" cy="43" r="1.5" fill="#f5dcab" />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{BotanicalIcon}</div>;
  }

  if (variant === 'header') {
    return (
      <div className={`flex flex-col text-left group ${className}`}>
        <div className="flex items-center gap-2">
          {BotanicalIcon}
          <div>
            <div className="text-[10px] tracking-[0.3em] font-medium text-[#c99a4c] uppercase">
              M O N T E V I A
            </div>
            <div className="text-[8px] tracking-[0.25em] text-[#a69284] uppercase -mt-0.5">
              N U T R I &nbsp; F O O D S
            </div>
            <div className="font-serif text-lg sm:text-xl font-bold tracking-[0.08em] text-[#f7f2ea] flex items-center gap-2 leading-none mt-1">
              <span>Synthé</span>
              <span className="text-[9px] uppercase tracking-widest text-[#c99a4c] font-sans font-semibold px-1.5 py-0.5 rounded bg-[#c99a4c]/10 border border-[#c99a4c]/30">
                Sugar Free
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'box-emblem') {
    return (
      <div className={`flex flex-col items-center justify-center text-center p-4 border border-[#c99a4c]/30 rounded-xl bg-[#22150e]/80 shadow-xl ${className}`}>
        <div className="w-14 h-14 flex items-center justify-center mb-1">
          {BotanicalIcon}
        </div>
        <div className="font-serif text-2xl tracking-[0.08em] text-[#f7f2ea] font-medium">
          Synthé
        </div>
        <div className="text-[9px] font-sans tracking-[0.25em] text-[#c99a4c] uppercase font-semibold mt-1">
          INDULGE INTELLIGENTLY.
        </div>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        <div className="mb-2">
          {BotanicalIcon}
        </div>
        <span className="font-serif text-2xl sm:text-3xl tracking-[0.1em] text-[#f7f2ea] font-semibold">
          Synthé
        </span>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.28em] text-[#c99a4c] uppercase font-medium mt-1">
          INDULGE INTELLIGENTLY.
        </span>
      </div>
    );
  }

  // default 'compact'
  return (
    <div className={`flex items-center gap-3 text-left group ${className}`}>
      <div className="w-10 h-10 rounded-lg bg-[#24160f] border border-[#c99a4c]/40 flex items-center justify-center p-1 shadow-md group-hover:border-[#e8bd78] transition-colors">
        {BotanicalIcon}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.05em] text-[#f7f2ea]">
            Synthé
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#c99a4c] font-sans font-semibold px-1.5 py-0.5 rounded bg-[#c99a4c]/10 border border-[#c99a4c]/30">
            Organic
          </span>
        </div>
        <div className="text-[9px] tracking-[0.2em] text-[#a69284] uppercase font-medium">
          MONTEVIA NUTRI FOODS
        </div>
      </div>
    </div>
  );
};
