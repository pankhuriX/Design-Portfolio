import type { ReactNode } from 'react';
export function CaseChapter({ id, number, label, title, children, decision = false }: { id?: string; number: string; label: string; title: ReactNode; children: ReactNode; decision?: boolean }) {
  return <section id={id} className={`case-chapter ${decision ? 'case-decision' : ''}`} aria-labelledby={id ? `${id}-title` : undefined}>
    <div className="case-reading"><p className="number-label case-label">{number} — {label}</p>{decision ? <h3>{title}</h3> : <h2 id={id ? `${id}-title` : undefined}>{title}</h2>}</div>{children}
  </section>;
}
