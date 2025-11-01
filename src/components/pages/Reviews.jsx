import TestimonialsCarousel from '../ui/TestimonialsCarousel';
import React, { useState } from 'react';

const initialReviews = [
  {
    name: 'Jane Doe',
    text: '"This platform made learning so easy and fun! Highly recommend the Web Development Bootcamp."',
    rating: 5
  },
  {
    name: 'John Smith',
    text: '"The Cybersecurity course was very informative and practical. Great for beginners!"',
    rating: 5
  },
  {
    name: 'Emily Chen',
    text: '"Data Science & AI course was challenging but rewarding. Loved the hands-on projects!"',
    rating: 4
  },
  {
    name: 'Carlos Ruiz',
    text: '"Good value for money. The dashboard is very useful."',
    rating: 3
  }
];

function Reviews() {
  const [sortType, setSortType] = useState('rating-desc');
  const [starFilter, setStarFilter] = useState('all');
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: '', text: '', rating: 5 });
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  let sortedReviews = [...reviews];
  if (sortType === 'rating-desc') {
    sortedReviews.sort((a, b) => b.rating - a.rating);
  } else if (sortType === 'rating-asc') {
    sortedReviews.sort((a, b) => a.rating - b.rating);
  }
  if (starFilter !== 'all') {
    sortedReviews = sortedReviews.filter(r => r.rating === Number(starFilter));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: name === 'rating' ? Number(value) : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) {
      setError('Please enter your name and review.');
      return;
    }
    setReviews(r => [
      { name: form.name, text: form.text, rating: form.rating },
      ...r
    ]);
    setForm({ name: '', text: '', rating: 5 });
    setError('');
    setShowModal(false);
  }

  return (
    <>
      <TestimonialsCarousel />
      <div className="container mb-5">
        <h2 className="mb-4">Course Reviews</h2>
        <button className="btn btn-success mb-4" onClick={() => setShowModal(true)}>
          Write a Review
        </button>

        {/* Modal Popup for Review Form */}
        {showModal && (
          <div className="modal fade show" tabIndex="-1" style={{display:'block',background:'rgba(0,0,0,0.35)'}}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Write Your Own Review</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => { setShowModal(false); setError(''); }}></button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    {error && <div className="alert alert-danger py-1 mb-2">{error}</div>}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        maxLength={32}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <textarea
                        className="form-control"
                        name="text"
                        placeholder="Your Review"
                        value={form.text}
                        onChange={handleChange}
                        rows={3}
                        maxLength={200}
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label className="me-2">Rating:</label>
                      <select
                        className="form-select w-auto d-inline"
                        name="rating"
                        value={form.rating}
                        onChange={handleChange}
                        required
                      >
                        {[5,4,3,2,1].map(star => (
                          <option key={star} value={star}>{star} Star{star > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => { setShowModal(false); setError(''); }}>Cancel</button>
                    <button type="submit" className="btn btn-success">Post Review</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="mb-3 d-flex align-items-center">
          <label className="me-2">Sort by:</label>
          <select className="form-select w-auto me-3" value={sortType} onChange={e => setSortType(e.target.value)}>
            <option value="rating-desc">Rating: Highest First</option>
            <option value="rating-asc">Rating: Lowest First</option>
          </select>
          <label className="me-2">Filter by stars:</label>
          <select className="form-select w-auto" value={starFilter} onChange={e => setStarFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
        <div className="row">
          {sortedReviews.map((review, idx) => (
            <div className="col-md-6 mb-3" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{review.name}</h5>
                  <p className="card-text">{review.text}</p>
                  <span className="badge bg-success">{review.rating} Stars</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Reviews;
