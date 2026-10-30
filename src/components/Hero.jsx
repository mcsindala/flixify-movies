import { useState, useEffect } from 'react';
import PlayIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import bg1 from '../assets/images/hero-1.jfif';
import bg2 from '../assets/images/spiderman.webp';
import bg3 from '../assets/images/hero-2.jfif';
import bg4 from '../assets/images/hero-3.jfif';

const featuredMovies = [
  {
    id: 1,
    title: 'Spider-Man: Across the Spider-Verse',
    description:
      "Miles Morales returns for the next chapter of the Oscar-winning Spider-Verse saga, an epic adventure that will transport Brooklyn's full-time, friendly neighborhood Spider-Man across the Multiverse.",
    rating: '8.4',
    year: '2023',
    image: bg1,
  },
  {
    id: 2,
    title: 'Mission: Impossible - The Final Reckoning',
    description:
      'Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world’s governments and a mysterious ghost from Hunt’s past on their trail.',
    rating: '7.2',
    year: '2025',
    image: bg2,
  },
  {
    id: 3,
    title: 'Chronicles of Mars',
    description:
      'A breakthrough expedition to the red planet uncovers ancient extraterrestrial structures, forcing the crew into a desperate fight for survival against forces beyond human understanding.',
    rating: '8.9',
    year: '2024',
    image: bg3,
  },
  {
    id: 4,
    title: 'The Last of Us',
    description:
      'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity’s last hope.',
    rating: '9.1',
    year: '2023',
    image: bg4,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic Slider Effect (Changes slide every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredMovies.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    // Cleanup interval on unmount to avoid memory leaks
    return () => clearInterval(timer);
  }, []);

  // Get the current movie data based on the active index
  const currentMovie = featuredMovies[currentIndex];

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center px-6 md:px-16 transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${currentMovie.image})` }}
    >
      {/* Horizontal cinematic gradient: dark overlay behind text on the left */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/40 to-transparent" />

      {/* Vertical cinematic gradient overlay: fades the bottom cleanly into the main body layout background */}
      <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent" />

      {/* Hero Container */}
      <div className="relative z-10 max-w-2xl space-y-4 mt-20">
        {/* Featured tag and info text */}
        <div className="flex items-center space-x-3 text-md text-gray-300">
          <span className="bg-purple-700 text-white px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
            Featured
          </span>
          <span>⭐ {currentMovie.rating}</span>
          <span className="text-lg">.</span>
          <span>{currentMovie.year}</span>
        </div>

        {/* Movie Title */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight drop-shadow-md leading-tight">
          {currentMovie.title}
        </h1>

        {/* Movie Description */}
        <p className="text-gray-300 text-base md:text-md leading-relaxed line-clamp-3 drop-shadow">
          {currentMovie.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button className="bg-purple-700 hover:bg-purple-800 active:scale-95 transition-all text-white font-semibold px-4 py-2 rounded-md shadow-lg cursor-pointer flex items-center gap-2">
            <PlayIcon /> <span>Watch Now</span>
          </button>
          <button className="bg-gray-800/80 hover:bg-gray-700 active:scale-95 transition-all text-white font-semibold px-4 py-2 rounded-md border border-gray-600 backdrop-blur-sm cursor-pointer flex items-center gap-3">
            <AddIcon />
            <span>Add to Watchlist</span>
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === index
                ? 'w-8 h-2 bg-purple-600'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
