import { PageContainer } from '../layout/PageContainer';
import { NumberLabel } from '../ui/NumberLabel';

const principles: { title: string; accent: string; description?: string }[] = [
  { title: 'FIX THINGS.', accent: 'red', description: 'I love fixing things, asking ‘why,’ and designing tools that help people work confidently, without needing a manual.' },
  { title: 'UNDERSTAND SYSTEMS.', accent: 'yellow', description: 'I’m fascinated by how complex systems work together, and I bring that curiosity into simplifying workflows and building scalable design systems.' },
  { title: 'ITERATE WITH CARE.', accent: 'blue', description: 'Whether refining a dashboard or perfecting that cheesecake recipe, I design with structure, iteration, and care for detail.' },
];

export function HowIWork() {
  return <section id="how-i-work" className="section how-i-work" aria-labelledby="how-i-work-title"><PageContainer>
    <NumberLabel number="02">How I work</NumberLabel>
    <h2 id="how-i-work-title" className="principles-heading">THREE THINGS<br />THAT GUIDE ME</h2>
    <ol className="principles-list">{principles.map((principle, index) => <li className={`principle principle--${principle.accent}`} key={principle.title}>
      <span className="number-label principle-number">{String(index + 1).padStart(2, '0')}<i aria-hidden="true" /></span>
      <h3>{principle.title}</h3>
      {principle.description && <p>{principle.description}</p>}
    </li>)}</ol>
  </PageContainer></section>;
}
