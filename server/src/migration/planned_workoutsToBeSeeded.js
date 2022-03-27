const planned_workoutsToBeSeeded = [];
for (let day = 1; day <= 36; day++) {
  for (let exercise_order = 1; exercise_order <= 3; exercise_order++) {
    const isAWorkout = day % 2;

    if (exercise_order === 1) exercise_name = "Squat";
    if (exercise_order === 2) {
      if (isAWorkout) exercise_name = "Overhead Press";
      else exercise_name = "Bench Press";
    }
    if (exercise_order === 3) {
      if (isAWorkout) exercise_name = "Deadlift";
      else exercise_name = "Chin Up";
    }

    planned_workoutsToBeSeeded.push({
      day,
      exercise_order,
      exercise_name,
      program_name: "basic-lp",
    });
  }
}

module.exports = { planned_workoutsToBeSeeded };
