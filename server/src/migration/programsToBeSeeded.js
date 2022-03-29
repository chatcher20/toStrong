const programsToBeSeeded = [
  {
    planned_workout_id: 1,
    name: "Basic LP",
    duration: 36,
    description:
      "Beginners' program. Alternate workouts A & B across a Mon/Wed/Fri training week, performing each exercise for 3 sets of 5 reps.  Add small amount of load at every session.",
    modality: "Full-body",
    equipment_type: "Barbell",
  },
  {
    planned_workout_id: 2,
    name: "Heavy Light Medium (HLM)",
    duration: 36,
    description:
      "Early intermediate program. Still full body training for max frequency of PRs per body part, but with increased variation in movement and increase in volume for smaller body parts.",
    modality: "Full-body",
    equipment_type: "Commercial Gym",
  },
  {
    planned_workout_id: 3,
    name: "Four-day Split (Upper/Lower)",
    duration: 48,
    description:
      "Late intermediate program. Allows for increase in training volume via increased exercise selection and body is divided upper-lower for practicality and recovery.",
    modality: "Full-body",
    equipment_type: "Commercial Gym",
  },
  {
    planned_workout_id: 4,
    name: "Push, Pull, Legs (PPL)",
    duration: 60,
    description:
      "Late intermediate/early advanced program. Splits up the upper body sessions into “push” and “pull” to allow for more per session volume on overlapping exercises and better recovery between sessions.  Frequency per body part is still twice per week but generally with more total volume per body part.",
    modality: "Full-body",
    equipment_type: "Commercial Gym",
  },
  {
    planned_workout_id: 5,
    name: "Body Part Split",
    duration: 72,
    description:
      "Advanced program. Allows for even greater per session volumes and intensities per body part while reducing frequency to 1.5 times per week.",
    modality: "Full-body",
    equipment_type: "Commercial Gym",
  },
  {
    planned_workout_id: 6,
    name: "Arm Specialization",
    duration: 36,
    description: "The ideal plan for those looking to add size to their arms!",
    modality: "Upper-body",
    equipment_type: "Commercial Gym",
  },
  {
    planned_workout_id: 7,
    name: "Matt Kroc's Simple Deadlift Program",
    duration: 17,
    description:
      "Training the deadlift is simple. Hit it hard, hit it heavy, then let your body recover and grow.",
    modality: "Lower-body",
    equipment_type: "Commercial Gym",
  },
  {
    planned_workout_id: 8,
    name: "Old-School Russian Calisthenics",
    duration: 17,
    description:
      "Through simple bodyweight exercises, you too can be as jacked as Czar Nicholas II.",
    modality: "Full-body",
    equipment_type: "Bodyweight",
  },
  {
    planned_workout_id: 9,
    name: "Conjugate Program",
    duration: 48,
    description:
      "Popularized by Westside Barbell, a combination of a max effort, dynamic effort, and repition method program.",
    modality: "Full-body",
    equipment_type: "Commercial Gym",
  },
  {
    planned_workout_id: 10,
    name: "Garage Gym Warrior",
    duration: 36,
    description:
      "A simplified program that requires only a barbell, rack, and bench, for the garage gym warrior.",
    modality: "Full-body",
    equipment_type: "Barbell",
  },
];

module.exports = { programsToBeSeeded };
