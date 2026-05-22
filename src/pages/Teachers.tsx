import { useState } from 'react';
import { Hero } from '../components/Layout';
import { images, Lang, teacherCategories, teachers } from '../data/content';

export function Teachers({ lang }: { lang: Lang }) {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? teachers : teachers.filter((teacher) => teacher.category === active);

  return (
    <>
      <Hero compact image={images.teacherHero} title={lang === 'zh' ? '我们的老师' : 'Our Teachers'} text={lang === 'zh' ? '师资团队由20余位华德福教育专家组成，融合东西方文化，致力于提供深刻而全面的生命教育。' : 'A cross-cultural faculty of educators, scholars, artists, and practitioners.'} />
      <section className="section">
        <div className="tabs pill-tabs">
          {teacherCategories.map((category) => (
            <button className={active === category.id ? 'active' : ''} key={category.id} onClick={() => setActive(category.id)}>
              {category.title[lang]}
            </button>
          ))}
        </div>
        <div className="teacher-grid">
          {visible.map((teacher) => (
            <article className="teacher-card flat" key={teacher.name}>
              <img src={teacher.image} alt={teacher.name} />
              <h3>{teacher.name}</h3>
              <p>{teacher.role[lang]}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
