import React from "react";
import { Link } from "react-router-dom";
import warmups from "../helpers/warmups";
import "../styles/ExerciseListItem.scss";

export default function ExerciseListItem(props) {
  const weight = props.weight[props.name] ? props.weight[props.name].split(' ')[4] : '';
  const LinkStyle = {
    color: 'rgb(40, 40, 40)',
  }
  return (
    <div className="notification exercise-item">
      <div className="exercise-item-header">
        <div className="tag title is-5 is-light">
          <Link to={`/library/${props.name}`} style={LinkStyle}>{props.name}</Link>
        </div>
        <label className="switch">
          <input type="checkbox" name={props.name} onChange={props.onChange} />
          <span className="slider round"> </span>
        </label>
      </div>
      <div className="exercise-item-content">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button is-medium"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <span>{props.weight[props.name]}</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <p className="dropdown-items is-size-6">
                  <li>Warm Up Sets</li>
                  <hr className="dropdown-divider" />
                  <li>{warmups(weight)[0]}</li>
                  <li>{warmups(weight)[1]}</li>
                  <li>{warmups(weight)[2]}</li>
                  <li>{warmups(weight)[3]}</li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
