import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { transformWithOxc } from 'vite';
const output = await transformWithOxc(fs.readFileSync('src/components/case-study/CaseMedia.tsx', 'utf8'), 'CaseMedia.tsx', { jsx: { runtime: 'automatic' } });
const source = output.code.replace(/^import .*;$/gm, '').replace(/export /g, '') + '\nthis.CaseVideo = CaseVideo;';
function mount(reduced = false) {
  let visibility, cleanup, refs = 0, playCount = 0, disconnected = false;
  const events = new Map();
  const video = { paused: true, addEventListener: (n, f) => events.set(n,f), removeEventListener: n => events.delete(n), play() { playCount++; this.paused = false; events.get('play')?.(); return Promise.resolve(); }, pause() { if (this.paused) return; this.paused = true; events.get('pause')?.(); } };
  const document = { hidden: false, addEventListener() {}, removeEventListener() {} };
  const scope = { document, useRef: value => ({current: refs++ === 0 ? video : value}), useReducedMotion: () => reduced, useEffect: fn => { cleanup = fn(); }, _jsx: (_,props) => props, _jsxs: (_,props) => props, IntersectionObserver: class { constructor(fn) { visibility = fn; } observe() {} disconnect() { disconnected = true; } } };
  vm.runInNewContext(source, scope); scope.CaseVideo({file:'Forecast.mp4', poster:'forecast-poster.jpg', caption:'Forecast workflow'});
  return { video, visible: value => visibility([{isIntersecting:value}]), cleanup, plays: () => playCount, disconnected: () => disconnected, events };
}
test('visible videos play and offscreen videos pause and resume', () => {
  const v = mount(); v.visible(true); assert.equal(v.plays(),1); v.visible(false); assert.equal(v.video.paused,true); v.visible(true); assert.equal(v.plays(),2); v.cleanup(); assert.equal(v.video.paused,true); assert.ok(v.disconnected()); assert.equal(v.events.size,0);
});
test('native-control pause persists after scrolling away and back', () => {
  const v = mount(); v.visible(true); v.video.pause(); v.visible(false); v.visible(true); assert.equal(v.plays(),1); v.cleanup();
});
test('reduced motion never autoplays but still permits manual playback', () => {
  const v = mount(true); v.visible(true); assert.equal(v.plays(),0); v.video.play(); assert.equal(v.video.paused,false); v.visible(false); assert.equal(v.video.paused,true); v.cleanup();
});
