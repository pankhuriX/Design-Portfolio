import { AboutGallery } from '../components/about/AboutGallery';
import { PageShell } from '../components/layout/PageShell';
import { About } from '../components/home/About';
import { HowIWork } from '../components/home/HowIWork';
import { Experience } from '../components/home/Experience';
import { Testimonials } from '../components/home/Testimonials';
import '../styles/about-experience.css';
export function AboutPage() {
  return <PageShell><div className="about-page"><About /><HowIWork /><AboutGallery /><Experience /><Testimonials /></div></PageShell>;
}
