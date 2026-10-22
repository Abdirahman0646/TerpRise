import React, { useState } from 'react';
import { PageId } from '../types';
import { LOGO_URL } from '../data/mockData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'programs', label: 'Programs' },
    { id: 'insights-blog', label: 'Insights / Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-[#c3c6cf]/60 shadow-xs">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00696d] rounded"
          >
            <img
              alt="TerpRise Logo"
              className="h-8 w-auto object-contain"
              src={LOGO_URL}
              onError={(e) => {
                // Fallback icon if remote image is blocked
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="font-headline-sm text-[1.125rem] font-bold text-[#001d38] tracking-tight">
              TerpRise
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 whitespace-nowrap text-sm cursor-pointer ${
                  isActive
                    ? 'text-[#001d38] font-bold border-b-2 border-[#00696d]'
                    : 'font-label-lg text-[#43474e] hover:text-[#001d38]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Cohort Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-[#f1f4f6] border border-[#c3c6cf] rounded">
            <span className="w-2 h-2 rounded-full bg-[#00696d]" />
            <span className="font-label-md text-xs text-[#001d38] uppercase tracking-wider font-semibold">
              Next Cohort: Fall 2025
            </span>
          </div>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search catalog and articles"
            className="p-2 text-[#43474e] hover:text-[#001d38] transition-colors rounded hover:bg-[#f1f4f6] cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center justify-center bg-[#00696d] text-white px-5 py-2.5 rounded font-label-lg text-sm font-semibold hover:bg-[#004f52] transition-colors cursor-pointer shadow-xs"
          >
            Get in Touch
          </button>

          {/* User Profile Avatar */}
          <button
            onClick={onOpenProfile}
            aria-label="Candidate Profile"
            className="w-8 h-8 rounded-full bg-[#001d38] flex items-center justify-center shrink-0 text-white hover:bg-[#103254] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation"
            className="lg:hidden p-2 text-[#001d38] hover:bg-[#f1f4f6] rounded cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#c3c6cf] px-6 py-6 shadow-xl flex flex-col gap-4 animate-in fade-in duration-150">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f1f4f6] border border-[#c3c6cf] rounded w-fit mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00696d]" />
            <span className="font-label-md text-xs text-[#001d38] uppercase tracking-wider font-semibold">
              Next Cohort: Fall 2025
            </span>
          </div>
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 rounded transition-colors text-base ${
                  isActive
                    ? 'bg-[#f1f4f6] text-[#001d38] font-bold border-l-4 border-[#00696d]'
                    : 'text-[#43474e] hover:text-[#001d38] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 flex flex-col gap-2 border-t border-[#ebeef0]">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-[#00696d] text-white py-3 rounded font-label-lg text-sm font-semibold text-center hover:bg-[#004f52]"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
