import { useEffect, useState } from 'react';
import { FloatingContact, Layout } from './components/Layout';
import { Lang } from './data/content';
import { About } from './pages/About';
import { Consult } from './pages/Consult';
import { Courses } from './pages/Courses';
import { Donate } from './pages/Donate';
import { Home } from './pages/Home';
import { PartnerDetail } from './pages/PartnerDetail';
import { Teachers } from './pages/Teachers';

const validPages = new Set(['home', 'about', 'courses', 'teachers', 'consult', 'donate']);

function readHash() {
  const value = window.location.hash.replace('#/', '') || 'home';
  if (value.startsWith('partner/')) {
    return value;
  }
  return validPages.has(value) ? value : 'home';
}

export function App() {
  const [page, setPageState] = useState(readHash);
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('qingjin-lang') === 'en' ? 'en' : 'zh'));
  const [contactOpen, setContactOpen] = useState(false);

  const setPage = (target: string) => {
    setPageState(target);
    window.location.hash = `/${target}`;
  };

  useEffect(() => {
    const onHashChange = () => setPageState(readHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    localStorage.setItem('qingjin-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const pageProps = { lang };
  const content = page.startsWith('partner/')
    ? <PartnerDetail lang={lang} slug={page.replace('partner/', '')} />
    : {
      home: <Home lang={lang} openContact={() => setContactOpen(true)} setPage={setPage} />,
      about: <About {...pageProps} />,
      courses: <Courses {...pageProps} />,
      teachers: <Teachers {...pageProps} />,
      consult: <Consult {...pageProps} />,
      donate: <Donate {...pageProps} />,
    }[page];

  return (
    <Layout
      lang={lang}
      page={page}
      setLang={setLang}
      setPage={setPage}
      openContact={() => setContactOpen(true)}
    >
      {content}
      <FloatingContact lang={lang} visible={contactOpen} onClose={() => setContactOpen(false)} />
    </Layout>
  );
}
