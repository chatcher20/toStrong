import React from "react";
import { Link } from "react-router-dom";
import Badge from '../images/badges/1.png';

export default function Friends() {
  return (
    <div>
      <strong>Friends List</strong>
      <button> Add Friends</button>
      <ul>
        <br />
        <li>
          <Link to="/users/:id"> Bob Vance </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
        <br />
        <li>
          <Link to="/users/:id"> Michael Scott </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
        <br />
        <li>
          <Link to="/users/:id"> Jim Halpert </Link>
          <img src={Badge} className="friend-badge" />
        </li>
        <br />
        <li>
          <Link to="/users/:id"> Monkey Fuzz </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
        <br />
        <li>
          <Link to="/users/:id"> Pam Beesley </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
        <br />
        <li>
          <Link to="/users/:id"> Kevin Malone </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
      </ul>
    </div>
  );
}
