import { useId, useRef, useState, type CSSProperties, type PointerEvent } from 'react';

/** A static, locally rendered comparison: native range keyboard control plus a touch handle. */
export function ImageComparison({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const id = useId();
  const move = (event: PointerEvent<HTMLSpanElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    const rect = frame.current?.getBoundingClientRect();
    if (rect) setPosition(Math.round(Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100))));
  };
  return <figure className="image-comparison case-media">
    <div className="comparison-labels number-label"><span>Wireframe</span><span>Final interface</span></div>
    <div ref={frame} className="comparison-frame" style={{ '--comparison-position': `${position}%` } as CSSProperties}>
      <img className="comparison-after" src={after} alt="Final Launchpad showing company news, application shortcuts, and quick links." loading="lazy" />
      <img className="comparison-before" src={before} alt="Early Launchpad wireframe showing the same top-level information groups." loading="lazy" />
      <span className="comparison-divider" aria-hidden="true" onPointerDown={event => { event.currentTarget.setPointerCapture(event.pointerId); move(event); }} onPointerMove={move} onPointerUp={event => { event.currentTarget.releasePointerCapture(event.pointerId); }}><span>↔</span></span>
    </div>
    <label className="comparison-control" htmlFor={id}><span className="number-label">Compare wireframe and final interface</span><input id={id} type="range" min="0" max="100" value={position} aria-valuetext={`${position}% wireframe, ${100 - position}% final interface`} onChange={event => setPosition(Number(event.target.value))} /></label>
    <figcaption>Launchpad’s upper section: early wireframe and final dashboard recording. Drag the divider or use the slider’s arrow keys.</figcaption>
    <div className="comparison-links"><a href={before} target="_blank" rel="noopener noreferrer">Full wireframe ↗</a><a href={after} target="_blank" rel="noopener noreferrer">Final view ↗</a></div>
  </figure>;
}
