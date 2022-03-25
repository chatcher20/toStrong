import React from 'react'
import "../styles/ExerciseListItem.scss"

export default function ExerciseListItem(props) {
  return (
    <div className="content exercise-item">
      <div className="exercise-item-header">
        <div className="tag title is-6 is-info is-light ">name</div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"> </span>
        </label>
     
      </div>

      <div className="exercise-item-content">
        <span>reps (3x5)</span>
        <span>Weight</span>
        <br />
      </div>
    </div>
  )
}
