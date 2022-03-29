import React from "react";
import { useParams, Link } from "react-router-dom";
import rankBadge from "../images/badges/20.png";
import { useContext, useState, useEffect } from "react";
import "../styles/Header.scss";
import logo from "../images/️toStrong-logos_black.png";
import { UserContext } from "../UserContext";
import { login } from "../Login";
import { bmi, macros } from "../helpers/bmi-macros";
import { New } from "../pages/New.js";
import axios from "axios";

export default function Profile() {
  const { id } = useParams();
  // const { user, setUser } = useContext(UserContext);
  // const message = useContext(UserContext);
  // console.log("message is: ", message);

  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log("user = ", user);

  const selectedUser = user
    ? user.find((x) => x.username === id)
    : "I am an empty string!";
  console.log("selectedUser = ", selectedUser);

  const stat = {
    feet: selectedUser.height_feet,
    inches: selectedUser.height_inches,
    weight: selectedUser.weight,
    state: selectedUser.weight_change,
  };
  console.log("stat = ", stat);
  console.log(bmi(stat));
  console.log(macros(stat.state, stat.weight));

  const [userprograms, setuserprograms] = useState();

  useEffect(() => {
    axios
      .get("/user_programs")
      .then((response) => {
        setuserprograms(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log("userprograms = ", userprograms);

  const [programs, setPrograms] = useState();

  useEffect(() => {
    axios
      .get("/programs")
      .then((response) => {
        setPrograms(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log("programs = ", programs);

  const selectedProgram =
    programs && userprograms
      ? programs.find((x) => x.id === userprograms[0].program_id)
      : "I am an empty string!";
  console.log("selectedProgram = ", selectedProgram);

  const completedPrograms = function (userprograms) {
    console.log(userprograms);
    if (!userprograms || !programs) {
      return;
    } else {
      for (let obj of userprograms) {
        console.log(obj);
        console.log(obj.end_date);
        if (obj.end_date < Date()) {
          console.log("this program has ended");
          const program = programs.find(
            (x) => x.id === obj.program_id
          );
          console.log("program = ", program);
          return program.name;
        }
      }
    }
  };

  // user.find((x) => x.username === id)

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
          <strong>Welcome back, {id}!</strong>
          <div>
            BMI:
            <div className="bmi">{bmi(stat)}</div>
            <br />
            Macros (g/day):
          </div>
          <div className="bmi">
            Protein: {macros(stat.state, stat.weight).protein}
            Fat: {macros(stat.state, stat.weight).fat}
            Carbohydrates: {macros(stat.state, stat.weight).carbs}
          </div>
        </div>

        <button className="button is-small">
          Settings &nbsp;<i className="fa-solid fa-gear"></i>
        </button>
      </div>

      <div className="profile-content">
        <div>
          Active program:
          <br />
          {selectedProgram.name}
          <Link to={`/programs/${selectedProgram.id}`}>Resume Program</Link>
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
        <strong>Program History:</strong>
        <br />
        <ol>
          Current Program:
          <br />
          <li>{`/programs/${selectedProgram.name}`}</li>
          <br />
          <li>Program 1 - {Date()}</li>
          <br />
          <li>
            {/* "if {Date()} > program end_date then it goes into past programs,
            otherwise it is a current program."{" "} */}
          </li>
          <br />
          Past (Completed) Programs:
          <br />
          <li>{completedPrograms(userprograms)}</li>
          <br />
          <li>Program 4</li>
          <li>Program 7</li>
        </ol>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
