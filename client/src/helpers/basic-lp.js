// Workout A:  Squat, Bench Press, Deadlift
// Workout B:  Squat, Shoulder Press, Chins

// fake data
const fakeWorkouts = [
  { squat: false, bench: true, deadlift: true },
  { squat: true, press: false, chinup: false },
  { squat: true, bench: true, deadlift: true },
  { squat: true, press: true, chinup: true },
];

const fakeInits = {
  squat: 100,
  bench: 85,
  press: 55,
  deadlift: 145,
  chinup: 0,
};

const convertToWeights = (exercises, init, increment) => {
  let weight = init;
  const weights = exercises.slice();

  for (let i = 0; i < exercises.length; i++) {
    if (exercises[i] === undefined) continue;
    weights[i] = weight;
    if (exercises[i]) weight += increment;
  }

  return weights;
};

const basicLP = (workouts, initWeights, day) => {
  let squats = new Array(36).fill(null);
  let benches = new Array(36).fill(null);
  let presses = new Array(36).fill(null);
  let deadlifts = new Array(36).fill(null);
  let chinups = new Array(36).fill(null);

  workouts.forEach((workout, i) => {
    squats[i] = workout.squat;
    benches[i] = workout.bench;
    presses[i] = workout.press;
    deadlifts[i] = workout.deadlift;
    chinups[i] = workout.chinup;
  });

  squats = convertToWeights(squats, initWeights.squat, 5);
  benches = convertToWeights(benches, initWeights.bench, 5);
  presses = convertToWeights(presses, initWeights.press, 2.5);
  deadlifts = convertToWeights(deadlifts, initWeights.deadlift, 10);
  chinups = convertToWeights(chinups, initWeights.chinup, 2.5);

  return {
    squat: squats[day - 1] && `3x5 @ ${squats[day - 1]}`,
    bench: benches[day - 1] && `3x5 @ ${benches[day - 1]}`,
    press: presses[day - 1] && `3x5 @ ${presses[day - 1]}`,
    deadlift: deadlifts[day - 1] && `1x5 @ ${deadlifts[day - 1]}`,
    chinup:
      chinups[day - 1] === undefined ? undefined : `3x8 @ ${chinups[day - 1]}`,
  };
};

console.log(basicLP(fakeWorkouts, fakeInits, 1));
console.log(basicLP(fakeWorkouts, fakeInits, 2));
console.log(basicLP(fakeWorkouts, fakeInits, 3));
console.log(basicLP(fakeWorkouts, fakeInits, 4));

export default basicLP;
