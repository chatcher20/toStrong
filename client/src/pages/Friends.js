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
          <Link to="/users/:username"> Bob Vance </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
        <br />
        <li>
          <Link to="/users/:username"> Michael Scott </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
        <br />
        <li>
          <Link to="/users/:username"> Jim Halpert </Link>
          <img src={Badge} className="friend-badge" />
        </li>
        <br />
        <li>
          <Link to="/users/:username"> Monkey Fuzz </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
        <br />
        <li>
          <Link to="/users/:username"> Pam Beesley </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
        <br />
        <li>
          <Link to="/users/:username"> Kevin Malone </Link>
          <img src={Badge} className="friend-badge"/>
        </li>
      </ul>
    </div>
  );
}
