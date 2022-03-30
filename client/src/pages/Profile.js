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
    // console.log("userprograms = ", userprograms);
    if (!userprograms || !programs) {
      return;
    } else {
      // for (let obj of userprograms) {
      //   // console.log("obj = ", obj);
      //   console.log("obj.end_date =", obj.end_date);
      //   const today = new Date().toISOString().slice(0, 10);
      //   console.log("today = ", today);
      //   if (obj.end_date < today) {
      //     console.log("this program has ended");
      //     const program = programs.find((x) => x.id === obj.program_id);
      //     console.log("program = ", program);
      //     return program.name;
      //   }
      // }
      const today = new Date().toISOString().slice(0, 10);
      return userprograms
        .filter(program => program.end_date < today)
        .map(program => programs.find((x) => x.id === program.program_id))
        .map(program => <div>{program.name}</div>);
    }
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
          <br />
        </div>

        <button className="button is-small">
          Settings &nbsp;<i className="fa-solid fa-gear"></i>
        </button>
      </div>

      <div className="profile-content">
        <div>
          <strong>Current Program:</strong>
          <li>{selectedProgram.name}</li>
          <Link to={`/programs/${selectedProgram.id}`}>Resume</Link>
        </div>

        <br />
        <div className="badge">
          <strong>Current Badge:</strong>
          <br />
          <br />
          <img src={rankBadge} alt="badge" />
        </div>
      </div>

      <br />
      <div>
        <br />
        <ol>
          <br />
          <br />
          <strong>Completed Programs:</strong>
          <br />
          <li>{completedPrograms(userprograms)}</li>
          <br />
        </ol>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
