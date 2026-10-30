import { useState } from 'react';
import { NavLink } from 'react-router';
import Navbar from './Navbar';
import SearchIcon from '@mui/icons-material/Search';
import SearchDropdown from './SearchDropdown';
import img from '../assets/images/the_amateur.png';

const Header = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Mock movie data for search
  const allMovies = [
    { title: 'Driver: Sex Transport', year: '2019', image: img },
    { title: 'The Transporter', year: '2002', image: img },
    { title: 'Transporter 3', year: '2008', image: img },
    { title: 'Transporter 2', year: '2005', image: img },
    { title: 'Transportation Dance', year: '2019', image: img },
  ];

  // Filter movies based on typing query
  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="fixed z-20 top-0 left-0 w-full py-5 px-12 text-lg flex items-center justify-between bg-linear-to-b from-neutral-950/80 to-transparent backdrop-blur-[2px]">
      <div>
        <NavLink to="/">
          <h1 className="font-bold text-4xl tracking-wide text-white cursor-pointer">
            <span className="text-purple-600">FLiX</span>iFY
          </h1>
        </NavLink>
      </div>
      <Navbar />

      {/* Search Wrapper must be 'relative' so the dropdown positions inside it */}
      <div className="relative min-w-61 flex items-center text-gray-200">
        <div className="absolute left-3 pointer-events-none z-10">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>

        <input
          className="w-40 focus:w-60 transition-all duration-300 ease-in-out pl-10 pr-5 py-2 rounded-full text-base text-gray-200 border border-gray-400 outline-none hover:border-purple-500 focus:ring focus:ring-purple-700 focus:ring-offset-2 bg-transparent cursor-pointer"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay blur so clicking results works
        />

        {/* Dropdown Box anchored right under the search input */}
        <SearchDropdown
          isOpen={isFocused && query.length > 0 && filteredMovies.length > 0}
          results={filteredMovies}
        />
      </div>
    </header>
  );
};

export default Header;
