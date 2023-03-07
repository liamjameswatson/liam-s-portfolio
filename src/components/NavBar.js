import {Link} from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <nav>
      <Link to="/" className={styles.logo}>
        Liam Watson
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.active}>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
