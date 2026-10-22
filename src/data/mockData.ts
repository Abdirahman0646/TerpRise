import { Article, FAQItem, ProgramSpec } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1XwmmI_zWlFWhSco1eaHd0CvH1BhDIkOek2L_lpf77CQ4PM7XFS49iA8qkwV5OQ9mz86oVKyAfzIcOr_-lzZ9P6bup8yfDHBh9lJGhLFBp8xuDTj4fiBcJWomfttJnyRJXPpX-_ROXajIDl16jk5M8elzKICxg8nT4iu1GBef_hSaaqYvwmOKNqk-HsWQyqo18xM6VT7-L1smZ4zF7IIfWeU2TLclPr9BMoBIFrvNVo8OoLm9Hqv4e8MA';

export const IMAGES = {
  homeHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWJzXQv7veyFSAsb1RomcP6TW3wqvv7ESeefUFwQf7SxA0tTz6ZOkAr2opXN8npYGU9PzuptjDGewf0jXPi6-GnTbivnq7naKlu_UufVcsqUom3w5Hb24v4koap4B8VDkmZsiRpW1bDvdCL3aaCwaDdgU7Mksb78bhlR1pC6LZ5gGrtCPB7CWOPHZyHH2CaSyWSUcHHPnLX3xd_yVOchHVHEH11p35keAgL2Yx7tpIo1v3h1KG6vA',
  programsCandidate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Mmiat1iNnLKh4vkfnlCt7FuyI5Tg6twYnM7k0ua0ASgj4_9tMMtoqkZwfCWyP4m3cYiEA4-yA-w4bL6IGtMTPKalLu_hOrAOZCVy_PrnKsDeog6nsMAj1k0qtjGZCDQZsKK-5FXtqXDQzJelgc_IIlqwfd8MwQ7Fy8HjYC9sHXFp82LOQCzkxEm-__OY01tHP5_Vl9E7N5w9gbetVawkva14zXksVsoFZAKDJnPmjQ7Go4-6ZjE',
  aboutStudy: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwCaA7GfIRNf8dn4zN6m4CfHb9UiNlWyLaclkU2-wUDdU28alzOY2d98ygoeu88AkvBp_2oc0_gtMqHF8nWnC6KGplSezrjYPAeRLslSH0IKuY2b7QkfKACrikQ49AZlD05nQRTgMaGN-dGkgYzw-msQgo33raV-01fVGbSHy-139w6s8lCRuKFBQhNNBF1HooleawrfKtCMK_bRqmaVEHPNfzcBxLF5p9lI1YrVIPRRcPlwnmpFw',
  contactSeminar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl2inF0iFkcqtN7T0G7OpCm8f0CEb6f8gwisDHkVuy3hr14htuk0e44b87eoTS9PIRaprxuF0_elrd7LZyT9x3P5ri1VcF1etd_tff4gaV0WWGps64O1lZ15YAho7AjNMmi3rTzIEoyJPX9e7swmernqZKrrkUfxXgtJSV6s4HF6PrAOXlPeD1y5y3-bxbwMzXbZasLk2ZQ7Z0W9dzoSoYay9dDN_V6okA0936NFfrNBja7CzoyNY',
  insightsFeatured: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyxe_V4Q0vmz5J-0HZAFH0DrvCvlpp8NX5hChguDmvlH0RyotlV7FNNUYA3dzvlmZtOOhBLPTb5u8BaN_VB36Pi2DkLbaqWOkllMlFZeDclaOANzmZZJ6SlXW5hQvrwDJVJGKfhbgPDUXHe_HR8pJvlUGO8_SvLiPKsLBVcq7aS-5IWryXzzj3NM6sF8dGCROYXRAU-BVUAD_mwdAzPod1msuhWRRM8L7g5TFkCTTqTU6rXj0URO0',
};

