import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={makeActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeActive}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
