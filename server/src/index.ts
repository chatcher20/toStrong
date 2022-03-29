// index.ts is our main web application entry point.

import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Exercise } from "./entity/Exercise";
import { Program } from "./entity/Program";
import { Badge } from "./entity/Badge";
import { Planned_Workout } from "./entity/Planned_Workout";
import { Friend } from "./entity/Friend";
import { User_Program } from "./entity/User_Program";
import { Initial_Weight } from "./entity/Initial_Weight";
import { User_Badge } from "./entity/User_Badge";
import { Actual_Workout } from "./entity/Actual_Workout";

import { usersToBeSeeded } from "./migration/usersToBeSeeded.js";
import { exercisesToBeSeeded } from "./migration/exercisesToBeSeeded.js";
import { planned_workoutsToBeSeeded } from "./migration/planned_workoutsToBeSeeded.js";
import { programsToBeSeeded } from "./migration/programsToBeSeeded.js";
import { initial_weightsToBeSeeded } from "./migration/initial_weightsToBeSeeded.js";
import { actual_workoutsToBeSeeded } from "./migration/actual_workoutsToBeSeeded.js";
import { badgesToBeSeeded } from "./migration/badgesToBeSeeded.js";
import { user_badgesToBeSeeded } from "./migration/user_badgesToBeSeeded.js";
import { friendsToBeSeeded } from "./migration/friendsToBeSeeded.js";
import { user_programsToBeSeeded } from "./migration/user_programsToBeSeeded.js";

// create and setup express app
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

AppDataSource.initialize();
// register routes:
// order is:
// user
// exercise
// planned_workout
// program
// initial_weight
// actual_workout
// badge
// user_badge
// friend
// user_program

// login ==> changed from get to post
app.post("/auth/:id/", (req, res) => {
  const { id } = req.params;
  res.cookie("user_id", id);
  console.log("id: ", id); ////////////////////////////////////////
  res.redirect(`/users/${id}`);
});

app.get("/auth/:id/", (req, res) => {
  const { id } = req.params;
  res.cookie("user_id", id);
  console.log("GET id: ", id); ////////////////////////////////////////
  res.redirect(`/users/${id}`);
});

// user
app.get("/users", async function (req: Request, res: Response) {
  const users = await AppDataSource.getRepository(User).find();
  res.json(users);
});

app.get("/users/:id", async function (req: Request, res: Response) {
  console.log("/users/:id");
  const results = await AppDataSource.getRepository(User).findOneBy({
    // id: Number(req.params.id),
    id: Number(req.cookies.id),
  });
  console.log("results: ", results);
  return res.send(results);
});

app.get("/users/:username", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(User).findOneBy({
    username: req.params.username,
  });
  return res.send(results);
});

app.post("/users", async function (req: Request, res: Response) {
  const user = await AppDataSource.getRepository(User).create(req.body);
  const results = await AppDataSource.getRepository(User).save(user);
  return res.send(results);
});

app.put("/users/:username", async function (req: Request, res: Response) {
  const user = await AppDataSource.getRepository(User).findOneBy({
    username: req.params.username,
  });
  AppDataSource.getRepository(User).merge(user, req.body);
  const results = await AppDataSource.getRepository(User).save(user);
  return res.send(results);
});

app.delete("/users/:username", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(User).delete(req.params.id);
  return res.send(results);
});

// exercise
app.get("/exercises", async function (req: Request, res: Response) {
  const exercises = await AppDataSource.getRepository(Exercise).find();
  res.json(exercises);
});

app.get("/exercises/:name", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(Exercise).findOneBy({
    name: req.params.name,
  });
  return res.send(results);
});

app.get("/exercises/:id", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(Exercise).findOneBy({
    id: Number(req.params.id),
  });
  return res.send(results);
});

app.post("/exercises", async function (req: Request, res: Response) {
  const exercise = await AppDataSource.getRepository(Exercise).create(req.body);
  const results = await AppDataSource.getRepository(Exercise).save(exercise);
  return res.send(results);
});

// planned_workout
app.get("/planned_workouts", async function (req: Request, res: Response) {
  const planned_workouts = await AppDataSource.getRepository(
    Planned_Workout
  ).find();
  res.json(planned_workouts);
});

app.get("/planned_workouts/:day", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(Planned_Workout).findOneBy({
    day: Number(req.params.day),
  });
  return res.send(results);
});

app.post("/planned_workouts", async function (req: Request, res: Response) {
  const planned_workout = await AppDataSource.getRepository(
    Planned_Workout
  ).create(req.body);
  const results = await AppDataSource.getRepository(Planned_Workout).save(
    planned_workout
  );
  return res.send(results);
});

// program
app.get("/programs", async function (req: Request, res: Response) {
  const programs = await AppDataSource.getRepository(Program).find();
  res.json(programs);
});

app.get("/programs/:name", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(Program).findOneBy({
    name: req.params.name,
  });
  return res.send(results);
});

app.post("/programs", async function (req: Request, res: Response) {
  const program = await AppDataSource.getRepository(Program).create(req.body);
  const results = await AppDataSource.getRepository(Program).save(program);
  return res.send(results);
});

