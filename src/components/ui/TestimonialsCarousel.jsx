import { useState } from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'This platform made learning so easy and fun! Highly recommend the Web Development Bootcamp.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'John Smith',
    text: 'The Cybersecurity course was very informative and practical. Great for beginners!',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Emily Chen',
    text: 'I loved the interactive dashboard and the support team was fantastic!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[index];
  return (
    <div className="container mb-5 text-center">
      <h2 className="mb-4">Testimonials</h2>
      <div className="d-flex flex-column align-items-center">
        <img src={t.image} alt={t.name} style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',marginBottom:'16px',boxShadow:'0 2px 8px rgba(25,118,210,0.12)'}} />
        <blockquote className="blockquote mb-2" style={{fontStyle:'italic'}}>{t.text}</blockquote>
        <figcaption className="blockquote-footer mb-3">{t.name}</figcaption>
        <div>
          <button className="btn btn-outline-primary me-2" onClick={prev}>&lt;</button>
          <button className="btn btn-outline-primary" onClick={next}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
