import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from 'react-router';
import { Button, TextField } from '@mui/material';

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900/50 flex flex-col gap-2 md:px-16 py-8 mt-8">
      <div className="border-b border-b-gray-800 md:grid grid-cols-4 gap-6 pb-6">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl tracking-wide text-white cursor-pointer">
            <span className="text-purple-600">FLiX</span>iFY
          </h1>
          <p className="text-gray-400 text-sm">
            Discover and explore the latest movies from around the world.
            Flixify gives you access to a vast collection of films across all
            possible genres.
          </p>
          <div className="flex items-center gap-4">
            <XIcon className="cursor-pointer text-gray-400 hover:text-purple-600 transition-colors duration-200" />
            <InstagramIcon className="cursor-pointer text-gray-400 hover:text-purple-600 transition-colors duration-200" />
            <FacebookIcon className="cursor-pointer text-gray-400 hover:text-purple-600 transition-colors duration-200" />
          </div>
        </div>
        <div className="flex flex-col gap-4 pl-10">
          <h2 className="text-2xl text-white">Quick Links</h2>
          <div>
            <ul className="flex flex-col pl-1 gap-1 text-gray-400 text-sm">
              <NavLink
                to="/"
                className="cursor-pointer transition-colors hover:text-white duration-200"
              >
                Home
              </NavLink>
              <NavLink
                to="/trending"
                className="cursor-pointer transition-colors hover:text-white duration-200"
              >
                Trending
              </NavLink>
              <NavLink
                to="/movies"
                className="cursor-pointer transition-colors hover:text-white duration-200"
              >
                Movies
              </NavLink>
              <NavLink
                to="/tv-series"
                className="cursor-pointer transition-colors hover:text-white duration-200"
              >
                Tv Series
              </NavLink>
              <NavLink
                to="/top-rated"
                className="cursor-pointer transition-colors hover:text-white duration-200"
              >
                Top Rated
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-white">Resources</h2>
          <div>
            <ul className="flex flex-col pl-1 gap-1 text-gray-400 text-sm">
              <li className="cursor-pointer transition-colors hover:text-white duration-200">
                About Us
              </li>
              <li className="cursor-pointer transition-colors hover:text-white duration-200">
                Contact
              </li>
              <li className="cursor-pointer transition-colors hover:text-white duration-200">
                Blog
              </li>
              <li className="cursor-pointer transition-colors hover:text-white duration-200">
                FAQ
              </li>
              <li className="cursor-pointer transition-colors hover:text-white duration-200">
                Help Center
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-white">Newsletter</h2>
          <p className="text-gray-400 text-sm">
            Stay up to date with the latest movies and shows
          </p>
          <form className="flex flex-col gap-2.5">
            <TextField
              label="Your Email"
              size="small"
              color="secondary"
              className="w-full text-gray-400 border-gray-400"
              sx={{
                '& .MuiInputBase-input': { color: '#eeeeee' },
                '& .MuiInputLabel-root': { color: '#bdbdbd' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#c9c9c9' },
                  '&:hover fieldset': { borderColor: '#a91bb3' },
                },
              }}
            />
            <Button variant="contained" className="w-full" color="secondary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="flex pt-2 items-center justify-between text-gray-400 text-sm">
        <div>
          <p>
            &copy; 2026 Flixify. All rights reserved. Powered by{' '}
            <span className="text-purple-500">TMDB API</span>
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-6 text-gray-400 text-sm">
            <li className="cursor-pointer transition-colors hover:text-white duration-200">
              Privacy Policy
            </li>
            <li className="cursor-pointer transition-colors hover:text-white duration-200">
              Terms of Service
            </li>
            <li className="cursor-pointer transition-colors hover:text-white duration-200">
              Cookie Policy
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
