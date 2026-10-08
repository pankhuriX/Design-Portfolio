import { GridToggle } from '../layout/GridOverlay';
const principles = [
  ['FORM FOLLOWS FUNCTION', 'Every visual element should have a purpose.'],
  ['GRID BEFORE DECORATION', 'Structure creates the composition.'],
  ['COLOR WITH INTENT', 'Red, blue and yellow support hierarchy rather than decoration.'],
  ['DESIGN AS A SYSTEM', 'Spacing, components and interaction follow repeatable rules.'],
];
export function SystemPrinciples() {
  return <section className="site-system" aria-labelledby="system-title">
    <h3 id="system-title">THE SYSTEM BEHIND THE SITE</h3>
    <p className="site-system-note muted">Studied in Weimar. Influenced by systems, function, and Bauhaus thinking.</p>
    <ol className="system-principles">{principles.map(([title, copy], index) => <li key={title}>
      <span className="number-label">{String(index + 1).padStart(2, '0')}</span>
      <h4>{index === 1 ? <GridToggle previewOnFocus>{title}</GridToggle> : title}</h4><p>{copy}</p>
    </li>)}</ol>
  </section>;
}
