import SectionDivider from '../ui/SectionDivider';
// ...existing code...
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaClock, FaCertificate } from 'react-icons/fa';
import { useRef, useEffect } from 'react';

function Home() {
  // Animation hooks for fade/slide-in
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const whyRef = useRef(null);
  useEffect(() => {
    [heroRef, featuredRef, whyRef].forEach(ref => {
      if (ref.current) {
        ref.current.classList.add('section-animate');
      }
    });
  }, []);

  return (
    <main className="container" aria-label="Home Page">
      <section
        ref={heroRef}
        className="text-center mb-5 hero-section section-fade"
        style={{
          background: 'linear-gradient(120deg, #e3f0ff 60%, #b2ebf2 100%)',
          backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '28px',
          padding: '56px 16px 64px 16px',
          color: '#fff',
          boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10)',
          position: 'relative',
        }}
        aria-label="Hero Section"
      >
        <div style={{background:'rgba(25,118,210,0.45)',borderRadius:'24px',padding:'32px 12px',display:'inline-block',maxWidth:'600px',margin:'0 auto'}}>
          <h1 className="display-4 fw-bold mb-3">Unlock Your Potential with Online Courses</h1>
          <p className="lead mb-4">Join thousands of learners and boost your skills with our expertly crafted courses. Start your journey today!</p>
          <Link to="/courses" className="btn btn-lg btn-success px-5 py-3 shadow" aria-label="Browse Courses">Browse Courses</Link>
        </div>
      </section>
      <SectionDivider />

      <section
        ref={featuredRef}
        className="mb-5 section-fade"
        aria-label="Featured Courses"
      >
        <h2 className="mb-4">Featured Courses</h2>
        <div className="row g-4 d-flex flex-wrap flex-column flex-md-row">
          {[{
            id: 1,
            title: 'Web Development Bootcamp',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
            alt: 'Web Development'
          }, {
            id: 2,
            title: 'Cybersecurity',
            image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
            alt: 'Cybersecurity'
          }, {
            id: 3,
            title: 'Data Science & AI',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
            alt: 'Data Science & AI'
          }].map(course => (
            <div className="col-12 col-md-4 mb-4 mb-md-0" key={course.id}>
              <Link to={`/courses/${course.id}`} style={{textDecoration:'none'}} aria-label={`View details for ${course.title}`}>
                <div className="card h-100 shadow-lg" style={{background:'#fff', border:'none', cursor:'pointer', padding:'18px 10px', minHeight:'340px'}}>
                  <img src={course.image} className="card-img-top" alt={course.alt} style={{height:'180px',objectFit:'cover',borderRadius:'12px'}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{color:'#1976d2', fontWeight:'bold', fontSize:'1.25rem'}}>{course.title}</h5>
                    <span className="btn btn-primary" style={{background:'#1976d2',border:'none'}} aria-label="View Details">View Details</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <SectionDivider />

      <section
        ref={whyRef}
        className="text-center mt-5 section-fade"
        aria-label="Why Choose Us"
      >
        <h2 className="mb-3">Why Choose Us?</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-3 mb-3">
            <div className="p-3 why-card d-flex flex-column align-items-center" style={{background:'#e3f0ff',borderRadius:'16px',color:'#1976d2'}}>
              <FaUserGraduate size={32} className="mb-2" aria-label="Expert Instructors" />
              <h5>Expert Instructors</h5>
              <p>Learn from industry leaders and certified professionals.</p>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="p-3 why-card d-flex flex-column align-items-center" style={{background:'#e3f0ff',borderRadius:'16px',color:'#1976d2'}}>
              <FaClock size={32} className="mb-2" aria-label="Flexible Learning" />
              <h5>Flexible Learning</h5>
              <p>Access courses anytime, anywhere, on any device.</p>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="p-3 why-card d-flex flex-column align-items-center" style={{background:'#e3f0ff',borderRadius:'16px',color:'#1976d2'}}>
              <FaCertificate size={32} className="mb-2" aria-label="Certification" />
              <h5>Certification</h5>
              <p>Earn certificates to showcase your achievements.</p>
            </div>
          </div>
        </div>
      </section>
  </main>
  );
}

export default Home;
