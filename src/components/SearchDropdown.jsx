import img from '../assets/images/the_amateur.png';

const SearchDropdown = ({ isOpen, results }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-12 right-0 w-80 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-md scrollbar-thin scrollbar-track-stone-200 scrollbar-thumb-stone-500 dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-500">
      <div className="max-h-96 overflow-y-auto divide-y divide-neutral-800">
        {results.map((movie, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {/* Movie Thumbnail */}
            <div className="w-10 h-14 shrink-0 overflow-hidden rounded bg-neutral-800">
              <img
                src={movie.image || img}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Movie Title & Year */}
            <div className="flex flex-col text-base text-gray-200">
              <h4 className="font-semibold truncate text-lg">{movie.title}</h4>
              <span className="text-xs text-neutral-400">{movie.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDropdown;
