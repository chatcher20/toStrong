import React from "react";

export default function InitWeightItem(props) {



  return (
    <div>
      {props.name}
      <input
        className="input"
        type="number"
        placeholder=".lb"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}