// initial_weight
app.get("/initial_weights", async function (req: Request, res: Response) {
  const initial_weights = await AppDataSource.getRepository(
    Initial_Weight
  ).find();
  res.json(initial_weights);
});

// app.get("/initial_weights/:user_program_id", async function (req: Request, res: Response) {
//     const results = await AppDataSource.getRepository(Initial_Weight).findOneBy({
//         user_program_id: Number(req.params.user_program_id),
//     })
//     return res.send(results)
// })

// app.post("/initial_weights", async function (req: Request, res: Response) {
//     const initial_weight = await AppDataSource.getRepository(Initial_Weight).create(req.body)
//     const results = await AppDataSource.getRepository(Initial_Weight).save(initial_weight)
//     return res.send(results)
// })

app.post("/initial_weights", async function (req: Request, res: Response) {
  const bodyWithID = { ...req.body, user_id: req.cookies.user_id }; // changed id to user_id
  console.log("req.cookies.id is: ", req.cookies.user_id);
  const initial_weight = await AppDataSource.getRepository(
    Initial_Weight
  ).create(bodyWithID);
  const results = await AppDataSource.getRepository(Initial_Weight).save(
    initial_weight
  );
  return res.send(results);
});

// actual_workout
app.get("/actual_workouts", async function (req: Request, res: Response) {
  const actual_workouts = await AppDataSource.getRepository(
    Actual_Workout
  ).find();
  res.json(actual_workouts);
});

app.get(
  "/actual_workouts/:user_id",
  async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Actual_Workout).findOneBy(
      {
        user_id: Number(req.params.user_id),
      }
    );
    return res.send(results);
  }
);

app.post("/actual_workouts", async function (req: Request, res: Response) {
  const bodyWithID = { ...req.body, user_id: req.cookies.user_id };
  console.log("req.cookies.id is: ", req.cookies.user_id);
  const actual_workout = await AppDataSource.getRepository(
    Actual_Workout
  ).create(bodyWithID);
  const results = await AppDataSource.getRepository(Actual_Workout).save(
    actual_workout
  );
  return res.send(results);
});

// badge
app.get("/badges", async function (req: Request, res: Response) {
  const badges = await AppDataSource.getRepository(Badge).find();
  res.json(badges);
});

app.get("/badges/:id", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(Badge).findOneBy({
    id: Number(req.params.id),
  });
  return res.send(results);
});

app.get("/badges/:name", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(Badge).findOneBy({
    name: req.params.name,
  });
  return res.send(results);
});

app.post("/badges", async function (req: Request, res: Response) {
  const bodyWithID = { ...req.body, user_id: req.cookies.id };
  console.log("req.cookies.id is: ", req.cookies.id);
  const badge = await AppDataSource.getRepository(Badge).create(bodyWithID);
  const results = await AppDataSource.getRepository(Badge).save(badge);
  return res.send(results);
});

// user_badge
app.get("/user_badges", async function (req: Request, res: Response) {
  const user_badges = await AppDataSource.getRepository(User_Badge).find();
  res.json(user_badges);
});

app.get("/user_badges/:badge_id", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(User_Badge).findOneBy({
    badge_id: Number(req.params.badge_id),
  });
  return res.send(results);
});

app.post("/user_badges", async function (req: Request, res: Response) {
  const bodyWithID = { ...req.body, user_id: req.cookies.id };
  console.log("req.cookies.id is: ", req.cookies.id);
  const user_badge = await AppDataSource.getRepository(User_Badge).create(
    bodyWithID
  );
  const results = await AppDataSource.getRepository(User_Badge).save(
    user_badge
  );
  return res.send(results);
});

// friend
app.get("/friends", async function (req: Request, res: Response) {
  const friends = await AppDataSource.getRepository(Friend).find();
  res.json(friends);
});

app.get("/friends/:user_id", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(Friend).findOneBy({
    user_id: Number(req.params.user_id),
  });
  return res.send(results);
});

app.post("/friends", async function (req: Request, res: Response) {
  const bodyWithID = { ...req.body, user_id: req.cookies.id };
  console.log("req.cookies.id is: ", req.cookies.id);
  const friend = await AppDataSource.getRepository(Friend).create(req.body);
  const results = await AppDataSource.getRepository(Friend).save(friend);
  return res.send(results);
});

// user_program
app.get("/user_programs", async function (req: Request, res: Response) {
  const user_programs = await AppDataSource.getRepository(User_Program).find();
  res.json(user_programs);
});

app.get(
  "/user_programs/:user_id",
  async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User_Program).findOneBy({
      user_id: Number(req.params.user_id),
    });
    return res.send(results);
  }
);

app.post("/user_programs", async function (req: Request, res: Response) {
  const bodyWithID = { ...req.body, user_id: req.cookies.id };
  console.log("req.cookies.id is: ", req.cookies.id);
  const user_program = await AppDataSource.getRepository(User_Program).create(
    bodyWithID
  );
  const results = await AppDataSource.getRepository(User_Program).save(
    user_program
  );
  return res.send(results);
});

// start express server
app.listen(3001);
console.log("Express server app is listening on port 3001.");
