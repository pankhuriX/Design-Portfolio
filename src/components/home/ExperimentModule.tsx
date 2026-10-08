import type { Experiment } from '../../data/experiments';
import { NumberLabel } from '../ui/NumberLabel';
import { Reveal } from '../ui/Reveal';
import { ExperimentPreview } from './ExperimentPreview';

export function ExperimentModule({ experiment }: { experiment: Experiment }) {
  return <Reveal className="experiment-reveal"><article className={`experiment-feature experiment-feature--${experiment.accent}`} data-preview-cursor={experiment.cursorLabel} aria-labelledby={`experiment-${experiment.number}`}>
    <div className="experiment-copy">
      <NumberLabel number={experiment.number}>Experiment</NumberLabel>
      <div><h3 id={`experiment-${experiment.number}`}>{experiment.title}</h3><p className="experiment-subtitle">{experiment.subtitle}</p></div>
      <p>{experiment.description}</p>
      <p className="experiment-metadata muted">{experiment.metadata}</p>
      <a className="experiment-play arrow-link" href={experiment.link.href} target={experiment.link.external ? '_blank' : undefined} rel={experiment.link.external ? 'noopener noreferrer' : undefined}>
        <span>{experiment.link.label}</span><span aria-hidden="true">↗</span>
        {experiment.link.external && <span className="experiment-link-hint"> (opens in a new tab)</span>}
      </a>
    </div>
    <ExperimentPreview media={experiment.preview} title={experiment.title} number={experiment.number} />
  </article></Reveal>;
}
