export function Rule({ strong = false }: { strong?: boolean }) {
  return <hr className={`rule${strong ? ' rule--strong' : ''}`} />;
}
