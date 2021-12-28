import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {

  const logoClass = props.home ? "logoHome" : "logo";

  return (
    <header>
      <div className={logoClass}>
        <Link to="/"><h1>R</h1></Link>
      </div>
      <ul className="side-links">
        <Link to="/blog" className="side-links-li">Blog</Link>
        <Link to="/about" className="side-links-li">About Me</Link>
        <Link to="/book" className="side-links-li">Book a Session</Link>
      </ul>
    </header>
  );
}

export default Header;
