import { useTranslations } from 'next-intl';
import { branches } from '@/data/branches';

function MapPinIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15,3 21,3 21,9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

export default function TeamNetwork() {
  const tTeam = useTranslations('team');
  const tNet = useTranslations('network');

  const activeBranches = branches.filter(b => b.status === 'active');

  // 지점 주소를 Google Maps 검색 URL로 변환
  const getMapUrl = (branch: typeof branches[0]) => {
    const query = encodeURIComponent(`${branch.nameKo} 연세바로치과 ${branch.address}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  return (
    <section className="team-net section" id="network">
      <div className="container">
        <div className="team-net-grid">
          {/* Team Side */}
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

          {/* Network Side — Branch Directory */}
          <div className="net-side">
            <span className="label">{tNet('label')}</span>
            <h2 className="h2 h2-light">{tNet('title')}<br /><em>{tNet('titleEm')}</em></h2>
            <p className="net-desc">{tNet('desc')}</p>

            <div className="branch-directory">
              {activeBranches.map((branch) => (
                <a
                  key={branch.id}
                  className="branch-item"
                  href={branch.url || getMapUrl(branch)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="branch-item-top">
                    <strong className="branch-name">{branch.nameEn}</strong>
                    <span className="branch-name-ko">{branch.nameKo} 연세바로치과</span>
                  </div>
                  <div className="branch-item-details">
                    <span className="branch-addr"><MapPinIcon /> {branch.address}</span>
                    <span className="branch-phone"><PhoneIcon /> {branch.phone}</span>
                  </div>
                  <span className="branch-map-link">
                    <ExternalIcon /> {tNet('openInMaps')}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
