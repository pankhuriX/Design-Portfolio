const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { stripTypeScriptTypes } = require('node:module');
const source = stripTypeScriptTypes(fs.readFileSync('src/hooks/useHomeInteractions.ts', 'utf8'))
  .replace("import { useEffect } from 'react';", "const { useEffect } = require('react');")
  .replace("import { useReducedMotion } from './useReducedMotion';", "const { useReducedMotion } = require('./useReducedMotion');")
  .replace('export function useHomeInteractions()', 'exports.useHomeInteractions = function useHomeInteractions()');

function mount({ reduced = false, fine = true, desktop = true, height = 1000 } = {}) {
  const frames = new Map();
  const queries = [];
  let frameId = 0, cleanup;
  const element = (h = 542) => ({
    children: [], dataset: {},
    style: { values: new Map(), setProperty(k,v) { this.values.set(k,v); }, removeProperty(k) { this.values.delete(k); } },
    classList: { values: new Set(), toggle(k,on) { on ? this.values.add(k) : this.values.delete(k); }, remove(k) { this.values.delete(k); }, add(k) { this.values.add(k); } },
    events: new Map(), addEventListener(k, fn) { this.events.set(k,fn); }, removeEventListener(k) { this.events.delete(k); },
    setAttribute() {}, removeAttribute() {},
    getBoundingClientRect: () => ({height:h,top:0,left:0,width:1440}),
  });
  const hero = element(800), list = element(), cursor = element(), target = element();
  list.children = Array.from({length:5},()=>element());
  const window = element();
  const context = {
    exports: {}, window, innerHeight: height,
    require: name => name === 'react' ? { useEffect: fn => { cleanup = fn(); } } : { useReducedMotion: () => reduced },
    document: { documentElement: {}, querySelector: s => ({'.hero':hero,'.project-list':list,'.preview-cursor':cursor,'.site-header':element(96)})[s], querySelectorAll: () => [target] },
    matchMedia: query => { const m = {...element(), matches: query.includes('min-width') ? desktop && fine : fine}; queries.push(m); return m; },
    getComputedStyle: () => ({fontSize:'16px',getPropertyValue: k => k === '--stack-top' ? '8rem' : '3rem'}),
    requestAnimationFrame: fn => { frames.set(++frameId,fn); return frameId; },
    cancelAnimationFrame: id => frames.delete(id),
    IntersectionObserver: class { constructor(fn) { this.fn=fn; } observe() { this.fn([{isIntersecting:true}]); } disconnect() {} },
    ResizeObserver: class { observe() {} disconnect() {} },
  };
  vm.runInNewContext(source,context);
  context.exports.useHomeInteractions();
  return {hero,list,target,window,frames,cleanup,queries};
}
test('reduced motion mounts no observers, handlers, frames, or sticky list',()=>{
  const state=mount({reduced:true});
  assert.equal(state.cleanup,undefined);
  assert.equal(state.frames.size,0);
  assert.equal(state.hero.events.size,0);
  assert.equal(state.target.events.size,0);
  assert.equal(state.list.classList.values.size,0);
});
test('desktop sheets use token offsets and short viewports remain static',()=>{
  assert.equal(mount().list.classList.values.has('project-list--stack'),true);
  assert.equal(mount({height:700}).list.classList.values.has('project-list--stack'),false);
  assert.equal(mount({desktop:false}).list.classList.values.has('project-list--stack'),false);
});
test('coarse pointers never activate hero or cursor motion',()=>{
  const state=mount({fine:false});
  assert.equal(state.hero.events.has('pointermove'),false);
  const count=state.frames.size;
  state.target.events.get('pointermove')({pointerType:'touch'});
  assert.equal(state.frames.size,count);
});
test('effect cleanup cancels frames and removes pointer/scroll handlers and stacking',()=>{
  const state=mount(); state.cleanup();
  assert.equal(state.frames.size,0);
  assert.equal(state.hero.events.size,0);
  assert.equal(state.window.events.size,0);
  assert.equal(state.target.events.size,0);
  assert.equal(state.list.classList.values.size,0);
});

test('hero ambient class is visibility-gated, disabled for coarse pointers, and cleaned up',()=>{
  const state=mount();
  assert.equal(state.hero.classList.values.has('hero--visible'),true);
  assert.equal(mount({fine:false}).hero.classList.values.has('hero--visible'),false);
  state.cleanup();
  assert.equal(state.hero.classList.values.has('hero--visible'),false);
});
