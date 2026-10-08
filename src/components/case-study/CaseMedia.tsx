import { useEffect, useRef } from 'react';
import { Reveal } from '../ui/Reveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
const assetRoot = '/images/reckitt-admin/';
export const caseAsset = (name: string) => assetRoot + encodeURIComponent(name);
export function CaseImage({ file, alt, caption, width, height, eager = false }: { file: string; alt: string; caption: string; width: number; height: number; eager?: boolean }) {
  return <Reveal className="case-media"><figure><a href={caseAsset(file)} target="_blank" rel="noopener noreferrer" aria-label={`${caption} — open full-size image in a new tab`}><img src={caseAsset(file)} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} decoding="async" /></a><figcaption><span>{caption}</span><a href={caseAsset(file)} target="_blank" rel="noopener noreferrer">View full size <span aria-hidden="true">↗</span><span className="case-sr-only"> (opens in a new tab)</span></a></figcaption></figure></Reveal>;
}
export function CaseVideo({ file, poster, caption }: { file: string; poster: string; caption: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  // Remember a deliberate native-control pause across viewport changes.
  const userPaused = useRef(false);
  const automaticPause = useRef(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const pause = () => { if (!video.paused) { automaticPause.current = true; video.pause(); } };
    const onPause = () => { if (automaticPause.current) automaticPause.current = false; else userPaused.current = true; };
    const onPlay = () => { userPaused.current = false; };
    video.addEventListener('pause', onPause); video.addEventListener('play', onPlay);
    let visible = false;
    const sync = () => {
      if (!visible || document.hidden || reduced) pause();
      else if (!userPaused.current) void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0.2 });
    observer.observe(video);
    document.addEventListener('visibilitychange', sync);
    if (reduced) pause();
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); video.removeEventListener('pause', onPause); video.removeEventListener('play', onPlay); video.pause(); };
  }, [reduced]);
  return <figure className="case-video"><video ref={ref} muted loop playsInline controls preload="none" poster={caseAsset(poster)} aria-label={caption}><source src={caseAsset(file)} type="video/mp4" /></video><figcaption>{caption}</figcaption></figure>;
}
