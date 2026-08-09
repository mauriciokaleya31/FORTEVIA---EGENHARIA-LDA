import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', showTagline = false }) => {
  const [imgError, setImgError] = useState(false);
  const textColor = variant === 'light' || variant === 'footer' ? 'text-white' : 'text-[#081B4B]';
  const taglineColor = variant === 'light' || variant === 'footer' ? 'text-amber-400/90' : 'text-[#BB7636]';

  const logoUrl = 'https://visa.onlyvibes.online/wp-content/uploads/2026/08/loggotipo.png';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {!imgError ? (
        <div className="flex items-center gap-2.5">
          {/* High-visibility card container for crisp logo contrast */}
          <div className="bg-white/95 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-md border border-slate-200/80 inline-flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src={logoUrl}
              alt="Fortevia Engenharia Logo"
              onError={() => setImgError(true)}
              className="h-7 sm:h-9 md:h-10 w-auto object-contain max-w-[180px] sm:max-w-[220px]"
            />
          </div>
          {showTagline && (
            <div className="hidden md:flex flex-col border-l border-slate-700/50 pl-3 leading-tight">
              <span className={`font-heading font-extrabold text-xs uppercase tracking-wider ${textColor}`}>
                Fortevia Engenharia
              </span>
              <span className={`text-[10px] ${taglineColor} tracking-normal font-medium`}>
                Engineering & Procurement Solutions
              </span>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Symbol / Mark Fallback */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-[#081B4B] rounded-lg border border-[#BB7636]/40 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#081B4B] via-[#0d2666] to-[#081B4B]" />
            <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8H32V14H15V20H28V26H15V32H8V8Z" fill="#BB7636" />
              <path d="M22 8L32 18V8H22Z" fill="#FFFFFF" fillOpacity="0.9" />
              <circle cx="28" cy="26" r="3" fill="#FFFFFF" />
            </svg>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#BB7636] transform rotate-45 translate-x-1.5 translate-y-1.5" />
          </div>

          {/* Brand Text Fallback */}
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-1.5">
              <span className={`font-heading font-black text-lg sm:text-2xl tracking-tight ${textColor}`}>
                FORTEVIA
              </span>
              <span className="text-[#BB7636] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-widest px-1.5 py-0.5 bg-[#BB7636]/10 rounded border border-[#BB7636]/30">
                ANGOLA
              </span>
            </div>
            <span className="font-heading font-semibold text-[9px] sm:text-xs tracking-[0.25em] text-[#BB7636] uppercase mt-0.5">
              ENGENHARIA
            </span>
          </div>
        </>
      )}
    </div>
  );
};
