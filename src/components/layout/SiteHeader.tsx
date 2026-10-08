import { useEffect, useState } from 'react';
import { PageContainer } from './PageContainer';
import { navigation } from '../../data/home';
export function SiteHeader() {
  const onAbout = window.location.pathname.replace(/\/+$/, '') === '/about';
  const [active, setActive] = useState(onAbout ? 'about' : 'hero');
  useEffect(() => {
    const update = () => {
      const ids = onAbout ? ['about', 'contact'] : ['hero', 'work', 'experiments', 'contact'];
      let current = onAbout ? 'about' : 'hero';
      for (const id of ids) if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= window.innerHeight / 3) current = id;
      setActive(current);
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [onAbout]);
  return <header className="site-header"><PageContainer className="header-inner">
    <a className="wordmark" href="/" aria-label="Pankhuri — home">Pankhuri</a>
    <nav aria-label="Main navigation">{navigation.map(item => <a key={item.id} href={item.href} aria-current={active === item.id ? item.id === 'about' ? 'page' : 'location' : undefined}>{item.label}</a>)}</nav>
  </PageContainer></header>;
}
