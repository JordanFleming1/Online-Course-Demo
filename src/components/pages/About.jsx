
function About() {
  return (
    <div className="container">
      <section className="mb-5 text-center">
        <h1 className="display-5 fw-bold mb-3" style={{color:'#1976d2'}}>About Online Course</h1>
        <p className="lead mb-4">Empowering learners worldwide with high-quality, accessible online education.</p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Our Mission</h2>
        <p>We believe everyone deserves the opportunity to learn and grow. Our mission is to provide expertly crafted courses that help you unlock your potential, whether you're starting a new career, upskilling, or pursuing a passion.</p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Our Values</h2>
        <ul className="list-group mb-4">
          <li className="list-group-item" style={{background:'#f8fafc', color:'#222'}}>Quality Education</li>
          <li className="list-group-item" style={{background:'#f8fafc', color:'#222'}}>Accessibility for All</li>
          <li className="list-group-item" style={{background:'#f8fafc', color:'#222'}}>Continuous Improvement</li>
          <li className="list-group-item" style={{background:'#f8fafc', color:'#222'}}>Supportive Community</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Meet the Team</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-lg" style={{background:'#fff', border:'none'}}>
              <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="Team Member" style={{height:'180px',objectFit:'cover'}} />
              <div className="card-body text-center">
                <h5 className="card-title" style={{color:'#1976d2', fontWeight:'bold'}}>Alex Johnson</h5>
                <p className="card-text">Founder & Lead Instructor</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-lg" style={{background:'#fff', border:'none'}}>
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="Team Member" style={{height:'180px',objectFit:'cover'}} />
              <div className="card-body text-center">
                <h5 className="card-title" style={{color:'#1976d2', fontWeight:'bold'}}>Maria Lee</h5>
                <p className="card-text">Student Success Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
