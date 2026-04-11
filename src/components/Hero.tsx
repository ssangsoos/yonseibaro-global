import { useTranslations } from 'next-intl';
import Image from 'next/image';

const origins = [
  { flag: '\u{1F1EF}\u{1F1F5}', name: 'Japan' },
  { flag: '\u{1F1E8}\u{1F1F3}', name: 'China' },
  { flag: '\u{1F1F9}\u{1F1ED}', name: 'Thailand' },
  { flag: '\u{1F1F9}\u{1F1FC}', name: 'Taiwan' },
  { flag: '\u{1F1F8}\u{1F1EC}', name: 'Singapore' },
];

export default function Hero() {
  const t = useTranslations('hero');

  const subtitleParts = t('subtitle').split('{highlight}');

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="origin-pills">
              {origins.map((o) => (
                <span key={o.name} className="origin-pill">{o.flag} {o.name}</span>
              ))}
            </div>
            <span className="label" style={{ color: 'var(--purple-soft)' }}>{t('label')}</span>
            <div className="hero-title">
              <h1 className="h1">
                {t('titleLine1')}<br />
                {t('titleLine2')}<br />
                <em>{t('titleLine3')}</em>
              </h1>
            </div>
            <p className="hero-sub">
              {subtitleParts[0]}
              <strong>{t('subtitleHighlight')}</strong>
              {subtitleParts[1]}
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">
                {t('ctaPrimary')}
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#twopath" className="btn btn-ghost-white">{t('ctaSecondary')}</a>
            </div>
            <p className="hero-note">{t('note')}</p>
          </div>
          <div className="hero-visual">
            <div className="hero-img">
              <Image
                src="/images/team.jpg"
                alt="Yonsei Baro Dental Network"
                width={600}
                height={750}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: 'var(--r-lg)' }}
                priority
              />
            </div>
            <div className="hero-badge hb-1">
              <div className="badge-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div className="badge-text">
                <strong>{t('badgePurpleDiamond')}</strong>
                <span>{t('badgePurpleDiamondSub')}</span>
              </div>
            </div>
            <div className="hero-badge hb-2">
              <span className="badge-num">14</span>
              <span className="badge-desc">{t('badgeBranches')}<br />{t('badgeBranchesSub')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
