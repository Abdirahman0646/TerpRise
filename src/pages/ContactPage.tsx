import React, { useState } from 'react';
import { PageId } from '../types';
import { IMAGES } from '../data/mockData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLegal?: (type: 'privacy' | 'terms' | 'ethics') => void;
  onRegisterSuccess?: (userData: {
    name: string;
    email: string;
    languagePair: string;
    program: string;
  }) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenLegal,
  onRegisterSuccess,
}) => {
  // Inquiry Form State
  const [topic, setTopic] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [languages, setLanguages] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquirySubmitting, setInquirySubmitting] = useState(false);

  // Pilot Fast-Track Form State
  const [pilotEmail, setPilotEmail] = useState('');
  const [pilotLanguage, setPilotLanguage] = useState('');
  const [pilotSubmitted, setPilotSubmitted] = useState(false);
  const [pilotSubmitting, setPilotSubmitting] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !fullName || !email || !message || message.length < 30) return;

    setInquirySubmitting(true);
    setTimeout(() => {
      setInquirySubmitting(false);
      setInquirySubmitted(true);
      if (onRegisterSuccess) {
        onRegisterSuccess({
          name: fullName,
          email,
          languagePair: languages || 'Multilingual',
          program: topic === 'training' ? 'Medical Interpreting Core' : 'Continuing Professional Development',
        });
      }
    }, 450);
  };

  const handlePilotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pilotEmail || !pilotLanguage) return;

    setPilotSubmitting(true);
    setTimeout(() => {
      setPilotSubmitting(false);
      setPilotSubmitted(true);
      if (onRegisterSuccess) {
        onRegisterSuccess({
          name: pilotEmail.split('@')[0],
          email: pilotEmail,
          languagePair: pilotLanguage,
          program: 'Fall 2025 Pilot Cohort',
        });
      }
    }, 400);
  };

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* Top Breadcrumb & Editorial Header Band */}
      <section className="w-full bg-surface-container-low py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              Home
            </button>
            <span className="text-outline">/</span>
            <span className="text-primary font-label-md font-bold">Contact &amp; Registration</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Institutional Inquiries &amp; Academic Admissions
              </span>
              <h1 className="font-headline-2xl text-headline-2xl text-primary tracking-tight">
                Let's Connect
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Have questions about TerpRise, our upcoming programs, or professional development opportunities? Whether you are an aspiring interpreter, an experienced practitioner seeking credentialing, or an educational partner, our academic team is here to assist.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 bg-surface-container p-5 rounded-lg shadow-sm border border-outline-variant/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">calendar_clock</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">Next Enrollment Cycle</span>
                  <span className="font-headline-sm text-headline-sm text-primary">Fall 2025 Pilot Cohort</span>
                </div>
              </div>
              <div className="h-[1px] w-full bg-surface-container-highest hidden lg:block" />
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Applications for subsidized pilot slots close August 15, 2025. Standard response time is 1–2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Inquiries & Institutional Transparency */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">Institutional Directory</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Direct Academic Inquiries
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  TerpRise operates as an institutional distance-learning academy committed to high pedagogical standards and clear administrative transparency.
                </p>
              </div>

              {/* Academic Offices & Channels */}
              <div className="flex flex-col gap-6">
                {/* Campus Info */}
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant/30 flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">apartment</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Educational Headquarters</span>
                    <span className="font-headline-sm text-headline-sm text-primary">TerpRise Educational Operations</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Virtual / Online Campus • Distributed Faculty</p>
                    <div className="mt-2 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                      <span>Monday – Friday, 9:00 AM – 5:00 PM (EST)</span>
                    </div>
                  </div>
                </div>

                {/* Email Registry */}
                <div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-5 border border-outline-variant/30">
                  <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Direct Departmental Routing</span>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Admissions &amp; Cohort Applications</span>
                      <a
                        className="font-label-lg text-label-lg text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
                        href="mailto:admissions@terprise.org"
                      >
                        <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
                        admissions@terprise.org
                      </a>
                    </div>
                    <div className="h-[1px] w-full bg-surface-container-highest" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Curriculum, Standards &amp; CEU Inquiries</span>
                      <a
                        className="font-label-lg text-label-lg text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
                        href="mailto:inquiries@terprise.org"
                      >
                        <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
                        inquiries@terprise.org
                      </a>
                    </div>
                    <div className="h-[1px] w-full bg-surface-container-highest" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Healthcare Systems &amp; Institutional Partnerships</span>
                      <a
                        className="font-label-lg text-label-lg text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
                        href="mailto:partnerships@terprise.org"
                      >
                        <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
                        partnerships@terprise.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Pilot Cohort Guidance Box */}
                <div className="bg-primary-container text-on-primary p-6 rounded-lg flex flex-col gap-3 shadow-md">
                  <div className="flex items-center gap-2 text-secondary-container">
                    <span className="material-symbols-outlined text-[20px]">info</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">Early-Stage Advisory</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">
                    Interested in our pilot cohort?
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                    You can submit specific syllabus questions using the interactive inquiry form, or fast-track your priority notification using the pilot registration module below.
                  </p>
                </div>

                {/* Professional Network Link */}
                <div className="p-4 bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-bold text-label-md">
                      in
                    </div>
                    <div>
                      <span className="font-label-md text-label-md text-primary block">TerpRise Professional Network</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Official updates &amp; academic discussions</span>
                    </div>
                  </div>
                  <a
                    className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-primary rounded font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                    href="https://linkedin.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Follow</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Editorial Photography Accent */}
              <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Modern collaborative conference room with professional healthcare interpreters engaged in structured linguistic training seminar"
                  src={IMAGES.contactSeminar}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/Image_7_4145427a.png';
                  }}
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded">
                  <p className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Rigorous Standards • Academic Dignity</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Fostering ethical excellence in medical interpretation.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Multi-purpose Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-lg shadow-md border border-outline-variant/30 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">Interactive Dispatch</span>
                    <span className="font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded">SSL Encrypted</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    Send a Message or Inquiry
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Select your academic track or subject area to route your inquiry directly to our faculty administrators.
                  </p>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleInquirySubmit}>
                  {/* Topic Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant flex items-center justify-between" htmlFor="topic-select">
                      <span>Topic of Inquiry <span className="text-error">*</span></span>
                      <span className="text-on-surface-variant/70 text-[11px] font-normal">Departmental routing</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full h-11 px-4 bg-surface-container-low text-primary rounded font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-lowest border border-outline-variant/30 transition-colors pr-10 cursor-pointer"
                        id="topic-select"
                        name="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                      >
                        <option disabled value="">Select an inquiry category</option>
                        <option value="training">Training Programs &amp; Clinical Certification</option>
                        <option value="assessment">Language Proficiency Assessment &amp; Tiering</option>
                        <option value="partnerships">Hospital System &amp; Educational Partnerships</option>
                        <option value="general">General Academic &amp; Curriculum Questions</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-on-surface-variant">
                        <span className="material-symbols-outlined text-[20px]">expand_more</span>
                      </div>
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="full-name">
                        Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        className="h-11 px-4 bg-surface-container-low text-primary rounded font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-outline-variant/30 transition-colors"
                        id="full-name"
                        name="full_name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g., Dr. Elena Rostova"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email-address">
                        Email Address <span className="text-error">*</span>
                      </label>
                      <input
                        className="h-11 px-4 bg-surface-container-low text-primary rounded font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-outline-variant/30 transition-colors"
                        id="email-address"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena.rostova@institution.org"
                        required
                        type="email"
                      />
                    </div>
                  </div>

                  {/* Primary Working Languages */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="working-languages">
                        Primary Working Languages &amp; Combinations <span className="text-error">*</span>
                      </label>
                      <span className="font-label-sm text-label-sm text-on-surface-variant/70">e.g., English • Spanish</span>
                    </div>
                    <input
                      className="h-11 px-4 bg-surface-container-low text-primary rounded font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-outline-variant/30 transition-colors"
                      id="working-languages"
                      name="languages"
                      value={languages}
                      onChange={(e) => setLanguages(e.target.value)}
                      placeholder="e.g., English & Spanish, English & Mandarin, ASL"
                      required
                      type="text"
                    />
                  </div>

                  {/* Subject Line */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="subject-line">
                      Subject Line <span className="text-error">*</span>
                    </label>
                    <input
                      className="h-11 px-4 bg-surface-container-low text-primary rounded font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-outline-variant/30 transition-colors"
                      id="subject-line"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Inquiry regarding Medical CEU Accreditation"
                      required
                      type="text"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message-content">
                        Message &amp; Pedagogical Background <span className="text-error">*</span>
                      </label>
                      <span className={`font-label-sm text-label-sm ${message.length < 30 ? 'text-on-surface-variant/70' : 'text-secondary font-semibold'}`}>
                        {message.length} / 30 chars min
                      </span>
                    </div>
                    <textarea
                      className="p-4 bg-surface-container-low text-primary rounded font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-outline-variant/30 transition-colors resize-none leading-relaxed"
                      id="message-content"
                      minLength={30}
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your background, training interests, current certification status, or specific inquiries regarding TerpRise course offerings..."
                      required
                      rows={5}
                    />
                  </div>

                  {/* Checkbox: Course Updates */}
                  <div className="flex items-start gap-3 bg-surface-container-low p-4 rounded border border-outline-variant/20">
                    <input
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer accent-[#00696d]"
                      id="newsletter-consent"
                      name="newsletter"
                      type="checkbox"
                    />
                    <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="newsletter-consent">
                      Keep me updated on upcoming TerpRise course schedules, faculty announcements, and continuing education workshop dates.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col gap-3 pt-2">
                    <button
                      className="w-full h-12 bg-secondary hover:bg-on-secondary-container text-on-secondary font-label-lg text-label-lg rounded shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                      disabled={inquirySubmitting}
                      type="submit"
                    >
                      {inquirySubmitting ? (
                        <span>Submitting Dispatch...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-between text-on-surface-variant/80 font-label-sm text-label-sm px-1">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
                        All inquiries logged securely
                      </span>
                      <span>Average response time: 24–48 hours</span>
                    </div>
                  </div>

                  {/* Feedback message */}
                  {inquirySubmitted && (
                    <div className="p-4 bg-secondary-container/60 rounded flex items-start gap-3 border border-secondary/30 animate-in fade-in duration-200">
                      <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">check_circle</span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-md text-label-md font-bold text-on-secondary-container">Inquiry Dispatched Successfully</span>
                        <p className="font-body-sm text-body-sm text-on-secondary-container">
                          Thank you, {fullName}. Your inquiry has been routed to the appropriate TerpRise department. A faculty coordinator will contact you at {email} within 1–2 business days.
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast-Track Pilot Cohort Section */}
      <section className="w-full py-16 bg-surface-container-low" id="register-pilot">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-lg shadow-md border border-outline-variant/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Value Proposition */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider rounded w-fit">
                <span className="material-symbols-outlined text-[16px]">school</span>
                <span>Priority Academic Access</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                Register Your Interest for Pilot Cohorts
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                TerpRise is convening an exclusive cohort of medical and community interpreters for our inaugural Fall 2025 pilot review group. Participants collaborate directly with curriculum designers to test clinical simulations and benchmark accreditation standards.
              </p>

              {/* Core Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 bg-surface-container-low rounded flex flex-col gap-1 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-[20px]">notifications_active</span>
                  <span className="font-label-md text-label-md text-primary font-bold">Priority Notification</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Early seat allocation before public announcements.</span>
                </div>
                <div className="p-3.5 bg-surface-container-low rounded flex flex-col gap-1 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-[20px]">savings</span>
                  <span className="font-label-md text-label-md text-primary font-bold">Subsidized Tuition</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Special pilot rate for participating review interpreters.</span>
                </div>
                <div className="p-3.5 bg-surface-container-low rounded flex flex-col gap-1 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-[20px]">rate_review</span>
                  <span className="font-label-md text-label-md text-primary font-bold">Curriculum Advisory</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Direct feedback channels with senior medical faculty.</span>
                </div>
              </div>
            </div>

            {/* Right Side: Fast-Track Quick Form */}
            <div className="lg:col-span-5 bg-surface-container p-6 lg:p-8 rounded-lg shadow-inner flex flex-col gap-5 border border-outline-variant/30">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Fast-Track Pilot Notification</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Reserve your spot on the priority registry in 30 seconds.</span>
              </div>
              <form className="flex flex-col gap-4" onSubmit={handlePilotSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="pilot-email">
                    Institutional / Personal Email
                  </label>
                  <input
                    className="h-11 px-4 bg-surface-container-lowest text-primary rounded font-body-md text-body-md focus:outline-none border border-outline-variant/30 shadow-sm transition-shadow"
                    id="pilot-email"
                    name="pilot_email"
                    value={pilotEmail}
                    onChange={(e) => setPilotEmail(e.target.value)}
                    placeholder="name@interpreter.org"
                    required
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="pilot-language">
                    Target Working Language
                  </label>
                  <input
                    className="h-11 px-4 bg-surface-container-lowest text-primary rounded font-body-md text-body-md focus:outline-none border border-outline-variant/30 shadow-sm transition-shadow"
                    id="pilot-language"
                    name="pilot_language"
                    value={pilotLanguage}
                    onChange={(e) => setPilotLanguage(e.target.value)}
                    placeholder="e.g., Spanish, Vietnamese, Arabic, ASL"
                    required
                    type="text"
                  />
                </div>
                <button
                  className="w-full h-11 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded shadow transition-colors flex items-center justify-center gap-2 mt-1 cursor-pointer disabled:opacity-75"
                  disabled={pilotSubmitting}
                  type="submit"
                >
                  {pilotSubmitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>Notify Me for Fall 2025</span>
                      <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                    </>
                  )}
                </button>
                {pilotSubmitted && (
                  <div className="p-3 bg-secondary-container/80 rounded flex items-center gap-2 text-on-secondary-container font-body-sm text-body-sm animate-in fade-in duration-150">
                    <span className="material-symbols-outlined text-[18px]">done</span>
                    <span>Priority status registered for {pilotLanguage}. We will send the syllabus draft to {pilotEmail}.</span>
                  </div>
                )}
              </form>
              <p className="font-label-sm text-label-sm text-on-surface-variant/80 text-center">
                Zero commitment required. Invitations will be dispatched August 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust, Privacy & Ethics Statement */}
      <section className="w-full py-12 lg:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-surface-container-low p-8 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm border border-outline-variant/20">
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[20px]">shield</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-label-lg text-label-lg text-primary font-bold">
                  Ethical Data Custodianship &amp; Confidentiality Guarantee
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  TerpRise upholds rigorous institutional privacy standards. Information submitted via inquiry forms or cohort rosters is strictly protected, used solely for academic admissions and educational communications, and is never shared, marketed, or sold to third-party commercial vendors.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={() => onOpenLegal && onOpenLegal('privacy')}
                className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Read Privacy Policy</span>
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </button>
              <span className="text-outline-variant">|</span>
              <button
                onClick={() => onOpenLegal && onOpenLegal('ethics')}
                className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Academic Ethics Code</span>
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
