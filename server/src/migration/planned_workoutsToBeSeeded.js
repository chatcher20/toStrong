const planned_workoutsToBeSeeded = []
for (let i = 0; i<5; i++) {
  planned_workoutsToBeSeeded.push(
    {
      // exercise: exercises.filter(e => e.name === "Bench Press")[0]
      day: i,
      exercise_order: 4,
      exercise_name: "Bench Press",
      program_name: "BasicLP"
    }
  )
};

module.exports = { planned_workoutsToBeSeeded }


