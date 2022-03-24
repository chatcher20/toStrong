import React from "react";

export default function New() {
  return (
    <div className="layout">
      SIGN UP -
      <div classsName="field forms">
    
        <div className="control">
          <input className="input" type="text" placeholder="Username" />
        </div>

        <div className="control">
          <input className="input" type="email" placeholder="Email" />
        </div>
        <div className="control">
          <input className="input" type="password" placeholder="Password" />
        </div>
        <div className="control">
          <input className="input" type="password" placeholder="Confirm Password" />
        </div>

        <div className="control">
          <input className="input" type="text" placeholder="Height .ft" />
        </div>
        <div className="control">
          <input className="input" type="number" placeholder="Weight .lb" />
        </div>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
