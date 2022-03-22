import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Exercise } from "./entity/Exercise"
import { Program } from "./entity/Program"
import { Badge } from "./entity/Badge"
import { Planned_Workout } from "./entity/Planned_Workout"
import { Friend } from "./entity/Friend"


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.username = "Freddy"
    user.email = "Dino"
    user.password = "hello"
    user.password_confirmation = "hello"
    user.weight = 80
    user.height = 180
    user.avatar = "trex"
    user.about_me = "I have short arms."
    user.weight_change = 5
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

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

    console.log("Inserting a new program into the database...")
    const program = new Program()
    program.planned_workout_id = "this is the foreign key planned_workout_id"
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

    console.log("Inserting a new planned workout into the database...")
    const planned_workout = new Planned_Workout()
    planned_workout.exercise_id = 47
    planned_workout.name = "Day 16"
    planned_workout.sets = 3
    planned_workout.reps = 5
    await AppDataSource.manager.save(planned_workout)
    console.log("Saved a new planned_workout with id: " + planned_workout.id)
    console.log("Loading planned workouts from the database...")
    const planned_workouts = await AppDataSource.manager.find(Planned_Workout)
    console.log("Loaded planned workouts: ", planned_workouts)

    console.log("Inserting a new friend into the database...")
    const friend = new Friend()
    friend.user_id = 347
    await AppDataSource.manager.save(friend)
    console.log("Saved a new friend with id: " + friend.id)
    console.log("Loading friends from the database...")
    const friends = await AppDataSource.manager.find(Friend)
    console.log("Loaded friends: ", friends)





}).catch(error => console.log(error))