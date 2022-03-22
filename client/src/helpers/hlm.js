// Monday:  Squat, Close-grip Bench Press, Barbell Row, Bicep Curls
// Wednesday:  Shoulder Press, Deadlift, Leg Press, Dips
// Friday:  Pause Squat, Bench Press, Chins, Tricep Extension

// Squat/Bench heavy day
// Week 1:  5 x 80%, 3 x 5 x 75%
// Week 2:  3 x 85%, 4 x 5 x 75%
// Week 3:  1 x 90%, 5 x 5 x 75%

// fake data
const fakeWorkouts = [
  { lowBarSquatx5: true, closeGripBench: true, row: true, curls: false },
  { press: true, rdl: true, legPress: false, dips: true },
  { squat: true, bench: true, deadlift: true },
  { pauseSquat: true, benchx5: true, chinups: true, tricepExtensions: true },
  { lowBarSquatx3: true, closeGripBench: true, row: true, curls: false },
];

const fakeInits = {
  lowBarSquat: 275,
  bench: 210,
  press: 145,
  deadlift: 345,
  row: 185,
  curls: 80,
  tricepExtensions: 85,
};
