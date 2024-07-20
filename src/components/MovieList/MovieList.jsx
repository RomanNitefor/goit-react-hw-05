import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.container}>
      {movies.map((movie) => (
        <li className={css.li} key={movie.id}>
          <Link
            className={css.list}
            to={`/movies/${movie.id}`}
            state={{ from: location, search: location.search }}
          >
            {movie.title}
          </Link>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </li>
      ))}
    </ul>
  );
}