export const ARTICLES: Article[] = [
  {
    id: 'understanding-roles',
    title: 'Understanding the Role of a Medical Interpreter: Conduit, Clarifier, Cultural Broker, and Advocate',
    category: 'Medical Interpreting',
    readTime: '8 min read',
    date: 'May 2025',
    tagCode: 'Clinical Protocol #04',
    isFeatured: true,
    author: 'Dr. Elena Rostova, CHI™, CMI',
    authorTitle: 'Director of Language Services & Associate Fellow',
    summary: 'A thorough examination of when and how an interpreter should shift between the fundamental modes of practice, balancing clinical accuracy with patient-centered communication and institutional risk boundaries.',
    content: [
      'The default posture of any qualified healthcare interpreter is unequivocally the Conduit Mode: rendering communication verbatim in the first person without additions, omissions, or editorial distortion.',
      'Treating the conduit role as a rigid mechanical rule rather than a clinical baseline can lead to disastrous misunderstandings in high-context cultural encounters.',
      'When a practitioner encounters culturally rooted idioms—such as "ataque de nervios" or traditional idioms relating to ancestral illness causation—the ethical mandate demands a calculated transition into the Clarifier or Cultural Broker posture.'
    ]
  },
  {
    id: 'ethics-matter',
    title: 'Why Ethics Matter in Healthcare Interpreting',
    category: 'Ethics & Standards',
    readTime: '6 min read',
    date: 'April 2025',
    tagCode: 'Standard #104.A',
    author: 'Marcus Vance, CoreCHI',
    authorTitle: 'Senior Clinical Interpreter Educator',
    summary: 'Examining how impartiality, accuracy, and patient confidentiality uphold clinical safety, empower patient decision-making, and protect dignity.',
    content: [
      'In medical settings, ethics are not academic abstractions; they are patient safety safeguards.',
      'The NCIHC and IMIA national standards clearly establish that the medical interpreter exists to ensure mutual communicative equivalence while honoring patient autonomy.',
      'Breaching confidentiality or failing to report conflicts of interest can irreparably compromise diagnostic outcomes.'
    ]
  },
  {
    id: 'career-preparation',
    title: 'Preparing for a Career in Medical Interpretation',
    category: 'Career Development',
    readTime: '7 min read',
    date: 'April 2025',
    tagCode: 'Career Pathway',
    author: 'Elena Vargas & Faculty Staff',
    authorTitle: 'Academic Admissions Coordinators',
    summary: 'A systematic step-by-step roadmap from baseline bilingual fluency to clinical terminology mastery, credentialing exams, and hospital onboarding.',
    content: [
      'Transitioning from conversational bilingualism to professional medical interpreting requires disciplined terminology conditioning.',
      'Candidates must master anatomical Latinate root words, systemic pathology registers, and clinical triage protocols.',
      'Establishing a disciplined 60-hour foundational coursework regimen is the essential gateway toward national certification eligibility.'
    ]
  },
  {
    id: 'deliberate-practice',
    title: 'Building Confidence Through Deliberate Practice',
    category: 'Training & Drills',
    readTime: '5 min read',
    date: 'April 2025',
    tagCode: 'Practical Lab',
    author: 'TerpRise Clinical Lab Team',
    authorTitle: 'Simulation Coaches',
    summary: 'How daily shadow-reading, specialized terminology glossaries, and recorded self-assessment elevate interpreting accuracy under stress.',
    content: [
      'Passive listening produces illusion of competence; deliberate auditory decoding with delayed echo repetition creates neural resilience.',
      'We recommend 20 minutes daily of split-attention consecutive note-taking drills using real patient discharge simulation recordings.',
      'Measuring and recording conversion latency reveals hesitation patterns before encountering actual acute trauma consults.'
    ]
  },
  {
    id: 'consecutive-note-taking',
    title: 'Mastering Consecutive Interpreting Note-Taking',
    category: 'Medical Interpreting',
    readTime: '9 min read',
    date: 'March 2025',
    tagCode: 'Technique Guide',
    author: 'Sofia Lindqvist, CMI',
    authorTitle: 'Senior Pediatric Healthcare Linguist',
    summary: 'Symbols, spatial layout, and abbreviation architectures designed for capturing complex dosages, multi-tier symptoms, and surgical discharge procedures.',
    content: [
      'Interpreting note-taking is an ideogrammatic recall trigger, not shorthand verbatim transcription.',
      'By organizing notepad columns diagonally with clear subject-verb-object vectors, interpreters avoid cognitive overload during rapid clinician exchanges.'
    ]
  },
  {
    id: 'idioms-and-dialects',
    title: 'Navigating Idioms, Dialects, and Medical Jargon',
    category: 'Language Proficiency',
    readTime: '6 min read',
    date: 'March 2025',
    tagCode: 'Linguistic Analysis',
    author: 'Dr. Tariq Al-Mansoor',
    authorTitle: 'Comparative Linguistics Specialist',
    summary: 'Strategic clarification maneuvers that unpack folkloric symptom descriptions and highly condensed Latinate clinical terminology without derailing physician rapport.',
    content: [
      'Patients express somatic distress through localized metaphors: "heavy blood", "wind in the head", or "liver fatigue".',
      'The trained interpreter knows precisely when to provide transparent transparent mediation so the physician accurately maps symptoms to physiological disease entities.'
    ]
  },
  {
    id: 'vicarious-trauma',
    title: 'Managing Vicarious Trauma in Emergency Interpreting',
    category: 'Ethics & Standards',
    readTime: '8 min read',
    date: 'February 2025',
    tagCode: 'Wellness Framework',
    author: 'Rachel Chen, LCSW & Medical Interpreter',
    authorTitle: 'Linguist Wellness Consultant',
    summary: 'Psychological resiliency mechanisms, critical debrief protocols, and boundary preservation for professionals positioned at the frontline of ICU and trauma encounters.',
    content: [
      'Speaking in the first person ("I am in severe pain", "I am losing my child") creates emotional resonance that can accumulate as secondary traumatic stress.',
      'Rigorous decompression routines and clear professional role boundaries are essential components of long-term sustainable practice.'
    ]
  }
];

