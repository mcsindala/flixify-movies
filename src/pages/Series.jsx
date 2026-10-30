import Hero from '../components/Hero';
import MediaGenre from '../components/MediaGenre';
import MediaRow from '../components/MediaRow';

const Series = () => {
  return (
    <div>
      {/* <MovieDetails /> */}
      <Hero />
      <section className="w-full flex flex-col gap-3">
        <MediaRow
          title="Trending Series"
          description="Stay updated with what everyone is watching"
        />
        <MediaRow
          title="Popular Series"
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
          title="Top Series to Watch"
          description="Get the latest and popular series to get you entertained"
        />
      </section>
    </div>
  );
};

export default Series;
