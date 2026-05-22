import { ArrowRight } from 'lucide-react';
import { Hero, SectionTitle } from '../components/Layout';
import { courses, homePurposes, images, Lang, pageCopy, partners, programs, teachers } from '../data/content';

export function Home({ lang, openContact, setPage }: { lang: Lang; openContact: () => void; setPage: (page: string) => void }) {
  return (
    <>
      <Hero
        image={images.homeHero}
        title={pageCopy.hero.homeTitle[lang]}
        text={pageCopy.hero.homeText[lang]}
        action={<button className="pill" onClick={openContact}>{lang === 'zh' ? '咨询与报名' : 'Admissions'} <ArrowRight size={16} /></button>}
      />
      <section className="quote-band">
        <p>“ {pageCopy.hero.quote[lang]} ”</p>
      </section>

      <section className="section">
        <SectionTitle title={pageCopy.sections.purpose[lang]} subtitle="Our Education Purpose" />
        <div className="purpose-grid">
          {homePurposes.map((item) => (
            <article className="purpose-card" key={item.title.zh}>
              <h3>{item.title[lang]}</h3>
              <p>{item.text[lang]}</p>
              <img src={item.image} alt={item.title[lang]} />
            </article>
          ))}
        </div>
        <button className="pill center" onClick={() => setPage('about')}>{lang === 'zh' ? '了解学院' : 'About us'} <ArrowRight size={16} /></button>
      </section>

      <section className="section tinted">
        <SectionTitle title={pageCopy.sections.enrollment[lang]} subtitle="Enrollment Plan" light />
        <p className="lead light">{lang === 'zh' ? '实践第三个七年（即14-21岁）的教育，帮助年轻人发展兴趣、探索世界，实现这一生来到地球上的使命。' : 'Education for young people in the third seven-year cycle, supporting interest, world exploration, and vocation.'}</p>
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.title.zh}>
              <img src={program.image} alt={program.title[lang]} />
              <div>
                <h3>{program.title[lang]}</h3>
                <strong>{program.age[lang]}</strong>
                <p>{program.text[lang]}</p>
              </div>
            </article>
          ))}
        </div>
        <button className="pill center" onClick={openContact}>{lang === 'zh' ? '报名咨询' : 'Apply now'} <ArrowRight size={16} /></button>
      </section>

      <section className="section deep">
        <SectionTitle title={pageCopy.sections.courses[lang]} subtitle="Our Courses" light />
        <div className="course-preview">
          {courses.slice(0, 6).map((course) => (
            <article className="mini-card" key={course.title.zh}>
              <img src={course.image} alt={course.title[lang]} />
              <h3>{course.title[lang]}</h3>
              <p>{course.description[lang]}</p>
            </article>
          ))}
        </div>
        <button className="pill center" onClick={() => setPage('courses')}>{lang === 'zh' ? '了解详情' : 'View courses'} <ArrowRight size={16} /></button>
      </section>

      <section className="section teacher-band">
        <SectionTitle title={pageCopy.sections.teachers[lang]} subtitle="Our Teachers" light />
        <p className="lead light">{lang === 'zh' ? '师资团队由20余位华德福教育专家组成，融合东西方文化，致力于提供深刻而全面的生命教育。' : 'Our faculty brings together Waldorf educators, artists, scholars, and practitioners across cultures.'}</p>
        <div className="teacher-preview">
          {teachers.slice(0, 6).map((teacher) => (
            <article className="teacher-card" key={teacher.name}>
              <img src={teacher.image} alt={teacher.name} />
              <h3>{teacher.name}</h3>
              <p>{teacher.role[lang]}</p>
            </article>
          ))}
        </div>
        <button className="pill center" onClick={() => setPage('teachers')}>{lang === 'zh' ? '认识老师' : 'Meet faculty'} <ArrowRight size={16} /></button>
      </section>

      <PartnerSection lang={lang} />
    </>
  );
}

export function PartnerSection({ lang }: { lang: Lang }) {
  return (
    <section className="section partners">
      <SectionTitle title={pageCopy.sections.communities[lang]} subtitle="Collaborative Global Ecological Community" />
      <div className="partner-grid">
        {partners.filter((partner) => partner.group === 'community').map((partner) => (
          <article key={partner.name}>
            <strong>{partner.name}</strong>
            <p>{partner.caption[lang]}</p>
          </article>
        ))}
      </div>
      <SectionTitle title={pageCopy.sections.schools[lang]} subtitle="Partnering global universities" />
      <div className="partner-grid schools">
        {partners.filter((partner) => partner.group === 'school').map((partner) => (
          <article key={partner.name}>
            <strong>{partner.name}</strong>
            <p>{partner.caption[lang]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
