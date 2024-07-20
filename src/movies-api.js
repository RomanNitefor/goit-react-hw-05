import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "7a7b23b50c5da449cc24e7b8ed3bc0ee";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTdiMjNiNTBjNWRhNDQ5Y2MyNGU3YjhlZDNiYzBlZSIsIm5iZiI6MTcyMTQ4NzY4NS4wNDc3NTgsInN1YiI6IjY2OWJjYjMxYzY3ODg5NjQ3NDY4MjZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gyf-a5qoshgrj0g5YE8vghBIFZt8hwvi5GTFO-R8L3s";

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};
