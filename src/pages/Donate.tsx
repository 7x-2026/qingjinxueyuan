import { useState } from 'react';
import { Hero, SectionTitle } from '../components/Layout';
import { images, Lang } from '../data/content';

export function Donate({ lang }: { lang: Lang }) {
  const [done, setDone] = useState(false);

  return (
    <>
      <Hero compact image={images.donateHero} title={lang === 'zh' ? '捐赠' : 'Donate'} text={lang === 'zh' ? '感谢您为华德福社区所做的一切，希望更多的人也能有机会体验我们所提供的一切美好。' : 'Thank you for supporting this educational community and its future.'} />
      <section className="section narrow">
        <SectionTitle title={lang === 'zh' ? '支持青衿学院，共同成就未来' : 'Support Qingjin Academy'} />
        <p>{lang === 'zh' ? '每一份捐赠对青衿学院都至关重要。您的支持不仅直接推动我们吸引、培养和发展卓越的教师及研究人员，更助力我们拓展课程体系，使青衿学院能够不断适应新一代学子的需求，并涵盖更广泛的学习群体。' : 'Every contribution helps the academy develop faculty, research, curriculum, and learning opportunities for more young people.'}</p>
        <SectionTitle title={lang === 'zh' ? '如何捐赠' : 'How to Donate'} />
        <p>{lang === 'zh' ? '当前网站仅提供前端展示。请通过咨询微信或联系电话确认真实捐赠方式。' : 'This website currently provides a front-end demonstration only. Please contact us to confirm actual donation methods.'}</p>
        <form className="donation-form" onSubmit={(event) => { event.preventDefault(); setDone(true); }}>
          <label>
            {lang === 'zh' ? '捐赠金额' : 'Donation Amount'}
            <input defaultValue="¥1000" />
          </label>
          <div className="amount-grid">
            {['¥100', '¥200', '¥500', '¥1000'].map((amount) => <button type="button" key={amount}>{amount}</button>)}
          </div>
          <label>
            {lang === 'zh' ? '姓名' : 'Name'}
            <input placeholder={lang === 'zh' ? '请输入姓名' : 'Your name'} />
          </label>
          <label>
            {lang === 'zh' ? '邮箱' : 'Email'}
            <input placeholder="name@example.com" />
          </label>
          <label>
            {lang === 'zh' ? '留言' : 'Message'}
            <textarea placeholder={lang === 'zh' ? '输入您的详细信息' : 'Optional message'} />
          </label>
          <button className="pill submit" type="submit">{lang === 'zh' ? '去支付' : 'Continue'}</button>
          {done && <p className="form-hint">{lang === 'zh' ? '演示表单已提交。真实捐赠请联系学院确认。' : 'Demo submitted. Please contact the academy to confirm a real donation.'}</p>}
        </form>
      </section>
    </>
  );
}
