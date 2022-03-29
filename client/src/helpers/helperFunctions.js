const formatDate = (day) => {
  const week = "W " + Math.floor((day - 1) / 3 + 1);
  const date = " D " + ((day - 1) % 3 + 1);
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

export { formatDate, toTrue, obtainObj };
