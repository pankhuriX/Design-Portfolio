import { useHomeInteractions } from '../hooks/useHomeInteractions';
import '../styles/interactions.css';
import { PageShell } from '../components/layout/PageShell';
import { Hero } from '../components/home/Hero';
import { SelectedWork } from '../components/work/SelectedWork';
import { Experiments } from '../components/home/Experiments';
export function HomePage() {
  useHomeInteractions();
  return <PageShell><Hero /><SelectedWork /><Experiments /><div className="preview-cursor" aria-hidden="true"><span className="preview-cursor-label" /></div></PageShell>;
}
