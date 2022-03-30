const formatDate = (day) => {
  const week = "W" + Math.floor((day - 1) / 3 + 1);
  const date = "D" + (((day - 1) % 3) + 1);
  return week + date;
};

const toTrue = (obj) => {
  for (const key in obj) {
    if (obj[key] === "on") {
      obj[key] = true;
    }
  }
  return obj;
};

const obtainObj = (arr) => {
  const newArr = [];
  for (const obj in arr) {
    newArr.push(arr[obj].exercisesCompleted);
  }
  return newArr;
};

const createGraphData = (
  basicLP,
  trackWO,
  InitWeight,
  ActualWOLength,
  formatday
) => {
  let result = {
    "Bench Press": [],
    Squat: [],
    "Overhead Press": [],
    Deadlift: [],
    "Chin Up": [],
  };

  const exercises = [
    "Bench Press",
    "Squat",
    "Overhead Press",
    "Deadlift",
    "Chin Up",
  ];

  for (let i = 1; i <= ActualWOLength; i++) {
    for (const exercise of exercises) {
      result[exercise].push({
        x: i,
        y: basicLP(trackWO, InitWeight, i)[exercise]
          ? Number(basicLP(trackWO, InitWeight, i)[exercise].split(" ")[4])
          : result[exercise][result[exercise].length - 1]
          ? Object.values(result[exercise][result[exercise].length - 1])[1]
          : 0,
      });
    }
  }

  return result;
};

export { formatDate, toTrue, obtainObj, createGraphData };
