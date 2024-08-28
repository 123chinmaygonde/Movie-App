import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(response => setMovie(response.data))
        .catch(error => console.error(error));
    }, [id]);
  
    if (!movie) return <div>Loading...</div>;
  return (
    <div className="container mx-auto p-4">
    <div className="flex flex-col md:flex-row">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full md:w-1/3 rounded"
      />
      <div className="md:ml-8">
        <h2 className="text-3xl font-bold">{movie.title}</h2>
        <p className="mt-4">{movie.overview}</p>
        <p className="mt-4"><strong>Release Date:</strong> {movie.release_date}</p>
        <p className="mt-4"><strong>Rating:</strong> {movie.vote_average}</p>
      </div>
    </div>
  </div>
  )
}

export default MovieDetailPage
