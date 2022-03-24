// index.ts is our main web application entry point.

import * as express from "express"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Exercise } from "./entity/Exercise"
import { Program } from "./entity/Program"
import { Badge } from "./entity/Badge"
import { Planned_Workout } from "./entity/Planned_Workout"
import { Friend } from "./entity/Friend"
import { User_Program } from "./entity/User_Program"
import { Initial_Weight } from "./entity/Initial_Weight"
import { User_Badge } from "./entity/User_Badge"
import { Actual_Workout } from "./entity/Actual_Workout"


// move these seeds into migrations. You don;t want to seed when you start your server.
// migrations: one side: create the database and tbales,
// the second side seeds data into the tables inside the db
// before you seed data, add in a command to delete what existed there previously. Delete any existing data and then insert new data (but keep the structure)


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.username = "Freddy"
    user.email = "freddy@hotmail.com"
    user.password = "hello"
    user.password_confirmation = "hello"
    user.weight = 80
    user.height_feet = 5
    user.height_inches = 10
    user.avatar = "trex"
    user.about_me = "I have short arms."
    user.weight_change = "bulk"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Inserting a new user into the database...")
    const user2 = new User()
    user2.username = "Johnny"
    user2.email = "johnny@google.com"
    user2.password = "green"
    user2.password_confirmation = "green"
    user2.weight = 75
    user2.height_feet = 5
    user2.height_inches = 11
    user2.avatar = "stegosaur"
    user2.about_me = "I am not a t-rex."
    user2.weight_change = "cut"
    await AppDataSource.manager.save(user2)
    console.log("Saved a new user with id: " + user2.id)
    console.log("Loading users from the database...")
    const userRecord2 = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", userRecord2)

    console.log("Inserting a new exercise into the database...")
    const exercise = new Exercise()
    exercise.name = "pullups"
    exercise.description = "grab the bar and pull yourself up to build back and arm muscles"
    exercise.video_url = "www.youtube.com"
    await AppDataSource.manager.save(exercise)
    console.log("Saved a new exercise with id: " + exercise.id)
    console.log("Loading exercises from the database...")
    const exercises = await AppDataSource.manager.find(Exercise)
    console.log("Loaded exercises: ", exercises)

    console.log("Inserting a new planned workout into the database...")
    const planned_workout = new Planned_Workout()
    planned_workout.exercise_id = exercise.id
    planned_workout.day = 23
    planned_workout.exercise_order = 3
    await AppDataSource.manager.save(planned_workout)
    console.log("Saved a new planned_workout with id: " + planned_workout.id)
    console.log("Loading planned workouts from the database...")
    const planned_workouts = await AppDataSource.manager.find(Planned_Workout)
    console.log("Loaded planned workouts: ", planned_workouts)
    
    console.log("Inserting a new program into the database...")
    const program = new Program()
    program.planned_workout_id = planned_workout.id
    program.name = "12 weeks to shred"
    program.duration = 12
    program.description = "This is a 12 week program to cut fat."
    program.modality = "barbell-only"
    program.equipment_type = "barbell"
    await AppDataSource.manager.save(program)
    console.log("Saved a new program with id: " + program.id)
    console.log("Loading programs from the database...")
    const programs = await AppDataSource.manager.find(Program)
    console.log("Loaded programs: ", programs)

    console.log("Inserting a new user_program into the database...")
    const user_program = new User_Program()
    user_program.user_id = user.id
    user_program.program_id = program.id
    user_program.start_date = "This is the start date."
    await AppDataSource.manager.save(user_program)
    console.log("Saved a new user_program with id: " + user_program.id)
    console.log("Loading user_programs from the database...")
    const user_programs = await AppDataSource.manager.find(User_Program)
    console.log("Loaded user_programs: ", user_programs)

    console.log("Inserting a new initial_weight into the database...")
    const initial_weight = new Initial_Weight()
    initial_weight.user_program_id = user_program.id
    initial_weight.exercise_id = exercise.id
    initial_weight.weight = 90
    await AppDataSource.manager.save(initial_weight)
    console.log("Saved a new initial_weight with id: " + initial_weight.id)
    console.log("Loading initial_weights from the database...")
    const initial_weights = await AppDataSource.manager.find(Initial_Weight)
    console.log("Loaded initial_weights: ", initial_weights)

    console.log("Inserting a new actual_workout into the database...")
    const actual_workout = new Actual_Workout()
    actual_workout.user_id = user.id
    actual_workout.exercise_id = exercise.id
    actual_workout.exercise_completion = true
    await AppDataSource.manager.save(actual_workout)
    console.log("Saved a new actual_workout with id: " + actual_workout.id)
    console.log("Loading actual_workouts from the database...")
    const actual_workouts = await AppDataSource.manager.find(Actual_Workout)
    console.log("Loaded actual_workouts: ", actual_workouts)

    console.log("Inserting a new badge into the database...")
    const badge = new Badge()
    badge.name = "500lb Deadlift Badge"
    badge.description = "This badge is to signify that you are a beast"
    badge.image = "placeholder for image here"
    await AppDataSource.manager.save(badge)
    console.log("Saved a new badge with id: " + badge.id)
    console.log("Loading badges from the database...")
    const badges = await AppDataSource.manager.find(Badge)
    console.log("Loaded badges: ", badges)

    console.log("Inserting a new user_badge into the database...")
    const user_badge = new User_Badge()
    user_badge.user_id = user.id
    user_badge.badge_id = badge.id
    await AppDataSource.manager.save(user_badge)
    console.log("Saved a new user_badge with id: " + user_badge.id)
    console.log("Loading user_badges from the database...")
    const user_badges = await AppDataSource.manager.find(User_Badge)
    console.log("Loaded user_badges: ", user_badges)

    console.log("Inserting a new friend into the database...")
    const friend = new Friend()
    friend.user_id = user.id
    friend.friend_id = user2.id
    await AppDataSource.manager.save(friend)
    console.log("Saved a new friend with id: " + friend.id)
    console.log("Loading friends from the database...")
    const friends = await AppDataSource.manager.find(Friend)
    console.log("Loaded friends: ", friends)

}).catch(error => console.log(error))


