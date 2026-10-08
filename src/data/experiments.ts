import type { ExperimentMedia } from '../components/home/ExperimentPreview';

export type Experiment = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  metadata: string;
  preview?: ExperimentMedia;
  link: { href: string; label: string; external?: boolean };
  accent: 'yellow' | 'red' | 'blue';
  cursorLabel: string;
};

export const experiments: Experiment[] = [{
  number: '01',
  title: 'DEUTSCHLE',
  subtitle: 'German Word Game',
  description: 'A small language-learning game designed in Figma and built with Codex.',
  metadata: 'Design · Interaction · AI-assisted Development',
  preview: { type: 'word-game' },
  link: { href: 'https://deutschle.vercel.app/', label: 'PLAY DEUTSCHLE', external: true },
  accent: 'yellow',
  cursorLabel: 'PLAY ↗',
}];
