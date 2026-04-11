import { useTranslations } from 'next-intl';
import { getCases } from '@/data/cases';
import CaseCard from './CaseCard';

export default function Cases() {
  const t = useTranslations('cases');
  const cases = getCases();

  return (
    <section className="cases section" id="cases">
      <div className="container">
        <div className="cases-head">
          <div>
            <span className="label">{t('label')}</span>
            <h2 className="h2">{t('title')}</h2>
          </div>
          <div className="filter-row">
            <button className="filter-btn active">{t('filterAll')}</button>
            <button className="filter-btn">{t('filterAligner')}</button>
            <button className="filter-btn">{t('filterLaminate')}</button>
          </div>
        </div>
        <div className="cases-grid">
          {cases.map((c) => (
            <CaseCard
              key={c.id}
              id={c.id}
              category={c.category}
              title={c.titleKey}
              meta={c.metaKey}
              images={c.images}
              labels={{
                before: t('tabBefore'),
                during: t('tabDuring'),
                after: t('tabAfter'),
              }}
            />
          ))}
        </div>
        <div className="cases-foot">
          <a href="#contact" className="btn btn-outline">{t('ctaMore')}</a>
        </div>
      </div>
    </section>
  );
}
