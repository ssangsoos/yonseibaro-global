'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CaseCardProps {
  id: string;
  category: string;
  title: string;
  meta: string;
  images: {
    before: string | null;
    during: string | null;
    after: string | null;
  };
  labels: {
    before: string;
    during: string;
    after: string;
  };
}

export default function CaseCard({ id, category, title, meta, images, labels }: CaseCardProps) {
  const [activePhase, setActivePhase] = useState<'before' | 'during' | 'after'>('before');

  const phases = [
    { key: 'before' as const, label: labels.before },
    { key: 'during' as const, label: labels.during },
    { key: 'after' as const, label: labels.after },
  ];

  const tagLabel = category === 'aligner' ? 'Invisalign \u00B7 Clear Aligner' : 'No-Prep Laminate';

  return (
    <div className="case-card">
      <div className="case-tabs">
        {phases.map((phase) => (
          <button
            key={phase.key}
            className={`case-tab${activePhase === phase.key ? ' active' : ''}`}
            onClick={() => setActivePhase(phase.key)}
          >
            {phase.label}
          </button>
        ))}
      </div>
      <div className="case-photos">
        {phases.map((phase) => {
          const src = images[phase.key];
          return (
            <div
              key={phase.key}
              className={`case-photo${activePhase === phase.key ? ' active' : ''}`}
            >
              {src ? (
                <Image
                  src={src}
                  alt={`${id} \u2014 ${phase.label}`}
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div className="ph" style={{ height: '100%', borderRadius: 0 }}>
                  <div className="ph-icon">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                  </div>
                  <strong>{phase.label}</strong>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="case-body">
        <span className="case-tag">{tagLabel}</span>
        <p className="case-title">{title}</p>
        {meta && <p className="case-meta">{meta}</p>}
      </div>
    </div>
  );
}
