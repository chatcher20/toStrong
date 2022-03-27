// fake data

const fakeStats = {
  height_feet: 5,
  height_inches: 11,
  weight: 186,
  weight_change: "bulk",
};

const round = (value, precision) => {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

const bmi = (stats) => {
  const height = (12 * Number(stats.feet)) + Number(stats.inches);
  return round((703 * stats.weight) / (height * height), 1);
};

const macros = (state, weight) => {
  let bmr = weight * 15;
  if (state === "bulk") bmr += 300;
  if (state === "cut") bmr -= 300;

  const protein = weight;
  const fat = round((bmr * 0.3) / 9, 0);
  const carbs = round((bmr - protein * 4 - fat * 9) / 4, 0);

  return { protein, fat, carbs };
};

// console.log(bmi(fakeStats));
// console.log(macros(fakeStats));

export { bmi, macros };
