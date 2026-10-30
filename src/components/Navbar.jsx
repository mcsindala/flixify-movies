// import { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  // const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movies' },
    { name: 'TV Series', path: '/tv-series' },
    { name: 'Trending', path: '/trending' },
    { name: 'Top Rated', path: '/top-rated' },
  ];
  return (
    <nav className="hidden md:block border border-gray-700/60  bg-neutral-900/40 backdrop-blur-md px-8 py-2 rounded-full">
      <ul className="flex items-center gap-6 text-lg text-gray-400 font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `border-b-4 transition-colors rounded-md px-1 text-sm font-medium duration-200 py-0.5 block ${
                  isActive
                    ? 'border-b-purple-600 text-purple-500 font-semibold'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-b-purple-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
