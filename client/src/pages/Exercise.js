import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Exercise.scss";
import ExerciseListItem from "../components/ExerciseListItem";
import formatDate from "../helpers/formatDay";
const axios = require("axios");

export default function Exercise() {
  const { id, day } = useParams();
  const navigate = useNavigate();
  const [plannedWorkout, setPlannedWorkout] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    axios
      .get("/planned_workouts")
      .then((res) => {
        setPlannedWorkout(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/programs")
      .then((res) => {
        setPrograms(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const selectedPrograms = programs.find((x) => x.id === Number(id));
  const workoutsOfTheDay = plannedWorkout.filter((x) => x.day === Number(day));

  const onSubmit = (event) => {
    event.preventDefault();
  
    axios.post("/users", completed)
    .then(() => {
      navigate(`/programs/${id}`)
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const onChange = ({ target: { name, value } }) => {
    setCompleted((prev) => ({ ...prev, [name]: value }));
  };

  console.log(completed)

  const eachExercise = workoutsOfTheDay.map((workout) => (
    <ExerciseListItem
      key={workout.id}
      name={workout.exercise_name}
      program={workout.program_name}
      onChange={onChange}
    />
  ));

  return (
    <div class="workout">
      <form onSubmit={onSubmit}>
        <div>
          <br />
          <div className="subtitle is-4">
            {programs.length !== 0 ? selectedPrograms.name : ""}
          </div>
          <div className="title is-5">
            Today's workout ({formatDate(day)}) -
          </div>
          {eachExercise}
        </div>
        <br />
        <div className="control">
          <button className="button is-primary is-medium" action="submit">
            Complete Workout
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}
