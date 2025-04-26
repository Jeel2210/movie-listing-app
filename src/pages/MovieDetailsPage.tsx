import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Movie, Review } from "../types/movieTypes";
import ReviewForm from "../components/ReviewForm";

interface Props {
  movies: Movie[];
}

const MovieDetailsPage: React.FC<Props> = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === (movieId));
  const [reviews, setReviews] = useState<Review[]>(movie?.reviews || []);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch the reviews for the movie from the backend
  useEffect(() => {
    if (movieId) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/${movieId}`)
        .then((response) => {
          setReviews(response.data.reviews);
        })
        .catch((error) => console.error("Failed to fetch reviews:", error));
    }
  }, [movieId]);

  // Add a new review and update the state
  const addReview = (review: Review) => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/${movieId}/reviews`, review)
      .then((response) => {
        setReviews([...reviews, response.data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to submit review:", error);
        setIsLoading(false);
      });
  };

  if (!movie) return <div>Movie not found</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{movie.title}</h1>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Release Year:</strong> {movie.releaseYear}
      </p>
      <p>
        <strong>Average Rating:</strong> {movie.averageRating}
      </p>

      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((r, idx) => (
            <li key={idx}>
              <strong>{r.reviewerName}</strong> ({r.rating}/5):{" "}
              {r.comment || "No comment"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}

      <h3>Add a Review</h3>
    <ReviewForm onAddReview={addReview} isLoading={isLoading} />
    </div>
  );
};

export default MovieDetailsPage;
