export type GalleryImage = { id: string; src: string; alt: string; caption?: string; width: number; height: number };
// Original files and selection rationale are recorded in docs/about-gallery.md.
export const gallery: GalleryImage[] = [
  { id: 'design-influence', src: '/images/about-gallery/Design Influence.png', alt: 'Pankhuri looking at an exhibition wall of black-and-white photographs.', caption: '01 — DESIGN INFLUENCE', width: 720, height: 1280 },
  { id: 'outdoors', src: '/images/about-gallery/Hiking.jpg', alt: 'A hiker with a backpack overlooking a turquoise alpine lake beneath rocky peaks.', caption: '02 — HIKING', width: 810, height: 1440 },
  { id: 'research', src: '/images/about-gallery/research.jpg', alt: 'Four people standing beside a projected research presentation in a classroom.', caption: '03 — RESEARCH & PRESENTING', width: 1440, height: 1080 },
  { id: 'making', src: '/images/about-gallery/Clay modelling.jpg', alt: 'Handmade colorful clay figures beside a laptop showing their inspiration.', caption: '04 — CLAY MODELLING', width: 1080, height: 1440 },
  { id: 'systems-play', src: '/images/about-gallery/Board Games.jpg', alt: 'A Catan board with hexagonal terrain tiles, game pieces and cards on a wooden table.', caption: '05 — BOARD GAMES', width: 1080, height: 1440 },
  { id: 'reading', src: '/images/about-gallery/Books.jpg', alt: 'A passenger reading a book by the window on a sunlit train journey.', caption: '06 — READING', width: 810, height: 1440 },
];
