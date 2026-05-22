import { ArrowUp, Menu, MessageCircle, Phone, X } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { contact, Lang, navItems } from '../data/content';

type LayoutProps = {
  children: React.ReactNode;
  lang: Lang;
  page: string;
  setLang: (lang: Lang) => void;
  setPage: (page: string) => void;
  openContact: () => void;
};

export function Header({ lang, page, setLang, setPage, openContact }: Omit<LayoutProps, 'children'>) {
  const [open, setOpen] = useState(false);

  const go = (target: string) => {
    setPage(target);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <button className="brand" onClick={() => go('home')} aria-label="Qingjin Academy home">
        青衿学院
      </button>
      <nav className={`main-nav ${open ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.page}
            className={page === item.page ? 'active' : ''}
            onClick={() => go(item.page)}
          >
            {item.label[lang]}
          </button>
        ))}
        <button className="pill small" onClick={openContact}>
          {lang === 'zh' ? '现在申请' : 'Apply'}
        </button>
        <button className="language" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
          {lang === 'zh' ? '中文 / EN' : 'EN / 中文'}
        </button>
      </nav>
      <button className="mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <strong className="footer-brand">青衿学院</strong>
          <p>
            {lang === 'zh'
              ? '服务于个体心灵觉醒 | 服务于社群意识提升 | 服务于东西方文化融合 | 服务于世界生态文明'
              : 'Individual growth | Community consciousness | East-West culture | Ecological civilization'}
          </p>
        </div>
        <div>
          <h3>{lang === 'zh' ? '联系我们' : 'Contact'}</h3>
          <p>Tel<br />{contact.phones.join(' / ')}</p>
          <p>E-mail<br />{contact.email}</p>
        </div>
        <div>
          <h3>{lang === 'zh' ? '办学地点' : 'Locations'}</h3>
          {contact.locations.map((location) => (
            <p key={location.zh}>{location[lang]}</p>
          ))}
        </div>
        <div>
          <h3>{lang === 'zh' ? '友情链接' : 'Links'}</h3>
          <p>{lang === 'zh' ? '世界和图中文教育学会' : 'World Chinese Education Association'}</p>
        </div>
      </div>
      <div className="copyright">Copyright © 2025 春之谷青衿学院（简称：青衿学院）</div>
    </footer>
  );
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header {...props} />
      <main>{props.children}</main>
      <Footer lang={props.lang} />
    </>
  );
}

export function FloatingContact({ lang, visible, onClose }: { lang: Lang; visible: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<'qr' | 'phone' | null>(null);

  return (
    <>
      <div className="floating-tools">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <ArrowUp size={18} />
          <span>{lang === 'zh' ? '返回顶部' : 'Top'}</span>
        </button>
        <button onClick={() => setMode(mode === 'phone' ? null : 'phone')} aria-label="Phone">
          <Phone size={18} />
          <span>{lang === 'zh' ? '联系电话' : 'Phone'}</span>
        </button>
        <button onClick={() => setMode(mode === 'qr' ? null : 'qr')} aria-label="Wechat">
          <MessageCircle size={18} />
          <span>{lang === 'zh' ? '咨询微信' : 'Wechat'}</span>
        </button>
      </div>
      {(mode || visible) && (
        <div className="contact-popover">
          <button className="close" onClick={() => { setMode(null); onClose(); }} aria-label="Close">×</button>
          {(mode === 'phone' && !visible) ? (
            <>
              <h3>{lang === 'zh' ? '联系我们' : 'Contact us'}</h3>
              {contact.phones.map((phone) => <p key={phone}>{phone}</p>)}
            </>
          ) : (
            <>
              <h3>{lang === 'zh' ? '扫码添加微信' : 'Scan WeChat QR'}</h3>
              <img src={contact.qrCode} alt="WeChat QR code" />
              <p>{lang === 'zh' ? '请备注：第三年级 - 孩子姓名' : 'Please note student name and grade.'}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export function Hero({
  image,
  title,
  text,
  compact = false,
  action,
}: {
  image: string;
  title: string;
  text: string;
  compact?: boolean;
  action?: React.ReactNode;
}) {
  return (
    <section className={`hero ${compact ? 'compact' : ''}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(22,35,49,.68), rgba(22,35,49,.18)), url("${image}")` }}>
      <div className="hero-inner">
        <h1>{title}</h1>
        <p>{text}</p>
        {action}
      </div>
    </section>
  );
}

export function SectionTitle({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className={`section-title ${light ? 'light' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
