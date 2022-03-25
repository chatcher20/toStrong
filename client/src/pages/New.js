import React from "react";
import "./New.scss";

export default function New() {
  return (
    <div className="layout is-size-3">
      SIGN UP -
      <div className="field forms">
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
          <input
            className="input"
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <div className="control">
          <input className="input" type="number" placeholder="Height .ft" />
        </div>

        <div className="control">
          <input className="input input-bottom" type="number" placeholder="Weight .lb" />
        </div>
     

        <article class="message">
          <div class="message-header">
            <p>Estimating your...</p>
          </div>
          <div class="message-body">
            BMI: 
            <br/>
            Macros:
          </div>
        </article>


        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
