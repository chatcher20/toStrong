// Workout A:  Squat, Bench Press, Deadlift
// Workout B:  Squat, Shoulder Press, Chins

// fake data
const fakeWorkouts = [
  { squat: true, bench: true, deadlift: true },
  { squat: true, press: true, chinups: false },
  { squat: true, bench: true, deadlift: true },
  { squat: true, press: true, chinups: true },
];

const fakeInits = {
  squat: 100,
  bench: 85,
  press: 55,
  deadlift: 145,
};

const convertToWeights = (exercises, init, increment) => {
  let weight = init;

  for (let i = 0; i < exercises.length; i++) {
    if (exercises[i] === undefined) continue;
    exercises[i] = weight;
    if (exercises[i]) weight += increment;
  }

  return exercises;
};

const basicLP = (workouts, initWeights, day) => {
  let squats = new Array(36).fill(null);
  let benches = new Array(36).fill(null);
  let presses = new Array(36).fill(null);
  let deadlifts = new Array(36).fill(null);

  workouts.forEach((workout, i) => {
    squats[i] = workout.squat;
    benches[i] = workout.bench;
    presses[i] = workout.press;
    deadlifts[i] = workout.deadlift;
  });

  squats = convertToWeights(squats, initWeights.squat, 5);
  benches = convertToWeights(benches, initWeights.bench, 5);
  presses = convertToWeights(presses, initWeights.press, 2.5);
  deadlifts = convertToWeights(deadlifts, initWeights.deadlift, 10);

  return {
    squat: squats[day - 1],
    bench: benches[day - 1],
    press: presses[day - 1],
    deadlift: deadlifts[day - 1],
  };
};

console.log(basicLP(fakeWorkouts, fakeInits, 1));
console.log(basicLP(fakeWorkouts, fakeInits, 2));
console.log(basicLP(fakeWorkouts, fakeInits, 3));
console.log(basicLP(fakeWorkouts, fakeInits, 4));

export default basicLP;
