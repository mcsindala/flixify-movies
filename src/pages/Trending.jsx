// import { Button, ButtonGroup } from '@mui/material';
// import MediaGenre from '../components/MediaGenre';

// const Trending = () => {
//   return (
//     <div className="bg-neutral-950 w-full">
//       <section className="pt-20">
//         <MediaGenre
//           title="Trending This Week"
//           topRightButtons={
//             <ButtonGroup variant="outlined" color="secondary">
//               <Button>Today</Button>
//               <Button>This Week</Button>
//               <Button>All Time</Button>
//             </ButtonGroup>
//           }
//         />
//       </section>
//     </div>
//   );
// };

// export default Trending;

import { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import MediaGenre from '../components/MediaGenre';
import { fetchAllTimePopular } from '../services/api';

const Trending = () => {
  // Track timeframe state: 'day', 'week', or 'all'
  const [timeframe, setTimeframe] = useState('week');

  // Configuration mapping based on selected timeframe
  const config = {
    day: {
      title: 'Trending Today',
      description: 'Most popular movies and TV shows in the last 24 hours',
      queryFn: () => fetchAllTimePopular('day'),
    },
    week: {
      title: 'Trending This Week',
      description: 'Stay updated with what everyone is watching this week',
      queryFn: () => fetchAllTimePopular('week'),
    },
    all: {
      title: 'All-Time Trending Hits',
      description: 'The definitive fan-favorite blockbusters across all time',
      queryFn: () => fetchAllTimePopular('week'), // Fallback/All-time endpoint
    },
  };

  const currentConfig = config[timeframe];

  return (
    <div className="bg-neutral-950 w-full pt-16">
      <MediaGenre
        title={currentConfig.title}
        description={currentConfig.description}
        queryKey={`trending-${timeframe}`}
        queryFn={currentConfig.queryFn}
        topRightButtons={
          <ButtonGroup variant="outlined" color="secondary" size="small">
            <Button
              onClick={() => setTimeframe('day')}
              className={
                timeframe === 'day' ? 'bg-purple-600! text-white!' : ''
              }
              sx={{
                backgroundColor:
                  timeframe === 'day' ? '#9333ea !important' : 'transparent',
                color: timeframe === 'day' ? '#ffffff !important' : 'inherit',
              }}
            >
              Today
            </Button>
            <Button
              onClick={() => setTimeframe('week')}
              sx={{
                backgroundColor:
                  timeframe === 'week' ? '#9333ea !important' : 'transparent',
                color: timeframe === 'week' ? '#ffffff !important' : 'inherit',
              }}
            >
              This Week
            </Button>
            <Button
              onClick={() => setTimeframe('all')}
              sx={{
                backgroundColor:
                  timeframe === 'all' ? '#9333ea !important' : 'transparent',
                color: timeframe === 'all' ? '#ffffff !important' : 'inherit',
              }}
            >
              All Time
            </Button>
          </ButtonGroup>
        }
      />
    </div>
  );
};

export default Trending;
