import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <span className="label">{t('label')}</span>
            <h2 className="h2">{t('title')}<br /><em>{t('titleEm')}</em></h2>
            <p className="body">{t('desc')}</p>
            <div className="ch-cards">
              <div className="ch-card">
                <div className="ch-logo" style={{ background: '#FEE500' }}>{'💬'}</div>
                <div className="ch-info">
                  <strong>{t('kakao')}</strong>
                  <span>{t('kakaoId')}</span>
                </div>
                <a href="#" className="btn btn-kakao ch-btn">{t('chatNow')}</a>
              </div>
              <div className="ch-card">
                <div className="ch-logo" style={{ background: '#06C755' }}>{'💬'}</div>
                <div className="ch-info">
                  <strong>{t('line')}</strong>
                  <span>{t('lineId')}</span>
                </div>
                <a href="#" className="btn btn-line ch-btn">{t('chatNow')}</a>
              </div>
              <div className="ch-card">
                <div className="ch-logo" style={{ background: '#25D366' }}>{'💬'}</div>
                <div className="ch-info">
                  <strong>{t('whatsapp')}</strong>
                  <span>{t('whatsappId')}</span>
                </div>
                <a href="#" className="btn btn-wa ch-btn">{t('chatNow')}</a>
              </div>
            </div>
            <div className="resp-note">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              {t('responseNote')}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
