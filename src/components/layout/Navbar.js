import "./Navbar.css";
import { Link } from "react-router-dom";

function Header(props) {
  const logoClass = props.home ? "logoHome" : "logo";
  const bookingClass = props.book
    ? "side-links-li session-button-booking"
    : "side-links-li session-button";

  return (
    <header>
      <div className={logoClass}>
        <Link to="/">
          <h1>R</h1>
        </Link>
      </div>
      <ul className="side-links">
        <Link to="/blog" className="side-links-li">
          Blog
        </Link>
        <Link to="/about" className="side-links-li">
          About Me
        </Link>
        <Link to="/book" className={bookingClass}>
          Book a session
        </Link>
      </ul>
    </header>
  );
}

export default Header;
