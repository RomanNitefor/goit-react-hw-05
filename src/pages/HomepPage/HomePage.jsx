import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log("Error fetching trending movies:", error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
