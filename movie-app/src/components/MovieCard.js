import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded"
      />
      <h3 className="mt-2 text-lg">{movie.title}</h3>
      <Link to={`/movie/${movie.id}`} className="text-blue-500 mt-4 block">
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
