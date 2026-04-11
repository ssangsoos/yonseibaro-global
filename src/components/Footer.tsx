import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="f-logo-name">Yonsei Baro Dental Network</div>
            <div className="f-logo-tag">
              <b>B</b>etter <b>A</b>esthetics. <b>R</b>ight <b>O</b>rthodontics.
            </div>
            <p className="f-desc">{t('tagline')}</p>
          </div>
          <div>
            <p className="f-col-title">{t('colTreatments')}</p>
            <div className="f-links">
              <a href="#treatment">Invisalign</a>
              <a href="#treatment">Angel Aligner</a>
              <a href="#treatment">No-Prep Laminate</a>
            </div>
          </div>
          <div>
            <p className="f-col-title">{t('colInfo')}</p>
            <div className="f-links">
              <a href="#twopath">{tNav('whoIsThisFor')}</a>
              <a href="#cases">{tNav('cases')}</a>
              <a href="#network">{tNav('network')}</a>
            </div>
          </div>
          <div>
            <p className="f-col-title">{t('colContact')}</p>
            <div className="f-links">
              <a href="#contact">{t('onlineConsultation')}</a>
              <a href="#">KakaoTalk</a>
              <a href="#">LINE</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="f-copy">{t('copyright')}</p>
          <p className="f-operated">{t('operated')}</p>
          <div className="f-legal">
            <a href="#">{t('privacy')}</a>
            <a href="#">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
