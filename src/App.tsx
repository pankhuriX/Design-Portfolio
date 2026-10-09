import { ReckittIntranetPage } from './pages/ReckittIntranetPage';
import { ReckittAdminPage } from './pages/ReckittAdminPage';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PageShell } from './components/layout/PageShell';
import { PageContainer } from './components/layout/PageContainer';
export function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  useEffect(() => {
    document.title = path === '/work/reckitt-intranet' ? 'Reckitt Sales Intranet — Pankhuri' : path === '/work/reckitt-admin' ? 'Reckitt Admin Portal — Pankhuri' : path === '/about' ? 'About — Pankhuri' : path === '/' ? 'Pankhuri — Product Designer' : 'Page not found — Pankhuri';
  }, [path]);
  useEffect(() => {
    if (!window.location.hash) return;
    const frame = requestAnimationFrame(() => document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [path]);
  if (path === '/work/reckitt-intranet') return <ReckittIntranetPage />;
  if (path === '/work/reckitt-admin') return <ReckittAdminPage />;
  if (path === '/about') return <AboutPage />;
  if (path === '/') return <HomePage />;
  return <PageShell><PageContainer className="section"><h1>Page not found</h1><a href="/">Return home</a></PageContainer></PageShell>;
}
