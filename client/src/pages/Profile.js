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
import Button from "../components/Button";

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
        .filter((program) => program.end_date < today)
        .map((program) => programs.find((x) => x.id === program.program_id))
        .map((program) => <div>{program.name}</div>);
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
            <br />
            <b>BMI:</b>
            <div className="bmi">{bmi(stat)}</div>
            <br />
            <b>Macros (g/day):</b>
          </div>
          <div className="bmi">
            <div>Protein: {macros(stat.state, stat.weight).protein}</div>
            <div>Fat: {macros(stat.state, stat.weight).fat}</div>
            <div>Carbohydrates: {macros(stat.state, stat.weight).carbs}</div>
          </div>
          <br />
        </div>

        <button className="button is-small is-link"  >
          Settings &nbsp;<i className="fa-solid fa-gear"></i>
        </button>
      </div>

      <div className="profile-content">
        <div>
          <strong>Current Program:</strong>
          <li>{selectedProgram.name}</li>
          <Button  word="Resume" path={`/programs/${selectedProgram.id}`} />
          <br />
        </div>
        <div>
          <ol>
            <strong>Completed Programs:</strong>
            <br />
            <li>{completedPrograms(userprograms)}</li>
            <br />
          </ol>
        </div>
      </div>
      <div className="badge">
        <hr />
        <strong>Latest Badge:</strong>
        <br />
        <img src={rankBadge} alt="badge" />
        <br />
      </div>
    </div>
  );
}
