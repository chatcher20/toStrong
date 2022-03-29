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
  const [initialWeight, setInitialWeight] = useState();

  const selectedPrograms = programs.find((x) => x.id === Number(id));
  const workoutsOfTheDay = plannedWorkout.filter((x) => x.day === Number(day));

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
      .get("/initial_weights")
      .then((res) => {
        setInitialWeight(res.data);
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

  useEffect(() => {
    const obj = {};
    workoutsOfTheDay.forEach((x) => {
      obj[x.exercise_name] = false;
    });
    setCompleted(obj);
  }, [plannedWorkout]);

  const toTrue = (obj) => {
    for (const key in obj) {
      if (obj[key] === "on") {
        obj[key] = true;
      }
    }
    return obj;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/users", toTrue(completed))
      .then(() => {
        navigate(`/programs/${id}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onChange = ({ target: { name, value } }) => {
    setCompleted((prev) => ({ ...prev, [name]: value }));
  };


  const eachExercise = workoutsOfTheDay.map((workout) => (
    <ExerciseListItem
      key={workout.id}
      name={workout.exercise_name}
      program={workout.program_name}
      init={initialWeight ? initialWeight[1].weights : '' /* HARD CODED */}
      onChange={onChange}
    />
  ));

  return (
    <div className="workout">
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
