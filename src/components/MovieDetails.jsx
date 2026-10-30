import bg from '../assets/images/bg3.jpg';
import PlayIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/People';
import Card from './Card';
// import { Link } from 'react-router';
import castImg from '../assets/images/victor.jpg';

const MovieDetails = () => {
  const casts = Array.from({ length: 7 });
  const sidebarCards = Array.from({ length: 7 });

  return (
    <>
      {/* 1. YOUR EXACT ORIGINAL HERO SECTION (MAINTAINED) */}
      <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-600">
        <section
          className="relative w-full h-[85vh] min-h-[600px] bg-cover bg-center flex items-end pb-16 px-6 md:px-16"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Cinematic dark overlay behind text on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />

          {/* Fades the bottom cleanly into the main dark page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950/20 to-transparent" />

          {/* Hero Container - Your original side-by-side poster & layout details */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 z-10 max-w-6xl w-full mx-auto">
            {/* Left: Movie Poster Card */}
            <div className="flex-shrink-0 w-44 md:w-62 shadow-2xl rounded-xl overflow-hidden border border-neutral-800 self-center md:self-end">
              <Card />
            </div>

            {/* Right: Detailed Text Meta Info */}
            <div className="flex flex-col gap-4 text-center md:text-left flex-1 pb-2">
              {/* Movie Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg text-white">
                Spider-Man: Across the Spider-Verse
              </h1>

              {/* Movie metadata row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-sm md:text-base font-medium text-neutral-400">
                <time dateTime="2024">2024</time>
                <span className="text-gray-400">|</span>
                <p>Sci-Fi / Adventure</p>
                <span className="text-gray-400">|</span>
                <p>2h 18m</p>
                <span className="text-gray-400">|</span>
                <p className="px-1.5 py-0.5 text-xs font-bold border border-neutral-500 rounded bg-neutral-900/60 text-neutral-300">
                  PG-13
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 my-2">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-2 rounded text-sm md:text-base transition-all duration-200 flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer">
                  <PlayIcon fontSize="small" /> <span>Watch Now</span>
                </button>

                <button className="bg-purple-950/30 border border-purple-700 hover:bg-purple-700 text-white font-bold px-5 py-2 rounded text-sm md:text-base transition-all duration-200 flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer">
                  <PlayIcon fontSize="small" /> <span>Watch Trailer</span>
                </button>
              </div>

              {/* Movie Description */}
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-3xl line-clamp-3 drop-shadow font-normal">
                Miles Morales returns for the next chapter of the Oscar-winning
                Spider-Verse saga, an epic adventure that will transport
                Brooklyn's full-time, friendly neighborhood Spider-Man across
                the Multiverse.
              </p>

              {/* Quick Credits Inline List */}
              <div className="text-xs md:text-sm text-neutral-400 mt-1 flex flex-col gap-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 my-2">
                  <button className="bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 font-semibold px-5 py-2 rounded border border-neutral-700/60 text-sm md:text-base transition-all duration-200 backdrop-blur-sm flex items-center gap-1.5 active:scale-95 cursor-pointer">
                    <AddIcon fontSize="small" />
                    <span>Add to Watchlist</span>
                  </button>

                  <button className="bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 font-semibold px-5 py-2 rounded border border-neutral-700/60 text-sm md:text-base transition-all duration-200 backdrop-blur-sm flex items-center gap-1.5 active:scale-95 cursor-pointer">
                    <GroupIcon fontSize="small" />
                    <span>Cast & Crew</span>
                  </button>
                </div>
                <p>
                  <span className="text-neutral-500 font-medium">
                    Director:
                  </span>{' '}
                  Joaquim Dos Santos, Kemp Powers
                </p>
                <p>
                  <span className="text-neutral-500 font-medium">Stars:</span>{' '}
                  Shameik Moore, Hailee Steinfeld, Oscar Isaac
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE NEW GRID CONTENT AREA WITH SPECIFIED TABS ONLY */}
        <section className="max-w-7xl mx-auto px-6 md:px-0 py-8">
          {/* Sub Navigation Bar - Modified for Casts and Reviews Only */}
          <nav className="border-b border-neutral-800 pb-3 mb-8">
            <ul className="flex items-center gap-8 text-sm font-semibold text-neutral-400">
              <li className="text-white border-b-2 border-purple-500 pb-3 -mb-[13px] cursor-pointer">
                Top Casts
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer pb-3">
                User Reviews
              </li>
            </ul>
          </nav>

          {/* Core Content Grid Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
            {/* LEFT MAIN COLUMN: CASTS & REVIEWS */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Cast Module */}
              <div>
                <h2 className="text-lg font-bold text-white mb-6 pl-5">
                  Top Cast({casts.length})
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {casts.map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center group cursor-pointer"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-neutral-800 border-2 border-transparent group-hover:border-purple-500 transition-all mb-3 shadow-md">
                        <img
                          src={castImg}
                          alt="Cast Profile"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <p className="text-sm font-semibold text-neutral-200 line-clamp-1 group-hover:text-purple-400 transition-colors">
                        Stanley Tucci
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                        Roger
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Review Module */}
              <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 shadow-sm">
                <h2 className="text-lg font-bold text-white mb-4">
                  User Review
                </h2>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm text-white shrink-0">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-neutral-200">
                        Avu
                      </h4>
                      <span className="text-xs text-neutral-500">
                        18/10/2026 09:56
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      "Great movie, I enjoyed it with a plot twist near the end"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR COLUMN: MORE LIKE THIS */}
            <div className="bg-neutral-900/20  p-5">
              <h2 className="text-xl font-bold text-white mb-5">
                More Like This
              </h2>
              <div className="grid grid-cols-2 gap-5">
                {sidebarCards.map((_, index) => (
                  <Card
                    key={index}
                    displayTitle={true}
                    title="The Masterpiece"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MovieDetails;

// import bg from '../assets/images/bg3.jpg';
// import PlayIcon from '@mui/icons-material/PlayArrow';
// import AddIcon from '@mui/icons-material/Add';
// import GroupIcon from '@mui/icons-material/People';
// import Card from './Card';
// import { Link } from 'react-router';
// import castImg from '../assets/images/victor.jpg';

// const MovieDetails = () => {
//   const casts = Array.from({ length: 15 });
//   const cards = Array.from({ length: 10 });

//   return (
//     <>
//       <div className=" bg-black min-h-screen text-white font-sans selection:bg-purple-600">
//         <section
//           className=" relative w-full h-[85vh] min-h-[600px] bg-cover bg-center flex items-end pb-16 px-6 md:px-16"
//           style={{ backgroundImage: `url(${bg})` }}
//         >
//           {/* Cinematic dark overlay behind text on the left */}
//           <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />

//           {/* Fades the bottom cleanly into the main dark page background */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950/20 to-transparent" />

//           {/* Hero Container - Fixed alignment to keep Card & Meta details side-by-side */}
//           <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 z-10 max-w-6xl w-full mx-auto">
//             {/* Left: Movie Poster Card */}
//             <div className="flex-shrink-0 w-44 md:w-62 shadow-2xl rounded-xl overflow-hidden border border-neutral-800 self-center md:self-end">
//               <Card />
//             </div>

//             {/* Right: Detailed Text Meta Info */}
//             <div className="flex flex-col gap-4 text-center md:text-left flex-1 pb-2">
//               {/* Movie Title */}
//               <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg text-white">
//                 Spider-Man: Across the Spider-Verse
//               </h1>

//               {/* Movie metadata row */}
//               <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-sm md:text-base font-medium text-neutral-400">
//                 <time dateTime="2024">2024</time>
//                 <span className="text-gray-400">|</span>
//                 <p>Sci-Fi / Adventure</p>
//                 <span className="text-gray-400">|</span>
//                 <p>2h 18m</p>
//                 <span className="text-gray-400">|</span>
//                 <p className="px-1.5 py-0.5 text-xs font-bold border border-neutral-500 rounded bg-neutral-900/60 text-neutral-300">
//                   PG-13
//                 </p>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 my-2">
//                 <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-2 rounded text-sm md:text-base transition-all duration-200 flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer">
//                   <PlayIcon fontSize="small" /> <span>Play Trailer</span>
//                 </button>

//                 <button className="bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 font-semibold px-5 py-2 rounded border border-neutral-700/60 text-sm md:text-base transition-all duration-200 backdrop-blur-sm flex items-center gap-1.5 active:scale-95 cursor-pointer">
//                   <AddIcon fontSize="small" />
//                   <span>Add to Watchlist</span>
//                 </button>

//                 <button className="bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 font-semibold px-5 py-2 rounded border border-neutral-700/60 text-sm md:text-base transition-all duration-200 backdrop-blur-sm flex items-center gap-1.5 active:scale-95 cursor-pointer">
//                   <GroupIcon fontSize="small" />
//                   <span>Cast & Crew</span>
//                 </button>
//               </div>

//               {/* Movie Description */}
//               <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-3xl line-clamp-3 drop-shadow font-normal">
//                 Miles Morales returns for the next chapter of the Oscar-winning
//                 Spider-Verse saga, an epic adventure that will transport
//                 Brooklyn's full-time, friendly neighborhood Spider-Man across
//                 the Multiverse.
//               </p>

//               {/* Quick Credits Inline List */}
//               <div className="text-xs md:text-sm text-neutral-400 mt-1 flex flex-col gap-1">
//                 <p>
//                   <span className="text-neutral-500 font-medium">
//                     Director:
//                   </span>{' '}
//                   Joaquim Dos Santos, Kemp Powers
//                 </p>
//                 <p>
//                   <span className="text-neutral-500 font-medium">Stars:</span>{' '}
//                   Shameik Moore, Hailee Steinfeld, Oscar Isaac
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <section className="text-white font-sans md:px-16 py-8 mt-8">
//         <nav className="pb-4">
//           <ul className="flex items-center gap-5">
//             <li className="border-b-2 border-purple-500 py-1 cursor-pointer hover:text-purple-400 transition-colors duration-200">
//               <Link to="#casts">Top Casts</Link>
//             </li>
//             <li className="border-b-2 border-purple-500 py-1 cursor-pointer hover:text-purple-400 transition-colors duration-200">
//               <Link to="#reviews">User Reviews</Link>
//             </li>
//           </ul>
//         </nav>
//         <div className="border flex items-start justify-between">
//           <div className="flex flex-col gap-2 mt-4 w-[65%]" id="casts">
//             <h1>Top Casts({casts.length})</h1>
//             <div className="border flex items-center gap-4 flex-wrap ">
//               {casts.map((cast, index) => (
//                 <div
//                   key={index}
//                   className="group hover:text-purple-500 transition-all duration-200 flex flex-col text-center text-sm text-gray-500 items-center"
//                 >
//                   <img
//                     src={castImg}
//                     alt="Cast"
//                     className="w-20 h-28 rounded cursor-pointer"
//                   />
//                   <p className="cursor-pointer">Stanley Tucci </p>
//                   <p className="">{'(Rodger)'}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="border">
//             <h1>More Like this</h1>
//             {cards.map((_, index) => (
//               <div key={index} className="flex flex-wrap gap-2">
//                 <Card title="The Transporter" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MovieDetails;

// import bg from '../assets/images/bg3.jpg';
// import PlayIcon from '@mui/icons-material/PlayArrow';
// import AddIcon from '@mui/icons-material/Add';
// import GroupIcon from '@mui/icons-material/People';
// import Card from './Card';
// import { Link } from 'react-router';
// import castImg from '../assets/images/victor.jpg';

// const MovieDetails = () => {
//   const casts = Array.from({ length: 7 }); // Matches image sample
//   const sidebarCards = Array.from({ length: 4 }); // Matches image grid

//   return (
//     <>
//       <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-purple-600">
//         {/* TOP HERO PROFILE SECTION */}
//         <section
//           className="relative w-full h-[65vh] min-h-[500px] bg-cover bg-center flex items-end pb-12 px-6 md:px-16"
//           style={{ backgroundImage: `url(${bg})` }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

//           <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col gap-4 text-left">
//             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
//               Spider-Man: Across the Spider-Verse
//             </h1>

//             <div className="flex items-center gap-3 text-sm font-medium text-neutral-400">
//               <time dateTime="2024">2024</time>
//               <span>•</span>
//               <p>Sci-Fi / Adventure</p>
//               <span>•</span>
//               <p>2h 18m</p>
//             </div>

//             <div className="flex items-center gap-3 my-2">
//               <button className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-6 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2 cursor-pointer">
//                 <PlayIcon fontSize="small" /> <span>Go Premium</span>
//               </button>
//               <button className="bg-neutral-800/90 hover:bg-neutral-700 text-neutral-200 font-semibold px-5 py-2.5 rounded-lg border border-neutral-700/60 text-sm transition-all flex items-center gap-2 cursor-pointer">
//                 <AddIcon fontSize="small" /> <span>Add to Watchlist</span>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* BOTTOM CONTENT: MAIN SPLIT CONTAINER */}
//         <section className="max-w-7xl mx-auto px-6 md:px-16 py-8">
//           {/* Sub Navigation Bar */}
//           <nav className="border-b border-neutral-800 pb-3 mb-8">
//             <ul className="flex items-center gap-8 text-sm font-semibold text-neutral-400">
//               <li className="text-white border-b-2 border-amber-500 pb-3 -mb-[13px] cursor-pointer">
//                 Episodes
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer pb-3">
//                 Top Cast
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer pb-3">
//                 User Review
//               </li>
//             </ul>
//           </nav>

//           {/* Core Grid Setup */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
//             {/* LEFT COLUMN: CAST & USER REVIEWS (Spans 2 columns) */}
//             <div className="lg:col-span-2 flex flex-col gap-10">
//               {/* Top Cast Module */}
//               <div>
//                 <h2 className="text-lg font-bold text-white mb-6">
//                   Top Cast({casts.length})
//                 </h2>
//                 <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
//                   {casts.map((_, index) => (
//                     <div
//                       key={index}
//                       className="flex flex-col items-center text-center group cursor-pointer"
//                     >
//                       <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-neutral-800 border-2 border-transparent group-hover:border-amber-500 transition-all mb-3 shadow-md">
//                         <img
//                           src={castImg}
//                           alt="Cast Member Profile"
//                           className="w-full h-full object-cover object-top"
//                         />
//                       </div>
//                       <p className="text-sm font-semibold text-neutral-200 line-clamp-1 group-hover:text-amber-400 transition-colors">
//                         Stanley Tucci
//                       </p>
//                       <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
//                         Roger
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* User Review Module */}
//               <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 shadow-sm">
//                 <h2 className="text-lg font-bold text-white mb-4">
//                   User Review
//                 </h2>
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center font-bold text-sm text-white shrink-0">
//                     A
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between mb-2">
//                       <h4 className="text-sm font-bold text-neutral-200">
//                         Avu
//                       </h4>
//                       <span className="text-xs text-neutral-500">
//                         18/10/2026 09:56
//                       </span>
//                     </div>
//                     <p className="text-sm text-neutral-400 leading-relaxed">
//                       "Great movie, I enjoyed it with a plot twist near the end"
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT COLUMN: MORE LIKE THIS SIDEBAR (Spans 1 column) */}
//             <div className="bg-neutral-900/20 border border-neutral-800/40 rounded-2xl p-5">
//               <h2 className="text-lg font-bold text-white mb-5">
//                 More Like This
//               </h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {sidebarCards.map((_, index) => (
//                   <Card key={index} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default MovieDetails;
