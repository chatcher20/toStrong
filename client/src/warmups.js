const plateMilestones = [
  33, 45, 65, 95, 115, 135, 155, 185, 205, 225, 245, 275, 315, 365, 405, 455,
  495, 545, 585, 635, 675,
];

const closest = (counts, goal) => {
  return counts.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
  );
};

/**
 * Computes warmup weights rounded to the nearest nice plate milestone
 * @param {number} workWeight - Weight of working set for that day
 * @returns {Array} - Array of strings of warmup sets
 * @example
 * // returns [ 'Empty bar x 2 x 5', '155 x 5', '245 x 3', '315 x 2' ]
 * warmups(365)
 */
const warmups = (workWeight) => {
  const warmup1 = closest(plateMilestones, workWeight * 0.45);
  const warmup2 = closest(plateMilestones, workWeight * 0.65);
  const warmup3 = closest(plateMilestones, workWeight * 0.85);

  return [
    "Empty bar x 2 x 5",
    `${warmup1} x 5`,
    `${warmup2} x 3`,
    `${warmup3} x 2`,
  ];
};

export default warmups;
