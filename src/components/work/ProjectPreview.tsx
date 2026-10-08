import { ProjectVideo } from './ProjectVideo';
import { Reveal } from '../ui/Reveal';
import type { Project } from '../../data/projects';
export function ProjectPreview({ project }: { project: Project }) {
  return <Reveal><article id={project.id} data-preview-cursor={project.confidential ? 'LOCKED' : 'VIEW PROJECT ↗'} className={`project-preview accent--${project.accent}${project.confidential ? ' project-preview--locked' : ''}`} aria-labelledby={`${project.id}-title`}>
    <header className="project-heading">
      <span className="project-number">{project.number}<i aria-hidden="true" /></span>
      <h3 id={`${project.id}-title`}>{project.href ? <a className="project-page-link" href={project.href}>{project.title}</a> : project.title}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-disciplines muted">{project.disciplines}</p>
      {project.confidential && <p className="nda-label"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="7" width="10" height="8" rx="1" /><path d="M5 7V4a3 3 0 0 1 6 0v3M8 10v2" /></svg>Password protected / NDA</p>}
    </header>
    <div className="project-media">
      {project.video ? <ProjectVideo {...project.video} /> : project.image && <img src={project.image.src} alt={project.image.alt} loading="lazy" decoding="async" />}
    </div>
  </article></Reveal>;
}
