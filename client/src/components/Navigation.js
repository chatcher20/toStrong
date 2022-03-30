import "../styles/Navigation.scss";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "rgb(30, 30, 30)",
};

const Navigation = () => {
  return (
    // <nav
    //   className="navbar is-dark has-shadow"
    // >
    //   <div className="navbar-brand">
    //     <a className="navbar-item">
    //       <Link to="/programs/1" style={linkStyle}>
    //         {" "}
    //         Program{" "}
    //       </Link>
    //     </a>
    //     <a className="navbar-item">
    // <Link to="/users/Johnny" style={linkStyle}>
    //   {" "}
    //   Profile{" "}
    // </Link>
    //     </a>
    //     <a className="navbar-item">
    //       <Link to="/library" style={linkStyle}>
    //         {" "}
    //         Library{" "}
    //       </Link>
    //     </a>
    //     <a className="navbar-item">
    //       <Link to="/friends" style={linkStyle}>
    //         {" "}
    //         Friends{" "}
    //       </Link>
    //     </a>
    //   </div>
    // </nav>

    <nav>
      <div class="link-box">
        <div class="link-item">
          <div class="link">Program</div>
          <Link to="/programs/1" class="link-icon" style={linkStyle}>
          <i class="fa-solid fa-dumbbell"></i>
          </Link>
        </div>
        <div class="link-item">
          <div class="link">Profile</div>
          <Link to="/users/Johnny" class="link-icon" style={linkStyle}>
          <i class="fas fa-home"></i>
          </Link>
        </div>
        <div class="link-item">
          <div class="link">Library</div>
          <Link to="/library" class="link-icon" style={linkStyle}>
          <i class="fa-solid fa-book"></i>
          </Link>
        </div>
        <div class="link-item">
          <div class="link">Social</div>
          <Link to="/friends" class="link-icon" style={linkStyle}>
          <i class="fa-solid fa-user-group"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
