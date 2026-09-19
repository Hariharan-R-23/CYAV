
import React from 'react';
import { URL_MEMBER_FORM } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-xl py-3 border-b border-red-900/30 shadow-2xl shadow-black/80' : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4 sm:py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between relative">
        
        {/* Left: Official Chennai Youth Assembly Logo (Large Size Retained) */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <img 
            src="/images/cya-logo.png" 
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('/images/cyalogo.png')) {
                target.src = '/images/cyalogo.png';
              }
            }}
            alt="Chennai Youth Assembly" 
            className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-xl transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Right: Navigation Links & "Become a member" Button */}
        <div className="flex items-center gap-4 sm:gap-7">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              About
            </a>
            <a 
              href="#assembly" 
              onClick={(e) => handleNavClick(e, '#assembly')}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Assembly
            </a>
            <a 
              href="#impact" 
              onClick={(e) => handleNavClick(e, '#impact')}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Impact
            </a>
            <a 
              href="#leadership" 
              onClick={(e) => handleNavClick(e, '#leadership')}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Leadership
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => handleNavClick(e, '#benefits')}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Benefits
            </a>
          </nav>

          <a 
            href="#register"
            onClick={(e) => handleNavClick(e, '#register')}
            className="bg-red-600 hover:bg-white hover:text-black text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-sm font-black text-[10px] sm:text-[11px] uppercase tracking-widest transition-all shadow-lg shadow-red-600/25 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Become a member
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
