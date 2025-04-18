import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    comment: '',
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: 'John Doe',
      rating: 5,
      comment: 'Amazing experience! The trip was well organized and the guides were knowledgeable.',
      date: '2024-03-15',
    },
    {
      id: 2,
      user: 'Jane Smith',
      rating: 4,
      comment: 'Great service overall. Would recommend to friends and family.',
      date: '2024-03-10',
    },
  ]);

  const handleRatingChange = (rating) => {
    setReviewForm(prev => ({
      ...prev,
      rating,
    }));
  };

  const handleCommentChange = (e) => {
    setReviewForm(prev => ({
      ...prev,
      comment: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewForm.rating === 0) {
      alert('Please select a rating');
      return;
    }

    const newReview = {
      id: reviews.length + 1,
      user: 'Current User', // In a real app, this would be the logged-in user's name
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      date: new Date().toISOString().split('T')[0],
    };

    setReviews(prev => [newReview, ...prev]);
    setReviewForm({
      rating: 0,
      comment: '',
    });
  };

  return (
    <div className="reviews-container">
      <div className="reviews-box">
        <h2>Share Your Experience</h2>
        
        <form onSubmit={handleSubmit} className="review-form">
          <div className="rating-section">
            <label>Your Rating</label>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star ${star <= reviewForm.rating ? 'active' : ''}`}
                  onClick={() => handleRatingChange(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="comment-section">
            <label htmlFor="comment">Your Review</label>
            <textarea
              id="comment"
              value={reviewForm.comment}
              onChange={handleCommentChange}
              placeholder="Share your experience..."
              required
            />
          </div>

          <button type="submit" className="submit-review">
            Submit Review
          </button>
        </form>

        <div className="reviews-list">
          <h3>Recent Reviews</h3>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="user-info">
                  <span className="user-name">{review.user}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`star ${index < review.rating ? 'active' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews; 