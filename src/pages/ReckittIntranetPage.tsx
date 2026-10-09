import { PageShell } from '../components/layout/PageShell';
import { PageContainer } from '../components/layout/PageContainer';
import { CaseChapter } from '../components/case-study/CaseChapter';
import { CaseImage, CaseVideo, caseAsset } from '../components/case-study/CaseMedia';
import { CaseNavigation } from '../components/case-study/CaseNavigation';
import { ImageComparison } from '../components/case-study/ImageComparison';
import '../styles/case-study.css';
import '../styles/intranet-case-study.css';
const root = '/images/reckitt-intranet/';
const chapters = [
  { id: 'overview', number: '00', title: 'Overview' },
  { id: 'challenge', number: '01', title: 'Challenge' },
  { id: 'research', number: '02', title: 'Research' },
  { id: 'decisions', number: '03', title: 'Design decisions' },
  { id: 'final-experience', number: '04', title: 'Final experience' },
  { id: 'outcome', number: '05', title: 'Outcome' },
  { id: 'reflection', number: '06', title: 'Reflection' },
];
const metadata = [
  ['My role', 'Sole hands-on UX/UI Designer'],
  ['Responsibilities', 'User Research · Information Architecture · Interaction Design\nVisual Design · Prototyping · Developer Handoff'],
  ['Team', 'Design Manager · Product Manager · Development Team'],
  ['Duration', '12 months'], ['Client', 'Reckitt Benckiser'], ['Design partner', 'Mindstix Software Labs'],
];
const outcomes = [
  ['Faster access', 'Common approvals and reports were easier to reach.'],
  ['Less support dependence', 'Users raised fewer navigation-related questions.'],
  ['More autonomy', 'More work could be completed without assistance.'],
  ['Cleaner experience', 'Stakeholders described the portal as easier to understand and use.'],
];
export function ReckittIntranetPage() {
  return <div className="reckitt-case intranet-case"><PageShell><PageContainer>
    <header className="case-hero">
      <span className="case-hero-orbit" aria-hidden="true" /><span className="case-hero-square" aria-hidden="true" />
      <p className="number-label case-label">CASE STUDY — 02</p>
      <h1>Revamping Reckitt’s<br />Global Sales Intranet</h1>
      <p className="case-subtitle">Reorganizing a cluttered enterprise portal around the daily priorities of different sales roles—while rebuilding it on Salesforce and preserving essential legacy patterns.</p>
      <ul className="case-tags number-label"><li>Enterprise UX</li><li>Information Architecture</li><li>Personalization</li></ul>
      <CaseImage root={root} file="Cover.png" alt="Reckitt Sales Intranet launchpad with company news, connected applications, calendar, events, and quick links." caption="Reckitt Sales Intranet" width={2024} height={1048} eager />
      <dl className="case-metadata">{metadata.map(([label, value]) => <div key={label}><dt className="number-label">{label}</dt><dd>{value}</dd></div>)}</dl>
    </header>
    <div className="case-body"><CaseNavigation items={chapters} caseNumber="02" /><article className="case-article" aria-label="Reckitt Sales Intranet case study">
      <CaseChapter id="overview" number="00" label="Overview" title="From internal systems to everyday work.">
        <div className="case-reading case-prose"><p>I led the hands-on design from research through developer handoff, reorganizing the portal around task frequency and role relevance.</p><p>My manager, Payal Tanksale, provided direction and design review. The development team owned the Salesforce implementation.</p></div>
      </CaseChapter>
      <CaseChapter id="challenge" number="01" label="Challenge" title={<>The portal wasn’t missing tools.<br />Users couldn’t find them.</>}>
        <div className="case-reading case-prose"><p>Reckitt’s sales intranet supported teams across global markets with orders, stock monitoring, marketing assets, approvals, and reports. Years of accumulated features had created deep menus, scattered documentation, and inconsistent interfaces.</p><blockquote>“I need to do five things quickly—and I spend more time finding the tools than using them.”</blockquote></div>
        <CaseImage root={root} file="Legacy portal.png" alt="Legacy sales portal showing dense navigation and fragmented information." caption="The legacy portal" width={2440} height={1036} />
        <ul className="case-annotations number-label"><li>Unclear navigation</li><li>No clear starting point</li><li>Overwhelming layout</li><li>No real-time feedback</li></ul>
      </CaseChapter>
      <CaseChapter id="research" number="02" label="Research" title="I started by listening.">
        <div className="case-reading case-prose"><p>I interviewed 14 sales employees across roles and markets. The recurring theme: users were spending too much time locating tools instead of completing tasks.</p></div>
        <CaseImage root={root} file="Persona.png" alt="Sales representative persona documenting goals, needs, and frustrations with the intranet." caption="Understanding the priorities behind daily sales work" width={1264} height={705} />
      </CaseChapter>
      <CaseChapter id="decisions" number="03" label="Design judgment" title="Organize the portal around work, not the organization.">
        <div className="case-reading case-prose"><p>Different sales roles entered the same portal with different priorities. Task frequency and role relevance became the main organizing principles.</p><ol className="case-principles">{['Task-led navigation', 'Role-aware dashboard', 'Reusable visual system', 'Actionable feedback'].map((item, i) => <li key={item}><span className="number-label">0{i + 1}</span>{item}</li>)}</ol></div>
        <CaseChapter number="03.1" label="Design decision" decision title="Replace organization-led navigation with task-led structure.">
          <div className="case-reading case-prose"><p>High-priority tools were reorganized around observed usage patterns instead of internal organizational categories, bringing common tasks within one or two clicks.</p></div>
          <CaseImage root={root} file="Information Arch.png" alt="Information architecture diagrams showing the organization of portal navigation and tasks." caption="The portal structure evolved around task frequency and role relevance rather than internal ownership." width={2024} height={1228} />
        </CaseChapter>
        <CaseChapter number="03.2" label="Design decision" decision title="Make the dashboard respond to the user’s role.">
          <div className="case-reading case-prose"><p>Relevant approvals, stock updates, reports, and daily actions were surfaced based on role relevance, reducing irrelevant information competing for attention.</p><p className="case-tradeoff">The wider navigation remained available so personalization did not hide tools outside a user’s normal workflow.</p></div>
          <div className="case-media"><CaseVideo root={root} file="Dasboard.mp4" poster="dashboard-poster.jpg" caption="The role-aware dashboard in motion" /></div>
        </CaseChapter>
        <CaseChapter number="03.3" label="Design decision" decision title="Build a reusable system, not another collection of pages.">
          <div className="case-reading case-prose"><p>The Salesforce rebuild required a consistent interaction system that could scale across roles and product areas: reusable cards, navigation, alerts, actions, spacing rules, and content groupings.</p><p className="case-tradeoff">Selected legacy patterns were preserved where familiarity or technical continuity mattered, while patterns causing navigation or comprehension issues were replaced.</p></div>
          <CaseImage root={root} file="Components.png" alt="Reusable Sales Intranet components: an order-progress indicator, product and document cards, stock feedback, an empty-cart state, and editable forecast rows." caption="Reusable components and states across ordering, content, stock, and forecasting." width={2164} height={1692} />
        </CaseChapter>
        <CaseChapter number="03.4" label="Design decision" decision title="Show errors where users can act on them.">
          <div className="case-reading case-prose"><p>Field-level validation, inline feedback, and real-time alerts helped users resolve issues during a workflow instead of encountering uncertainty after submission.</p></div>
          <CaseImage root={root} file="Error validation.png" alt="Forecast entry form with a prominent notice requiring 45 days of advance notice, above customer, forecast, ship date, and allocation fields." caption="Forecasting requirements surfaced within the form, before submission." width={2280} height={854} />
        </CaseChapter>
      </CaseChapter>
      <CaseChapter id="final-experience" number="04" label="Interaction" title="From structure to final interface.">
        <div className="case-reading case-prose"><p>Drag to compare the early Launchpad wireframe with the final high-fidelity design.</p></div>
        <ImageComparison before={caseAsset('Launchpad.png', root)} after={caseAsset('dashboard-poster.jpg', root)} />
        <CaseChapter number="04" label="Final experience" decision title="A portal organized around everyday work.">
          <div className="case-reading case-prose"><p>Distinct views bring ongoing orders and forecasting into focus.</p></div>
          <div className="intranet-workflow"><h3>Ongoing orders</h3><CaseImage root={root} file="Ongoing image.png" alt="Ongoing Orders screen with active orders, expandable product details, customers, dates, and status." caption="A clearer view of active orders, status, customers, and key order details helped users scan ongoing work more efficiently." width={1470} height={1283} /></div>
          <div className="intranet-workflow"><h3>Forecasting</h3><CaseImage root={root} file="Forecast.png" alt="Forecasting interface showing sales forecast information and status." caption="Forecast information was organized to make key dates, status, and sales information easier to review and act on." width={1780} height={1298} /></div>
        </CaseChapter>
      </CaseChapter>
      <CaseChapter id="outcome" number="05" label="Outcome" title="A cleaner portal, with less dependence on support.">
        <div className="case-reading case-prose"><p className="number-label">Stakeholder-reported outcomes</p><p>These outcomes are qualitative and stakeholder-reported. No verified analytics or numerical support data are currently available.</p></div>
        <dl className="intranet-outcomes">{outcomes.map(([title, copy]) => <div key={title}><dt>{title}</dt><dd>{copy}</dd></div>)}</dl>
        <div className="case-reading case-prose"><blockquote>“It’s clean, fast, and I don’t need help to use it anymore.”<cite className="intranet-quote-author">Sales Lead, Reckitt</cite></blockquote></div>
      </CaseChapter>
      <CaseChapter id="reflection" number="06" label="Reflection" title="The biggest change wasn’t visual. It was structural.">
        <div className="case-reading case-prose"><p>The redesign moved the portal’s organizing logic away from internal systems and toward the work users needed to complete. The Salesforce rebuild created room for change, but the design challenge was deciding what to preserve, what to restructure, and what to replace.</p></div>
      </CaseChapter>
      <div className="case-next"><p className="number-label">Next project →</p><a className="arrow-link" href="/#bajaj-health">Bajaj Health <span aria-hidden="true">↗</span></a></div>
    </article></div>
  </PageContainer></PageShell></div>;
}
