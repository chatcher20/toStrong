
const formatDate = (day) => {
  const week = "W" + Math.floor(1 + day / 7);
  const date = "D" + (day % 7);
  return week + date;
};

export default formatDate;