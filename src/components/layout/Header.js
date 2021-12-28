import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const logoBg = props.home ? "logo" : "logo-home";

  return (
    <header>
      <div className={logoBg}>
        <h1>R</h1>
      </div>
      <ul className="side-links">
        <Link className="side-links-li">Blog</Link>
        <Link className="side-links-li">About Me</Link>
        <Link to="/book" className="side-links-li">
          Book a Session
        </Link>
      </ul>
    </header>
  );
}

export default Header;
