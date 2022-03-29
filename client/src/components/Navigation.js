import "../styles/Navigation.scss";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "white",
};

const Navigation = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <a className="navbar-item">
        <Link to="/programs/1" style={linkStyle}>
          {" "}
          Program{" "}
        </Link>
      </a>
      <a className="navbar-item">
        <Link to="/users/John" style={linkStyle}>
          {" "}
          Profile{" "}
        </Link>
      </a>
      <a className="navbar-item">
        <Link to="/library" style={linkStyle}>
          {" "}
          Library{" "}
        </Link>
      </a>
      <a className="navbar-item">
        <Link to="/friends" style={linkStyle}>
          {" "}
          Friends{" "}
        </Link>
      </a>
    </nav>
  );
};

export default Navigation;
