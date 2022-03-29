import { basicLP } from "./basic-lp";

export default function programSelector(name) {
  if (name === "Basic LP") return basicLP;
  if (name === "Heavy Light Medium (HLM)") return;
  if (name === "Four-day Split (Upper/Lower)") return;
  if (name === "Push, Pull, Legs (PPL)") return;
  if (name === "Body Part Split") return;
  if (name === "Arm Specialization") return;
  if (name === "Matt Kroc's Simple Deadlift Program") return;
  if (name === "Old Russian Calisthenics") return;
  // if (name === "") return;
};
