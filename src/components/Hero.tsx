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

  const cards = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: t('card1Title'),
      desc: t('card1Desc'),
      stat: t('card1Stat'),
      statLabel: t('card1StatLabel'),
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      ),
      title: t('card2Title'),
      desc: t('card2Desc'),
      stat: t('card2Stat'),
      statLabel: t('card2StatLabel'),
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: t('card3Title'),
      desc: t('card3Desc'),
      stat: t('card3Stat'),
      statLabel: t('card3StatLabel'),
    },
  ];

  return (
    <section className="hero" id="top">
      <div className="container">
        {/* Top: headline + CTA */}
        <div className="hero-headline">
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

        {/* 3 highlight cards */}
        <div className="hero-cards">
          {cards.map((card, i) => (
            <div key={i} className="hero-card">
              <div className="hero-card-left">
                <div className="hero-card-icon">{card.icon}</div>
                <div>
                  <strong className="hero-card-title">{card.title}</strong>
                  <p className="hero-card-desc">{card.desc}</p>
                </div>
              </div>
              <div className="hero-card-stat">
                <span className="hero-card-num">{card.stat}</span>
                <span className="hero-card-label">{card.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width landscape team photo */}
        <div className="hero-photo-wide">
          <Image
            src="/images/team.jpg"
            alt="Yonsei Baro Dental Network — Our orthodontist team"
            width={1160}
            height={420}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
