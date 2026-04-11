import { useTranslations } from 'next-intl';

export default function Treatment() {
  const t = useTranslations('treatment');

  const alignerBrands = t.raw('aligner.brands') as string[];
  const alignerPoints = t.raw('aligner.points') as string[];
  const laminateBrands = t.raw('laminate.brands') as string[];
  const laminatePoints = t.raw('laminate.points') as string[];

  return (
    <section className="treatment section" id="treatment">
      <div className="container">
        <div className="treatment-head">
          <span className="label">{t('label')}</span>
          <h2 className="h2">{t('title')}<br /><em>{t('titleEm')}</em></h2>
          <p className="body">{t('subtitle')}</p>
        </div>
        <div className="treatment-grid">
          <div className="t-card">
            <div className="t-card-top">
              <span className="t-tag">{t('aligner.tag')}</span>
              <h3 className="t-name">Invisible<br />Orthodontics</h3>
              <p className="t-line">{t('aligner.line')}</p>
            </div>
            <div className="t-card-body">
              <div className="t-brands">
                {alignerBrands.map((brand: string, i: number) => (
                  <span key={i} className="t-brand-pill">{brand}</span>
                ))}
              </div>
              <div className="t-points">
                {alignerPoints.map((point: string, i: number) => (
                  <div key={i} className="t-point">
                    <div className="t-dot" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn btn-outline">{t('aligner.cta')}</a>
            </div>
          </div>
          <div className="t-card">
            <div className="t-card-top">
              <span className="t-tag">{t('laminate.tag')}</span>
              <h3 className="t-name">Smile<br />Redesign</h3>
              <p className="t-line">{t('laminate.line')}</p>
            </div>
            <div className="t-card-body">
              <div className="t-brands">
                {laminateBrands.map((brand: string, i: number) => (
                  <span key={i} className="t-brand-pill">{brand}</span>
                ))}
              </div>
              <div className="t-points">
                {laminatePoints.map((point: string, i: number) => (
                  <div key={i} className="t-point">
                    <div className="t-dot" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn btn-outline">{t('laminate.cta')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
