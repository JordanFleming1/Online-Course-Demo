import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center py-5">
      <img
        src="https://illustrations.popsy.co/gray/web-error.svg"
        alt="404 Not Found Illustration"
        style={{maxWidth:'320px',width:'100%',marginBottom:'2rem'}}
      />
      <h1 className="display-4 fw-bold mb-3">404</h1>
      <p className="lead mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}

export default NotFound;
