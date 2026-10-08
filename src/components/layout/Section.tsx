import type { ReactNode } from 'react';
import { PageContainer } from './PageContainer';
import { NumberLabel } from '../ui/NumberLabel';
type SectionProps = { id: string; number: string; label: string; title: string; children: ReactNode };
export function Section({ id, number, label, title, children }: SectionProps) {
  return <section id={id} className="section" aria-labelledby={`${id}-title`}><PageContainer>
    <NumberLabel number={number}>{label}</NumberLabel>
    <div className="section-grid"><h2 id={`${id}-title`}>{title}</h2><div className="section-content">{children}</div></div>
  </PageContainer></section>;
}
