import classes from '../styles/Nav.module.css'
import Account from './Account';
import logo from '../assets/images/logo.png'
function Nav() {
    return (
      <nav className={classes.nav}>
        <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Ajit Logo" />
            <h3>Learn with Ajit</h3>
          </a>
        </li>
      </ul>
      <Account />
      </nav>
    );
}

export default Nav;