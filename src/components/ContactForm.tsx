'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

export default function ContactForm() {
  const t = useTranslations('contact');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileCount, setFileCount] = useState(0);

  const countries = t.raw('countries') as string[];
  const languages = t.raw('languages') as string[];
  const treatments = t.raw('treatments') as string[];

  return (
    <div className="c-form">
      <div className="form-head">
        <strong>{t('formTitle')}</strong>
        <span>{t('formSubtitle')}</span>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>{t('labelName')}</label>
          <input type="text" placeholder={t('placeholderName')} />
        </div>
        <div className="form-group">
          <label>{t('labelCountry')}</label>
          <select defaultValue="">
            <option value="" disabled>{t('placeholderCountry')}</option>
            {countries.map((c: string) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>{t('labelEmail')}</label>
          <input type="email" placeholder={t('placeholderEmail')} />
        </div>
        <div className="form-group">
          <label>{t('labelLanguage')}</label>
          <select defaultValue="">
            <option value="" disabled>{t('placeholderLanguage')}</option>
            {languages.map((l: string) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <label>{t('labelTreatment')}</label>
        <select defaultValue="">
          <option value="" disabled>{t('placeholderTreatment')}</option>
          {treatments.map((tr: string) => (
            <option key={tr} value={tr}>{tr}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>{t('labelMessage')}</label>
        <textarea placeholder={t('placeholderMessage')} />
      </div>
      <div
        className="upload-box"
        onClick={() => fileInputRef.current?.click()}
      >
        {fileCount > 0 ? (
          <>
            <strong>{'\u2713'} {fileCount} {t('uploadDone')}</strong>
            <span style={{ color: 'var(--purple)', fontSize: '12px' }}>{t('uploadChange')}</span>
          </>
        ) : (
          <>
            <strong>{t('uploadTitle')}</strong>
            {t('uploadDesc')}
          </>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,.pdf"
        style={{ display: 'none' }}
        onChange={(e) => setFileCount(e.target.files?.length || 0)}
      />
      <p className="form-privacy">{t('privacy')}</p>
      <button className="form-submit" type="button">{t('submit')}</button>
    </div>
  );
}
