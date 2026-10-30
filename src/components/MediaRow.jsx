import { useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIos';
import MovieCard from './MovieCard';

const MediaRow = ({ title, description, showRank = false }) => {
  // Initialize the ref for the scrolling container
  const rowRef = useRef(null);

  // Handle the click scroll math
  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft } = rowRef.current;

      const cardWidth = 220;
      const gap = 24; // Tailwind gap-6 = 24px
      const cardsPerJump = 3; // Number of cards to shift per click
      const scrollAmount = (cardWidth + gap) * cardsPerJump;

      rowRef.current.scrollTo({
        left:
          direction === 'left'
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Helper for top 3 rank medal colors on Top Rated pages
  const getRankColor = (rank) => {
    if (rank === 1) return 'bg-amber-500 text-black'; // Gold
    if (rank === 2) return 'bg-green-500 text-black'; // Green
    if (rank === 3) return 'bg-amber-700 text-white'; // Bronze
    return 'bg-purple-700 text-white'; // 4th onwards
  };

  return (
    <section className="py-4 px-6 md:px-16">
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col text-white">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-base text-gray-300">{description}</p>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <button
            onClick={() => handleScroll('left')}
            className="flex items-center justify-center w-8 h-8 border border-white/20 rounded-full hover:border-white transition-colors cursor-pointer active:bg-gray-800 duration-200"
          >
            <ArrowLeftIcon fontSize="small" sx={{ color: 'lightgray' }} />
          </button>

          <button
            onClick={() => handleScroll('right')}
            className="flex items-center justify-center w-8 h-8 border border-white/20 rounded-full hover:border-white transition-colors cursor-pointer active:bg-gray-800 duration-200"
          >
            <ArrowRightIcon fontSize="small" sx={{ color: 'lightgray' }} />
          </button>
        </div>
      </div>

      <div
        ref={rowRef}
        className="flex items-center gap-6 pb-10 overflow-x-auto scroll-smooth no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-none]"
      >
        <MovieCard showRank={showRank} rank={1} rankBgColor={getRankColor(1)} />
        <MovieCard showRank={showRank} rank={2} rankBgColor={getRankColor(1)} />
        <MovieCard showRank={showRank} rank={1} rankBgColor={getRankColor(1)} />
        <MovieCard showRank={showRank} rank={2} rankBgColor={getRankColor(2)} />
        <MovieCard showRank={showRank} rank={3} rankBgColor={getRankColor(3)} />
        <MovieCard showRank={showRank} rank={2} rankBgColor={getRankColor(2)} />
        <MovieCard showRank={showRank} rank={1} rankBgColor={getRankColor(1)} />
        <MovieCard showRank={showRank} rank={2} rankBgColor={getRankColor(2)} />
        <MovieCard showRank={showRank} rank={3} rankBgColor={getRankColor(3)} />
        <MovieCard showRank={showRank} rank={1} rankBgColor={getRankColor(1)} />
        <MovieCard showRank={showRank} rank={1} rankBgColor={getRankColor(1)} />
        <MovieCard showRank={showRank} rank={1} rankBgColor={getRankColor(1)} />
        <MovieCard showRank={showRank} rank={2} rankBgColor={getRankColor(2)} />
        <MovieCard showRank={showRank} rank={9} rankBgColor={getRankColor(9)} />
        <MovieCard showRank={showRank} rank={3} rankBgColor={getRankColor(3)} />
      </div>
    </section>
  );
};

export default MediaRow;
