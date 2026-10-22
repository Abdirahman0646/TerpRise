import React, { useState, useMemo } from 'react';
import { PageId, Article } from '../types';
import { IMAGES, ARTICLES } from '../data/mockData';

interface InsightsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenArticleModal?: (article: Article) => void;
}

const CATEGORIES = [
  'All Articles',
  'Medical Interpreting',
  'Ethics & Standards',
  'Language Proficiency',
  'Career Development',
  'Training & Education',
] as const;

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article>(ARTICLES[0]);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [subscriberEmail, setSubscriberEmail] = useState<string>('');

  // Filtered monographs (excluding the featured one for the bottom grid, or showing matching search results)
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All Articles' ||
        article.category === selectedCategory ||
        (selectedCategory === 'Training & Education' && article.category === 'Training & Drills');

      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.tagCode && article.tagCode.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectArticle = (article: Article) => {
    setActiveArticle(article);
    const element = document.getElementById('article-preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    setSubscribed(true);
  };

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-200">
      {/* Top Navigation Sub-bar & Breadcrumb */}
      <section className="w-full bg-surface-container-low py-6 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-outline">/</span>
            <span className="text-primary font-bold">Insights &amp; Resources</span>
          </nav>
          <div className="flex items-center gap-4 text-outline font-label-sm text-label-sm tracking-wider uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Peer-Reviewed Modules
            </span>
            <span className="text-outline-variant">•</span>
            <span>ISSN 2994-0821 Curriculum Series</span>
          </div>
        </div>
      </section>

      {/* Editorial Header & Filter Console */}
      <section className="w-full bg-surface-container-lowest pt-12 pb-10 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                <span>TerpRise Academic Repository</span>
                <span className="text-outline-variant">—</span>
                <span>Clinical &amp; Professional Studies</span>
              </div>
              <h1 className="font-headline-2xl text-headline-2xl text-primary tracking-tight">
                Insights for Interpreters
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Practical guidance, learning resources, and perspectives on interpreter development and professional growth.
              </p>
            </div>

            {/* Search Bar with Institutional Precision */}
            <div className="lg:col-span-4 w-full">
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-[20px] pointer-events-none">
                  search
                </span>
                <input
                  className="w-full pl-11 pr-4 py-3 bg-surface-container-low text-primary font-body-sm text-body-sm rounded border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary/40 placeholder:text-outline transition-all"
                  id="resource-search"
                  placeholder="Search terminology, ethics, guides..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-outline hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Filter Controls: Architectural Horizontal Flow */}
          <div className="pt-6 flex flex-wrap items-center gap-2.5">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mr-2 hidden sm:inline-block">
              Disciplines:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded font-label-sm text-label-sm tracking-wide uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm font-semibold'
                      : 'bg-surface-container-low text-primary hover:bg-surface-container-high'
                  }`}
                  type="button"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Article Hero (Asymmetric Editorial Dossier) */}
      <section className="w-full bg-surface py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Imagery with Study Setting Aesthetic */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="A focused female medical interpreter studying intently at a warm wooden desk with medical terminology flashcards spread out, notebook, and anatomical cardiovascular diagram"
                src={IMAGES.insightsFeatured}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/Image_9_44bcd6bf.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest rounded shadow-sm">
                  Featured Guide
                </span>
                <span className="px-3 py-1 bg-surface-container-lowest/90 backdrop-blur text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded font-bold">
                  Clinical Protocol #04
                </span>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-surface-container-lowest">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  <span>8 min read</span>
                  <span className="w-1 h-1 rounded-full bg-outline" />
                  <span>Editorial Staff</span>
                  <span className="w-1 h-1 rounded-full bg-outline" />
                  <span className="text-secondary font-bold">CEU Eligible</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight leading-tight">
                  Understanding the Role of a Medical Interpreter: Conduit, Clarifier, Cultural Broker, and Advocate
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  A thorough examination of when and how an interpreter should shift between the fundamental modes of practice, balancing clinical accuracy with patient-centered communication and institutional risk boundaries.
                </p>
                <div className="pt-2">
                  <div className="p-4 bg-surface-container-low rounded flex items-start gap-3 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                      verified_user
                    </span>
                    <p className="font-body-sm text-body-sm text-primary">
                      Mapped directly to the <strong>National Council on Interpreting in Health Care (NCIHC)</strong> core competencies and standard diagnostic scenarios.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between">
                <a
                  className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-6 py-3 rounded font-label-lg text-label-lg hover:bg-on-secondary-container transition-colors shadow-sm cursor-pointer"
                  href="#article-preview"
                  onClick={() => setActiveArticle(ARTICLES[0])}
                >
                  <span>Read Full Guide</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <span className="font-label-md text-label-md text-outline uppercase tracking-wider">
                  Updated May 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Article Register (Grid of High-Value Guides) */}
      <section className="w-full bg-surface-container-low py-16 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Intro & Metric Marker */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1 font-bold">
                Foundational Curriculum
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Essential Practice Monographs
              </h2>
            </div>
            <div className="text-right">
              <span className="font-label-md text-label-md text-on-surface-variant">
                Showing {filteredArticles.length} peer-reviewed modules
              </span>
            </div>
          </div>

          {/* 6-Article Asymmetric Grid with Institutional Visual Variety */}
          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center bg-surface-container-lowest rounded-xl border border-outline-variant/30">
              <span className="material-symbols-outlined text-outline text-[48px] mb-2">find_in_page</span>
              <p className="font-headline-sm text-headline-sm text-primary">No monographs matching your search</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Try searching for broader terms like "ethics", "notes", "trauma", or select "All Articles".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Articles');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-secondary text-on-secondary rounded font-label-md text-label-md cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => {
                const isHighlight = article.category === 'Training & Drills';
                return (
                  <article
                    key={article.id}
                    className={`flex flex-col justify-between rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow group border cursor-pointer ${
                      isHighlight
                        ? 'bg-primary-container text-on-primary border-[#1e4468]'
                        : 'bg-surface-container-lowest border-outline-variant/30'
                    }`}
                    onClick={() => handleSelectArticle(article)}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between font-label-sm text-label-sm">
                        <span
                          className={`px-2.5 py-1 rounded font-bold uppercase tracking-wider ${
                            isHighlight
                              ? 'bg-secondary text-on-secondary'
                              : 'bg-surface-container-high text-primary'
                          }`}
                        >
                          {article.category}
                        </span>
                        <span className={isHighlight ? 'text-secondary-fixed' : 'text-outline'}>
                          {article.readTime}
                        </span>
                      </div>
                      <h3
                        className={`font-headline-sm text-headline-sm tracking-tight transition-colors ${
                          isHighlight
                            ? 'text-on-primary'
                            : 'text-primary group-hover:text-secondary'
                        }`}
                      >
                        {article.title}
                      </h3>
                      <p
                        className={`font-body-sm text-body-sm leading-relaxed ${
                          isHighlight ? 'text-on-primary-container' : 'text-on-surface-variant'
                        }`}
                      >
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 flex items-center justify-between border-t border-outline-variant/20">
                      <span
                        className={`font-label-md text-label-md font-bold ${
                          isHighlight ? 'text-secondary-fixed' : 'text-secondary'
                        }`}
                      >
                        {article.tagCode || 'Curriculum Module'}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 font-label-md text-label-md transition-colors ${
                          isHighlight
                            ? 'text-secondary-fixed hover:text-white'
                            : 'text-primary group-hover:text-secondary'
                        }`}
                      >
                        <span>{isHighlight ? 'Access Protocols' : 'Review Article'}</span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Interactive Reader Preview Container (Academic Article Viewport) */}
      <section className="w-full bg-surface-container-lowest py-20" id="article-preview">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Academic Document Header */}
          <div className="flex items-center justify-between pb-6 mb-8 bg-surface-container-low p-4 rounded border border-outline-variant/30">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">article</span>
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                  Interactive Manuscript View
                </span>
                <span className="font-label-md text-label-md text-primary font-bold">
                  Active Extract: {activeArticle.title}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 bg-surface text-primary rounded font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1.5 cursor-pointer border border-outline-variant/30 shadow-xs"
                title="Print format"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">print</span>
                <span className="hidden sm:inline">Print</span>
              </button>
              <button
                onClick={handleDownload}
                className="px-3 py-1.5 bg-surface text-primary rounded font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1.5 cursor-pointer border border-outline-variant/30 shadow-xs"
                title="Download PDF"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span className="hidden sm:inline">PDF</span>
              </button>
            </div>
          </div>

          {/* Feedback for PDF download */}
          {downloadSuccess && (
            <div className="mb-6 p-3 bg-secondary-container text-on-secondary-container font-body-sm text-body-sm rounded flex items-center gap-2 animate-in fade-in duration-200">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Manuscript syllabus "{activeArticle.title}" prepared for offline academic review.</span>
            </div>
          )}

          {/* Typography-Driven Body Layout */}
          <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-4">
              <div className="flex items-center gap-3 font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
                <span>Special Clinical Report</span>
                <span>•</span>
                <span>{activeArticle.tagCode || 'NCIHC Domain 2.3'}</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-4 pt-2 pb-6 border-b border-outline-variant/30">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold font-headline-sm text-headline-sm">
                  {activeArticle.author.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('') || 'ER'}
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-primary font-bold">
                    {activeArticle.author}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {activeArticle.authorTitle}
                  </span>
                </div>
                <div className="ml-auto text-right font-label-sm text-label-sm text-outline hidden sm:block">
                  Published for TerpRise Academic Cohorts ({activeArticle.date})
                </div>
              </div>
            </header>

            <p className="font-body-lg text-body-lg text-primary leading-relaxed">
              The default posture of any qualified healthcare interpreter is unequivocally the <strong className="text-primary font-bold">Conduit Mode</strong>: rendering communication verbatim in the first person without additions, omissions, or editorial distortion. However, treating the conduit role as a rigid mechanical rule rather than a clinical baseline can lead to disastrous misunderstandings in high-context cultural encounters.
            </p>

            {/* Academic Blockquote Styling */}
            <blockquote className="my-4 p-6 bg-surface-container-low rounded-r-xl border-l-4 border-secondary">
              <p className="font-headline-sm text-headline-sm text-primary italic leading-snug">
                “An interpreter who repeats an idiom word-for-word in an emergency triage setting has satisfied mechanical fidelity, but has completely failed communicative equivalence.”
              </p>
              <footer className="mt-3 font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">
                — National Code of Ethics for Interpreters in Health Care
              </footer>
            </blockquote>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              When a practitioner encounters culturally rooted idioms—such as <em>‘ataque de nervios’</em> or traditional idioms relating to ancestral illness causation—the ethical mandate demands a calculated transition into the <strong className="text-primary font-bold">Clarifier</strong> or <strong className="text-primary font-bold">Cultural Broker</strong> posture. The key differentiator between an unprofessional interruption and a master-level intervention lies entirely in the notification protocol.
            </p>

            {/* Institutional Key Takeaways Module */}
            <div className="bg-surface-container p-6 rounded-xl my-4 border border-outline-variant/30">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-secondary text-[22px]">checklist</span>
                <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  Clinical Takeaways &amp; Protocol Steps
                </h3>
              </div>
              <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-primary">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong>Announce the Shift:</strong> Always preface transparently in both languages: <em>“As the interpreter, I would like to clarify a cultural concept...”</em>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong>Maintain Transparency:</strong> Never hold side conversations with either party without summarizing back to the non-speaking participant.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong>Immediate Return to Conduit:</strong> The moment structural disambiguation is established, immediately yield back the floor to the clinician and patient.
                  </span>
                </li>
              </ul>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Continued education programs at TerpRise concentrate heavily on clinical simulations that force candidates to navigate these friction points in real-time video and on-site environments under board-certified assessment rubric criteria.
            </p>

            {/* Author Biography Card */}
            <div className="mt-8 pt-8 flex flex-col sm:flex-row items-center gap-6 bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md shrink-0 font-bold">
                {activeArticle.author.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('') || 'ER'}
              </div>
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="font-label-lg text-label-lg text-primary font-bold">
                    {activeArticle.author}
                  </span>
                  <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded font-label-sm text-label-sm">
                    Faculty Contributor
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {activeArticle.authorTitle}. Over 18 years of acute hospital interpreting experience and clinical linguist instruction. Former commissioner for the National Board of Certification for Medical Interpreters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Educational Syllabus Subscriptions */}
      <section className="w-full bg-surface-container-low py-16 border-t border-outline-variant/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-12 shadow-sm border border-outline-variant/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
                  <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
                  Academic Digest &amp; Terminology Bulletins
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Stay Connected with TerpRise Insights
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Subscribe to receive quarterly educational articles, curated terminology study sheets, clinical simulation dates, and early notices about upcoming professional workshops.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface-variant font-bold" htmlFor="subscriber-email">
                      Institutional or Professional Email
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        className="grow px-4 py-3 bg-surface-container-low text-primary font-body-sm text-body-sm rounded border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary/40 placeholder:text-outline"
                        id="subscriber-email"
                        placeholder="name@institution.edu"
                        required
                        type="email"
                        value={subscriberEmail}
                        onChange={(e) => setSubscriberEmail(e.target.value)}
                      />
                      <button
                        className="bg-secondary text-on-secondary px-6 py-3 rounded font-label-lg text-label-lg hover:bg-on-secondary-container transition-colors shrink-0 shadow-sm cursor-pointer font-semibold"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <p className="font-label-sm text-label-sm text-outline">
                    Zero promotional spam. Strict data privacy adherence. Unsubscribe anytime with one click.
                  </p>
                </form>

                {subscribed && (
                  <div className="p-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded flex items-center gap-2 border border-secondary/20 animate-in fade-in duration-200">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Thank you for subscribing. Confirmation dispatched to {subscriberEmail}.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
