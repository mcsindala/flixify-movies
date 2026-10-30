// import MovieTile from '../assets/images/the_amateur.png';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PlayIcon from '@mui/icons-material/PlayCircle';

// const MovieCard = ({
//   rank = null,
//   showRank = false,
//   rankBgColor = 'bg-amber-500',
// }) => {
//   return (
//     // group relative flex flex-col cursor-pointer w-[220px]
//     <article className="group relative flex flex-col cursor-pointer shrink-0 md:w-55">
//       <div className="relative aspect-2/3 w-full overflow-hidden rounded-xl bg-zinc-900 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.1)]">
//         <img
//           src={MovieTile}
//           alt="card"
//           className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
//         />

//         {/* Hover Darkening Overlay */}
//         <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/40" />

//         {/* Top Gradient Overlay */}
//         <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/20 pointer-events-none" />

//         <button className="absolute top-2 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-gray-300 transition-colors duration-200 hover:bg-black/60 focus:outline-none cursor-pointer">
//           <FavoriteIcon sx={{ fontSize: 15 }} />
//         </button>

//         {showRank && rank !== null && (
//           <div
//             className={`absolute top-0 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-bl-xl ${rankBgColor} text-white font-bold text-md shadow-md border-l border-b border-white/20 backdrop-blur-md`}
//           >
//             {rank}
//           </div>
//         )}

//         <button
//           className="absolute flex items-center gap-1 justify-center bottom-2 left-2 right-2 px-3 py-1 bg-purple-700 hover:bg-purple-800 transition-all duration-300 ease-out cursor-pointer rounded text-white text-sm z-10
//           opacity-0 translate-y-4 pointer-events-none
//           group-hover:opacity-100 active:scale-95 group-hover:translate-y-0 group-hover:pointer-events-auto"
//         >
//           <PlayIcon fontSize="small" sx={{ color: 'lightgray' }} />
//           View Details
//         </button>
//       </div>

//       <div className="mt-3">
//         <h1 className="truncate text-sm font-bold text-white transition-colors duration-200 group-hover:text-amber-400">
//           The Transporter 2 Movie
//         </h1>
//         <p className="mt-0.5 truncate text-xs text-zinc-400">
//           Biography · Drama · History
//         </p>
//         <div className="flex items-center gap-4">
//           <time
//             dateTime="2023-07-21"
//             className="mt-1 block text-[11px] font-medium tracking-wide uppercase text-zinc-500"
//           >
//             July 21, 2023
//           </time>
//           <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-bold text-purple-500">
//             <span>⭐</span>
//             <span className="text-md">8.9</span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default MovieCard;

import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayIcon from '@mui/icons-material/PlayCircle';

const MovieCard = ({
  title,
  image,
  rating,
  releaseDate,
  rank = null,
  showRank = false,
  rankBgColor = 'bg-amber-500',
}) => {
  // Format release date nicely if available
  const formattedDate = releaseDate
    ? new Date(releaseDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Coming Soon';

  return (
    <article className="group relative flex flex-col cursor-pointer shrink-0 md:w-55">
      <div className="relative aspect-2/3 w-full overflow-hidden rounded-xl bg-zinc-900 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.1)]">
        <img
          src={image}
          alt={title || 'Movie Poster'}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Hover Darkening Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/40" />

        {/* Top Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/20 pointer-events-none" />

        <button className="absolute top-2 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-gray-300 transition-colors duration-200 hover:bg-black/60 focus:outline-none cursor-pointer">
          <FavoriteIcon sx={{ fontSize: 15 }} />
        </button>

        {showRank && rank !== null && (
          <div
            className={`absolute top-0 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-bl-xl ${rankBgColor} text-white font-bold text-md shadow-md border-l border-b border-white/20 backdrop-blur-md`}
          >
            {rank}
          </div>
        )}

        <button
          className="absolute flex items-center gap-1 justify-center bottom-2 left-2 right-2 px-3 py-1 bg-purple-700 hover:bg-purple-800 transition-all duration-300 ease-out cursor-pointer rounded text-white text-sm z-10
          opacity-0 translate-y-4 pointer-events-none
          group-hover:opacity-100 active:scale-95 group-hover:translate-y-0 group-hover:pointer-events-auto"
        >
          <PlayIcon fontSize="small" sx={{ color: 'lightgray' }} />
          View Details
        </button>
      </div>

      <div className="mt-3">
        <h1 className="truncate text-sm font-bold text-white transition-colors duration-200 group-hover:text-amber-400">
          {title}
        </h1>
        <p className="mt-0.5 truncate text-xs text-zinc-400">TMDB Original</p>
        <div className="flex items-center justify-between">
          <time
            dateTime={releaseDate}
            className="mt-1 block text-[11px] font-medium tracking-wide uppercase text-zinc-500 truncate"
          >
            {formattedDate}
          </time>
          <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-bold text-purple-500 shrink-0">
            <span>⭐</span>
            <span className="text-md">{rating || 'N/A'}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
