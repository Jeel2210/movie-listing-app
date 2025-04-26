import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movieTypes';

interface Props {
  movie: Movie;
}

const MovieRow: React.FC<Props> = ({ movie }) => {
console.log('MovieRow component rendered',movie);

  return (
    <tr>
      <td>
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      </td>
      <td>{movie.genre}</td>
      <td>{movie.releaseYear}</td>
      <td>{movie.averageRating}</td>
    </tr>
  );
}

export default MovieRow;

