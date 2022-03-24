import React from "react";
import { Link } from "react-router-dom";

export default function CurrentProgram() {
  return (
    <div>
      <strong>Current Program</strong>
      <Link to="/programs/all"> All Programs </Link>
      <br />
      <div className="table-container">
        <label> Program name</label>
        <ul>
          <li>
          <Link to="/programs/:id/:workout_id"> W1D1</Link>
          Workout 1, Push
          </li>
          <li>
          <Link to="/programs/:id/:workout_id"> W1D2</Link>
          Workout 2, Pull
          </li>
          <li>
          <Link to="/programs/:id/:workout_id"> W1D3</Link>
          Workout 3, Push
          </li>
          <li>
          <Link to="/programs/:id/:workout_id"> W1D4</Link>
          Workout 4, Pull
          </li>
        </ul>
        <div className="control">
          <button className="button is-primary">Continue</button>
        </div>
      </div>
    </div>
  );
}
