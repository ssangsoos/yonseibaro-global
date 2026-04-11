'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'th', label: 'ภาษาไทย' },
];

export default function Topbar() {
  const t = useTranslations('topbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-inner">
          <div className="lang-tabs">
            {locales.map((l) => (
              <button
                key={l.code}
                className={`lang-tab${locale === l.code ? ' active' : ''}`}
                onClick={() => switchLocale(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href="#contact" className="topbar-cta">{t('cta')}</a>
        </div>
      </div>
    </div>
  );
}
