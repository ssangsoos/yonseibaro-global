import { useTranslations } from 'next-intl';

const CheckIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

export default function TwoPath() {
  const t = useTranslations('twoPath');

  const pathAPoints = t.raw('pathA.points') as string[];
  const pathBPoints = t.raw('pathB.points') as string[];

  return (
    <section className="twopath section" id="twopath">
      <div className="container">
        <div className="twopath-head">
          <span className="label">{t('label')}</span>
          <h2 className="h2">{t('title')}<br /><em>{t('titleEm')}</em></h2>
          <p className="body">{t('subtitle')}</p>
        </div>
        <div className="twopath-grid">
          <div className="path-card path-a">
            <span className="path-emoji">{t('pathA.emoji')}</span>
            <h3 className="path-title">{t('pathA.title')}<br /><em>{t('pathA.titleEm')}</em></h3>
            <p className="path-desc">{t('pathA.desc')}</p>
            <div className="path-points">
              {pathAPoints.map((point: string, i: number) => (
                <div key={i} className="path-point">
                  <div className="point-check"><CheckIcon /></div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary">{t('pathA.cta')}</a>
          </div>
          <div className="path-card path-b">
            <span className="path-emoji">{t('pathB.emoji')}</span>
            <h3 className="path-title">{t('pathB.title')}<br /><em>{t('pathB.titleEm')}</em></h3>
            <p className="path-desc">{t('pathB.desc')}</p>
            <div className="path-points">
              {pathBPoints.map((point: string, i: number) => (
                <div key={i} className="path-point">
                  <div className="point-check"><CheckIcon /></div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary">{t('pathB.cta')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
