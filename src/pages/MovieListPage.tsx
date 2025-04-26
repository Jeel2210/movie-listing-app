import React, { useState, useEffect } from "react";
import { Movie } from "../types/movieTypes";
import MovieRow from "../components/MovieRow";
import axios from "axios";

interface Props {
  movies: Movie[];
}

const MovieListPage: React.FC<Props> = ({ movies }) => {
  console.log("MovieListPage component rendered", movies);

  // Filters
  const [genreFilter, setGenreFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [sortedMovies, setSortedMovies] = useState<Movie[]>(movies);

  // Fetch movies on filter or sort change
  const fetchMovies = async (genre: string, year: string) => {
    try {
      const apiURL = `${process.env.REACT_APP_API_URL}/movies`;
      let url = apiURL;

      // Apply genre and year filters to the URL
      if (genre || year) {
        const filters = [];
        if (genre) filters.push(`genre=${genre}`);
        if (year) filters.push(`year=${year}`);
        url = `${apiURL}?${filters.join("&")}`;
      }

      const response = await axios.get(url);
      setSortedMovies(response.data); // Set the filtered movies data
    } catch (err) {
      console.error("Failed to fetch movies:", err);
    }
  };

  // Sort by rating function
  const sortByRating = () => {
    const sorted = [...sortedMovies].sort(
      (a, b) => b.averageRating - a.averageRating
    );
    setSortedMovies(sorted);
  };

  // Trigger data fetching based on genre or year filter
  useEffect(() => {
    fetchMovies(genreFilter, yearFilter);
  }, [genreFilter, yearFilter]);

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
        >
          <option value="">All Years</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <button onClick={sortByRating}>Sort by Rating</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Year</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map((movie) => (
            <MovieRow key={movie.title} movie={movie} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieListPage;
