import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
type Props = { src: string; label: string; poster: string };
export function ProjectVideo({ src, label, poster }: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (reduced || !video.current) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(video.current);
    return () => observer.disconnect();
  }, [reduced]);
  useEffect(() => {
    if (reduced || paused || !inView) video.current?.pause();
    else void video.current?.play().catch(() => {});
  }, [reduced, paused, inView]);
  if (reduced) return <img src={poster} alt={label + ' — still preview'} loading="lazy" />;
  return <div className="project-video">
    <video ref={video} autoPlay={inView && !paused} muted loop playsInline poster={poster} preload="none" aria-label={label}><source src={src} type="video/mp4" /></video>
    <button className="media-pause" onClick={() => setPaused(value => !value)}>{paused ? 'Play cover animation' : 'Pause cover animation'}</button>
  </div>;
}
