import React, { useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "../types/movieTypes";

interface MoviesFetcherProps {
  children: (movies: Movie[]) => React.ReactNode;
}

const MoviesFetcher: React.FC<MoviesFetcherProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie[]>(
          `${process.env.REACT_APP_API_URL}/movies`
        );
        setMovies(response.data);
      } catch (err) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <>{children(movies)}</>;
};

export default MoviesFetcher;
