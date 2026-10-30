// import bg from '../assets/images/bg.jpg';

import Hero from '../components/Hero';
import MediaGenre from '../components/MediaGenre';
import MediaRow from '../components/MediaRow';
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchTrendingSeries,
} from '../services/api';

const Home = () => {
  return (
    <div
      className=""
      // style={{ backgroundImage: `url(${bg})` }}
    >
      <Hero />
      <section className="w-full flex flex-col gap-6">
        <MediaRow
          title="Trending This Week"
          description="Stay updated with what everyone is watching"
          queryKey="trendingMovies"
          queryFn={fetchTrendingMovies}
        />
        <MediaRow
          title="Popular Movies"
          description="Most watched movies right now"
          queryKey="popularMovies"
          queryFn={fetchPopularMovies}
        />
        <MediaRow
          title="New TV Series"
          description="Stay upto date with newly released tv series"
          queryKey="trendingSeries"
          queryFn={fetchTrendingSeries}
        />
      </section>
      <section>
        <MediaGenre title="Browse by Genre" />
      </section>
      <section className="mt-10">
        <MediaRow
          title="Top Rated"
          description="Highest rated movies of all time"
          queryKey="topRatedMovies"
          queryFn={fetchTopRatedMovies}
          showRank={true}
        />
      </section>
    </div>
  );
};

export default Home;
