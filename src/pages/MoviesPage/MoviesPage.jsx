import { useState, useEffect } from "react";
import { searchMovies } from "../../movies-api.js";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setQuery(queryParam);
      handleSearch(queryParam);
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) return;

    try {
      const data = await searchMovies(searchQuery);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setSearchParams({ query });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for movies"
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
