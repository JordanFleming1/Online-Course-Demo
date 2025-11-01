function Footer() {
  return (
    <footer className="bg-primary text-white mt-5 py-4" style={{borderTopLeftRadius:'24px',borderTopRightRadius:'24px'}}>
      <div className="container text-center">
        <div className="mb-2">
          <a href="#" className="me-3 text-white"><i className="bi bi-facebook"></i></a>
          <a href="#" className="me-3 text-white"><i className="bi bi-twitter"></i></a>
          <a href="#" className="me-3 text-white"><i className="bi bi-linkedin"></i></a>
        </div>
        <div>
          <small style={{color:'#fff',fontSize:'1.08em',letterSpacing:'0.5px',textShadow:'0 1px 2px #1976d2'}}>© {new Date().getFullYear()} Online Course Demo. All rights reserved.</small>
        </div>
        <div>
          <small style={{color:'#fff',fontSize:'1.08em',letterSpacing:'0.5px',textShadow:'0 1px 2px #1976d2'}}>Contact: info@onlinecourse.com</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
