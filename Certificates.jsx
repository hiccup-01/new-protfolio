import React from 'react';
import { FileText } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Machine Learning Workshop Certificate',
    issuer: 'Foundational ML algorithms & model implementation workshop',
    date: 'Oct 2025',
    link: '/certificates/workshop-cert.pdf'
  },
  {
    id: 2,
    title: 'Industrial Internship Certificate',
    issuer: 'Bheema Institute of Technology and Science (with 360DigiTMG)',
    date: 'Nov 2025 — Apr 2026',
    link: '/certificates/internship-cert.pdf'
  }
];

function Certificates() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mt-6">
      {certificates.map((cert) => (
        <a
          key={cert.id}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex items-start gap-3 group"
        >
          <div className="p-2.5 rounded-xl bg-surface border border-white/10 text-emerald-500 shrink-0 group-hover:border-emerald-500/30 transition-colors">
            <FileText size={18} />
          </div>
          <div>
            <span className="text-xs font-mono text-emerald-500">{cert.date}</span>
            <h4 className="font-heading text-sm font-bold text-white mt-0.5">{cert.title}</h4>
            <p className="text-xs text-[#a1a8a6] mt-1">{cert.issuer}</p>
            <span className="inline-block text-xs text-emerald-500 mt-2 group-hover:underline">View Certificate ↗</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Certificates;
