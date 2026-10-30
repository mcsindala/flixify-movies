import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './components/MovieDetails';
import Series from './pages/Series';
import Trending from './pages/Trending';
import TopRated from './pages/TopRated';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/movie-details', element: <MovieDetails /> },
      { path: '/tv-series', element: <Series /> },
      { path: '/trending', element: <Trending /> },
      { path: '/top-rated', element: <TopRated /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
