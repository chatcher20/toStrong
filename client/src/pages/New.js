import React, { useState } from "react";
import "../styles/New.scss";
import { bmi, macros } from "../helpers/bmi-macros";

export default function New() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [macrosState, setMacrosState] = useState("");
  const stat = { feet, inches, weight };

  console.log("select: ", macros(macrosState, weight));

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
        <div className="password">
          <div className="control">
            <input className="input" type="password" placeholder="Password" />
          </div>

          <div className="control">
            <input
              className="input confirm"
              type="password"
              placeholder="Confirm"
            />
          </div>
        </div>

        <div className="password">
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="ft."
              onChange={(event) => setFeet(event.target.value)}
            />
          </div>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="in."
              onChange={(event) => setInches(event.target.value)}
            />
          </div>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="lb."
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
        </div>

        <br />

        <div id="new-select">
          <div className="select is-primary is-rounded is-medium input-bottom">
            <select onChange={(event) => setMacrosState(event.target.value)}>
              <option>Your goal is to...</option>
              <option value="bulk">Bulk</option>
              <option>Maintain</option>
              <option value="cut">Cut</option>
            </select>
          </div>
        </div>

        <article className="message ">
          <div className="message-header">
            <p>Estimating your...</p>
          </div>
          <div className="message-body">
            <div className="bmi-container">
              <div><strong>BMI: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></div>
              <div className="bmi">{isNaN(bmi(stat)) ? "" : bmi(stat)}</div>
            </div>
            <br />
            <div className="bmi-container">
              <div><strong>Macros:</strong></div>
              <div className="bmi">
                {macros(macrosState, weight).protein === ""
                  ? ""
                  : `P: ${macros(macrosState, weight).protein}, F: ${macros(macrosState, weight).fat}, C: ${macros(macrosState, weight).carbs}`}
              </div>
            </div>
          </div>
        </article>

        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
