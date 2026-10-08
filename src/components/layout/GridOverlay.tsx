import { createContext, useContext, useRef, useState, type ReactNode } from 'react';
import { PageContainer } from './PageContainer';
import '../../styles/grid-overlay.css';

const GridContext = createContext({ pinned: false, toggle: () => {}, preview: (_value: boolean) => {} });

export function GridProvider({ children }: { children: ReactNode }) {
  const [pinned, setPinned] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  return <GridContext.Provider value={{ pinned, toggle: () => setPinned(value => !value), preview: setPreviewing }}>
    {children}
    <div id="layout-grid" className={`layout-grid-overlay ${pinned || previewing ? 'is-visible' : ''}`} aria-hidden="true">
      <PageContainer className="layout-grid-guides">{Array.from({ length: 12 }, (_, index) => <span key={index} />)}</PageContainer>
    </div>
  </GridContext.Provider>;
}

export function GridToggle({ children = 'SHOW GRID', className = '', previewOnFocus = false }: { children?: ReactNode; className?: string; previewOnFocus?: boolean }) {
  const { pinned, toggle, preview } = useContext(GridContext);
  const pointerType = useRef('mouse');
  return <button type="button" className={`grid-toggle ${className}`} aria-pressed={pinned} aria-controls="layout-grid"
    onPointerDown={event => { pointerType.current = event.pointerType; }}
    onPointerEnter={event => { if (event.pointerType === 'mouse') preview(true); }}
    onPointerLeave={() => preview(false)} onPointerCancel={() => preview(false)}
    onFocus={() => { if (previewOnFocus) preview(true); }} onBlur={() => preview(false)}
    onClick={event => { if (event.detail === 0 || pointerType.current !== 'mouse') toggle(); }}>
    {children}
  </button>;
}
