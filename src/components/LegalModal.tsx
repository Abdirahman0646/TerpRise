import React from 'react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'ethics' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Institutional Privacy Policy',
      tag: 'Data Custodianship & Academic Integrity',
      updated: 'Fall 2025 Cycle',
      body: [
        {
          heading: '1. Academic Information Custodianship',
          text: 'TerpRise collects prospective candidate data exclusively for admissions communication, pilot cohort notifications, and curricular needs assessment. We do not sell, rent, or lease applicant contact records to external marketing entities or third-party lead generation brokers.',
        },
        {
          heading: '2. Educational Records & Evaluation Privacy',
          text: 'Oral diagnostic evaluation recordings, vocabulary assessment submissions, and pilot feedback entries are treated as confidential pedagogical artifacts. Access is restricted to designated faculty evaluators under strict professional confidentiality agreements.',
        },
        {
          heading: '3. Data Retention & Unsubscribe Rights',
          text: 'Applicants and newsletter subscribers retain the right to request full removal of their contact records at any time with a single-click unsubscribe link or by contacting privacy@terprise.org.',
        },
      ],
    },
    terms: {
      title: 'Institutional Terms of Service',
      tag: 'Academic Scaffolding & Pilot Protocols',
      updated: 'Fall 2025 Cycle',
      body: [
        {
          heading: '1. Educational Development Status',
          text: 'TerpRise provides professional development courses, preparatory syllabi, and language assessments. TerpRise is an emerging independent educational initiative. Participation in pilot cohorts does not confer state licensure, statutory board certification, or government credentials.',
        },
        {
          heading: '2. Preliminary Registration of Interest',
          text: 'Submission of an inquiry or registration of preliminary interest creates no binding financial commitment or contractual obligation between the prospective student and TerpRise.',
        },
        {
          heading: '3. Intellectual Property of Curriculum',
          text: 'Course dossiers, consecutive drill scripts, anatomical diagrams, and evaluation rubrics developed by TerpRise remain the intellectual property of the initiative and are licensed solely for the personal educational use of enrolled cohorts.',
        },
      ],
    },
    ethics: {
      title: 'Ethics Commitment & Academic Disclosure',
      tag: 'Standards of Professional Candor',
      updated: 'Fall 2025 Cycle',
      body: [
        {
          heading: '1. Absolute Institutional Transparency',
          text: 'TerpRise refuses to make inflated claims regarding unaccredited diplomas, guaranteed salary outcomes, or instant credentialing. We are transparent that our Fall 2025 pilot is an initial developmental cohort designed to establish rigorous empirical benchmarks.',
        },
        {
          heading: '2. Alignment with National Codes of Ethics',
          text: 'Our curriculum strictly reflects the foundational tenets of the National Council on Interpreting in Health Care (NCIHC) and the International Medical Interpreters Association (IMIA): fidelity, confidentiality, impartiality, role boundary management, cultural responsiveness, and patient advocacy when clinical safety is jeopardized.',
        },
        {
          heading: '3. Commitment to Accessible Language Rights',
          text: 'Language access in healthcare is a civil rights imperative and a pillar of patient safety. TerpRise exists to eliminate arbitrary financial barriers while maintaining the highest standard of bilingual competence.',
        },
      ],
    },
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-[#c3c6cf] max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#ebeef0] flex items-center justify-between bg-[#f7fafc]">
          <div>
            <span className="font-label-sm text-xs text-[#00696d] uppercase tracking-wider font-semibold block mb-1">
              {current.tag}
            </span>
            <h2 className="font-headline-lg text-xl font-bold text-[#001d38]">
              {current.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#73777f] hover:text-[#001d38] rounded hover:bg-[#ebeef0] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 overflow-y-auto space-y-6 text-[#43474e]">
          {current.body.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="font-headline-sm text-base font-semibold text-[#001d38]">
                {item.heading}
              </h3>
              <p className="font-body-sm text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
          <div className="pt-4 border-t border-[#ebeef0] flex items-center justify-between text-xs text-[#73777f]">
            <span>Version: {current.updated}</span>
            <span>TerpRise Academic Standards Board</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#ebeef0] border-t border-[#c3c6cf] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#001d38] text-white rounded font-label-md text-sm font-semibold hover:bg-[#103254] transition-colors cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
