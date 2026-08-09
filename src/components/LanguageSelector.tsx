import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

export type SupportedLanguage = 'pt' | 'en' | 'fr' | 'es' | 'zh-CN' | 'hi';

interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  flag: string;
  label: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'pt', name: 'Português', flag: '🇵🇹', label: 'PT' },
  { code: 'en', name: 'English', flag: '🇬🇧', label: 'EN' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', label: 'FR' },
  { code: 'es', name: 'Español', flag: '🇪🇸', label: 'ES' },
  { code: 'zh-CN', name: '中文 (Mandarim)', flag: '🇨🇳', label: 'ZH' },
  { code: 'hi', name: 'हिन्दी (Indiano)', flag: '🇮🇳', label: 'HI' },
];

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export const LanguageSelector: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('pt');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Inject hidden Google Translate container if not present
    if (!document.getElementById('google_translate_element')) {
      const gtContainer = document.createElement('div');
      gtContainer.id = 'google_translate_element';
      gtContainer.style.display = 'none';
      document.body.appendChild(gtContainer);
    }

    // Define global callback for Google Translate initialization
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'pt',
            includedLanguages: 'pt,en,fr,es,zh-CN,hi',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Load Google Translate script
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const changeLanguage = (langCode: SupportedLanguage) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Set cookie or trigger Google Translate combo selection
    if (langCode === 'pt') {
      // Clear google translate cookie/frame if reverting to native Portuguese
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;
      window.location.reload();
      return;
    }

    const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      // Fallback setting googtrans cookie and refreshing
      const cookieValue = `/pt/${langCode}`;
      document.cookie = `googtrans=${cookieValue}; path=/;`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${window.location.hostname}`;
      window.location.reload();
    }
  };

  const selectedLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white text-xs font-heading font-medium border border-slate-700 hover:border-[#BB7636] transition-all shadow-sm"
        title="Traductor / Idioma"
      >
        <Globe className="w-3.5 h-3.5 text-[#BB7636]" />
        <span className="mr-0.5">{selectedLangObj.flag}</span>
        <span>{selectedLangObj.label}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-48 rounded-xl bg-[#081B4B] border border-slate-700 shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1 border-b border-slate-800 text-[10px] font-heading font-bold text-slate-400 uppercase tracking-wider">
            Seleccione o Idioma
          </div>
          {LANGUAGES.map((lang) => {
            const isSelected = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-3 py-2 text-xs font-heading flex items-center justify-between transition-colors ${
                  isSelected ? 'bg-[#BB7636] text-white font-bold' : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
