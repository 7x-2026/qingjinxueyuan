import { ArrowLeft } from 'lucide-react';
import { communityInfo, Lang, partners, schoolInfo } from '../data/content';

export function PartnerDetail({ lang, slug }: { lang: Lang; slug: string }) {
  const partner = partners.find((item) => item.slug === slug);
  const info = partner
    ? (partner.group === 'community' ? communityInfo : schoolInfo).get(partner.infoTitle)
    : undefined;

  if (!partner) {
    return (
      <section className="section partner-detail">
        <a className="back-link" href="#/home"><ArrowLeft size={18} />{lang === 'zh' ? '返回首页' : 'Back home'}</a>
        <h1>{lang === 'zh' ? '未找到合作伙伴' : 'Partner not found'}</h1>
      </section>
    );
  }

  return (
    <section className="section partner-detail">
      <a className="back-link" href="#/home"><ArrowLeft size={18} />{lang === 'zh' ? '返回首页' : 'Back home'}</a>
      <div className="partner-detail-hero">
        <div className="partner-detail-logo">
          <img src={partner.logo} alt={partner.name} />
        </div>
        <div>
          <p className="partner-detail-kicker">
            {partner.group === 'community'
              ? (lang === 'zh' ? '合作的全球生态社区' : 'Collaborative Global Ecological Community')
              : (lang === 'zh' ? '合作的全球高等学校' : 'Partnering Global University')}
          </p>
          <h1>{partner.caption.zh}</h1>
          <p>{partner.caption.en}</p>
        </div>
      </div>

      <article className="partner-detail-body">
        <h2>{info?.title ?? partner.infoTitle}</h2>
        {info?.paragraphs.length ? (
          info.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        ) : (
          <p>{lang === 'zh' ? '暂无详情信息。' : 'No detail information is available yet.'}</p>
        )}
      </article>
    </section>
  );
}
