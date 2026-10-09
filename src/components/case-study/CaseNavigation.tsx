import { useEffect, useRef, useState } from 'react';
export const chapters = [
  { id: 'overview', number: '00', title: 'Overview' },
  { id: 'challenge', number: '01', title: 'Challenge' },
  { id: 'decisions', number: '02', title: 'Design decisions' },
  { id: 'journey', number: '03', title: 'Key journey' },
  { id: 'final-design', number: '04', title: 'Final design' },
  { id: 'outcome', number: '05', title: 'Outcome' },
  { id: 'reflection', number: '06', title: 'Reflection' },
];
export function CaseNavigation({ items = chapters, caseNumber = "01" }: { items?: typeof chapters; caseNumber?: string }) {
  const [active, setActive] = useState('overview');
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current?.closest<HTMLElement>('.reckitt-case');
    const header = root?.querySelector<HTMLElement>('.site-header');
    if (!root || !header) return;
    let frame = 0;
    let headerHeight = header.getBoundingClientRect().height;
    const update = () => {
      frame = 0;
      const overview = document.getElementById('overview');
      const marker = overview ? Number.parseFloat(getComputedStyle(overview).scrollMarginTop) + 1 : headerHeight;
      let current = items[0].id;
      for (const chapter of items) {
        if ((document.getElementById(chapter.id)?.getBoundingClientRect().top ?? Infinity) <= marker) current = chapter.id;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(() => {
      headerHeight = header.getBoundingClientRect().height;
      root.style.setProperty('--case-header-height', `${headerHeight}px`);
      schedule();
    });
    resize.observe(header);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => { resize.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, [items]);
  return <nav ref={ref} className="case-navigation" aria-label="Case study sections">
    <div className="case-rail"><p className="number-label">CASE STUDY {caseNumber}</p><ol>{items.map(chapter => <li key={chapter.id}><a href={`#${chapter.id}`} aria-current={active === chapter.id ? 'location' : undefined}><span>{chapter.number}</span>{chapter.title}</a></li>)}</ol></div>
    <label className="case-mobile-nav"><span className="number-label">Section</span><select value={active} onChange={event => { window.location.hash = event.target.value; }} aria-label="Case study section">{items.map(chapter => <option key={chapter.id} value={chapter.id}>{chapter.number} / {chapter.title.toUpperCase()}</option>)}</select></label>
  </nav>;
}