// create and setup express app
const app = express()
app.use(express.json())


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


// user
app.get("/users", async function (req: Request, res: Response) {
    const users = await AppDataSource.getRepository(User).find()
    res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User).findOneBy({
        id: Number(req.params.id),
    })
    return res.send(results)
})

app.get("/users/:username", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User).findOneBy({
        username: req.params.username,
    })
    return res.send(results)
})

app.post("/users", async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(User).create(req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.send(results)
})

app.put("/users/:username", async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(User).findOneBy({
        username: req.params.username,
    })
    AppDataSource.getRepository(User).merge(user, req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.send(results)
})

app.delete("/users/:username", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
})


// exercise
app.get("/exercises", async function (req: Request, res: Response) {
    const exercises = await AppDataSource.getRepository(Exercise).find()
    res.json(exercises)
})

app.get("/exercises/:name", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Exercise).findOneBy({
        name: req.params.name,
    })
    return res.send(results)
})

app.get("/exercises/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Exercise).findOneBy({
        id: Number(req.params.id),
    })
    return res.send(results)
})

app.post("/exercises", async function (req: Request, res: Response) {
    const exercise = await AppDataSource.getRepository(Exercise).create(req.body)
    const results = await AppDataSource.getRepository(Exercise).save(exercise)
    return res.send(results)
})


// planned_workout
app.get("/planned_workouts", async function (req: Request, res: Response) {
    const planned_workouts = await AppDataSource.getRepository(Planned_Workout).find()
    res.json(planned_workouts)
})

app.get("/planned_workouts/:day", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Planned_Workout).findOneBy({
        day: Number(req.params.day),
    })
    return res.send(results)
})

