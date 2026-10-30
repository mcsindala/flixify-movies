import axios from 'axios';

const TMDB_API_KEY = import.meta.env.TMDB_API_KEY;
const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
  params: {
    api_key: TMDB_API_KEY,
  },
});

// Helper for image URLs (TMDB requires prefixing poster paths with their image base URL)
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return 'https://via.placeholder.com/500x750?text=No+Image';
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// API Endpoints
export const fetchTrendingMovies = async () => {
  const { data } = await api.get('/trending/movie/week');
  return data.results;
};

export const fetchPopularMovies = async () => {
  const { data } = await api.get('/movie/popular');
  return data.results;
};

export const fetchTopRatedMovies = async () => {
  const { data } = await api.get('/movie/top_rated');
  return data.results;
};

export const fetchTrendingSeries = async () => {
  const { data } = await api.get('/trending/tv/week');
  return data.results;
};

export const fetchPopularSeries = async () => {
  const { data } = await api.get('/tv/popular');
  return data.results;
};

export const fetchTopRatedSeries = async () => {
  const { data } = await api.get('/tv/top_rated');
  return data.results;
};

// Fetch movies by genre ID (pass null or 0 for all)
export const fetchMoviesByGenre = async (genreId) => {
  if (!genreId || genreId === 0) {
    const { data } = await api.get('/movie/popular');
    return data.results;
  }
  const { data } = await api.get('/discover/movie', {
    params: {
      with_genres: genreId,
    },
  });
  return data.results;
};

// Trending Today (Movies)
export const fetchTrendingToday = async () => {
  const { data } = await api.get('/trending/movie/day');
  return data.results;
};

// Trending This Week (Movies)
export const fetchTrendingThisWeek = async () => {
  const { data } = await api.get('/trending/movie/week');
  return data.results;
};

// All Time Popular / Top Rated as fallback for "All Time"
export const fetchAllTimePopular = async () => {
  const { data } = await api.get('/movie/top_rated');
  return data.results;
};

// Search movies and TV shows
export const searchMovies = async (query) => {
  if (!query || query.trim() === '') return [];
  const { data } = await api.get('/search/multi', {
    params: {
      query: query,
      include_adult: false,
    },
  });
  return data.results;
};

export default api;
