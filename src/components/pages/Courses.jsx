
import { Link } from 'react-router-dom';
// ...existing code...

const courses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: [
      'Master HTML, CSS, JavaScript, and React.',
      'Perfect for beginners and aspiring developers.'
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Cybersecurity',
    description: [
      'Learn how to protect systems, networks, and data from cyber threats.',
      'Ideal for aspiring security professionals.'
    ],
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Data Science & AI',
    description: [
      'Dive into Python, machine learning, and data analysis.',
      'No prior experience required!'
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
];


function Courses() {
  const darkMode = typeof document !== 'undefined' && document.documentElement.classList.contains('dark-mode');
  const textColor = darkMode ? '#eee' : '#222';
  const accentColor = darkMode ? '#90caf9' : '#1976d2';
  return (
    <div className="container">
      <h2 className="mb-4 text-center" style={{color: accentColor, fontWeight:'bold'}}>Our Courses</h2>
      <div className="row g-4">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card h-100 shadow-lg border-0 course-card" style={{background: darkMode ? '#23272a' : '#fff', transition:'transform 0.2s, box-shadow 0.2s'}}>
              <img src={course.image} className="card-img-top" alt={course.title} style={{height:'180px',objectFit:'cover', borderTopLeftRadius:'12px', borderTopRightRadius:'12px'}} />
              <div className="card-body d-flex flex-column" style={{color: textColor}}>
                <h5 className="card-title mb-2" style={{color: accentColor, fontWeight:'bold'}}>{course.title}</h5>
                <span className="badge bg-info mb-2" style={{alignSelf:'flex-start'}}>Featured</span>
                <ul className="card-text mb-3" style={{color: textColor, fontWeight:'bold', paddingLeft:'1.2em'}}>
                  {course.description.map((desc, idx) => (
                    <li key={idx} style={{marginBottom:'0.5em'}}>{desc}</li>
                  ))}
                </ul>
                <Link to={`/courses/${course.id}`} className="btn btn-primary mt-auto">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .course-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(25, 118, 210, 0.15);
        }
      `}</style>
    </div>
  );
}

export default Courses;