app.post("/planned_workouts", async function (req: Request, res: Response) {
    const planned_workout = await AppDataSource.getRepository(Planned_Workout).create(req.body)
    const results = await AppDataSource.getRepository(Planned_Workout).save(planned_workout)
    return res.send(results)
})


// program
app.get("/programs", async function (req: Request, res: Response) {
    const programs = await AppDataSource.getRepository(Program).find()
    res.json(programs)
})

app.get("/programs/:name", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Program).findOneBy({
        name: req.params.name,
    })
    return res.send(results)
})

app.post("/programs", async function (req: Request, res: Response) {
    const program = await AppDataSource.getRepository(Program).create(req.body)
    const results = await AppDataSource.getRepository(Program).save(program)
    return res.send(results)
})


// initial_weight
app.get("/initial_weights", async function (req: Request, res: Response) {
    const initial_weights = await AppDataSource.getRepository(Initial_Weight).find()
    res.json(initial_weights)
})

app.get("/initial_weights/:user_program_id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Initial_Weight).findOneBy({
        user_program_id: Number(req.params.user_program_id),
    })
    return res.send(results)
})

app.post("/initial_weights", async function (req: Request, res: Response) {
    const initial_weight = await AppDataSource.getRepository(Initial_Weight).create(req.body)
    const results = await AppDataSource.getRepository(Initial_Weight).save(initial_weight)
    return res.send(results)
})


// actual_workout
app.get("/actual_workouts", async function (req: Request, res: Response) {
    const actual_workouts = await AppDataSource.getRepository(Actual_Workout).find()
    res.json(actual_workouts)
})

app.get("/actual_workouts/:user_id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Actual_Workout).findOneBy({
        user_id: Number(req.params.user_id),
    })
    return res.send(results)
})

app.post("/actual_workouts", async function (req: Request, res: Response) {
    const actual_workout = await AppDataSource.getRepository(Actual_Workout).create(req.body)
    const results = await AppDataSource.getRepository(Actual_Workout).save(actual_workout)
    return res.send(results)
})


// badge
app.get("/badges", async function (req: Request, res: Response) {
    const badges = await AppDataSource.getRepository(Badge).find()
    res.json(badges)
})

app.get("/badges/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Badge).findOneBy({
        id: Number(req.params.id),
    })
    return res.send(results)
})

app.get("/badges/:name", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Badge).findOneBy({
        name: req.params.name,
    })
    return res.send(results)
})

app.post("/badges", async function (req: Request, res: Response) {
    const badge = await AppDataSource.getRepository(Badge).create(req.body)
    const results = await AppDataSource.getRepository(Badge).save(badge)
    return res.send(results)
})


// user_badge
app.get("/user_badges", async function (req: Request, res: Response) {
    const user_badges = await AppDataSource.getRepository(User_Badge).find()
    res.json(user_badges)
})

app.get("/user_badges/:badge_id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User_Badge).findOneBy({
        badge_id: Number(req.params.badge_id),
    })
    return res.send(results)
})

app.post("/user_badges", async function (req: Request, res: Response) {
    const user_badge = await AppDataSource.getRepository(User_Badge).create(req.body)
    const results = await AppDataSource.getRepository(User_Badge).save(user_badge)
    return res.send(results)
})


// friend
app.get("/friends", async function (req: Request, res: Response) {
    const friends = await AppDataSource.getRepository(Friend).find()
    res.json(friends)
})

app.get("/friends/:user_id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Friend).findOneBy({
        user_id: Number(req.params.user_id),
    })
    return res.send(results)
})

app.post("/friends", async function (req: Request, res: Response) {
    const friend = await AppDataSource.getRepository(Friend).create(req.body)
    const results = await AppDataSource.getRepository(Friend).save(friend)
    return res.send(results)
})






// start express server
app.listen(3000)
console.log("Express server app is listening on port 3000.")



