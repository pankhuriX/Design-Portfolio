import { WordGamePreview } from './WordGamePreview';
import { ProjectVideo } from '../work/ProjectVideo';
export type ExperimentMedia =
  | { type: 'word-game' }
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; label: string; poster: string };
export function ExperimentPreview({ media, title, number }: { media?: ExperimentMedia; title: string; number: string }) {
  return <div className={`experiment-preview${media ? ' experiment-preview--media' : ''}`}>
    {media?.type === 'word-game' ? <WordGamePreview /> : media?.type === 'image' ? <img src={media.src} alt={media.alt} loading="lazy" decoding="async" /> :
      media?.type === 'video' ? <ProjectVideo src={media.src} label={media.label} poster={media.poster} /> :
      <><span className="number-label">{number} — Experiment</span><p>{title}</p><span className="number-label">Preview coming soon</span></>}
  </div>;
}
