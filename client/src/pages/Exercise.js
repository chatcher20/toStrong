import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { formatDate, toTrue, obtainObj } from "../helpers/helperFunctions";
import ExerciseListItem from "../components/ExerciseListItem";
import { basicLP } from "../helpers/basic-lp";
import "../styles/Exercise.scss";
const axios = require("axios");

export default function Exercise() {
  const [plannedWorkout, setPlannedWorkout] = useState([]);
  const [initialWeight, setInitialWeight] = useState([]);
  const [actualWOs, setActualWOs] = useState([]);
  const [completed, setCompleted] = useState({});
  const [programs, setPrograms] = useState([]);
  const [submit, setSubmit] = useState({});
  const { id, day } = useParams();
  const navigate = useNavigate();

  const selectedPrograms = programs.find((x) => x.id === Number(id));
  const workoutsOfTheDay = plannedWorkout.filter((x) => x.day === Number(day));
  const selectedProgramName = selectedPrograms ? selectedPrograms.name : "";
  const programInitWeightObj = initialWeight.find(
    (x) => x.program_name === selectedProgramName
  );
  const programInitWeight = programInitWeightObj
    ? programInitWeightObj.weights
    : "";
  const trackWO = obtainObj(actualWOs);

  // for rendering what exercise the selected day contains
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

  // for computing weight
  useEffect(() => {
    axios
      .get("/actual_workouts")
      .then((res) => {
        setActualWOs(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // for comupting weight
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

  // to determine the selected program and get its name
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

  // to set toggle complete
  useEffect(() => {
    const obj = {};
    workoutsOfTheDay.forEach((x) => {
      obj[x.exercise_name] = false;
    });
    setCompleted(obj);
  }, [plannedWorkout]);

  // to set final POST route data
  useEffect(() => {
    const finalObj = {};
    finalObj.program_name = selectedProgramName;
    finalObj.day = Number(day);
    finalObj.exercisesCompleted = toTrue(completed);
    setSubmit(finalObj);
  }, [completed]);

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/actual_workouts", submit)
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

  // map over array containing today's exercises
  const eachExercise = workoutsOfTheDay.map((exercise) => (
    <ExerciseListItem
      key={exercise.id}
      name={exercise.exercise_name}
      program={exercise.program_name}
      weight={basicLP(trackWO, programInitWeight, day)}
      onChange={onChange}
    />
  ));

  return (
    <div className="workout">
      <div>
        <div className="workout-header title is-3">
          {programs.length !== 0 ? selectedPrograms.name : ""}
          <div className="subtitle is-4">
            {programs.length !== 0 ? selectedPrograms.modality : ""} ({formatDate(day)}) -
          </div>
        </div>
        {eachExercise}
      </div>
      <br />
      <form onSubmit={onSubmit}>
        <div className="control WOfooter">
          <button className="button is-primary is-medium has-text-weight-bold" action="submit">
            Complete Workout
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}
