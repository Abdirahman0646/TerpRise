import React from 'react';
import { PageId } from '../types';
import { IMAGES } from '../data/mockData';

interface AboutUsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'ethics') => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onNavigate,
  onOpenLegal,
}) => {
  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* SECTION 1: EDITORIAL HEADER & BREADCRUMBS */}
      <section className="w-full bg-white pt-10 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Breadcrumb & Tier Identifier */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="font-label-md text-xs text-[#43474e] hover:text-[#001d38] transition-colors uppercase tracking-wider cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#c3c6cf] font-label-md text-xs">/</span>
            <span className="font-label-md text-xs text-[#00696d] uppercase tracking-wider font-bold">
              About Us
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00696d] ml-1" />
          </div>

          {/* Main Asymmetric Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <span className="font-label-lg text-xs text-[#00696d] uppercase tracking-widest font-semibold">
                Institutional Overview
              </span>
              <h1 className="font-headline-2xl text-3xl lg:text-5xl text-[#001d38] font-bold leading-tight tracking-tight">
                Building a Stronger Future for Interpreters
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <p className="font-body-lg text-base text-[#43474e] leading-relaxed">
                TerpRise was founded on a simple belief: interpreters deserve accessible opportunities
                to strengthen their skills, earn professional recognition, and pursue lifelong career
                growth.
              </p>
              <div className="p-4 bg-[#f1f4f6] rounded flex items-start gap-3 border border-[#c3c6cf]/50">
                <span className="material-symbols-outlined text-[#00696d] text-[22px] shrink-0 mt-0.5">
                  verified_user
                </span>
                <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                  An education-focused initiative bridging the gap between bilingual fluency and
                  professional medical interpreting competency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION CARDS */}
      <section className="w-full bg-[#f7fafc] py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Column */}
            <div className="bg-white p-8 lg:p-10 rounded shadow-xs flex flex-col justify-between gap-8 relative overflow-hidden group border border-[#c3c6cf]/60">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#001d38] group-hover:bg-[#00696d] transition-colors" />
              <div className="flex flex-col gap-4 pl-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-xs text-[#00696d] uppercase tracking-widest font-semibold">
                    Purpose &amp; Directive
                  </span>
                  <span className="font-label-lg text-sm text-[#73777f] font-mono">01</span>
                </div>
                <h2 className="font-headline-lg text-2xl font-bold text-[#001d38] tracking-tight">
                  Our Mission
                </h2>
                <p className="font-body-lg text-base text-[#43474e] leading-relaxed">
                  To make quality interpreter education and professional development more accessible
                  through practical learning, affordability, and an uncompromising commitment to
                  professional excellence.
                </p>
              </div>
              <div className="flex items-center gap-2 pl-3 pt-4 text-[#001d38]">
                <span className="material-symbols-outlined text-[20px] text-[#00696d]">
                  task_alt
                </span>
                <span className="font-label-md text-xs uppercase tracking-wider text-[#181c1e] font-semibold">
                  Skill Verification &amp; Ethical Delivery
                </span>
              </div>
            </div>

            {/* Vision Column */}
            <div className="bg-white p-8 lg:p-10 rounded shadow-xs flex flex-col justify-between gap-8 relative overflow-hidden group border border-[#c3c6cf]/60">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#00696d] group-hover:bg-[#001d38] transition-colors" />
              <div className="flex flex-col gap-4 pl-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-xs text-[#00696d] uppercase tracking-widest font-semibold">
                    Long-Term Impact
                  </span>
                  <span className="font-label-lg text-sm text-[#73777f] font-mono">02</span>
                </div>
                <h2 className="font-headline-lg text-2xl font-bold text-[#001d38] tracking-tight">
                  Our Vision
                </h2>
                <p className="font-body-lg text-base text-[#43474e] leading-relaxed">
                  To contribute to a world where interpreters have continuous access to the learning,
                  resources, and institutional opportunities they need to grow professionally and
                  sustain enduring careers.
                </p>
              </div>
              <div className="flex items-center gap-2 pl-3 pt-4 text-[#001d38]">
                <span className="material-symbols-outlined text-[20px] text-[#00696d]">
                  visibility
                </span>
                <span className="font-label-md text-xs uppercase tracking-wider text-[#181c1e] font-semibold">
                  Democratized Healthcare Communication
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AUTHENTIC NARRATIVE & STUDY SPREAD */}
      <section className="w-full bg-[#f1f4f6] py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column with Overlap Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded overflow-hidden shadow-lg bg-[#ebeef0]">
                <img
                  className="w-full h-[460px] object-cover"
                  alt="A focused female medical interpreter studying at a wooden desk with a laptop, medical terminology flashcards, handwritten anatomy notes in a spiral notebook, a ceramic coffee mug, and shelves filled with reference books in a sunlit academic study room"
                  src={IMAGES.aboutStudy}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('Image_5_319e05a6.png')) {
                      target.src = '/assets/aistudio/Image_5_319e05a6.png';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001d38]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#82f4fa]">
                      school
                    </span>
                    <span className="font-label-md text-xs uppercase tracking-widest text-[#82f4fa] font-semibold">
                      Applied Clinical Rigor
                    </span>
                  </div>
                  <span className="font-label-sm text-xs text-[#b6c9db]">
                    Self-Paced Terminology Mastery
                  </span>
                </div>
              </div>

              {/* Editorial Floating Metric Module */}
              <div className="hidden sm:flex flex-col gap-1 absolute -bottom-6 -right-6 bg-white p-5 rounded shadow-lg max-w-xs border border-[#c3c6cf]">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-xl text-3xl font-bold text-[#001d38]">100%</span>
                  <span className="font-label-sm text-xs text-[#00696d] uppercase font-semibold">
                    Dedication
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#43474e]">
                  Bridging linguistic nuance and anatomical terminology with diagnostic fidelity.
                </p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#00696d]" />
                <span className="font-label-md text-xs text-[#00696d] uppercase tracking-widest font-semibold">
                  Why Interpreting Matters
                </span>
              </div>
              <h3 className="font-headline-xl text-2xl lg:text-3xl font-bold text-[#001d38] tracking-tight">
                Language Access as a Pillar of Clinical Safety
              </h3>
              <p className="font-body-lg text-base text-[#181c1e] leading-relaxed">
                Communication in healthcare settings is a critical determinant of patient health
                outcomes. Professional medical interpreters bridge linguistic divides with nuance,
                empathy, and absolute precision.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 bg-white rounded shadow-xs border border-[#c3c6cf]/60">
                  <span className="material-symbols-outlined text-[#00696d] text-[24px] mt-0.5">
                    medical_services
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-headline-sm text-base font-bold text-[#001d38]">
                      High-Stakes Clinical Accuracy
                    </h4>
                    <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                      A minor linguistic oversight in dosage or consent can carry grave
                      repercussions. We train professionals to execute seamless, accurate conduit and
                      advocate modalities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded shadow-xs border border-[#c3c6cf]/60">
                  <span className="material-symbols-outlined text-[#00696d] text-[24px] mt-0.5">
                    diversity_3
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-headline-sm text-base font-bold text-[#001d38]">
                      Cultural Competence &amp; Patient Trust
                    </h4>
                    <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                      True translation honors the patient&apos;s lived context. We teach healthcare
                      interpreters how to navigate cultural nuance without compromising clinical
                      autonomy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE VALUES (EDITORIAL BENTO / DOSSIER FORMAT) */}
      <section className="w-full bg-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-label-md text-xs text-[#00696d] uppercase tracking-widest font-semibold">
                Guiding Standards
              </span>
              <h2 className="font-headline-xl text-3xl font-bold text-[#001d38] tracking-tight">
                Our Core Values
              </h2>
            </div>
            <p className="font-body-md text-sm text-[#43474e] max-w-md">
              Every program, rubric, and mentorship interaction at TerpRise is anchored in these five
              fundamental tenets.
            </p>
          </div>

          {/* Values Grid: Asymmetrical 5-Item Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="bg-[#f1f4f6] p-8 rounded shadow-xs flex flex-col justify-between gap-6 transition-transform hover:-translate-y-1 border border-[#c3c6cf]/50">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded bg-[#7ff1f7]/30 flex items-center justify-center text-[#00696d]">
                  <span className="material-symbols-outlined text-[24px]">universal_currency_alt</span>
                </div>
                <h3 className="font-headline-md text-lg font-bold text-[#001d38]">
                  1. Accessibility
                </h3>
                <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                  Making high-standard training financially and logistically feasible for interpreters
                  at all stages of their vocational journey.
                </p>
              </div>
              <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold">
                Democratized Access
              </span>
            </div>

            {/* Value 2 */}
            <div className="bg-[#f1f4f6] p-8 rounded shadow-xs flex flex-col justify-between gap-6 transition-transform hover:-translate-y-1 border border-[#c3c6cf]/50">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded bg-[#7ff1f7]/30 flex items-center justify-center text-[#00696d]">
                  <span className="material-symbols-outlined text-[24px]">gavel</span>
                </div>
                <h3 className="font-headline-md text-lg font-bold text-[#001d38]">
                  2. Professional Integrity
                </h3>
                <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                  Upholding strict ethical standards, absolute transparency in educational outcomes,
                  and honesty regarding certification pathways.
                </p>
              </div>
              <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold">
                Ethical Transparency
              </span>
            </div>

            {/* Value 3 */}
            <div className="bg-[#f1f4f6] p-8 rounded shadow-xs flex flex-col justify-between gap-6 transition-transform hover:-translate-y-1 border border-[#c3c6cf]/50">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded bg-[#7ff1f7]/30 flex items-center justify-center text-[#00696d]">
                  <span className="material-symbols-outlined text-[24px]">record_voice_over</span>
                </div>
                <h3 className="font-headline-md text-lg font-bold text-[#001d38]">
                  3. Practical Learning
                </h3>
                <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                  Prioritizing experiential drills, real-world scenario handling, consecutive
                  rendering, and active voice training over purely theoretical lectures.
                </p>
              </div>
              <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold">
                Applied Repetition
              </span>
            </div>

            {/* Value 4 */}
            <div className="bg-[#f1f4f6] p-8 rounded shadow-xs flex flex-col justify-between gap-6 transition-transform hover:-translate-y-1 lg:col-span-1 md:col-span-2 border border-[#c3c6cf]/50">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded bg-[#7ff1f7]/30 flex items-center justify-center text-[#00696d]">
                  <span className="material-symbols-outlined text-[24px]">trending_up</span>
                </div>
                <h3 className="font-headline-md text-lg font-bold text-[#001d38]">
                  4. Continuous Improvement
                </h3>
                <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                  Supporting interpreters throughout their entire career arc with advanced
                  terminology clinics, specialized masterclasses, and structured peer review.
                </p>
              </div>
              <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold">
                Lifelong Mastery
              </span>
            </div>

            {/* Value 5 - Large Double Width Card */}
            <div className="bg-[#001d38] text-white p-8 rounded shadow-xs flex flex-col justify-between gap-6 transition-transform hover:-translate-y-1 lg:col-span-2 border border-[#103254]">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded bg-[#103254] flex items-center justify-center text-[#82f4fa]">
                  <span className="material-symbols-outlined text-[24px]">translate</span>
                </div>
                <h3 className="font-headline-md text-lg font-bold text-white">
                  5. Respect for Language &amp; Culture
                </h3>
                <p className="font-body-md text-sm text-[#7d9bc2] leading-relaxed">
                  Celebrating linguistic diversity, cultural nuance, and the human dignity at the
                  center of every interpreted medical encounter. We treat each patient dialogue as an
                  exchange requiring utmost reverence.
                </p>
              </div>
              <span className="font-label-sm text-xs text-[#82f4fa] uppercase tracking-wider font-semibold">
                Dignity First
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOUNDER & ORIGINS PHILOSOPHY */}
      <section className="w-full bg-[#f7fafc] py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Section Tagline */}
          <div className="flex flex-col gap-2">
            <span className="font-label-md text-xs text-[#00696d] uppercase tracking-widest font-semibold">
              Pedagogical Heritage
            </span>
            <h2 className="font-headline-xl text-3xl font-bold text-[#001d38] tracking-tight">
              Our Story &amp; Educational Philosophy
            </h2>
          </div>

          {/* Editorial Dossier Split */}
          <div className="bg-white p-8 lg:p-12 rounded shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-[#c3c6cf]">
            {/* Silhouette & Credential Badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-8 bg-[#f1f4f6] rounded border border-[#c3c6cf]/50">
              <div className="w-28 h-28 rounded-full bg-[#e0e3e5] flex items-center justify-center mb-6 shadow-inner text-[#73777f]">
                <span className="material-symbols-outlined text-[56px]">person</span>
              </div>
              <h4 className="font-headline-sm text-base font-bold text-[#001d38]">
                Academic Leadership
              </h4>
              <span className="font-label-md text-xs text-[#00696d] uppercase tracking-wider mt-1 font-semibold">
                Founder &amp; Academic Director
              </span>
              <p className="font-body-sm text-xs text-[#43474e] mt-3 text-center leading-relaxed">
                Advisory Board &amp; Faculty Roster to be inaugurated ahead of the Fall 2025 Initial
                Cohort.
              </p>
              <div className="mt-6 pt-4 w-full flex items-center justify-center gap-2 border-t border-[#c3c6cf]/50">
                <span className="w-2 h-2 rounded-full bg-[#00696d]" />
                <span className="font-label-sm text-xs text-[#43474e] uppercase tracking-wider font-semibold">
                  Accreditation Advisory Seat
                </span>
              </div>
            </div>

            {/* Narrative Manifesto */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <blockquote className="font-body-lg text-lg text-[#001d38] font-semibold italic leading-relaxed border-l-2 border-[#00696d] pl-4">
                &ldquo;TerpRise was conceived by language access advocates and experienced
                interpreter educators who witnessed firsthand the steep financial and logistical
                hurdles aspiring interpreters face.&rdquo;
              </blockquote>
              <p className="font-body-md text-sm lg:text-base text-[#43474e] leading-relaxed">
                Rather than high-cost credential gatekeeping and opaque administrative hurdles,
                TerpRise focuses squarely on deliberate practice, ethical clarity, and accessible skill
                mastery. We design learning paths that respect the working schedules of bilingual
                adults while preserving the rigorous analytical standards required by healthcare
                facilities.
              </p>
              <div className="p-4 bg-[#f1f4f6] rounded flex items-center justify-between flex-wrap gap-4 border border-[#c3c6cf]/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00696d] text-[24px]">
                    campaign
                  </span>
                  <span className="font-body-sm text-xs text-[#181c1e]">
                    Full educator and advisory board biographies will be announced prior to the launch
                    of our initial pilot cohort.
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="font-label-md text-xs text-[#00696d] hover:text-[#004f52] transition-colors uppercase tracking-wider inline-flex items-center gap-1 font-semibold cursor-pointer"
                >
                  Inquire directly
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRANSPARENCY & INSTITUTIONAL COMMITMENT BANNER */}
      <section className="w-full bg-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Ethical Commitment Box */}
          <div className="p-8 lg:p-10 bg-[#f1f4f6] rounded shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-[#c3c6cf]">
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-12 h-12 rounded bg-[#e0e3e5] flex items-center justify-center text-[#001d38] shrink-0">
                <span className="material-symbols-outlined text-[28px]">policy</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                    Institutional Notice &amp; Ethical Disclosure
                  </h3>
                  <span className="px-2 py-0.5 bg-[#e0e3e5] text-[#43474e] rounded font-label-sm text-xs uppercase tracking-wider font-semibold">
                    Independent
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                  TerpRise is an independent education initiative. We hold ourselves to the highest
                  standards of institutional honesty. We do not claim unverified accreditations or
                  unearned governmental licensing approvals; our primary directive is practical,
                  high-caliber education that prepares interpreters for real-world certification and
                  vocational excellence.
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenLegal('ethics')}
              className="shrink-0 px-5 py-2.5 bg-white text-[#001d38] hover:bg-[#ebeef0] transition-colors font-label-md text-xs uppercase tracking-wider font-semibold rounded shadow-xs border border-[#c3c6cf] cursor-pointer"
            >
              View Ethics Code
            </button>
          </div>

          {/* Action Conversion Banner */}
          <div className="p-10 lg:p-12 bg-[#001d38] text-white rounded shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="flex flex-col gap-3 max-w-2xl z-10">
              <span className="font-label-md text-xs text-[#82f4fa] uppercase tracking-widest font-semibold">
                Take The Next Step
              </span>
              <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-white">
                Ready to Explore Our Educational Pathways?
              </h2>
              <p className="font-body-md text-sm text-[#7d9bc2]">
                Review our foundational curriculum offerings, register early interest for the Fall
                2025 cohort, or speak directly with our team.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 z-10 shrink-0">
              <button
                onClick={() => onNavigate('programs')}
                className="bg-[#00696d] text-white px-6 py-3 rounded font-label-lg text-sm font-semibold hover:bg-[#004f52] transition-colors shadow-xs inline-flex items-center gap-2 cursor-pointer"
              >
                Explore Programs
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-transparent text-white px-6 py-3 rounded font-label-lg text-sm font-semibold hover:bg-[#103254] transition-colors inline-flex items-center gap-2 border border-white/30 cursor-pointer"
              >
                Contact Admissions
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
