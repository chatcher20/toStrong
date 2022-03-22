import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/programs">Programs</NavLink>
      </li>
      <li>
        <NavLink to="/library">Library</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/friends">Friends</NavLink>
      </li>
      <li>
        <NavLink to="/Graphs">Graphs</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
