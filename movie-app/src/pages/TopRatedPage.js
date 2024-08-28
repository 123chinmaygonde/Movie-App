import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

const TopRatedPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(response => setMovies(response.data.results))
        .catch(error => console.error(error));
    }, []);
  return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold text-center mb-8">Top-Rated Movies</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
  )
}

export default TopRatedPage
