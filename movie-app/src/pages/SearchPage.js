import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState(query || '');
    const navigate = useNavigate();

    useEffect(() => {
        if (query) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1`)
                .then(response => setMovies(response.data.results))
                .catch(error => console.error(error));
        }
    }, [query]);

    useEffect(() => {
        setSearchQuery(query || '');
    }, [query]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search/${searchQuery}`);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-8">Search Results for "{query}"</h2>
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search movies..."
                    className="px-4 py-2 rounded bg-gray-700 text-white w-full"
                />
                <button type="submit" className="bg-blue-600 px-4 py-2 rounded mt-2">Search</button>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
