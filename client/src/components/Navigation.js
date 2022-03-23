import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      
       <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    </div>
      </div>
      <a class="navbar-item">
      <Link to="/programs/:id"> Program </Link>
      </a>
      <a class="navbar-item">
      <Link to="/library"> Library </Link>
      </a>
      <a class="navbar-item">
      <Link to="/users/:id"> Profile </Link>
      </a>
      <a class="navbar-item">
      <Link to="/friends"> Friends </Link>
      </a>
      <a class="navbar-item">
      <Link to="/graphs"> Graphs </Link>
      </a>
    </nav>
  );
};

export default Navigation;
