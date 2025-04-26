import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { Movie } from "./types/movieTypes";
import MoviesFetcher from "./pages/MoviesFetcher";

const App: React.FC = () => {
  return (
    <Router>
      <MoviesFetcher>
        {(movies:Movie[]) => (
          <Routes>
            <Route path="/" element={<MovieListPage movies={movies} />} />
            <Route
              path="/movies/:movieId"
              element={<MovieDetailsPage movies={movies} />}
            />
          </Routes>
        )}
      </MoviesFetcher>
    </Router>
  );
};

export default App;
