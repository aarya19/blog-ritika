import "./HomeHeader.css";
function HomeHeader(props) {
  return (
    <header>
      <div className="logo">
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

export default HomeHeader;
