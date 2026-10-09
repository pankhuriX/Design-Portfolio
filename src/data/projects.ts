export type Project = {
  id: string; href?: string; number: string; title: string; description: string; disciplines: string;
  accent: 'red' | 'blue' | 'yellow'; confidential?: boolean;
  video?: { src: string; label: string; poster: string };
  image?: { src: string; alt: string };
};
const root = '/images/homepage/';
export const projects: Project[] = [
  { id: 'reckitt-admin', href: '/work/reckitt-admin', number: '01', title: 'Reckitt Benckiser Admin Portal', description: 'Sales operations & approval platform', disciplines: 'UX · Enterprise · Workflow Design', accent: 'red', video: { src: root + 'Reckitt%20admin%20Cover.mp4', poster: root + 'reckitt-admin-poster.jpg', label: 'Reckitt admin portal walkthrough' } },
  { id: 'reckitt-intranet', href: '/work/reckitt-intranet', number: '02', title: 'Reckitt Intranet Portal', description: 'Sales information & support portal', disciplines: 'UX · Information Architecture · Enterprise', accent: 'blue', video: { src: root + 'Reckitt%20Intranet%20Cover.mp4', poster: root + 'reckitt-intranet-poster.jpg', label: 'Reckitt intranet portal walkthrough' } },
  { id: 'bajaj-health', number: '03', title: 'Bajaj Health', description: 'Healthcare booking & access platform', disciplines: 'Product Design · Healthcare · Mobile UX', accent: 'yellow', image: { src: root + 'Bajaj%20Cover.png', alt: 'Bajaj Health mobile screens for healthcare booking' } },
  { id: 'hyundai', number: '04', title: 'Hyundai Motor Europe', description: 'EV Route Planning', disciplines: 'Research · HMI · Prototyping', accent: 'red', confidential: true, image: { src: root + 'Hyundai.png', alt: 'Hyundai' } },
  { id: 'allianz', number: '05', title: 'Allianz Design System', description: 'Enterprise Design System', disciplines: 'Accessibility · Components · Design Systems', accent: 'blue', confidential: true, image: { src: root + 'Allianz.png', alt: 'Allianz' } },
];
