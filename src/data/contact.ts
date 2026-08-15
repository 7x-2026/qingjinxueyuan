import { siteImages } from './site';
import type { ContactInfo } from './types';

export const contact = {
  phones: [
    { display: '18810816390（中国地区）', href: 'tel:+8618810816390' },
    { display: '+1-3476016788（美国地区）', href: 'tel:+13476016788' },
  ],
  email: 'ningyuanyu@yahoo.com',
  emailHref: 'mailto:ningyuanyu@yahoo.com',
  locations: [
    { zh: '中国 · 湖北武当山', en: 'Wudang Mountain, Hubei, China' },
    { zh: '美国 · 波士顿', en: 'Boston, United States' },
  ],
  qrCode: siteImages.wechatQr,
} as const satisfies ContactInfo;
