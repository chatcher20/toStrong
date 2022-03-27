import React from "react";
import "../styles/ExerciseListItem.scss";
import warmups from "../helpers/warmups";

export default function ExerciseListItem(props) {
  return (
    <div className="content exercise-item">
      <div className="exercise-item-header">
        <div className="tag title is-6 is-info is-light ">Exercise name</div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"> </span>
        </label>
      </div>

      <div className="exercise-item-content">
        <div>
          <strong>Warm Up Sets - </strong>
          {warmups(100)[0]}
          <br />
          {warmups(100)[1]}
          <br />
          {warmups(100)[2]}
          <br />
          {warmups(100)[3]}
        </div>
        <br />
        <div>
        <strong>Sets - </strong>
          <span>reps (3x5)</span>
          <span>Weight</span>
        </div>
        <br />
      </div>
    </div>
  );
}
