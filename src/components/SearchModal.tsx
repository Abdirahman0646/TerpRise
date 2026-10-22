import React, { useState } from 'react';
import { PageId } from '../types';
import { ARTICLES, FAQS } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filteredArticles = trimmed
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmed) ||
          a.category.toLowerCase().includes(trimmed) ||
          a.summary.toLowerCase().includes(trimmed)
      )
    : ARTICLES.slice(0, 3);

  const filteredFaqs = trimmed
    ? FAQS.filter(
        (f) =>
          f.question.toLowerCase().includes(trimmed) ||
          f.answer.toLowerCase().includes(trimmed)
      )
    : [];

  const programs = [
    {
      title: 'Medical Interpreter Training (Pilot Fall 2025)',
      description: 'Foundations of Healthcare Interpreting, Anatomy, Modes of Interpreting, Ethics.',
      page: 'programs' as PageId,
    },
    {
      title: 'Language Proficiency Assessment',
      description: 'Oral simulation scoring, bilingual lexical range, register and tone calibration.',
      page: 'programs' as PageId,
    },
    {
      title: 'Continuing Professional Development',
      description: 'Mental health, oncology, trauma-informed interpreting masterclasses.',
      page: 'programs' as PageId,
    },
  ].filter(
    (p) =>
      !trimmed ||
      p.title.toLowerCase().includes(trimmed) ||
      p.description.toLowerCase().includes(trimmed)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-[#c3c6cf] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Header Search Input */}
        <div className="p-4 border-b border-[#ebeef0] flex items-center gap-3 bg-[#f7fafc]">
          <span className="material-symbols-outlined text-[#73777f] text-[22px]">search</span>
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, articles, ethics standards, FAQs..."
            className="w-full bg-transparent border-none text-[#001d38] font-body-md text-base focus:outline-none placeholder:text-[#73777f]"
          />
          <button
            onClick={onClose}
            className="text-[#73777f] hover:text-[#001d38] p-1 rounded cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Results Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Programs */}
          {programs.length > 0 && (
            <div>
              <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold block mb-2">
                Educational Programs &amp; Pathways
              </span>
              <div className="space-y-2">
                {programs.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onNavigate(p.page);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded hover:bg-[#f1f4f6] transition-colors border border-transparent hover:border-[#c3c6cf] flex flex-col cursor-pointer"
                  >
                    <span className="font-headline-sm text-sm font-semibold text-[#001d38]">
                      {p.title}
                    </span>
                    <span className="font-body-sm text-xs text-[#43474e] mt-0.5">
                      {p.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {filteredArticles.length > 0 && (
            <div>
              <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold block mb-2">
                Insights &amp; Field Guides
              </span>
              <div className="space-y-2">
                {filteredArticles.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      onNavigate('insights-blog');
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded hover:bg-[#f1f4f6] transition-colors border border-transparent hover:border-[#c3c6cf] flex flex-col cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-sm font-semibold text-[#001d38]">
                        {a.title}
                      </span>
                      <span className="text-xs text-[#73777f] shrink-0 ml-2">{a.category}</span>
                    </div>
                    <span className="font-body-sm text-xs text-[#43474e] line-clamp-2 mt-1">
                      {a.summary}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {filteredFaqs.length > 0 && (
            <div>
              <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold block mb-2">
                Frequently Asked Questions
              </span>
              <div className="space-y-2">
                {filteredFaqs.map((f) => (
                  <div
                    key={f.id}
                    onClick={() => {
                      onNavigate('programs');
                      onClose();
                    }}
                    className="p-3 rounded bg-[#f1f4f6] border border-[#c3c6cf] cursor-pointer hover:border-[#00696d]"
                  >
                    <span className="font-headline-sm text-sm font-semibold text-[#001d38] block">
                      {f.question}
                    </span>
                    <p className="font-body-sm text-xs text-[#43474e] mt-1 line-clamp-2">
                      {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {trimmed && programs.length === 0 && filteredArticles.length === 0 && filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-[#73777f]">
              <span className="material-symbols-outlined text-[36px] block mb-2 text-[#c3c6cf]">
                search_off
              </span>
              <p className="text-sm">No matches found for &ldquo;{query}&rdquo;.</p>
              <p className="text-xs mt-1">
                Try searching for &quot;ethics&quot;, &quot;anatomy&quot;, &quot;accreditation&quot;, or &quot;proficiency&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#ebeef0] border-t border-[#c3c6cf] flex items-center justify-between text-xs text-[#43474e]">
          <span>Tip: Press ESC or click Close to dismiss.</span>
          <button
            onClick={() => {
              onNavigate('insights-blog');
              onClose();
            }}
            className="text-[#00696d] font-semibold hover:underline"
          >
            Explore all articles &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
