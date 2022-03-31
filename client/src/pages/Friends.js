import React from "react";
import { Link } from "react-router-dom";
import Badge20 from "../images/badges/20.png";
import Badge2 from "../images/badges/2.png";
import Badge3 from "../images/badges/3.png";
import Badge5 from "../images/badges/5.png";
import Badge7 from "../images/badges/7.png";
import Badge10 from "../images/badges/10.png";
import Badge15 from "../images/badges/15.png";

import "../styles/Friends.scss";

export default function Friends() {
  return (
    <div>
      <div className="friends-header">
        <div className="title">Friends List</div>
        <button className="button is-small is-link is-rounded has-text-weight-bold">
          Add Friends &nbsp;<i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <hr />
      <ul>
        <br />
        <li className="friend">
          <Link to="/users/Johnny"> Bob Vance </Link>
          <img src={Badge10} alt="10" className="friend-badge" />
        </li>
        <br />
        <li className="friend">
          <Link to="/users/Johnny"> Michael Scott </Link>
          <img src={Badge3} alt="3" className="friend-badge" />
        </li>
        <br />
        <li className="friend">
          <Link to="/users/Johnny"> Jim Halpert </Link>
          <img src={Badge5} alt="5" className="friend-badge" />
        </li>
        <br />
        <li className="friend">
          <Link to="/users/Johnny"> Monkey Fuzz </Link>
          <img src={Badge20} alt="20" className="friend-badge" />
        </li>
        <br />
        <li className="friend">
          <Link to="/users/Johnny"> Pam Beesley </Link>
          <img src={Badge7} alt="7" className="friend-badge" />
        </li>
        <br />
        <li className="friend">
          <Link to="/users/Johnny"> Kevin Malone </Link>
          <img src={Badge2} alt="2" className="friend-badge" />
        </li>
        <br />
        <li className="friend">
          <Link to="/users/Johnny"> Ryan Howards </Link>
          <img src={Badge15} alt="15" className="friend-badge" />
        </li>
      </ul>
    </div>
  );
}
