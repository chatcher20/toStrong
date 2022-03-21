import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Exercise } from "./entity/Exercise"
import { Program } from "./entity/Program"

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


}).catch(error => console.log(error))