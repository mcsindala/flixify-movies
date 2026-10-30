// import MovieDetails from '../components/MovieDetails';

import Hero from '../components/Hero';
import MediaGenre from '../components/MediaGenre';
import MediaRow from '../components/MediaRow';

const Movies = () => {
  return (
    <div>
      {/* <MovieDetails /> */}
      <Hero />
      <section className="w-full flex flex-col gap-3">
        <MediaRow
          title="Trending Movies"
          description="Stay updated with what everyone is watching"
        />
        <MediaRow
          title="Popular Movies"
          description="Most watched movies right now"
        />
        <MediaRow
          title="Top Rated of All Time"
          description="Stay upto date with newly released tv series"
          showRank={true}
        />
      </section>
      <section>
        <MediaGenre
          title={'Browse by Genre'}
          description="Get you movies by their category"
        />
      </section>
    </div>
  );
};

export default Movies;
