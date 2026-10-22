import React, { useState } from 'react';
import { PageId } from '../types';
import { IMAGES, PROGRAM_SPECS, FAQS } from '../data/mockData';

interface ProgramsPageProps {
  onNavigate: (page: PageId) => void;
  onRegisterSuccess: (userData: {
    name: string;
    email: string;
    languagePair: string;
    program: string;
  }) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onNavigate,
  onRegisterSuccess,
}) => {
  // Accordion state
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [languagePair, setLanguagePair] = useState('');
  const [programChoice, setProgramChoice] = useState('medical-core');
  const [experience, setExperience] = useState('beginner');
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onRegisterSuccess({
      name: `${firstName} ${lastName}`.trim(),
      email,
      languagePair,
      program:
        programChoice === 'medical-core'
          ? 'Medical Interpreter Training (Pilot Fall 2025)'
          : programChoice === 'proficiency'
          ? 'Language Proficiency Assessment'
          : programChoice === 'cpd'
          ? 'Continuing Professional Development'
          : 'General Educational Curriculum',
    });
  };

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* Top Editorial Header & Framework Narrative */}
      <section className="w-full bg-[#f1f4f6] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="font-label-md text-xs text-[#43474e] hover:text-[#001d38] transition-colors flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              Home
            </button>
            <span className="font-label-md text-xs text-[#73777f]">/</span>
            <span className="font-label-md text-xs text-[#001d38] font-bold uppercase tracking-wider">
              Programs
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ebeef0] border border-[#c3c6cf] rounded w-fit">
                <span className="w-2 h-2 rounded-full bg-[#00696d]" />
                <span className="font-label-sm text-xs text-[#001d38] uppercase tracking-wider font-semibold">
                  Curricular Framework 2025–2026
                </span>
              </div>
              <h1 className="font-headline-2xl text-3xl lg:text-5xl text-[#001d38] font-bold tracking-tight">
                Programs &amp; Educational Pathways
              </h1>
              <p className="font-body-lg text-base lg:text-lg text-[#43474e] max-w-3xl leading-relaxed">
                Structured, accessible learning pathways designed to build foundational competency,
                sharpen specialized clinical skills, and support your professional interpreting
                journey through disciplined academic scaffolding.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 p-5 bg-white rounded shadow-xs border border-[#c3c6cf]">
              <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold">
                Methodology Pillar
              </span>
              <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                Every pathway fuses active clinical drills, rigorous ethical case studies,
                bidirectional medical terminology benchmarks, and individual mentor assessment.
              </p>
              <div className="pt-2 flex items-center gap-4 text-[#001d38]">
                <div className="flex items-center gap-1.5 font-label-md text-xs font-semibold">
                  <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                    verified
                  </span>
                  Ethics-First
                </div>
                <div className="flex items-center gap-1.5 font-label-md text-xs font-semibold">
                  <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                    groups
                  </span>
                  Mentor-Led
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Matrix */}
      <section className="w-full py-16 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          {/* Program 1: Medical Interpreter Training (Flagship) */}
          <article className="bg-white rounded shadow-xs border border-[#c3c6cf] overflow-hidden flex flex-col">
            <div className="p-8 lg:p-10 border-b border-[#c3c6cf] bg-white">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 bg-[#7ff1f7]/30 text-[#006e72] font-label-md text-xs rounded border border-[#00696d]/20 uppercase tracking-wide font-semibold">
                    Core Program • Level I
                  </span>
                  <span className="px-3 py-1 bg-[#e5e9eb] text-[#001d38] font-label-sm text-xs rounded uppercase tracking-wider font-semibold">
                    Curriculum In Active Development — Pilot Cohort Fall 2025
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[#43474e] font-label-md text-xs font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-[#00696d]">
                      devices
                    </span>
                    Hybrid Online
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-[#00696d]">
                      schedule
                    </span>
                    60 Planned Hours
                  </span>
                </div>
              </div>
              <h2 className="font-headline-xl text-2xl lg:text-3xl font-bold text-[#001d38] mb-3">
                Medical Interpreter Training
              </h2>
              <p className="font-body-md text-sm lg:text-base text-[#43474e] max-w-4xl leading-relaxed">
                Build foundational knowledge in professional interpreting ethics, complex anatomy,
                clinical communication registers, and real-time patient-provider mediation within
                healthcare systems.
              </p>
            </div>

            {/* Visual Anchor + Modular Syllabus Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-[#c3c6cf]">
              {/* Syllabus Modules (8 Cols) */}
              <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-lg text-sm text-[#001d38] uppercase tracking-wider font-semibold">
                    Modular Syllabus Structure
                  </span>
                  <span className="font-label-sm text-xs text-[#73777f]">
                    4 Comprehensive Modules
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  {/* Module 1 */}
                  <div className="p-4 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-[#103254] text-white font-headline-sm text-base font-bold flex items-center justify-center shrink-0">
                      01
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline-sm text-base font-bold text-[#001d38]">
                        Foundations of Healthcare Interpreting
                      </h3>
                      <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                        Interpreter roles, codes of ethics, standards of clinical practice, HIPAA
                        statutory privacy, medical law compliance, and systemic institutional
                        barriers.
                      </p>
                    </div>
                  </div>

                  {/* Module 2 */}
                  <div className="p-4 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-[#103254] text-white font-headline-sm text-base font-bold flex items-center justify-center shrink-0">
                      02
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline-sm text-base font-bold text-[#001d38]">
                        Human Anatomy &amp; Medical Terminology
                      </h3>
                      <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                        Systematic immersion across cardiovascular, respiratory, gastrointestinal,
                        endocrine, and neurological pathologies with bidirectional terminology
                        drills.
                      </p>
                    </div>
                  </div>

                  {/* Module 3 */}
                  <div className="p-4 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-[#103254] text-white font-headline-sm text-base font-bold flex items-center justify-center shrink-0">
                      03
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline-sm text-base font-bold text-[#001d38]">
                        Modes of Interpreting &amp; Cognitive Skills
                      </h3>
                      <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                        Structured protocols for consecutive interpreting, split-attention note-taking
                        taxonomies, rapid recall memory drills, and precise sight translation
                        techniques.
                      </p>
                    </div>
                  </div>

                  {/* Module 4 */}
                  <div className="p-4 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-[#103254] text-white font-headline-sm text-base font-bold flex items-center justify-center shrink-0">
                      04
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline-sm text-base font-bold text-[#001d38]">
                        Cultural Mediation &amp; Ethical Dilemmas
                      </h3>
                      <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                        Calibrating intervention thresholds, navigating clinician-patient power
                        differentials, handling unexpected conflicts of interest, and setting
                        boundaries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cohort & Audience Column (4 Cols) */}
              <div className="lg:col-span-4 bg-[#ebeef0] p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#c3c6cf]">
                <div className="flex flex-col gap-6">
                  <div className="relative w-full h-48 rounded overflow-hidden border border-[#c3c6cf]">
                    <img
                      className="w-full h-full object-cover"
                      alt="A focused female medical interpreter sitting with a patient and healthcare physician in a modern examination room reviewing medical charts"
                      src={IMAGES.programsCandidate}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('Image_3_4de1f328.png')) {
                          target.src = '/assets/aistudio/Image_3_4de1f328.png';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-[#001d38]/10" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-label-sm text-xs text-[#73777f] uppercase tracking-wider font-semibold">
                      Candidate Profile
                    </span>
                    <p className="font-body-sm text-xs text-[#181c1e] leading-relaxed">
                      Aspiring medical interpreters, bilingual clinical support staff, and community
                      advocates seeking disciplined, professional-grade competencies.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#c3c6cf]">
                    <span className="font-label-sm text-xs text-[#001d38] font-semibold flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-[#00696d] text-[16px]">
                        info
                      </span>
                      Transparency Notice
                    </span>
                    <p className="font-label-md text-xs text-[#43474e] leading-relaxed">
                      Pilot cohort syllabus subject to curricular refinements. Does not confer automatic
                      third-party credentialing.
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <a
                    href="#register-interest"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#00696d] text-white px-6 py-3.5 rounded font-label-lg text-sm font-semibold hover:bg-[#004f52] transition-colors shadow-xs"
                  >
                    Register Your Interest
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Asymmetrical 2-Column Grid for Secondary Programs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Program 2: Language Proficiency Assessment (7 Cols) */}
            <article className="lg:col-span-7 bg-white rounded border border-[#c3c6cf] p-8 lg:p-10 flex flex-col justify-between shadow-xs">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#ebeef0] text-[#001d38] font-label-md text-xs rounded border border-[#c3c6cf] uppercase tracking-wide font-semibold">
                    Evaluation Pathway
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#e5e9eb] text-[#43474e] font-label-sm text-xs rounded uppercase tracking-wider font-semibold">
                    Assessment Framework In Planning
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-headline-lg text-xl lg:text-2xl font-bold text-[#001d38]">
                    Language Proficiency Assessment
                  </h2>
                  <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                    Explore structured, objective approaches to demonstrating high-stakes linguistic
                    fluency, professional register agility, and medical contextual comprehension.
                  </p>
                </div>

                {/* Compliance Disclaimer Notice Box */}
                <div className="p-4 bg-[#f1f4f6] rounded border border-[#00696d]/30 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#00696d] text-[22px] shrink-0 mt-0.5">
                    policy
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-label-sm text-xs text-[#001d38] uppercase tracking-wider font-semibold">
                      Institutional Assessment Disclosure
                    </span>
                    <p className="font-body-sm text-xs text-[#43474e] leading-relaxed">
                      Assessment availability, recognition, and scoring acceptance depend entirely
                      upon receiving healthcare institutions or regional authorities. TerpRise does not
                      issue governmental licenses nor guarantee third-party credential acceptance.
                    </p>
                  </div>
                </div>

                {/* Planned Components Grid */}
                <div className="flex flex-col gap-3">
                  <span className="font-label-sm text-xs text-[#73777f] uppercase tracking-wider font-semibold">
                    Planned Evaluation Benchmarks
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        spellcheck
                      </span>
                      <span className="font-body-sm text-xs text-[#181c1e] font-medium">
                        Bilingual Lexical Range
                      </span>
                    </div>
                    <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        record_voice_over
                      </span>
                      <span className="font-body-sm text-xs text-[#181c1e] font-medium">
                        Oral Simulation Scoring
                      </span>
                    </div>
                    <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        hearing
                      </span>
                      <span className="font-body-sm text-xs text-[#181c1e] font-medium">
                        Auditory Comprehension
                      </span>
                    </div>
                    <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        swap_horiz
                      </span>
                      <span className="font-body-sm text-xs text-[#181c1e] font-medium">
                        Register &amp; Tone Calibration
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#c3c6cf]/60 flex items-center justify-between">
                <span className="font-label-sm text-xs text-[#73777f]">
                  Intended for pre-enrollment validation
                </span>
                <a
                  href="#register-interest"
                  className="inline-flex items-center gap-2 bg-[#001d38] text-white px-5 py-2.5 rounded font-label-lg text-xs font-semibold hover:bg-[#00696d] transition-colors"
                >
                  Express Interest
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </a>
              </div>
            </article>

            {/* Program 3: Continuing Professional Development (5 Cols) */}
            <article className="lg:col-span-5 bg-white rounded border border-[#c3c6cf] p-8 lg:p-10 flex flex-col justify-between shadow-xs">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#ebeef0] text-[#001d38] font-label-md text-xs rounded border border-[#c3c6cf] uppercase tracking-wide font-semibold">
                    Practitioner Modules
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#7ff1f7]/30 text-[#004f52] font-label-sm text-xs rounded uppercase tracking-wider font-semibold">
                    Upcoming Workshop Series
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-headline-lg text-xl lg:text-2xl font-bold text-[#001d38]">
                    Continuing Professional Development
                  </h2>
                  <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                    Focused clinical masterclasses designed to equip working interpreters with
                    advanced terminologies and stress-resilience protocols.
                  </p>
                </div>

                {/* Topic Rows */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-label-sm text-xs text-[#73777f] uppercase tracking-wider font-semibold">
                    Planned Intensive Modules
                  </span>
                  <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#00696d] text-[18px] mt-0.5">
                      psychology
                    </span>
                    <div>
                      <h4 className="font-label-lg text-xs font-bold text-[#001d38]">
                        Mental Health &amp; Psychiatric Settings
                      </h4>
                      <p className="font-body-sm text-xs text-[#43474e]">
                        Navigating dysregulated speech and involuntary evaluations.
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#00696d] text-[18px] mt-0.5">
                      medical_services
                    </span>
                    <div>
                      <h4 className="font-label-lg text-xs font-bold text-[#001d38]">
                        Oncology &amp; Palliative Care Protocols
                      </h4>
                      <p className="font-body-sm text-xs text-[#43474e]">
                        Complex diagnostic terminology and end-of-life counseling.
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#f1f4f6] rounded border border-[#c3c6cf]/60 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#00696d] text-[18px] mt-0.5">
                      shield
                    </span>
                    <div>
                      <h4 className="font-label-lg text-xs font-bold text-[#001d38]">
                        Trauma-Informed Interpreting
                      </h4>
                      <p className="font-body-sm text-xs text-[#43474e]">
                        Managing vicarious exposure and preserving clinician accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#c3c6cf]/60 flex items-center justify-between">
                <span className="font-label-sm text-xs text-[#73777f]">
                  Short-format 3 to 6 hr modules
                </span>
                <a
                  href="#register-interest"
                  className="inline-flex items-center gap-2 border border-[#001d38] text-[#001d38] px-5 py-2.5 rounded font-label-lg text-xs font-semibold hover:bg-[#f1f4f6] transition-colors"
                >
                  Stay Updated
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Reusable Course Detail Specification Table */}
      <section className="w-full py-16 bg-[#f1f4f6] border-y border-[#c3c6cf]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold">
                Catalog Architecture
              </span>
              <h2 className="font-headline-lg text-2xl font-bold text-[#001d38]">
                Program Specifications Matrix
              </h2>
              <p className="font-body-sm text-xs text-[#43474e] mt-1">
                Comparative institutional specifications across initial pilot curricular pathways.
              </p>
            </div>
            <div className="px-3 py-1.5 bg-white border border-[#c3c6cf] rounded font-label-sm text-xs text-[#73777f] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">sync</span>
              Updated for Fall 2025 Planning Cycle
            </div>
          </div>

          {/* Specification Table */}
          <div className="w-full overflow-x-auto rounded border border-[#c3c6cf] bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#c3c6cf] bg-[#ebeef0] text-[#001d38] font-label-md text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Parameter</th>
                  <th className="py-4 px-6 font-semibold">Medical Interpreter Training</th>
                  <th className="py-4 px-6 font-semibold">Language Proficiency</th>
                  <th className="py-4 px-6 font-semibold">Continuing Education</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c3c6cf] font-body-sm text-xs text-[#181c1e]">
                {PROGRAM_SPECS.map((spec, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6 font-semibold text-[#001d38] bg-[#f1f4f6]/50">
                      {spec.parameter}
                    </td>
                    <td className="py-4 px-6">{spec.medicalInterpreter}</td>
                    <td className="py-4 px-6">{spec.languageProficiency}</td>
                    <td className="py-4 px-6">{spec.continuingEducation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Editorial FAQ Accordion Section */}
      <section className="w-full py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold">
              Candidate Inquiries
            </span>
            <h2 className="font-headline-xl text-3xl font-bold text-[#001d38]">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-sm text-[#43474e]">
              Straightforward answers regarding our institutional standards, pilot schedules, and
              development phase.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded border border-[#c3c6cf] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#f1f4f6] transition-colors cursor-pointer"
                    type="button"
                  >
                    <span className="font-headline-sm text-base font-semibold text-[#001d38] pr-4">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-[#00696d] transition-transform duration-200">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[#43474e] font-body-sm text-sm leading-relaxed border-t border-[#c3c6cf]/40 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Interest Registration Anchor / Form Section */}
      <section
        id="register-interest"
        className="w-full py-16 lg:py-24 bg-[#f7fafc] border-t border-[#c3c6cf]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Narrative Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ebeef0] rounded border border-[#c3c6cf] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#00696d]" />
                <span className="font-label-sm text-xs text-[#001d38] uppercase tracking-wider font-semibold">
                  Pilot Application Pipeline
                </span>
              </div>
              <h2 className="font-headline-xl text-3xl lg:text-4xl font-bold text-[#001d38] tracking-tight">
                Ready to take the next step in your interpreting journey?
              </h2>
              <p className="font-body-md text-sm lg:text-base text-[#43474e] leading-relaxed">
                By registering your preliminary interest, you receive early notification regarding pilot
                cohort dates, syllabus updates, prerequisite guidelines, and priority interview
                scheduling.
              </p>
              <div className="p-4 bg-[#f1f4f6] rounded border border-[#c3c6cf] flex flex-col gap-2">
                <span className="font-label-md text-xs text-[#001d38] font-bold">
                  Institutional Assurance
                </span>
                <p className="font-body-sm text-xs text-[#43474e]">
                  We never distribute your contact information. Registration of interest does not
                  constitute a binding enrollment contract or financial commitment.
                </p>
              </div>
              <div className="flex items-center gap-6 pt-2 text-[#43474e]">
                <div className="flex items-center gap-2 font-label-md text-xs font-semibold">
                  <span className="material-symbols-outlined text-[#00696d] text-[20px]">
                    calendar_today
                  </span>
                  Fall 2025 Target
                </div>
                <div className="flex items-center gap-2 font-label-md text-xs font-semibold">
                  <span className="material-symbols-outlined text-[#00696d] text-[20px]">
                    group_add
                  </span>
                  Limited Cohort Size
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#ebeef0] rounded border border-[#c3c6cf] p-8 lg:p-10 shadow-xs">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                {!submitted ? (
                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-md text-xs text-[#43474e] font-semibold"
                          htmlFor="first-name"
                        >
                          First Name *
                        </label>
                        <input
                          className="h-11 px-3.5 bg-white border border-[#c3c6cf] rounded font-body-sm text-sm text-[#001d38] focus:outline-none focus:border-[#001d38] focus:ring-2 focus:ring-[#00696d]/20 transition-all"
                          id="first-name"
                          placeholder="Elena"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-md text-xs text-[#43474e] font-semibold"
                          htmlFor="last-name"
                        >
                          Last Name *
                        </label>
                        <input
                          className="h-11 px-3.5 bg-white border border-[#c3c6cf] rounded font-body-sm text-sm text-[#001d38] focus:outline-none focus:border-[#001d38] focus:ring-2 focus:ring-[#00696d]/20 transition-all"
                          id="last-name"
                          placeholder="Vargas"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-md text-xs text-[#43474e] font-semibold"
                          htmlFor="email"
                        >
                          Email Address *
                        </label>
                        <input
                          className="h-11 px-3.5 bg-white border border-[#c3c6cf] rounded font-body-sm text-sm text-[#001d38] focus:outline-none focus:border-[#001d38] focus:ring-2 focus:ring-[#00696d]/20 transition-all"
                          id="email"
                          placeholder="elena.vargas@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-md text-xs text-[#43474e] font-semibold"
                          htmlFor="language-pair"
                        >
                          Working Language Pair *
                        </label>
                        <input
                          className="h-11 px-3.5 bg-white border border-[#c3c6cf] rounded font-body-sm text-sm text-[#001d38] focus:outline-none focus:border-[#001d38] focus:ring-2 focus:ring-[#00696d]/20 transition-all"
                          id="language-pair"
                          placeholder="e.g. Spanish <> English"
                          required
                          value={languagePair}
                          onChange={(e) => setLanguagePair(e.target.value)}
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-md text-xs text-[#43474e] font-semibold"
                        htmlFor="program-choice"
                      >
                        Program Pathway of Interest *
                      </label>
                      <select
                        className="h-11 px-3.5 bg-white border border-[#c3c6cf] rounded font-body-sm text-sm text-[#001d38] focus:outline-none focus:border-[#001d38] focus:ring-2 focus:ring-[#00696d]/20 transition-all cursor-pointer"
                        id="program-choice"
                        required
                        value={programChoice}
                        onChange={(e) => setProgramChoice(e.target.value)}
                      >
                        <option value="medical-core">
                          Medical Interpreter Training (Pilot Fall 2025)
                        </option>
                        <option value="proficiency">
                          Language Proficiency Assessment
                        </option>
                        <option value="cpd">
                          Continuing Professional Development Workshops
                        </option>
                        <option value="all">
                          General Program Updates &amp; Newsletter
                        </option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-md text-xs text-[#43474e] font-semibold"
                        htmlFor="experience"
                      >
                        Current Experience Level
                      </label>
                      <select
                        className="h-11 px-3.5 bg-white border border-[#c3c6cf] rounded font-body-sm text-sm text-[#001d38] focus:outline-none focus:border-[#001d38] focus:ring-2 focus:ring-[#00696d]/20 transition-all cursor-pointer"
                        id="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                      >
                        <option value="beginner">
                          Beginner / Bilingual with no formal interpreting training
                        </option>
                        <option value="community">
                          Community / Healthcare navigation experience
                        </option>
                        <option value="practitioner">
                          Active medical interpreter seeking refresher or CEUs
                        </option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        className="w-full h-12 bg-[#00696d] text-white font-label-lg text-sm font-semibold rounded hover:bg-[#004f52] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                        type="submit"
                      >
                        <span>Register Preliminary Interest</span>
                        <span className="material-symbols-outlined text-[18px]">send</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 bg-white rounded border border-[#00696d] text-center flex flex-col items-center gap-3 animate-in fade-in">
                    <span className="w-12 h-12 rounded-full bg-[#7ff1f7]/40 flex items-center justify-center text-[#00696d]">
                      <span className="material-symbols-outlined text-[28px]">check_circle</span>
                    </span>
                    <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                      Interest Successfully Recorded
                    </h3>
                    <p className="font-body-sm text-sm text-[#43474e] max-w-md leading-relaxed">
                      Thank you, {firstName || 'colleague'}. You have been added to our prospective
                      student registry for <strong>{languagePair || 'your language pair'}</strong>.
                      You will receive curriculum releases and cohort application alerts via email at{' '}
                      <strong>{email}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs text-[#00696d] font-semibold underline hover:text-[#004f52]"
                    >
                      Register another interest or update details
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
