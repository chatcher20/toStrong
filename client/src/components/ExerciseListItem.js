import React, { useState, useEffect } from "react";
import "../styles/ExerciseListItem.scss";
import warmups from "../helpers/warmups";
import { basicLP } from '../helpers/basic-lp';

export default function ExerciseListItem(props) {
  const initWeight = props.init[props.name];

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
        hardcoded to program 1
          <strong>Warm Up Sets - </strong>
          {warmups(initWeight)[0]}
          <br />
          {warmups(initWeight)[1]}
          <br />
          {warmups(initWeight)[2]}
          <br />
          {warmups(initWeight)[3]}
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
