import React, { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import Graph from "../components/Graph";
import Button from "../components/Button";
import "../styles/CurrentProgram.scss";
import axios from "axios";
import formatDate from "../helpers/formatDay";

export default function CurrentProgram() {
  const [programs, setPrograms] = useState([]);
  const [plannedWorkouts, setPlannedWorkouts] = useState([]);
  const [selected, setSelected] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get("/programs").then((res) => {
      setPrograms(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/planned_workouts").then((res) => {
      setPlannedWorkouts(res.data);
    });
  }, []);

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
      <br />
      <progress
        className="progress is-info is-small"
        value="40"
        max="100"
      ></progress>
      {/* <Graph program={selectedProgram ? selectedProgram.name : ""} /> */}
      <Outlet />
      <div className='graph-btns'>
      <Button size='is-small'word='Last 14 Days' path={`/programs/${id}/14days`}/>
      <Button size='is-small'word='Last 30 Days' path={`/programs/${id}/30days`}/>
      <Button size='is-small'word='From Start' path={`/programs/${id}`}/>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
