import { useTranslations } from 'next-intl';
import { branches } from '@/data/branches';

export default function TeamNetwork() {
  const tTeam = useTranslations('team');
  const tNet = useTranslations('network');

  const activeBranches = branches.filter(b => b.status === 'active');
  const comingSoonBranches = branches.filter(b => b.status === 'coming_soon');

  return (
    <section className="team-net section" id="network">
      <div className="container">
        <div className="team-net-grid">
          <div className="team-side">
            <span className="label">{tTeam('label')}</span>
            <h2 className="h2 h2-light">{tTeam('title')}<br /><em>{tTeam('titleEm')}</em></h2>
            <p className="team-desc">{tTeam('desc')}</p>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-num">{activeBranches.length}</span>
                <span className="stat-label">{tTeam('statBranches')}</span>
              </div>
              <div className="team-stat">
                <span className="stat-num">20+</span>
                <span className="stat-label">{tTeam('statOrthodontists')}</span>
              </div>
              <div className="team-stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">{tTeam('statTrained')}</span>
              </div>
            </div>
            <blockquote className="team-quote">
              <p>{tTeam('quote')}</p>
              <p>{tTeam('quoteAuthor')}</p>
            </blockquote>
          </div>

          <div className="net-side">
            <span className="label">{tNet('label')}</span>
            <h2 className="h2 h2-light">{tNet('title')}<br /><em>{tNet('titleEm')}</em></h2>
            <p className="net-desc">{tNet('desc')}</p>
            <div className="map-wrap">
              <iframe
                src="https://maps.google.com/maps?q=%EC%95%95%EA%B5%AC%EC%A0%95+%EC%97%B0%EC%84%B8%EB%B0%94%EB%A1%9C%EC%B9%98%EA%B3%BC&output=embed&z=8&hl=en"
                allowFullScreen
                loading="lazy"
                title="Yonsei Baro Dental Network Branches"
              />
              <a
                className="map-open-btn"
                href="https://www.google.com/maps/search/%EC%95%95%EA%B5%AC%EC%A0%95+%EC%97%B0%EC%84%B8%EB%B0%94%EB%A1%9C%EC%B9%98%EA%B3%BC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {tNet('openInMaps')}
              </a>
            </div>
            <div className="branch-pills">
              {activeBranches.map((branch) => (
                <span key={branch.id} className="branch-pill">
                  {branch.url ? (
                    <a href={branch.url} target="_blank" rel="noopener noreferrer">
                      {branch.nameEn}
                    </a>
                  ) : (
                    branch.nameEn
                  )}
                </span>
              ))}
              {comingSoonBranches.map((branch) => (
                <span key={branch.id} className="branch-pill soon">
                  {'\u2726'} {branch.nameEn} — {tNet('openingSoon')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
