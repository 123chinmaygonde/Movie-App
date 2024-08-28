import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
          navigate(`/search/${searchQuery}`);
        }
      };
    
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="text-lg font-bold">Home</Link>
          <Link to="/top-rated" className="text-lg font-bold">Top Rated</Link>
          <Link to="/upcoming" className="text-lg font-bold">Upcoming</Link>
        </div>
        <form onSubmit={handleSearch} className="flex space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
            className="px-4 py-2 rounded"
          />
          <button type="submit" className="bg-blue-600 px-4 py-2 rounded">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
