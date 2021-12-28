import "./Header.css";

function Header(props) {

  const logoBg = props.home ? "logo" : "logo-home";

  return (
    <header>
      <div className={logoBg}>
        <h1>R</h1>
      </div>
      <ul className="side-links">
        <li>Blog</li>
        <li>About Me</li>
        <li>Book a Session</li>
      </ul>
    </header>
  );
}

export default Header;
