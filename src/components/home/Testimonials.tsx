import { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { NumberLabel } from '../ui/NumberLabel';
import { testimonials } from '../../data/testimonials';
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const person = testimonials[index];
  const move = (direction: number) => setIndex(value => (value + direction + testimonials.length) % testimonials.length);
  return <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-title"><PageContainer>
    <div className="testimonial-heading"><NumberLabel number="05">What people say</NumberLabel><h2 id="testimonials-title">KIND WORDS</h2><div className="testimonial-controls">
      <button onClick={() => move(-1)} aria-label="Previous testimonial" aria-controls="testimonial-content">←</button>
      <span className="number-label">{String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
      <button onClick={() => move(1)} aria-label="Next testimonial" aria-controls="testimonial-content">→</button>
    </div></div>
    <div id="testimonial-content" aria-live="polite" aria-atomic="true"><figure className="testimonial" key={person.name}>
      <blockquote><p>“{person.quote}”</p></blockquote>
      <figcaption><img src={person.photo} alt="" width="64" height="64" loading="lazy" /><div><p>{person.name}</p><p className="muted">{person.role}</p></div></figcaption>
    </figure></div>
  </PageContainer></section>;
}
