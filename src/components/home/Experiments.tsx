import { PageContainer } from '../layout/PageContainer';
import { NumberLabel } from '../ui/NumberLabel';
import { ExperimentModule } from './ExperimentModule';
import { experiments } from '../../data/experiments';
import '../../styles/experiments.css';

export function Experiments() {
  return <section id="experiments" className="section experiments" aria-labelledby="experiments-title"><PageContainer>
    <NumberLabel number="02">Design Experiments</NumberLabel>
    <div className="experiments-intro"><h2 id="experiments-title">SMALL IDEAS.<br />BUILT TO LEARN.</h2>
      <p>Small experiments where I explore interaction, technology, and ideas outside client work.</p>
    </div>
    <div className="experiments-features">{experiments.map(experiment => <ExperimentModule key={experiment.number} experiment={experiment} />)}</div>
  </PageContainer></section>;
}
