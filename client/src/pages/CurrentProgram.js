import React, { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import Button from "../components/Button";
import "../styles/CurrentProgram.scss";
import axios from "axios";
import { formatDate } from "../helpers/helperFunctions";

export default function CurrentProgram() {
  const [plannedWorkouts, setPlannedWorkouts] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [actual, setActual] = useState([]);
  const [selected, setSelected] = useState("");
  const { id } = useParams();

  const selectedProgram = programs.find((x) => x.id === Number(id));
  const selectedProgramName = !selectedProgram ? "" : selectedProgram.name ;
  const selectedActual = actual.filter( x => x.program_name === selectedProgramName)

  const uniqueDays = [];

  console.log('actual', selectedActual)
  console.log('1', actual)
  console.log('2', selectedProgramName)
  console.log('^%', Math.ceil((selectedActual.length / 36) * 100))


  plannedWorkouts.forEach((x) => {
    if (!uniqueDays.includes(x.day)) {
      uniqueDays.push(x.day);
    }
  });

  const selectList = uniqueDays.map((x) => {
    return <option value={x}>{formatDate(x)}</option>;
  });


  useEffect(() => {
    axios
      .get("/programs")
      .then((res) => {
        setPrograms(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get("/planned_workouts")
      .then((res) => {
        setPlannedWorkouts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get("/actual_workouts")
      .then((res) => {
        setActual(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const linkStyle = {
    color: "black",
  };

  return (
    <div>
      
      <div className="current-program-header">
        <div>
          <div className="subtitle is-4">Current Program </div>
          <div className="title is-3">
            {selectedProgram ? selectedProgram.name : "Basic LP"}
          </div>
        </div>
        <Button word="All Programs" path="/programs" />
      </div>
      <br />
      <br />
      <div className="progress-container">
        <div className="progress-content">Program Progress </div>
        <div className="progress-content">
          <strong>{selectedActual ? Math.ceil((selectedActual.length / 36) * 100) + "%" : 0}</strong>
        </div>
      </div>
      <progress
        className="progress is-link is-small"
        value={selectedActual ? Math.ceil((selectedActual.length / 36) * 100) : 0}
        max="100"
      ></progress>

      <div className="current-program">
        <div id="current-select">
          <div className="select is-medium input-bottom">
            <select
              name="workout_list"
              value={selected}
              onChange={(x) => {
                setSelected(x.target.value);
              }}
            >
              <option>Continue Workout</option>
              {selectList}
            </select>
          </div>
        </div>
        <div>
          <button className="button is-light is-medium">
            <Link to={`/programs/${id}/${selected}`} style={linkStyle}>
              {" "}
              Confirm{" "}
            </Link>
          </button>
        </div>
      </div>
      <Outlet context={[id]} />

      <div class="tabs is-fullwidth is-medium-small">
        <ul>
          <li>
            <Link to={`/programs/${id}/14days`}>Last 2 Weeks</Link>
          </li>
          <li>
            <Link to={`/programs/${id}/30days`}>Last Month</Link>
          </li>
          <li>
            <Link to={`/programs/${id}`}>From Start</Link>
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
}
