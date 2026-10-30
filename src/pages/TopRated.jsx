// import MediaGenre from '../components/MediaGenre';

// const TopRated = () => {
//   return (
//     <div className="bg-neutral-950 w-full">
//       <section className="pt-20">
//         <MediaGenre title="Top Rated Movies" showRank={true} />
//       </section>
//     </div>
//   );
// };

// export default TopRated;

import MediaGenre from '../components/MediaGenre';
import { fetchTopRatedMovies } from '../services/api';

const TopRated = () => {
  return (
    <div className="bg-neutral-950 w-full pt-16">
      <MediaGenre
        title="Top Rated Masterpieces"
        description="The critically acclaimed movies of all time"
        queryKey="topRatedGridPage"
        queryFn={fetchTopRatedMovies}
        showRank={true}
      />
    </div>
  );
};

export default TopRated;
