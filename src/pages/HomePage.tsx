import React from 'react';
import { PageId } from '../types';
import { IMAGES, ARTICLES } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onRegisterInterest: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onRegisterInterest,
}) => {
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* Section 1: Split Hero Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: 7 cols */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f1f4f6] rounded w-fit border border-[#ebeef0]">
                <span className="w-2 h-2 rounded-full bg-[#00696d]" />
                <span className="font-label-md text-xs text-[#001d38] uppercase tracking-widest font-semibold">
                  Interpreter Education Reimagined
                </span>
              </div>
              <h1 className="font-headline-2xl text-[2.5rem] lg:text-[3.5rem] text-[#001d38] tracking-tight leading-[1.12]">
                Building Skills. <br />
                <span className="text-[#00696d]">Elevating Interpreters.</span>
              </h1>
              <p className="font-body-lg text-lg text-[#43474e] max-w-xl leading-relaxed">
                Practical learning and professional development opportunities for interpreters seeking
                to strengthen their skills, build confidence, and grow their careers.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('programs')}
                  className="inline-flex items-center justify-center bg-[#00696d] text-white px-7 py-3.5 rounded font-label-lg text-sm font-semibold hover:bg-[#004f52] transition-all shadow-xs cursor-pointer"
                >
                  Explore Our Programs
                </button>
                <button
                  onClick={() => onNavigate('about-us')}
                  className="inline-flex items-center justify-center bg-[#ebeef0] text-[#001d38] px-7 py-3.5 rounded font-label-lg text-sm font-semibold hover:bg-[#e5e9eb] transition-colors cursor-pointer"
                >
                  Our Mission
                </button>
              </div>
              <div className="pt-6 mt-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#00696d] text-[22px]">
                  verified
                </span>
                <p className="font-body-sm text-sm text-[#43474e]">
                  Focused on accessible medical interpreter training and practical clinical
                  competency.
                </p>
              </div>
            </div>

            {/* Right Column: 5 cols */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative overflow-hidden rounded-xl bg-[#ebeef0] shadow-md group">
                <img
                  className="w-full h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  alt="A male professional medical interpreter wearing an identification badge holding a notepad, attentively facilitating dialogue between a female doctor in a white lab coat with stethoscope and a female patient sitting in a clinical exam room setting"
                  src={IMAGES.homeHero}
                  onError={(e) => {
                    // Fallback to local image or styled gradient
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('Image_1_f56b6fda.png')) {
                      target.src = '/assets/aistudio/Image_1_f56b6fda.png';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001d38]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="font-label-sm text-xs text-[#82f4fa] uppercase tracking-wider block mb-1 font-semibold">
                    Clinical Context Practice
                  </span>
                  <p className="font-headline-sm text-lg leading-snug font-semibold text-white">
                    Facilitating accurate, compassionate dialogue in healthcare settings.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pt-1">
                <span className="font-label-sm text-xs text-[#43474e] uppercase tracking-wider font-semibold">
                  Cohort Pilot 2025
                </span>
                <span className="font-label-sm text-xs text-[#00696d] font-semibold">
                  Active Curriculum Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission Introduction Section */}
      <section className="w-full bg-[#f1f4f6] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="font-label-md text-xs text-[#00696d] uppercase tracking-widest font-semibold">
                Our Foundation &amp; Purpose
              </span>
              <h2 className="font-headline-xl text-3xl lg:text-4xl text-[#001d38] font-bold leading-tight">
                Making Interpreter Development More Accessible
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5 text-[#43474e] font-body-lg text-base lg:text-lg leading-relaxed">
              <p>
                TerpRise is being built to help interpreters access practical learning, professional
                development, and clearer pathways toward demonstrating their abilities. In
                multilingual patient encounters, language access saves lives—preventing catastrophic
                clinical misdiagnoses, fostering immediate patient rapport, and safeguarding consent.
              </p>
              <p className="font-body-md text-sm lg:text-base text-[#43474e]/90 leading-relaxed">
                Yet excessive tuition barriers, inflexible schedules, and detached abstract theory
                continue to leave talented bilingual individuals without structured avenues for
                rigorous practical advancement. TerpRise dismantles these friction points with
                modular, applied training designed around the lived realities of practicing
                linguists.
              </p>
            </div>
          </div>

          {/* 4 Key Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="bg-white p-8 rounded-lg shadow-xs flex flex-col gap-3 hover:-translate-y-1 transition-transform border border-[#ebeef0]">
              <div className="w-10 h-10 rounded bg-[#e5e9eb] flex items-center justify-center text-[#001d38] mb-1">
                <span className="material-symbols-outlined text-[24px]">school</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                Skills-Centric Curriculum
              </h3>
              <p className="font-body-sm text-sm text-[#43474e] leading-relaxed">
                Every session anchors directly into consecutive drills, clinical roleplays, and
                vocabulary synthesis rather than passive rote memory.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xs flex flex-col gap-3 hover:-translate-y-1 transition-transform border border-[#ebeef0]">
              <div className="w-10 h-10 rounded bg-[#e5e9eb] flex items-center justify-center text-[#00696d] mb-1">
                <span className="material-symbols-outlined text-[24px]">balance</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                Ethical Practice First
              </h3>
              <p className="font-body-sm text-sm text-[#43474e] leading-relaxed">
                Rooted in national standards: absolute impartiality, nuanced cultural brokering, and
                uncompromised patient confidentiality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xs flex flex-col gap-3 hover:-translate-y-1 transition-transform border border-[#ebeef0]">
              <div className="w-10 h-10 rounded bg-[#e5e9eb] flex items-center justify-center text-[#001d38] mb-1">
                <span className="material-symbols-outlined text-[24px]">visibility</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                Transparent Development
              </h3>
              <p className="font-body-sm text-sm text-[#43474e] leading-relaxed">
                Honest assessments, candid feedback loops, and crystal-clear milestones with no
                inflated certifications or hidden costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xs flex flex-col gap-3 hover:-translate-y-1 transition-transform border border-[#ebeef0]">
              <div className="w-10 h-10 rounded bg-[#e5e9eb] flex items-center justify-center text-[#00696d] mb-1">
                <span className="material-symbols-outlined text-[24px]">diversity_3</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                Affordable Accessibility
              </h3>
              <p className="font-body-sm text-sm text-[#43474e] leading-relaxed">
                Flexible, self-paced modules and accessible cohort schedules designed specifically
                around working healthcare linguists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Focus Areas */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="font-label-md text-xs text-[#00696d] uppercase tracking-widest font-semibold">
                Targeted Curriculum Pathways
              </span>
              <h2 className="font-headline-xl text-3xl lg:text-4xl text-[#001d38] font-bold">
                Core Focus Areas
              </h2>
              <p className="font-body-lg text-base lg:text-lg text-[#43474e]">
                TerpRise is designing practical, structured pathways in three key domains of
                interpreter education.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#43474e] font-label-md text-sm font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00696d]" />
              Active Academic Framework 2025
            </div>
          </div>

          {/* 3 Developmental Pathway Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Focus Area 1 */}
            <div className="bg-[#f1f4f6] rounded-xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative border border-[#c3c6cf]/50">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs bg-[#103254] text-white px-3 py-1 rounded tracking-wider uppercase font-semibold">
                    Domain 01
                  </span>
                  <span className="font-label-sm text-xs bg-[#7ff1f7]/40 text-[#006e72] px-2.5 py-1 rounded uppercase tracking-wider font-semibold border border-[#00696d]/20">
                    Curriculum In Development
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-xl font-bold text-[#001d38]">
                    Medical Interpreter Training
                  </h3>
                  <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                    Build foundational knowledge in interpreting ethics, medical terminology,
                    communication, and professional practice.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 flex flex-col gap-3 border border-[#ebeef0]">
                  <span className="font-label-sm text-xs text-[#001d38] uppercase tracking-wider font-semibold">
                    Key Modules Included:
                  </span>
                  <ul className="flex flex-col gap-2.5 font-body-sm text-xs text-[#43474e]">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Core protocols &amp; triage modes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Anatomy &amp; physiological systems vocabulary</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Role boundaries and boundary management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Simulated encounter video analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => onNavigate('programs')}
                  className="inline-flex items-center gap-2 font-label-lg text-sm text-[#00696d] hover:text-[#004f52] font-semibold transition-colors cursor-pointer"
                >
                  <span>View Curriculum Syllabus</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Focus Area 2 */}
            <div className="bg-[#f1f4f6] rounded-xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative border border-[#c3c6cf]/50">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs bg-[#103254] text-white px-3 py-1 rounded tracking-wider uppercase font-semibold">
                    Domain 02
                  </span>
                  <span className="font-label-sm text-xs bg-[#e0e3e5] text-[#001d38] px-2.5 py-1 rounded uppercase tracking-wider font-semibold">
                    Framework In Planning
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-xl font-bold text-[#001d38]">
                    Language Proficiency Assessment
                  </h3>
                  <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                    Explore structured approaches to demonstrating language proficiency and
                    documenting assessment outcomes.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 flex flex-col gap-3 border border-[#ebeef0]">
                  <span className="font-label-sm text-xs text-[#001d38] uppercase tracking-wider font-semibold">
                    Key Modules Included:
                  </span>
                  <ul className="flex flex-col gap-2.5 font-body-sm text-xs text-[#43474e]">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Documented evaluation rubrics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Bilingual diagnostic benchmarks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Consecutive memory span assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Objective diagnostic feedback profiles</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 font-label-lg text-sm text-[#00696d] hover:text-[#004f52] font-semibold transition-colors cursor-pointer"
                >
                  <span>Inquire on Pilot Criteria</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Focus Area 3 */}
            <div className="bg-[#f1f4f6] rounded-xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative border border-[#c3c6cf]/50">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs bg-[#103254] text-white px-3 py-1 rounded tracking-wider uppercase font-semibold">
                    Domain 03
                  </span>
                  <span className="font-label-sm text-xs bg-[#7ff1f7]/40 text-[#006e72] px-2.5 py-1 rounded uppercase tracking-wider font-semibold border border-[#00696d]/20">
                    Community Workshops Planned
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-xl font-bold text-[#001d38]">
                    Continuing Professional Development
                  </h3>
                  <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                    Support ongoing learning and the development of stronger interpreting skills
                    across career stages.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 flex flex-col gap-3 border border-[#ebeef0]">
                  <span className="font-label-sm text-xs text-[#001d38] uppercase tracking-wider font-semibold">
                    Key Modules Included:
                  </span>
                  <ul className="flex flex-col gap-2.5 font-body-sm text-xs text-[#43474e]">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Specialized pediatric &amp; oncology clinics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Weekly live skills booster workshops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Dialectal nuance &amp; colloquialism salons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00696d] text-[18px]">
                        check_circle
                      </span>
                      <span>Vicarious trauma &amp; wellness resilience</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8">
                <button
                  onClick={onRegisterInterest}
                  className="inline-flex items-center gap-2 font-label-lg text-sm text-[#00696d] hover:text-[#004f52] font-semibold transition-colors cursor-pointer"
                >
                  <span>Register Interest in Workshops</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why TerpRise (Editorial 2-Column Layout) */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-[#f1f4f6] rounded-2xl p-8 lg:p-14 shadow-xs border border-[#c3c6cf]/40">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-xs text-[#00696d] uppercase tracking-widest block mb-2 font-semibold">
                Institutional Philosophy
              </span>
              <h2 className="font-headline-xl text-3xl lg:text-4xl text-[#001d38] font-bold">
                Why TerpRise
              </h2>
              <p className="font-body-md text-base text-[#43474e] mt-2">
                A commitment to grounded competency, realistic learning curves, and structural
                clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Item 1 */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded bg-white flex items-center justify-center shrink-0 shadow-xs text-[#00696d] border border-[#ebeef0]">
                  <span className="material-symbols-outlined text-[26px]">schedule</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                    Accessible Learning
                  </h3>
                  <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                    Removing excessive cost and scheduling barriers so working bilingual individuals
                    can access quality training without sacrificing their livelihood.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded bg-white flex items-center justify-center shrink-0 shadow-xs text-[#001d38] border border-[#ebeef0]">
                  <span className="material-symbols-outlined text-[26px]">record_voice_over</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                    Practical, Skills-Focused Education
                  </h3>
                  <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                    Moving beyond passive rote memorization into real-time roleplays, consecutive
                    interpreting drills, and complex ethical dilemma analysis.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded bg-white flex items-center justify-center shrink-0 shadow-xs text-[#001d38] border border-[#ebeef0]">
                  <span className="material-symbols-outlined text-[26px]">trending_up</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                    Professional Growth
                  </h3>
                  <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                    Structured support that scales from foundational medical vocabulary all the way
                    through specialized oncology, neurology, and surgical encounters.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded bg-white flex items-center justify-center shrink-0 shadow-xs text-[#00696d] border border-[#ebeef0]">
                  <span className="material-symbols-outlined text-[26px]">verified_user</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-lg font-bold text-[#001d38]">
                    Commitment to Quality &amp; Transparency
                  </h3>
                  <p className="font-body-md text-sm text-[#43474e] leading-relaxed">
                    Clear educational objectives and realistic expectations without inflated credential
                    promises or speculative claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Latest Insights / Blog Previews */}
      <section className="w-full bg-[#f1f4f6] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-xs text-[#00696d] uppercase tracking-widest font-semibold">
                Knowledge Base &amp; Field Guides
              </span>
              <h2 className="font-headline-xl text-3xl lg:text-4xl text-[#001d38] font-bold">
                Insights for Interpreters
              </h2>
              <p className="font-body-md text-base text-[#43474e]">
                Practical perspectives, clinical ethics, and targeted study guides.
              </p>
            </div>
            <button
              onClick={() => onNavigate('insights-blog')}
              className="inline-flex items-center gap-1.5 font-label-lg text-sm text-[#00696d] hover:text-[#004f52] transition-colors shrink-0 font-semibold cursor-pointer"
            >
              <span>View All Articles</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* 3 Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between border border-[#ebeef0]"
              >
                <div className="p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between font-label-sm text-xs">
                    <span className="text-[#00696d] font-semibold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-[#73777f]">{article.date}</span>
                  </div>
                  <h3
                    onClick={() => onNavigate('insights-blog')}
                    className="font-headline-sm text-lg font-bold text-[#001d38] hover:text-[#00696d] transition-colors cursor-pointer leading-snug"
                  >
                    {article.title}
                  </h3>
                  <p className="font-body-sm text-sm text-[#43474e] leading-relaxed">
                    {article.summary}
                  </p>
                </div>
                <div className="px-8 pb-8 pt-2">
                  <button
                    onClick={() => onNavigate('insights-blog')}
                    className="inline-flex items-center gap-2 font-label-md text-xs text-[#001d38] font-semibold hover:text-[#00696d] transition-colors cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Closing Call to Action */}
      <section className="w-full bg-[#103254] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#213341] rounded border border-[#7d9bc2]/30">
            <span className="w-2 h-2 rounded-full bg-[#82f4fa]" />
            <span className="font-label-md text-xs text-[#82f4fa] uppercase tracking-wider font-semibold">
              Next Step
            </span>
          </div>
          <h2 className="font-headline-2xl text-3xl lg:text-5xl text-white max-w-3xl tracking-tight leading-tight font-bold">
            Your Growth as an Interpreter Starts Here.
          </h2>
          <p className="font-body-lg text-base lg:text-lg text-[#7d9bc2] max-w-2xl leading-relaxed">
            Join us as we work toward more accessible, practical professional development for
            interpreters. Be the first to know when courses and workshops open.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center bg-[#00696d] text-white px-8 py-3.5 rounded font-label-lg text-sm font-semibold hover:bg-[#004f52] transition-colors shadow-xs cursor-pointer"
            >
              Contact TerpRise
            </button>
            <button
              onClick={onRegisterInterest}
              className="inline-flex items-center justify-center bg-[#213341] text-white px-8 py-3.5 rounded font-label-lg text-sm font-semibold hover:bg-[#0b1e2b] transition-colors cursor-pointer border border-[#7d9bc2]/30"
            >
              Register Your Interest
            </button>
          </div>
          <div className="pt-6">
            <p className="font-label-sm text-xs text-[#7d9bc2]/80 tracking-wide">
              Institutional notice: TerpRise is currently preparing initial cohort pilot materials.
              Course schedules will be announced to registered linguists first.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