export const PROGRAM_SPECS: ProgramSpec[] = [
  {
    parameter: 'Primary Objective',
    medicalInterpreter: 'Foundational professional ethics & clinical consecutive execution',
    languageProficiency: 'Baseline bilingual linguistic fluency & register validation',
    continuingEducation: 'Specialized vocabulary & complex clinical scenario mastery'
  },
  {
    parameter: 'Delivery Format',
    medicalInterpreter: 'Interactive Synchronous Online + Guided Practice Labs',
    languageProficiency: 'Remote Oral Diagnostic Evaluation + Recorded Submissions',
    continuingEducation: 'Intensive Weekend Seminars & Self-Paced Modules'
  },
  {
    parameter: 'Planned Duration',
    medicalInterpreter: '60 Instructional Hours (10 Weeks)',
    languageProficiency: '90-minute structured diagnostic interview',
    continuingEducation: '3 to 6 contact hours per workshop'
  },
  {
    parameter: 'Enrollment Prerequisites',
    medicalInterpreter: 'High school diploma/equivalent + demonstrated bilingual fluency',
    languageProficiency: 'Open entry; diagnostic intent',
    continuingEducation: 'Prior fundamental medical interpreter training suggested'
  },
  {
    parameter: 'Assessment Method',
    medicalInterpreter: 'Weekly vocabulary quizzes, ethical case dossiers, practical oral exam',
    languageProficiency: 'Standardized rubric: grammar, register, lexical fidelity',
    continuingEducation: 'Scenario simulations & self-reflection portfolio'
  },
  {
    parameter: 'Tuition & Fees',
    medicalInterpreter: 'Tiered pricing announced ahead of pilot enrollment',
    languageProficiency: 'Single evaluation assessment fee',
    continuingEducation: 'Per-workshop registration'
  },
  {
    parameter: 'Accreditation Status',
    medicalInterpreter: 'Independent Development / Pre-Approval Phase',
    languageProficiency: 'Formative Diagnostic Framework',
    continuingEducation: 'Postgraduate Practitioner Series'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are your programs accredited by national certifying bodies?',
    answer: 'TerpRise is an emerging, independent educational development initiative. We are committed to absolute academic and ethical transparency: our programs are currently in the curriculum development and pilot planning phases. We do not currently hold accreditation from CCHI, NBCMI, or state credentialing registries. Formal continuing education and provider recognition will be pursued methodically as cohorts mature.'
  },
  {
    id: 'faq-2',
    question: 'Who is eligible to register interest for the pilot cohorts?',
    answer: 'Registration of interest is open to any bilingual individual possessing advanced or native-level fluency in both English and at least one target language. It is ideal for aspiring interpreters, healthcare community navigators, medical assistants, and multilingual staff wishing to formalize their interpretation skills.'
  },
  {
    id: 'faq-3',
    question: 'What languages will be supported during the initial rollout?',
    answer: 'The initial Fall 2025 pilot cohort will focus primarily on the Spanish-English language pair to establish benchmark pedagogical data. Subsequent expansion roadmaps include high-demand regional languages such as Mandarin, Arabic, Vietnamese, and Russian.'
  },
  {
    id: 'faq-4',
    question: 'How will classes and practice clinics be scheduled?',
    answer: 'All synchronous workshops and peer drill sessions will be structured for working adults. Cohorts will offer either twice-weekly evening time slots (e.g., 6:30 PM - 8:30 PM EST) or dedicated Saturday intensive morning blocks, accompanied by asynchronous online reading modules.'
  }
];
