import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MovieCard from './MovieCard';
import { fetchMoviesByGenre, getImageUrl } from '../services/api';

const MediaGenre = ({
  title,
  description = '',
  topRightButtons,
  showRank = false,
  queryKey = 'moviesByGenre',
  queryFn = null, // Custom query override if provided
}) => {
  const [selectedGenreId, setSelectedGenreId] = useState(0);

  const genres = [
    { id: 0, name: 'All' },
    { id: 28, name: 'Action' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 36, name: 'History' },
    { id: 14, name: 'Fantasy' },
    { id: 878, name: 'Sci-fi' },
    { id: 10749, name: 'Romance' },
    { id: 27, name: 'Horror' },
    { id: 53, name: 'Thriller' },
  ];

  // If a custom queryFn is passed (like for Trending), use it. Otherwise, use genre fetching.
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [queryKey, selectedGenreId],
    queryFn: queryFn ? queryFn : () => fetchMoviesByGenre(selectedGenreId),
  });

  const getRankColor = (rank) => {
    if (rank === 1) return 'bg-amber-500 text-black';
    if (rank === 2) return 'bg-green-500 text-black';
    if (rank === 3) return 'bg-amber-700 text-white';
    return 'bg-purple-700 text-white';
  };

  return (
    <section className="w-full flex flex-col gap-4 py-4 px-6 md:px-16 mt-6">
      <div className="flex flex-col gap-2">
        <div className="mb-3 w-full flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold py-3">{title}</h1>
            <p className="text-base text-gray-300">{description}</p>
          </div>

          {topRightButtons && (
            <div className="flex items-center">{topRightButtons}</div>
          )}
        </div>

        {/* Genre Switch Buttons */}
        <div className="flex items-center flex-wrap gap-2 mb-2">
          {genres.map((genre) => {
            const isActive = selectedGenreId === genre.id;
            return (
              <button
                key={genre.id}
                onClick={() => setSelectedGenreId(genre.id)}
                className={`px-3 py-1.5 text-center rounded text-sm cursor-pointer transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-purple-600 text-white font-semibold shadow-lg shadow-purple-900/40'
                    : 'bg-gray-600/80 text-white hover:bg-purple-600/50'
                }`}
              >
                {genre.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Loading & Error States */}
      {isLoading && (
        <div className="text-gray-400 py-10 text-center">
          Loading genre results...
        </div>
      )}
      {isError && (
        <div className="text-red-500 py-10 text-center">
          Failed to fetch movies for this genre.
        </div>
      )}

      {/* Dynamic Grid Results */}
      {!isLoading && !isError && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 place-items-center">
          {movies?.map((movie, index) => (
            <MovieCard
              key={movie.id}
              title={movie.title || movie.name}
              rating={movie.vote_average?.toFixed(1)}
              image={getImageUrl(movie.poster_path)}
              releaseDate={movie.release_date || movie.first_air_date}
              showRank={showRank}
              rank={index + 1}
              rankBgColor={getRankColor(index + 1)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MediaGenre;
