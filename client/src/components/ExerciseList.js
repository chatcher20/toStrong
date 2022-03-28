import React from "react";
import ExerciseListItem from "./ExerciseListItem";


export default function ExerciseList() {



  // console.log(basicLP([
  //   { squat: false, bench: true, deadlift: true },
  //   { squat: true, press: false, chinup: false },
  //   { squat: true, bench: true, deadlift: true },
  //   { squat: true, press: true, chinup: true },
  // ], {
  //   squat: 100,
  //   bench: 85,
  //   press: 55,
  //   deadlift: 145,
  //   chinup: 0,
  // }, 2))

  return (
    <div>
      <ExerciseListItem />
    </div>
  );
}
