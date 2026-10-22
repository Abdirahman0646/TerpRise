/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { LegalModal } from './components/LegalModal';
import { UserProfileModal } from './components/UserProfileModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'ethics' | null>(null);

  // User session state (e.g., when they register for pilot or submit an inquiry)
  const [registeredUser, setRegisteredUser] = useState<{
    name?: string;
    email?: string;
    languagePair?: string;
    program?: string;
  } | null>(null);

  const handleNavigate = (page: PageId) => {
    if (page === 'register-interest') {
      setCurrentPage('programs');
      setTimeout(() => {
        const el = document.getElementById('enroll-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegisterSuccess = (userData: {
    name: string;
    email: string;
    languagePair: string;
    program: string;
  }) => {
    setRegisteredUser(userData);
  };

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchModalOpen(false);
        setProfileModalOpen(false);
        setLegalModalType(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col selection:bg-secondary-container selection:text-primary">
      {/* Institutional Top Fixed Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenProfile={() => setProfileModalOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="grow pt-20 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onRegisterInterest={() => handleNavigate('programs')}
          />
        )}

        {currentPage === 'about-us' && (
          <AboutUsPage
            onNavigate={handleNavigate}
            onOpenLegal={(type) => setLegalModalType(type)}
          />
        )}

        {currentPage === 'programs' && (
          <ProgramsPage
            onNavigate={handleNavigate}
            onRegisterSuccess={handleRegisterSuccess}
          />
        )}

        {currentPage === 'insights-blog' && (
          <InsightsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenLegal={(type) => setLegalModalType(type)}
            onRegisterSuccess={handleRegisterSuccess}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
        onRegisterInterest={() => handleNavigate('programs')}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Legal & Standards Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* User / Student Profile Modal */}
      <UserProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        onNavigate={handleNavigate}
        registeredUser={registeredUser}
      />
    </div>
  );
}
