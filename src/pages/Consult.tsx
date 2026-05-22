import { Hero, SectionTitle } from '../components/Layout';
import { contact, images, Lang } from '../data/content';

export function Consult({ lang }: { lang: Lang }) {
  return (
    <>
      <Hero compact image={images.consultHero} title={lang === 'zh' ? '咨询与报名' : 'Admissions'} text={lang === 'zh' ? '了解申请流程、收费标准、缴费方式与联系方式。' : 'Learn about the application process, tuition, payment, and contact details.'} />
      <section className="section narrow">
        <SectionTitle title={lang === 'zh' ? '申请流程' : 'Application Process'} />
        <ul className="text-list">
          {(lang === 'zh'
            ? ['咨询', '报名：填写申请表单，学生和家长均需填写', '在线面试：提供相关成绩资料', '面试通过后完成缴费', '颁发学校录取通知书', '入学就读']
            : ['Consultation', 'Application form completed by student and guardian', 'Online interview and academic records', 'Payment after acceptance', 'Admission notice issued', 'Enrollment']
          ).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <SectionTitle title={lang === 'zh' ? '收费标准' : 'Tuition'} />
        <div className="note-box">
          <p>{lang === 'zh' ? '学费：8万/学年（含32周校内课、国内游学学费）' : 'Tuition: RMB 80,000 per academic year, including 32 weeks of campus courses and domestic study travel tuition.'}</p>
          <p>{lang === 'zh' ? '食宿费：150元/天，3.6万/学年。合计：11.6万/年。' : 'Boarding: RMB 150 per day, about RMB 36,000 per year. Total: RMB 116,000 per year.'}</p>
          <p>{lang === 'zh' ? '国内外游学、学习实践、食宿、导游、门票等费用单独核算。' : 'Study travel, practice placement, accommodation, guides, and tickets are calculated separately.'}</p>
        </div>
        <SectionTitle title={lang === 'zh' ? '奖学金及助学金申请通道' : 'Scholarships and Work Study'} />
        <p>{lang === 'zh' ? '为了不让经济条件成为入学阻碍，学院可为品学兼优的学生设置奖学金名额，或申请勤工俭学抵扣部分学费。' : 'Scholarships and work-study options may be available for suitable students so finances do not become the only barrier.'}</p>
        <SectionTitle title={lang === 'zh' ? '缴费方式' : 'Payment'} />
        <div className="note-box">
          <strong>{lang === 'zh' ? '银行汇款 → 北京春之谷文化艺术有限公司' : 'Bank transfer to Beijing Spring Valley Culture and Art Co., Ltd.'}</strong>
          <p>{lang === 'zh' ? '账号：0200000409200268495' : 'Account: 0200000409200268495'}</p>
          <p>{lang === 'zh' ? '开户银行：中国工商银行股份有限公司北京永铁匠营支行' : 'Bank: ICBC Beijing Yongtiejiangying Branch'}</p>
        </div>
        <SectionTitle title={lang === 'zh' ? '联系我们' : 'Contact Us'} />
        <div className="contact-section">
          <div>
            <h3>{lang === 'zh' ? '林源 老师' : 'Teacher Lin Yuan'}</h3>
            {contact.phones.map((phone) => <p key={phone}>{phone}</p>)}
            <p>{contact.email}</p>
          </div>
          <div className="qr-card">
            <img src={contact.qrCode} alt="WeChat QR code" />
            <p>{lang === 'zh' ? '扫码添加微信' : 'Scan to add WeChat'}</p>
          </div>
        </div>
      </section>
    </>
  );
}
