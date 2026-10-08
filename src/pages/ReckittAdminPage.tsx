import { PageShell } from '../components/layout/PageShell';
import { PageContainer } from '../components/layout/PageContainer';
import { CaseChapter } from '../components/case-study/CaseChapter';
import { CaseImage, CaseVideo } from '../components/case-study/CaseMedia';
import { CaseNavigation } from '../components/case-study/CaseNavigation';
import '../styles/case-study.css';
const metadata = [
  ['My role', 'Sole hands-on UX/UI Designer'],
  ['Responsibilities', 'Research · Information Architecture · Interaction Design\nPrototyping · Testing · Developer Handoff'],
  ['Team', 'Design Manager · Product Manager · Development Team'],
  ['Duration', '12 months'], ['Client & partner', 'Reckitt Benckiser\nMindstix Software Labs'],
];
export function ReckittAdminPage() {
  return <div className="reckitt-case"><PageShell><PageContainer>
    <header className="case-hero">
      <p className="number-label case-label">CASE STUDY — 01</p>
      <h1>Simplifying Reckitt’s<br />Admin Portal</h1>
      <p className="case-subtitle">Redesigning high-risk administrative workflows so power users could make complex updates with greater clarity and confidence.</p>
      <ul className="case-tags number-label"><li>0 → 1 Product Design</li><li>Enterprise UX</li><li>Workflow Optimization</li></ul>
      <CaseImage file="Cover.png" alt="Two tablet mockups showing Reckitt product management and special-pack administration screens." caption="Reckitt Admin Portal" width={2290} height={922} eager />
      <dl className="case-metadata">{metadata.map(([label, value]) => <div key={label}><dt className="number-label">{label}</dt><dd>{value}</dd></div>)}</dl>
    </header>
    <div className="case-body"><CaseNavigation /><article className="case-article" aria-label="Reckitt Admin Portal case study">
      <CaseChapter id="overview" number="00" label="Overview" title="Powerful tools. Clearer control.">
        <div className="case-reading case-prose"><p>Reckitt’s admin portal supported user roles, inventory, product flows, and price changes. I redesigned the experience so administrators could use those controls with confidence.</p><p>I led the hands-on design from research through developer handoff, with direction and design review from my manager, Payal Tanksale.</p></div>
      </CaseChapter>
      <CaseChapter id="challenge" number="01" label="Challenge" title="The problem wasn’t a lack of functionality.">
        <div className="case-reading case-prose"><p>Reckitt’s portal already supported the necessary administrative operations, but dense workflows, ambiguous actions, and weak feedback made important updates difficult to complete confidently.</p><blockquote>“I always have to double-check. I’m scared of making the wrong update.”</blockquote></div>
        <CaseImage file="Legacy Portal.png" alt="Annotated legacy sales administration interface with dense navigation, ambiguous actions and fields without validation." caption="The legacy portal" width={2560} height={1264} />
        <ol className="case-annotations number-label"><li>01 — Unclear navigation</li><li>02 — Ambiguous actions</li><li>03 — No inline validation</li></ol>
      </CaseChapter>
      <CaseChapter id="decisions" number="02" label="Design judgment" title="Organize complexity, don’t hide it.">
        <div className="case-reading case-prose"><p>Simplifying the system did not mean removing necessary functionality. It meant organizing it so users understood where they were, what actions would do, and where problems occurred.</p><ol className="case-principles"><li><span className="number-label">01</span> Make consequences visible</li><li><span className="number-label">02</span> Divide complex tasks</li><li><span className="number-label">03</span> Catch errors in context</li></ol></div>
        <CaseChapter number="02.1" label="Design decision" decision title="Make consequences visible.">
          <div className="case-reading case-prose"><p>I distinguished the visually similar “Save” and “Save as New” actions with clearer hierarchy, explanations, and confirmation steps.</p><p className="case-tradeoff">The extra confirmation added a little friction, intentionally prioritizing error prevention over saving a click.</p></div>
          <CaseImage file="Critical CTA'S.png" alt="Reckitt product administration and edit screens showing separate Edit, Save as New, Cancel and Save actions." caption="Action hierarchy and supporting context" width={2472} height={860} />
        </CaseChapter>
        <CaseChapter number="02.2" label="Design decision" decision title="Turn one long form into a guided flow.">
          <div className="case-reading case-prose"><p>Long, scroll-heavy forms made it difficult to understand progress. I reorganized them into grouped stages with visible progress and persistent navigation.</p></div>
          <CaseImage file="Progress Visibility.png" alt="Customer and product edit screens with numbered Details, Customer Users and Documents workflow steps." caption="Grouped stages, progress visibility, and persistent navigation helped users stay oriented throughout the workflow." width={2434} height={856} />
        </CaseChapter>
        <CaseChapter number="02.3" label="Design decision" decision title="Catch problems where they happen.">
          <div className="case-reading case-prose"><p>Inline validation and confirmation feedback surfaced issues at the point of action instead of after submission.</p></div>
          <CaseImage file="Components.png" alt="Component states including selection controls, action menus, date input, success confirmation and saved-change feedback." caption="Feedback and component states" width={5120} height={3048} />
        </CaseChapter>
      </CaseChapter>
      <CaseChapter id="journey" number="03" label="Key journey" title="A clearer system for real work.">
        <div className="case-reading case-prose"><p>The price-change journey brings selection, grouped steps, and approval into one visible workflow.</p></div>
        <CaseImage file="Price change journey.png" alt="Four linked price-change screens showing product selection, exclusions, price editing and submission for approval." caption="The price-change journey — from selection to approval" width={2432} height={1250} />
      </CaseChapter>
      <CaseChapter id="final-design" number="04" label="Final design" title="Seeing the system in action.">
        <div className="case-reading case-prose"><p>Key workflows in motion, from updating product information to managing forecast changes.</p></div>
        <div className="case-videos"><CaseVideo file="1st video.mp4" poster="product-poster.jpg" caption="Updating product information" /><CaseVideo file="Forecast.mp4" poster="forecast-poster.jpg" caption="Forecast workflow" /></div>
      </CaseChapter>
      <CaseChapter id="outcome" number="05" label="Outcome" title="Stakeholder-reported outcomes.">
        <div className="case-reading case-prose"><p>These outcomes came from stakeholder reporting rather than independently verified product analytics.</p></div>
        <dl className="case-outcomes"><div><dt>40%</dt><dd>Faster completion across key workflows</dd></div><div><dt>3×</dt><dd>Reduction in onboarding-related support tickets during the first month</dd></div><div><dt>Improved</dt><dd>Clarity, confidence, and data accuracy</dd></div></dl>
      </CaseChapter>
      <CaseChapter id="reflection" number="06" label="Reflection" title="Simplifying a system doesn’t always mean removing complexity.">
        <div className="case-reading case-prose"><p>Operational tools still need powerful controls. Simplification can mean structuring necessary complexity so people understand where they are, what an action will do, and how to recover before a mistake becomes consequential.</p></div>
      </CaseChapter>
      <div className="case-next"><p className="number-label">Next project →</p><a className="arrow-link" href="/#reckitt-intranet">Reckitt Intranet Portal <span aria-hidden="true">↗</span></a></div>
    </article></div>
  </PageContainer></PageShell></div>;
}
