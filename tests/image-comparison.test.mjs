import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { transformWithOxc } from 'vite';
const output = await transformWithOxc(fs.readFileSync('src/components/case-study/ImageComparison.tsx', 'utf8'), 'ImageComparison.tsx', { jsx: { runtime: 'automatic' } });
const source = output.code.replace(/^import .*;$/gm, '').replace(/export /g, '') + '\nthis.ImageComparison = ImageComparison;';
function mount() {
  let value = 50;
  const jsx = (type, props) => ({ type, ...props });
  const scope = { useId: () => 'comparison', useState: () => [value, n => { value = n; }], useRef: () => ({ current: { getBoundingClientRect: () => ({ left: 20, width: 350 }) } }), _jsx: jsx, _jsxs: jsx };
  vm.runInNewContext(source, scope);
  const tree = scope.ImageComparison({before:'wireframe.png',after:'final.jpg'});
  const nodes = [];
  function visit(n) { if (!n || typeof n !== 'object') return; nodes.push(n); for (const c of [n.children].flat()) visit(c); }
  visit(tree);
  return { handle:nodes.find(n=>n.className==='comparison-divider'), input:nodes.find(n=>n.type==='range'), value:()=>value };
}
test('touch and mouse pointer capture update and clamp the divider without affecting page scroll', () => {
  for (const pointerType of ['touch','mouse']) {
    const c = mount(); let captured=false;
    const target = {setPointerCapture(){captured=true},hasPointerCapture(){return captured},releasePointerCapture(){captured=false}};
    const event = x => ({currentTarget:target,pointerId:1,pointerType,clientX:x});
    c.handle.onPointerMove(event(300)); assert.equal(c.value(),50);
    c.handle.onPointerDown(event(195)); assert.equal(c.value(),50);
    c.handle.onPointerMove(event(500)); assert.equal(c.value(),100);
    c.handle.onPointerMove(event(-40)); assert.equal(c.value(),0);
    c.handle.onPointerUp(event(20)); c.handle.onPointerMove(event(195)); assert.equal(c.value(),0);
  }
});
test('native range remains labeled and updates the same divider state', () => {
  const c=mount(); assert.equal(c.input.type,'range'); assert.equal(c.input.min,'0'); assert.equal(c.input.max,'100');
  assert.equal(c.input['aria-valuetext'],'50% wireframe, 50% final interface');
  c.input.onChange({target:{value:'51'}}); assert.equal(c.value(),51);
});
