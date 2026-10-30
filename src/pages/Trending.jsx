import { Button, ButtonGroup } from '@mui/material';
import MediaGenre from '../components/MediaGenre';

const Trending = () => {
  return (
    <div className="bg-neutral-950 w-full">
      <section className="pt-20">
        <MediaGenre
          title="Trending This Week"
          topRightButtons={
            <ButtonGroup variant="outlined" color="secondary">
              <Button>Today</Button>
              <Button>This Week</Button>
              <Button>All Time</Button>
            </ButtonGroup>
          }
        />
      </section>
    </div>
  );
};

export default Trending;
