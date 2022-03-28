import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import InitWeightItem from "../components/InitWeightItem";

export default function InitWeight() {
  const [programs, setPrograms] = useState([]);
  const [plannedWOs, setPlannedWOs] = useState([]);
  const [form, setForm] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedProgram = programs.find((x) => x.id === Number(id));
  const uniqueExercises = [];
  const data = {};
  data.weights = form;  
  data.program_name = (selectedProgram === undefined ? '' : selectedProgram.name);

  plannedWOs.forEach((x) => {
    if (!uniqueExercises.includes(x.exercise_name)) {
      uniqueExercises.push(x.exercise_name);
    }
  });

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
    axios
      .get("/planned_workouts")
      .then((res) => {
        setPlannedWOs(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const onChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/initial_weights", data)
      .then(() => {
        navigate(`/programs/${selectedProgram.id}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  const exerciseList = uniqueExercises.map((name) => {
    return <InitWeightItem name={name} value={form.name} onChange={onChange} />;
  });

  return (
    <div>
      <br />
      <div className="title is-4">
        {selectedProgram !== undefined ? selectedProgram.name : ""}
        <div className="subtitle">Setting Your Initial Weight -</div>
        <div className="field forms">
          <form onSubmit={onSubmit}>
            <div className="control">
              {exerciseList}
              <br />
              <br />
              <br />
              <div className="control">
                <button className="button is-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
