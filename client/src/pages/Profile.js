// import React from "react";
import { useParams, Link } from "react-router-dom";
import rankBadge from "../images/badges/20.png";
import React, { useContext, useState } from "react";
import "../styles/Header.scss";
import logo from "../images/️toStrong-logos_black.png";
import { UserContext } from "../UserContext";
import { login } from "../login";
import { bmi, macros } from "../helpers/bmi-macros";
import { New } from "../pages/New";

export default function Profile() {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const message = useContext(UserContext);
  console.log("message is: ", message);

  // import stat info from New to display info on profile page:
  const stat = {
    // feet: New(form.height_feet),
    // inches: form.height_inches,
    // weight: form.weight,
    feet: 5,
    inches: 6,
    weight: 175,
  };

  return (
    <div className="">
      {/* <pre>{JSON.stringify(user, null, 2)}</pre>
        {user ? (
          <button
            onClick={() => {
              // call logout
              setUser(null);
            }}
          >
            logout
          </button>
        ) : (
          <button
            onClick={async () => {
              const user = await login();
              setUser(user);
            }}
          >
            login
          </button>
        )} */}

      <div className="profile-header">
        <div>
          <strong>Welcome back, <Link to="/:id">Chris!</Link></strong>
          <div>
            BMI:
            <div className="bmi">{isNaN(bmi(stat)) ? "" : bmi(stat)}</div>
            <br />
            Macros (g/day):
          </div>
          <div className="bmi">
          P: 100, F: 80, C: 200
            {/* {macros(form.weight_change, form.weight).protein === undefined}
              ? ""
              :
              `P: ${macros(form.weight_change, form.weight).protein}, 
              F: ${macros(form.weight_change, form.weight).fat}, 
              C: ${macros(form.weight_change, form.weight).carbs}` */}
          </div>
        </div>

        <button className="button is-small">
          setting &nbsp;<i className="fa-solid fa-gear"></i>
        </button>
      </div>

      <div className="profile-content">
        <div>
          Active program:
          <br />
          Basic LP<Link to="/programs/:id">Resume Program</Link>
        </div>

        <br />
        <div className="badge">
          Current Badge:
          <br />
          <br />
          <img src={rankBadge} alt="badge" />
        </div>
      </div>

      <br />
      <div>
        <strong>Program history:</strong>
        <br />
        <ol>
          Current:
          <br />
          <br />
          <li>program 1 - {Date()}</li>
          <br />
          Past:
          <br />
          <br />
          <li>program 1</li>
          <li>program 11</li>
          <li>program 11</li>
          <li>program 11</li>
        </ol>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

