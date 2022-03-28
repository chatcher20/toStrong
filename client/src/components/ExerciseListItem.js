import React from "react";
import "../styles/ExerciseListItem.scss";
import warmups from "../helpers/warmups";
import { basicLP } from '../helpers/basic-lp';

export default function ExerciseListItem(props) {
  return (
    <div className="content exercise-item">
      <div className="exercise-item-header">
        <div className="tag title is-6 is-info is-light ">{props.name}</div>
        <label className="switch">
          <input type="checkbox" name={props.name} onChange={props.onChange}/>
          <span className="slider round"> </span>
        </label>
      </div>

      <div className="exercise-item-content">
        <div>
          need to change weight
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
          <span>reps:</span>
          <span>Weight:</span>
          {props.program}
        </div>
        <br />
      </div>
    </div>
  );
}
