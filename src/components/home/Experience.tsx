import { Reveal } from '../ui/Reveal';
import { PageContainer } from '../layout/PageContainer';
import { NumberLabel } from '../ui/NumberLabel';
import { experience } from '../../data/experience';
export function Experience() {
  return <section id="experience" className="section experience-section" aria-labelledby="experience-title"><PageContainer>
    <NumberLabel number="04">Experience</NumberLabel><h2 id="experience-title">WHERE I’VE WORKED</h2>
    <div className="experience-columns number-label muted" aria-hidden="true"><span>Index</span><span>Company</span><span>Role / team</span><span>Year</span><span>Disciplines</span></div>
    <Reveal><ol className="experience-list">{experience.map((item, index) => <li className="experience-row" key={item.company}>
      <span className="experience-index number-label">{String(index + 1).padStart(2, '0')}</span>
      <h3>{item.company}</h3><p className="experience-role">{item.role}</p>
      <time className="experience-year" dateTime={item.year}>{item.year}</time>
      <p className="experience-disciplines muted">{item.disciplines}</p>
    </li>)}</ol></Reveal>
  </PageContainer></section>;
}
