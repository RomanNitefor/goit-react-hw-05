import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <p className={css.text}>
        No page was found! Please go to{" "}
        <Link className={css.link} to="/">
          home page
        </Link>
        !
      </p>
    </div>
  );
}
