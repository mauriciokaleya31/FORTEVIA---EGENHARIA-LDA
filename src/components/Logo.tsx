import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer';
  showTagline?: boolean;
  size?: 'normal' | 'large' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'light', 
  showTagline = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const isDarkBackground = variant === 'footer' || variant === 'dark';
  
  const textColor = isDarkBackground ? 'text-white' : 'text-[#081B4B]';
  const taglineColor = isDarkBackground ? 'text-amber-400/90' : 'text-[#BB7636]';

  const logoUrl = 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/loggotipo.png';

  return (
    <div className={`flex items-center gap-2 sm:gap-3.5 select-none ${className}`}>
      {!imgError ? (
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Logo Container perfectly scaled for mobile, tablet, and desktop */}
          <div className={`flex items-center justify-center transition-all ${
            isDarkBackground 
              ? 'bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-md border border-slate-200' 
              : 'p-0.5 sm:p-1'
          }`}>
            <img
              src={logoUrl}
              alt="Fortevia Engenharia"
              onError={() => setImgError(true)}
              className="h-12 xs:h-14 sm:h-18 md:h-20 lg:h-24 xl:h-26 w-auto object-contain max-w-[170px] xs:max-w-[220px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[480px] drop-shadow-sm transition-all"
              loading="eager"
            />
          </div>
          {showTagline && (
            <div className={`hidden 2xl:flex flex-col border-l ${isDarkBackground ? 'border-slate-700/50' : 'border-slate-300'} pl-3.5 leading-tight`}>
              <span className={`font-heading font-extrabold text-xs tracking-wider uppercase ${textColor}`}>
                Fortevia Engenharia
              </span>
              <span className={`text-[11px] ${taglineColor} tracking-normal font-semibold`}>
                Engineering & Procurement Solutions
              </span>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Symbol / Mark Fallback */}
          <div className="relative w-11 h-11 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center bg-[#081B4B] rounded-xl sm:rounded-2xl border-2 border-[#BB7636] shadow-md overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#081B4B] via-[#0d2666] to-[#081B4B]" />
            <svg className="w-7 h-7 sm:w-10 sm:h-10 relative z-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8H32V14H15V20H28V26H15V32H8V8Z" fill="#BB7636" />
              <path d="M22 8L32 18V8H22Z" fill="#FFFFFF" fillOpacity="0.9" />
              <circle cx="28" cy="26" r="3" fill="#FFFFFF" />
            </svg>
            <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-[#BB7636] transform rotate-45 translate-x-1.5 translate-y-1.5" />
          </div>

          {/* Brand Text Fallback */}
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className={`font-heading font-black text-xl sm:text-3xl md:text-4xl tracking-tight ${textColor}`}>
                FORTEVIA
              </span>
              <span className="text-[#BB7636] font-heading font-bold text-[9px] sm:text-xs uppercase tracking-widest px-1.5 sm:px-2.5 py-0.5 bg-[#BB7636]/10 rounded-md border border-[#BB7636]/30">
                ANGOLA
              </span>
            </div>
            <span className="font-heading font-bold text-[9px] sm:text-xs md:text-sm tracking-[0.24em] text-[#BB7636] uppercase mt-0.5 sm:mt-1">
              ENGENHARIA
            </span>
          </div>
        </>
      )}
    </div>
  );
};
