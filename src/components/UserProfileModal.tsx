import React from 'react';
import { PageId } from '../types';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  registeredUser: {
    name?: string;
    email?: string;
    languagePair?: string;
    program?: string;
  } | null;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  registeredUser,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full border border-[#c3c6cf] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#001d38] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#103254] border border-[#7d9bc2] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[26px]">person</span>
            </div>
            <div>
              <h2 className="font-headline-sm text-base font-bold text-white">
                {registeredUser?.name || 'Candidate Portal'}
              </h2>
              <span className="font-label-sm text-xs text-[#82f4fa] uppercase tracking-wider block">
                {registeredUser ? 'Registered Prospective Student' : 'Guest Linguist Session'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-sm text-[#43474e]">
          {registeredUser ? (
            <div className="space-y-3">
              <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf] space-y-1">
                <span className="font-label-sm text-xs text-[#73777f] uppercase tracking-wider block">
                  Registered Email
                </span>
                <span className="font-semibold text-[#001d38]">{registeredUser.email}</span>
              </div>
              <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf] space-y-1">
                <span className="font-label-sm text-xs text-[#73777f] uppercase tracking-wider block">
                  Language Pair
                </span>
                <span className="font-semibold text-[#001d38]">{registeredUser.languagePair || 'Spanish <> English'}</span>
              </div>
              <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf] space-y-1">
                <span className="font-label-sm text-xs text-[#73777f] uppercase tracking-wider block">
                  Target Pathway
                </span>
                <span className="font-semibold text-[#00696d]">{registeredUser.program || 'Medical Interpreter Training (Fall 2025)'}</span>
              </div>
              <div className="p-3 bg-[#7ff1f7]/20 border border-[#00696d]/30 rounded flex items-center gap-2 text-xs text-[#006e72]">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Priority notification enabled for Fall 2025 pilot releases.</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-center py-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#f1f4f6] flex items-center justify-center text-[#00696d]">
                <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-base font-bold text-[#001d38]">
                  Join the Fall 2025 Pilot Registry
                </h3>
                <p className="font-body-sm text-xs text-[#43474e] mt-1.5 leading-relaxed">
                  Register your interest to receive early notification regarding pilot cohort dates,
                  curriculum syllabus drafts, and subsidized tuition tiers.
                </p>
              </div>
              <button
                onClick={() => {
                  onNavigate('programs');
                  onClose();
                }}
                className="w-full bg-[#00696d] text-white py-2.5 rounded font-label-lg text-sm font-semibold hover:bg-[#004f52] transition-colors cursor-pointer"
              >
                Register Interest Now
              </button>
            </div>
          )}

          {/* Quick links */}
          <div className="pt-3 border-t border-[#ebeef0] space-y-2">
            <span className="font-label-sm text-xs text-[#73777f] uppercase tracking-wider block">
              Quick Resources
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => {
                  onNavigate('programs');
                  onClose();
                }}
                className="p-2 text-left bg-[#f7fafc] hover:bg-[#ebeef0] rounded border border-[#c3c6cf] transition-colors text-[#001d38] font-medium"
              >
                Course Syllabus &rarr;
              </button>
              <button
                onClick={() => {
                  onNavigate('insights-blog');
                  onClose();
                }}
                className="p-2 text-left bg-[#f7fafc] hover:bg-[#ebeef0] rounded border border-[#c3c6cf] transition-colors text-[#001d38] font-medium"
              >
                Ethics Guides &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f1f4f6] border-t border-[#c3c6cf] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#001d38] text-white text-xs font-semibold rounded hover:bg-[#103254] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
