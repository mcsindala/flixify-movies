import MovieCard from './MovieCard';

const MediaGenre = ({
  title,
  description = '',
  topRightButtons,
  showRank = false,
}) => {
  const genres = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Action' },
    { id: 2, name: 'Crime' },
    { id: 3, name: 'Documentary' },
    { id: 4, name: 'Adventure' },
    { id: 5, name: 'Animation' },
    { id: 6, name: 'Comedy' },
    { id: 7, name: 'Drama' },
    { id: 8, name: 'Family' },
    { id: 9, name: 'History' },
    { id: 10, name: 'Fantasy' },
    { id: 11, name: 'Sci-fi' },
    { id: 12, name: 'Romance' },
    { id: 13, name: 'Horror' },
    { id: 14, name: 'Thriller' },
  ];

  // Helper for top 3 rank medal colors on Top Rated pages
  const getRankColor = (rank) => {
    if (rank === 1) return 'bg-amber-500 text-black'; // Gold
    if (rank === 2) return 'bg-green-500 text-black'; // Green
    if (rank === 3) return 'bg-amber-700 text-white'; // Bronze
    return 'bg-purple-700 text-white'; // 4th onwards
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
        <div className="flex items-center flex-wrap gap-2 mb-2">
          {genres.map((genre) => (
            <button
              key={genre.id}
              className="px-2 py-1 text-center rounded bg-gray-600/80 text-white text-sm hover:bg-purple-600/80 cursor-pointer transition-colors duration-200 active:bg-gray-500 "
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-2 gap-y-8 place-items-center">
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

export default MediaGenre;
