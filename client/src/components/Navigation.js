import '../styles/Navigation.scss'
import { Link } from "react-router-dom";

const Navigation = () => {
  
  

  return (
    
    <nav
    className="navbar is-light"
    role="navigation"
    aria-label="main navigation"
  >
    <a className="navbar-item">
      <Link to="/programs/:id"> Program </Link>
    </a>
    <a className="navbar-item">
      <Link to="/users/:id"> Profile </Link>
    </a>
    <a className="navbar-item">
      <Link to="/library"> Library </Link>
    </a>
    <a className="navbar-item">
      <Link to="/friends"> Friends </Link>
    </a>
  </nav>
   
   
      
 
  );
};

export default Navigation;
