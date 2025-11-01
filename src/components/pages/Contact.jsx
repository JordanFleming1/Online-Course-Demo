import React from 'react';
import { toast } from 'react-toastify';

const courses = [
  { id: '1', title: 'Web Development Bootcamp' },
  { id: '2', title: 'Digital Marketing Mastery' },
  { id: '3', title: 'Data Science & AI' }
];

function Enroll() {
  return (
    <div className="container">
      <h2 className="mb-4">Enroll in a Course</h2>
      <p className="mb-3">Fill out the form below to enroll in your chosen course.</p>
        <form className="row g-3" onSubmit={e => {
          e.preventDefault();
          toast.success('🎉 Enrollment successful! We will contact you soon.', {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="col-12">
          <select className="form-select" required>
            <option value="">Select a course...</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.title}</option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success px-4">Enroll Now</button>
        </div>
      </form>
    </div>
  );
}

export default Enroll;
