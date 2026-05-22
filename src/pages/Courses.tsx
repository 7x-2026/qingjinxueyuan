import { useState } from 'react';
import { Hero, SectionTitle } from '../components/Layout';
import { courseCategories, courses, images, Lang } from '../data/content';

export function Courses({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(courseCategories[0].id);
  const visible = courses.filter((course) => course.category === active);

  return (
    <>
      <Hero compact image={images.courseHero} title={lang === 'zh' ? '我们的课程' : 'Our Courses'} text={lang === 'zh' ? '融合高中主题课程、人智学培训、艺术活动和动手实践，培养跨文化视野、独立生活与实践能力。' : 'The curriculum combines high school themes, anthroposophic training, arts, and practical work.'} />
      <section className="section">
        <div className="tabs">
          {courseCategories.map((category) => (
            <button className={active === category.id ? 'active' : ''} key={category.id} onClick={() => setActive(category.id)}>
              {category.title[lang]}
            </button>
          ))}
        </div>
        <div className="course-grid">
          {visible.map((course) => (
            <article className="course-card" key={course.title.zh}>
              <img src={course.image} alt={course.title[lang]} />
              <h3>{course.title[lang]}</h3>
              <p>{course.description[lang]}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
