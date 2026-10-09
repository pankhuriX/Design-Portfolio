import { PageContainer } from '../layout/PageContainer';
import { NumberLabel } from '../ui/NumberLabel';
export function About() {
  return <section id="about" className="section about-section" aria-labelledby="about-title"><PageContainer>
    <div className="about-grid">
      <div className="about-heading"><NumberLabel number="01">About me</NumberLabel><h1 id="about-title">ABOUT<br />ME</h1></div>
      <img className="about-portrait" src="/images/homepage/About%20me.png" alt="Pankhuri in a yellow and blue editorial portrait composition" width="5382" height="6534" fetchPriority="high" />
      <div className="about-copy"><span className="number-label muted">AI-enabled product designer</span><h2>Simple experiences.<br /><span className="muted">Complex problems.</span></h2>
        <p>I’m a product designer working at the intersection of research, UX, and technology—turning complex systems into clear, intuitive experiences and exploring how AI can support better ways of designing and building.</p>
        <div className="about-detail"><h3 className="number-label">Education</h3><p><strong>Bauhaus-Universität Weimar</strong><br />M.Sc. Human-Computer Interaction</p></div>
        <div className="about-detail"><h3 className="number-label">Focus</h3><p>User Research · UX Design<br />Interaction Design · Design Systems<br />Service Design · HMI<br />AI-assisted Design &amp; Prototyping</p></div>
        <div className="about-detail"><h3 className="number-label">Tools</h3><p>Figma · Sketch · Miro · Adobe CC<br />Claude Code · Codex · MCP</p></div>
      </div>
    </div>
    <div className="about-signoff"><span className="about-signoff-rule" aria-hidden="true" /><span className="about-signoff-square" aria-hidden="true" /><p>DESIGN<br />PEOPLE<br />SYSTEMS<br />SOCIETY</p></div>
  </PageContainer></section>;
}
