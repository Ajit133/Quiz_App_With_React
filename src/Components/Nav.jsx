import classes from "../styles/Nav.module.css";
import Account from "./Account";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Ajit Logo" />
            <h3>Learn with Ajit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
    
  );
}

export default Nav;
