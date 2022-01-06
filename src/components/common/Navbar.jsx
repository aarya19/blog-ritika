import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  
  const logoClass = props.home ? "logoHome" : "logo";

  const bookingClass = props.book ? "side-links-li session-button-booking" : "side-links-li session-button";

  return (
    <header>
      <div className={logoClass}>
        <NavLink to="/" className="side-links-li" activeClassName="side-links-li active">
          <h1>R</h1>
        </NavLink>
      </div>
      <ul className="side-links">
        <NavLink to="/blog" className="side-links-li" activeClassName="side-links-li active">
          Blog
        </NavLink>
        <NavLink to="/about" className="side-links-li">
          About Me
        </NavLink>
        <NavLink to="/book" className={bookingClass} activeClassName="side-links-li active">
          Book a session
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
