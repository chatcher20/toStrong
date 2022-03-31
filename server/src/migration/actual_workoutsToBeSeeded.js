const actual_workoutsToBeSeeded = [
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 1,
    exercisesCompleted: { "Squat": true, "Bench Press": true, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 2,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 3,
    exercisesCompleted: { "Squat": true, "Bench Press": false, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 4,
    exercisesCompleted: { "Chin Up": false, "Overhead Press": true, "Squat": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 5,
    exercisesCompleted: { "Squat": true, "Bench Press": true, "Deadlift": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 6,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 7,
    exercisesCompleted: { "Squat": true, "Bench Press": false, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 8,
    exercisesCompleted: { "Squat": false, "Bench Press": true, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 9,
    exercisesCompleted: { "Chin Up": false, "Overhead Press": true, "Squat": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 10,
    exercisesCompleted: { "Squat": true, "Bench Press": false, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 11,
    exercisesCompleted: { "Squat": false, "Bench Press": false, "Deadlift": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 12,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 13,
    exercisesCompleted: { "Squat": true, "Bench Press": false, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 14,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 15,
    exercisesCompleted: { "Squat": true, "Bench Press": false, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 16,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 17,
    exercisesCompleted: { "Squat": false, "Bench Press": false, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 18,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 19,
    exercisesCompleted: { "Squat": true, "Bench Press": true, "Deadlift": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 20,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 21,
    exercisesCompleted: { "Squat": true, "Bench Press": false, "Deadlift": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 22,
    exercisesCompleted: { "Chin Up": false, "Overhead Press": true, "Squat": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 23,
    exercisesCompleted: { "Squat": true, "Bench Press": true, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 24,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 25,
    exercisesCompleted: { "Squat": true, "Bench Press": true, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 26,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": true}
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 27,
    exercisesCompleted: { "Squat": true, "Bench Press": true, "Deadlift": true}
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 28,
    exercisesCompleted: { "Chin Up": true, "Overhead Press": true, "Squat": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 29,
    exercisesCompleted: { "Squat": true, "Bench Press": false, "Deadlift": true }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 30,
    exercisesCompleted: { "Chin Up": false, "Overhead Press": true, "Squat": false }
  },
  {
    user_id: 1,
    program_name: "Heavy Light Medium (HLM)",
    day: 31,
    exercisesCompleted: { "Squat": false, "Bench Press": false, "Deadlift": false }
  }
]

module.exports = { actual_workoutsToBeSeeded }

