import type { CSSProperties } from 'react';
import { Reveal } from '../ui/Reveal';
import { PageContainer } from '../layout/PageContainer';
import { NumberLabel } from '../ui/NumberLabel';
import { gallery, type GalleryImage } from '../../data/gallery';
import { SystemPrinciples } from './SystemPrinciples';
import '../../styles/about-gallery.css';

export function GalleryItem({ item, index }: { item: GalleryImage; index: number }) {
  return <Reveal className="gallery-tile"><figure style={{ '--gallery-index': index } as CSSProperties} className={`gallery-item gallery-item--${item.id}`}>
    <div className="gallery-image"><img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" /></div>
    {item.caption && <figcaption className="number-label">{item.caption}</figcaption>}
  </figure></Reveal>;
}
export function AboutGallery() {
  return <section id="outside-the-frame" className="section outside-frame" aria-labelledby="outside-title"><PageContainer>
    <NumberLabel number="03">Outside the frame</NumberLabel>
    <div className="gallery-intro"><h2 id="outside-title">WHAT KEEPS ME CURIOUS</h2><p className="muted">Research, travel, creativity, games, and quiet moments that shape how I think.</p></div>
    <div className="about-gallery">{gallery.map((item, index) => <GalleryItem key={item.id} item={item} index={index} />)}</div>
    <SystemPrinciples />
  </PageContainer></section>;
}
