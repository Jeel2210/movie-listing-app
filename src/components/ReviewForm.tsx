import React, { useState } from "react";
import { Review } from "../types/movieTypes";

interface Props {
  onAddReview: (review: Review) => void;
  isLoading: boolean; // Add this line to define isLoading
}

const ReviewForm: React.FC<Props> = ({ onAddReview, isLoading }) => {
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = { reviewerName, rating, comment };
    onAddReview(newReview);
    setReviewerName("");
    setRating(1);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Reviewer Name:</label>
        <input
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
};

export default ReviewForm;
