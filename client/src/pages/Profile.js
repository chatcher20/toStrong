import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bmi, macros } from "../helpers/bmi-macros";
import Button from "../components/Button";
import rankBadge from "../images/badges/20.png";
import axios from "axios";
import "../styles/Profile.scss";

export default function Profile() {
  const [userprograms, setuserprograms] = useState();
  const [programs, setPrograms] = useState();
  const [user, setUser] = useState();
  const { id } = useParams();

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

  const selectedUser = user ? user.find((x) => x.username === id) : "";

  const stat = {
    feet: selectedUser.height_feet,
    inches: selectedUser.height_inches,
    weight: selectedUser.weight,
    state: selectedUser.weight_change,
  };

  const selectedProgram =
    programs && userprograms
      ? programs.find((x) => x.id === userprograms[0].program_id)
      : "";

  const completedPrograms = function (userprograms) {
    if (!userprograms || !programs) {
      return;
    } else {
      const today = new Date().toISOString().slice(0, 10);
      return userprograms
        .filter((program) => program.end_date < today)
        .map((program) => programs.find((x) => x.id === program.program_id))
        .map((program) => <div>{program.name}</div>);
    }
  };

  return (
    <div>
      <div className="profile-header">
        <div>
          <div className="title is-2">
            {id}
            <div className="subtitle is-3">Welcome Back!</div>
          </div>
        </div>
        <button className="button is-small is-link is-rounded has-text-weight-bold">
          Settings &nbsp;<i className="fa-solid fa-gear"></i>
        </button>
      </div>
      <hr />
      <div className="profile-content">
        <div className="level health-matrix top">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">BMI -</p>
              <p className="title">{bmi(stat)}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Macros - Protein</p>
              <p className="title">
                {macros(stat.state, stat.weight).protein} g
              </p>
            </div>
          </div>
        </div>
        <div className="level health-matrix">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Macros - Fat</p>
              <p className="title">{macros(stat.state, stat.weight).fat} g</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Macros - Carbs</p>
              <p className="title">{macros(stat.state, stat.weight).carbs} g</p>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className="profile-programs">
          <div>
            <div className="subtitle is-5">Current Program:</div>
            <div className="title is-4">{selectedProgram.name}</div>
          </div>
          <Button word="Resume" path={`/programs/${selectedProgram.id}`} />
        </div>
        <br />
        <div>
          <ol>
            <label className="subtitle is-6">Completed Program(s):</label>
            <li className="title is-5">{completedPrograms(userprograms)}</li>
            <br />
          </ol>
        </div>
      </div>
      <div className="badge">
        <hr />
        <div className="title is-6">Badge(s):</div>

        <img src={rankBadge} alt="badge" />
      </div>
    </div>
  );
}
