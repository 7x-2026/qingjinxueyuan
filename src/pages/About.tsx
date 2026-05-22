import { Hero, SectionTitle } from '../components/Layout';
import { images, Lang, pageCopy } from '../data/content';
import { PartnerSection } from './Home';

export function About({ lang }: { lang: Lang }) {
  return (
    <>
      <Hero compact image={images.aboutHero} title={pageCopy.about.title[lang]} text={pageCopy.about.subtitle[lang]} />
      <section className="section narrow">
        <SectionTitle title={pageCopy.about.title[lang]} subtitle={pageCopy.about.subtitle[lang]} />
        <p>{pageCopy.about.body[lang]}</p>
        <div className="image-row">
          {images.aboutGallery.map((image) => <img key={image} src={image} alt="" />)}
        </div>
        <SectionTitle title={pageCopy.sections.enrollment[lang]} subtitle="Enrollment Plan" />
        <p>{pageCopy.about.enrollment[lang]}</p>
        <div className="image-row">
          {images.enrollment.map((image) => <img key={image} src={image} alt="" />)}
        </div>
        <SectionTitle title={lang === 'zh' ? '培养方向' : 'Talent Development Goals'} subtitle="Talent Development Goals" />
        <p>{pageCopy.about.development[lang]}</p>
        <div className="image-row two">
          {images.development.map((image) => <img key={image} src={image} alt="" />)}
        </div>
        <SectionTitle title={lang === 'zh' ? '青衿社区' : 'Community'} subtitle="Community" />
        <p>{pageCopy.about.community[lang]}</p>
        <img className="wide-image" src={images.community} alt={lang === 'zh' ? '青衿社区' : 'Community'} />
      </section>
      <PartnerSection lang={lang} />
    </>
  );
}
