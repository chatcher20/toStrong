import React from "react";
import { Link } from "react-router-dom";

export default function CurrentProgram() {
  return (
    <div>
      <strong>Current Program</strong>
      <Link to="/programs/all"> All Programs </Link>
      <br />
      <div class="table-container">
        <lable> Program name</lable>
        <ul>
          <li>
          <Link to="/programs/:id/:exercise"> W1D1</Link>
          Workout 1, Push
          </li>
          <li>
          <Link to="/programs/:id/:exercise"> W1D2</Link>
          Workout 2, Pull
          </li>
          <li>
          <Link to="/programs/:id/:exercise"> W1D3</Link>
          Workout 3, Push
          </li>
          <li>
          <Link to="/programs/:id/:exercise"> W1D4</Link>
          Workout 4, Pull
          </li>
        </ul>
        <div class="control">
          <button class="button is-primary">Continue</button>
        </div>
      </div>
    </div>
  );
}
