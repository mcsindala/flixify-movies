// import MovieTile from '../assets/images/the_amateur.png';
// // import { IconButton } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// // import StarIcon from '@mui/icons-material/StarRate';
// // import PlayIcon from '@mui/icons-material/PlayCircle';

// const Card = ({ title }) => {
//   return (
//     <>
//       <article className="relative flex flex-col cursor-pointer w-full h-full md:w-[250px] min-w-[200px]">
//         <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-zinc-900 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.1)]">
//           <img
//             src={MovieTile}
//             alt="card"
//             className="h-full w-full object-cover transition-transform duration-500 ease-out"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
//           <button className="absolute top-2 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-gray-300 transition-colors duration-200 hover:bg-black/60 focus:outline-none cursor-pointer">
//             <FavoriteIcon sx={{ fontSize: 15 }} />
//           </button>
//         </div>
//       </article>
//       {title && <p className="text-base text-gray-300 p-2">{title}</p>}
//     </>
//   );
// };

// export default Card;

import MovieTile from '../assets/images/the_amateur.png';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ title, displayTitle = false }) => {
  return (
    <article className="group relative flex flex-col w-full cursor-pointer">
      {/* Container holding aspect ratio natively */}
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm bg-neutral-900 border border-neutral-800/80 transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:border-neutral-700">
        <img
          src={MovieTile}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Soft Shadow overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Absolute Floating Action */}
        <button className="absolute top-2.5 right-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950/60 backdrop-blur-md text-neutral-400 transition-colors hover:text-rose-500 cursor-pointer">
          <FavoriteIcon sx={{ fontSize: 14 }} />
        </button>
      </div>

      {/* Title block beneath context */}
      {displayTitle && (
        <h3 className="text-xs font-semibold text-neutral-300 mt-2 line-clamp-1 group-hover:text-white transition-colors">
          {title}
        </h3>
      )}
    </article>
  );
};

export default Card;
