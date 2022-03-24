import React from "react";
import { Link } from "react-router-dom";
import BenchOverRaise from '../images/bench-over-head.png';

export default function Programs() {
  return (
    <div>
      <div className="control">
        <strong>All Programs</strong>
        <Link to="/programs/:id"> Current Program </Link>
        <ul>
          <li>
          <Link to="/programs/1"> Program 1</Link>
            <img src={BenchOverRaise} />
          </li>
          <li>
          <Link to="/programs/2"> Program 2</Link>
          <img src={BenchOverRaise} />
          </li>
          <li>
          <Link to="/programs/3"> Program 3</Link>
          <img src={BenchOverRaise} />
          </li>
          

        </ul>
      </div>
    </div>
  );
}
