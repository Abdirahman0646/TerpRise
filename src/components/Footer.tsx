import React from 'react';
import { PageId } from '../types';
import { LOGO_URL } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'ethics') => void;
  onRegisterInterest: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onRegisterInterest,
}) => {
  return (
    <footer className="w-full bg-[#103254] text-white pt-16 pb-12 border-t border-[#73777f]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#c3c6cf]/20">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="TerpRise Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src={LOGO_URL}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-headline-sm text-lg font-bold text-white tracking-tight">
                TerpRise
              </span>
            </div>
            <p className="font-label-md text-xs text-[#7ff1f7] uppercase tracking-wider font-semibold">
              Building Skills. Elevating Interpreters.
            </p>
            <p className="font-body-sm text-sm text-[#7d9bc2] leading-relaxed pr-4">
              TerpRise is an interpreter education initiative dedicated to practical learning,
              professional development, and accessible pathways for medical and healthcare
              interpreters.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-label-lg text-sm text-white uppercase tracking-wider pb-1 font-semibold">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 font-body-sm text-sm text-[#7d9bc2]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-us')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights-blog')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Insights / Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={onRegisterInterest}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Register Interest
                </button>
              </li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-label-lg text-sm text-white uppercase tracking-wider pb-1 font-semibold">
              Focus Areas
            </h3>
            <ul className="flex flex-col gap-2 font-body-sm text-sm text-[#7d9bc2]">
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Medical Interpreter Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Language Proficiency Assessment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Continuing Professional Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights-blog')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ethics &amp; Standards
                </button>
              </li>
            </ul>
          </div>

          {/* Inquiries & Transparency */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-label-lg text-sm text-white uppercase tracking-wider pb-1 font-semibold">
              Inquiries &amp; Transparency
            </h3>
            <div className="p-3.5 bg-[#213341]/80 border border-[#73777f]/30 rounded flex flex-col gap-1.5">
              <span className="font-label-sm text-xs text-[#82f4fa] uppercase tracking-wider font-semibold">
                Institutional Notice
              </span>
              <p className="font-body-sm text-xs text-[#7d9bc2] leading-relaxed">
                Early-stage initiative. Course schedules and program enrollment dates will be
                announced to registered linguists.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <a
                className="font-body-sm text-sm text-white flex items-center gap-2 hover:text-[#82f4fa] transition-colors"
                href="mailto:hello@terprise.org"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                hello@terprise.org
              </a>
              <a
                className="font-body-sm text-sm text-white flex items-center gap-2 hover:text-[#82f4fa] transition-colors"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
                LinkedIn Network
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-body-sm text-xs text-[#7d9bc2]">
              © 2025 TerpRise. All rights reserved.
            </p>
            <p className="font-label-sm text-xs text-[#c3c6cf]/80">
              Independent educational development initiative. Not affiliated with governmental licensing agencies.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-label-md text-xs text-[#7d9bc2]">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenLegal('ethics')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Ethics Commitment
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
