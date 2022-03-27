import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Exercise.scss";
import ExerciseList from "../components/ExerciseList";
const axios = require("axios");

export default function Exercise() {
  const { exercise_id } = useParams();
  const [plannedWorkout, setPlannedWorkout] = useState(['']);
  const [exercises, setExercises] = useState([]);
  const [program, setProgram] = useState(['']);

  const formatDate = (day) => {
    const week = 'W' + Math.floor(day / 7);
    const date = 'D' + (day % 7) 
    return week + date
  }

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
      .get("/exercises")
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/programs")
      .then((res) => {
        setProgram(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  console.log('planned workoug: ', plannedWorkout)
  console.log('exercises: ', exercises)
  console.log('program: ', program)

  return (
    <div class="workout">
      <div>
        {/* need to fix, this is hardcoded*/}
        {program[0].name} - {formatDate(plannedWorkout[0].day)}
        <br />
        <br />
        <div className="title is-5">Today's workout -</div>
        <ExerciseList />
      </div>

      <div className="control">
        <button className="button is-primary is-medium" action="submit">
          Complete Workout
        </button>
      </div>
    </div>
  );
}
