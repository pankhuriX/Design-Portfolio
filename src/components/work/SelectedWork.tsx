import { PageContainer } from '../layout/PageContainer';
import { NumberLabel } from '../ui/NumberLabel';
import { ProjectPreview } from './ProjectPreview';
import { projects } from '../../data/projects';

export function SelectedWork() {
  return <section id="work" className="section selected-work" aria-labelledby="work-title">
    <PageContainer>
      <div className="work-heading"><NumberLabel number="01">Selected Work</NumberLabel>
      <h2 id="work-title">Selected<br />work</h2></div>
      <div className="project-list">{projects.map(project => <ProjectPreview key={project.id} project={project} />)}</div>
    </PageContainer>
  </section>;
}
