
import { useParams } from 'react-router-dom';

const courses = [
  {
    id: '1',
    title: 'Web Development Bootcamp',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Master HTML, CSS, JavaScript, and React. Perfect for beginners and aspiring developers.',
    details: [
      'Comprehensive curriculum covering HTML, CSS, JavaScript, and React.',
      'Hands-on projects and real-world examples.',
      'Lifetime access to course materials.',
      'Certificate of completion.',
      'Beginner-friendly, no prior experience required.'
    ]
  },
  {
    id: '2',
    title: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Learn how to protect systems, networks, and data from cyber threats. Ideal for aspiring security professionals.',
    details: [
      'Understand the fundamentals of cybersecurity and threat prevention.',
      'Hands-on labs with real-world scenarios.',
      'Covers network security, ethical hacking, and risk management.',
      'Lifetime access to course materials.',
      'Certificate of completion.'
    ]
  },
  {
    id: '3',
    title: 'Data Science & AI',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'Dive into Python, machine learning, and data analysis. No prior experience required!',
    details: [
      'Introduction to Python, machine learning, and data analysis.',
      'Project-based learning with datasets.',
      'Lifetime access to course materials.',
      'Certificate of completion.',
      'No prior experience required.'
    ]
  }
];

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="container text-center">
        <h2 className="mb-4">Course Not Found</h2>
        <p>The course you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={course.image} alt={course.title} className="img-fluid rounded shadow mb-4" style={{maxHeight:'320px',objectFit:'cover'}} />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3" style={{color:'#1976d2'}}>{course.title}</h2>
          <p className="lead mb-3" style={{fontWeight:'bold'}}>{course.description}</p>
          <ul className="list-group mb-4">
            {course.details.map((detail, idx) => (
              <li key={idx} className="list-group-item" style={{background:'#f8fafc', color:'#222'}}>{detail}</li>
            ))}
          </ul>
          <a href="/enroll" className="btn btn-success btn-lg">Enroll Now</a>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
