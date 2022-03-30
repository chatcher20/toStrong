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
  const uniqueDays = [];

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

  return (
    <div>
      <br />
      <div className="current-program">
        <div>
          <Button word="All Programs" path="/programs" />
        </div>
        <div id="current-select">
          <div className="select is-medium-small input-bottom">
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
          <div>
            <button className="button is-light">
              <Link to={`/programs/${id}/${selected}`}> Confirm </Link>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="subtitle is-5">
        Current Program -
        <br />
        <div className="title is-4">
          {selectedProgram ? selectedProgram.name : ""}
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-content">Program Progress:</div>
        <div className="progress-content">
          {Math.ceil((actual.length / 36) * 100) + "%"}
        </div>
      </div>
      <progress
        className="progress is-info is-small"
        value={Math.ceil((actual.length / 36) * 100)}
        max="100"
      ></progress>

      <Outlet context={[id]} />
      <div className="graph-btns">
        <Button
          size="is-small"
          word="Last 2 Weeks"
          path={`/programs/${id}/14days`}
        />
        <Button
          size="is-small"
          word="Last Month"
          path={`/programs/${id}/30days`}
        />
        <Button size="is-small" word="From Start" path={`/programs/${id}`} />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
