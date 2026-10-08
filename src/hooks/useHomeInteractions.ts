import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

/** Event-driven motion only: no perpetual animation loop or scroll interception. */
export function useHomeInteractions() {
  const reduced = useReducedMotion();
  useEffect(() => {
    const media = matchMedia('(min-width: 80rem) and (hover: hover) and (pointer: fine)');
    const pointer = matchMedia('(min-width: 80rem) and (hover: hover) and (pointer: fine)');
    const hero = document.querySelector<HTMLElement>('.hero');
    const list = document.querySelector<HTMLElement>('.project-list');
    const cursor = document.querySelector<HTMLElement>('.preview-cursor');
    if (!hero || !list || !cursor || reduced) return;
    const sheets = [...list.children] as HTMLElement[];
    const targets = [...document.querySelectorAll<HTMLElement>('[data-preview-cursor]')];
    let heroVisible = false;
    let frame = 0;
    let cursorFrame = 0;
    let x = 0, y = 0, scroll = 0;
    let active: HTMLElement | null = null;
    let heroBounds = hero.getBoundingClientRect();
    const paint = () => {
      frame = 0;
      hero.style.setProperty('--pointer-x', String(x));
      hero.style.setProperty('--pointer-y', String(y));
      hero.style.setProperty('--scroll-depth', String(scroll));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const reset = () => { x = y = 0; schedule(); };
    const moveHero = (event: PointerEvent) => {
      if (!pointer.matches || event.pointerType !== 'mouse') return;
      x = Math.max(-1, Math.min(1, (event.clientX - heroBounds.left) / heroBounds.width * 2 - 1));
      y = Math.max(-1, Math.min(1, (event.clientY - heroBounds.top) / heroBounds.height * 2 - 1));
      schedule();
    };
    const scrollHero = () => {
      heroBounds = hero.getBoundingClientRect();
      scroll = Math.max(0, Math.min(1, -heroBounds.top / heroBounds.height));
      schedule();
    };
    const hideCursor = () => {
      active?.removeAttribute('data-cursor-active');
      active = null;
      cursor.classList.remove('preview-cursor--visible');
      cancelAnimationFrame(cursorFrame);
      cursorFrame = 0;
    };
    let cursorX = 0, cursorY = 0, cursorRadius = 0;
    const moveCursor = (event: PointerEvent) => {
      if (!pointer.matches || event.pointerType !== 'mouse') return;
      const target = event.currentTarget as HTMLElement;
      active = target;
      target.setAttribute('data-cursor-active', '');
      if (cursor.firstElementChild) cursor.firstElementChild.textContent = target.dataset.previewCursor || '';
      cursorX = Math.max(cursorRadius, Math.min(innerWidth - cursorRadius, event.clientX));
      cursorY = Math.max(cursorRadius, Math.min(innerHeight - cursorRadius, event.clientY));
      if (!cursorFrame) cursorFrame = requestAnimationFrame(() => {
        cursorFrame = 0;
        cursor.style.setProperty('--cursor-x', `${cursorX}px`);
        cursor.style.setProperty('--cursor-y', `${cursorY}px`);
        cursor.classList.add('preview-cursor--visible');
      });
    };
    const sizeStack = () => {
      // Read token-based offsets once per resize, never on scroll.
      const style = getComputedStyle(list);
      const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const pixels = (name: string) => { const value = style.getPropertyValue(name).trim(); return parseFloat(value) * (value.endsWith('rem') ? rootSize : 1); };
      const base = pixels('--stack-top');
      const step = pixels('--stack-step');
      const tallest = Math.max(...sheets.map(sheet => sheet.getBoundingClientRect().height));
      const header = document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
      const top = Math.max(base, header);
      list.style.setProperty('--stack-header', `${top}px`);
      list.classList.toggle('project-list--stack', media.matches && tallest + top + step * (sheets.length - 1) <= innerHeight);
      heroBounds = hero.getBoundingClientRect();
      cursorRadius = parseFloat(getComputedStyle(cursor).width) / 2 || 0;
    };
    const bindHero = (enabled: boolean) => {
      hero.classList.toggle('hero--visible', enabled && pointer.matches);
      hero.removeEventListener('pointermove', moveHero);
      hero.removeEventListener('pointerleave', reset);
      window.removeEventListener('scroll', scrollHero);
      if (enabled && pointer.matches) {
        hero.addEventListener('pointermove', moveHero, { passive: true });
        hero.addEventListener('pointerleave', reset);
        window.addEventListener('scroll', scrollHero, { passive: true });
        scrollHero();
      } else { x = y = scroll = 0; schedule(); }
    };
    const observer = new IntersectionObserver(entries => {
      heroVisible = entries[0].isIntersecting;
      bindHero(heroVisible);
    });
    observer.observe(hero);
    const resize = new ResizeObserver(sizeStack);
    resize.observe(list);
    sheets.forEach((sheet, index) => {
      sheet.style.setProperty('--sheet-index', String(index));
      resize.observe(sheet);
    });
    const change = () => { hideCursor(); bindHero(heroVisible); sizeStack(); };
    media.addEventListener('change', change);
    pointer.addEventListener('change', change);
    window.addEventListener('resize', change);
    window.addEventListener('scroll', hideCursor, { passive: true });
    window.addEventListener('blur', hideCursor);
    window.addEventListener('keydown', hideCursor);
    targets.forEach(target => {
      target.addEventListener('pointermove', moveCursor, { passive: true });
      target.addEventListener('pointerleave', hideCursor);
    });
    sizeStack();
    return () => {
      observer.disconnect(); resize.disconnect(); bindHero(false); hideCursor();
      cancelAnimationFrame(frame);
      media.removeEventListener('change', change);
      pointer.removeEventListener('change', change);
      window.removeEventListener('resize', change);
      window.removeEventListener('scroll', hideCursor);
      window.removeEventListener('blur', hideCursor);
      window.removeEventListener('keydown', hideCursor);
      targets.forEach(target => {
        target.removeEventListener('pointermove', moveCursor);
        target.removeEventListener('pointerleave', hideCursor);
      });
      list.classList.remove('project-list--stack');
      sheets.forEach(sheet => sheet.style.removeProperty('--sheet-index'));
      ['--pointer-x', '--pointer-y', '--scroll-depth'].forEach(name => hero.style.removeProperty(name));
    };
  }, [reduced]);
}
