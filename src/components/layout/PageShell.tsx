import { GridProvider } from './GridOverlay';
import type { ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
export function PageShell({ children }: { children: ReactNode }) {
  return <GridProvider><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main" tabIndex={-1}>{children}</main><SiteFooter /></GridProvider>;
}
