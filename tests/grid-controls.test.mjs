import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { transformWithOxc } from 'vite';
import postcss from 'postcss';

const compiled = await transformWithOxc(fs.readFileSync('src/components/layout/GridOverlay.tsx', 'utf8'), 'GridOverlay.tsx', { jsx: { runtime: 'automatic' } });
const code = compiled.code.replace(/^import .*;$/gm, '').replace(/export function /g, 'function ') + '\nthis.GridToggle = GridToggle;';
function mount(previewOnFocus = false) {
  let toggles = 0;
  const previews = [];
  const context = { createContext: () => ({}), useContext: () => ({ pinned: false, toggle: () => toggles++, preview: value => previews.push(value) }), useRef: value => ({ current: value }), _jsx: (_, props) => props };
  vm.runInNewContext(code, context);
  return { props: context.GridToggle({ previewOnFocus }), previews, toggles: () => toggles };
}
test('mouse preview ends on leave without latching on click', () => {
  const { props, previews, toggles } = mount();
  props.onPointerEnter({ pointerType: 'mouse' }); props.onPointerDown({ pointerType: 'mouse' }); props.onClick({ detail: 1 }); props.onPointerLeave();
  assert.deepEqual(previews, [true, false]); assert.equal(toggles(), 0);
});
test('touch and pen toggle without requiring hover, including hybrid devices', () => {
  for (const pointerType of ['touch', 'pen']) {
    const { props, previews, toggles } = mount();
    props.onPointerEnter({ pointerType }); props.onPointerDown({ pointerType }); props.onClick({ detail: 1 }); props.onClick({ detail: 1 });
    assert.deepEqual(previews, []); assert.equal(toggles(), 2);
  }
});
test('keyboard activation toggles and principle focus previews until blur', () => {
  const { props, previews, toggles } = mount(true);
  props.onFocus(); props.onClick({ detail: 0 }); props.onClick({ detail: 0 }); props.onBlur();
  assert.equal(toggles(), 2); assert.deepEqual(previews, [true, false]);
});
test('gallery motion is fine-pointer/reduced-motion gated; overlay becomes instant', () => {
  const css = postcss.parse(fs.readFileSync('src/styles/about-gallery.css', 'utf8'));
  css.walkDecls(/^(transition|transform)$/, decl => {
    let parent = decl.parent; while (parent && parent.type !== 'atrule') parent = parent.parent;
    if (parent.name === 'keyframes') return;
    assert.match(parent.params, /prefers-reduced-motion: no-preference/);
    assert.match(parent.params, /pointer: fine/);
  });
  css.walkDecls('animation', decl => {
    if (decl.value === 'none') return;
    let parent = decl.parent; while (parent && parent.type !== 'atrule') parent = parent.parent;
    assert.match(parent.params, /prefers-reduced-motion: no-preference/);
  });
  const overlay = postcss.parse(fs.readFileSync('src/styles/grid-overlay.css', 'utf8'));
  let reduced = false;
  overlay.walkAtRules('media', rule => { if (rule.params.includes('prefers-reduced-motion: reduce')) rule.walkDecls('transition', d => { reduced ||= d.value === 'none'; }); });
  assert.ok(reduced);
});
