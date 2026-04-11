import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ja', 'zh', 'th'],
  defaultLocale: 'en',
});
