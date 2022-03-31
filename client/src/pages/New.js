import React, { useState } from "react";
import "../styles/New.scss";
import { bmi, macros } from "../helpers/bmi-macros";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function New() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const stat = {
    feet: form.height_feet,
    inches: form.height_inches,
    weight: form.weight,
  };

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/users", form)
      .then(() => {
        navigate(`/programs`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  console.log(stat);

  return (
    <div className="layout is-size-3">
      <div className='title'>

      SIGN UP
      </div>
     
      <form onSubmit={onSubmit}>

        <div className="field forms">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="username"
              value={form.username}
              onChange={onChange}
            />
          </div>

          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="password">
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChange}
              />
            </div>

            <div className="control">
              <input
                className="input confirm"
                type="password"
                placeholder="Confirm Password"
                name="password_confirmation"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="password">
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="ft"
                name="height_feet"
                onChange={onChange}
              />
            </div>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="in"
                name="height_inches"
                onChange={onChange}
              />
            </div>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="lbs"
                name="weight"
                onChange={onChange}
              />
            </div>
          </div>
     
          <div id="new-select">
            <div className="select is-primary is-rounded is-medium input-bottom">
              <select name="weight_change" onChange={onChange}>
                <option>Your goal is to...</option>
                <option value="bulk">Gain Muscle</option>
                <option value="maintain">Maintain</option>
                <option value="cut">Lose Fat</option>
              </select>
            </div>
          </div>

          <article className="message">
            <div className="message-header">
              <p>Estimating your...</p>
            </div>
            <div className="message-body">
              <div className="bmi-container">
                <div>
                  <strong>BMI: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                </div>
                <div className="bmi">{isNaN(bmi(stat)) ? "" : bmi(stat)}</div>
              </div>
              <br />
              <div className="bmi-container">
                <div className="macro">
                  <strong>Macros:</strong> (g/day)
                </div>
                <div className="bmi">
                  <div className="bmi-content">
                    <div>
                      {macros(form.weight_change, form.weight).protein ===
                      undefined
                        ? ""
                        : `Protein:`}
                    </div>
                    <div>
                      {macros(form.weight_change, form.weight).protein ===
                      undefined
                        ? ""
                        : `${macros(form.weight_change, form.weight).protein}`}
                    </div>
                  </div>
                  <div className="bmi-content">
                    <div>
                      {macros(form.weight_change, form.weight).protein ===
                      undefined
                        ? ""
                        : `Fat:`}
                    </div>
                    <div>
                      {macros(form.weight_change, form.weight).protein ===
                      undefined
                        ? ""
                        : `${macros(form.weight_change, form.weight).fat}`}
                    </div>
                  </div>
                  <div className="bmi-content">
                    <div>
                      {macros(form.weight_change, form.weight).protein ===
                      undefined
                        ? ""
                        : `Carbs:`}
                    </div>
                    <div>
                      {macros(form.weight_change, form.weight).protein ===
                      undefined
                        ? ""
                        : `${macros(form.weight_change, form.weight).carbs}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div className="control bmi">
            <button className="button is-primary is-size-4">Submit</button>
          </div>
        </div>
        <br />
        <br />
      
      </form>
    </div>
  );
}
