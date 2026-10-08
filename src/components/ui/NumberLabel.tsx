import type { ReactNode } from 'react';
export function NumberLabel({ number, children }: { number: string; children: ReactNode }) {
  return <p className="number-label"><span>{number}</span><span aria-hidden="true"> — </span>{children}</p>;
}
