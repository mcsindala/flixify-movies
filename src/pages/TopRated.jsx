import MediaGenre from '../components/MediaGenre';

const TopRated = () => {
  return (
    <div className="bg-neutral-950 w-full">
      <section className="pt-20">
        <MediaGenre title="Top Rated Movies" showRank={true} />
      </section>
    </div>
  );
};

export default TopRated;
