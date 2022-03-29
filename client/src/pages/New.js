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
  
    axios.post("/users", form)
    .then(() => {
      navigate(`/users/${form.username}`)
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const onChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="layout is-size-3">
      SIGN UP -
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
                placeholder="Confirm"
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
                placeholder="ft."
                name="height_feet"
                onChange={onChange}
              />
            </div>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="in."
                name="height_inches"
                onChange={onChange}
              />
            </div>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="lb."
                name="weight"
                onChange={onChange}
              />
            </div>
          </div>

          <br />

          <div id="new-select">
            <div className="select is-primary is-rounded is-medium input-bottom">
              <select name="weight_change" onChange={onChange}>
                <option>Your goal is to...</option>
                <option value="bulk">Bulk</option>
                <option value="maintain">Maintain</option>
                <option value="cut">Cut</option>
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
                <div>
                  <strong>Macros:</strong> (g/day){" "}
                </div>
                {/* mouseover popup */}
                <div className="bmi">
                  {macros(form.weight_change, form.weight).protein === undefined
                    ? ""
                    : `P: ${macros(form.weight_change, form.weight).protein}, 
                    F: ${macros(form.weight_change, form.weight).fat}, 
                    C: ${macros(form.weight_change, form.weight).carbs}`}
                </div>
              </div>
            </div>
          </article>

          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
}
