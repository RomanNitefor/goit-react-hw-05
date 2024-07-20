import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../movies-api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log("Error fetching cast:", error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id} className={css.list}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                style={{ width: "100px", height: "150px" }}
              />
            )}
            <p>
              <strong>{actor.name}</strong>
            </p>
            <p>as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
