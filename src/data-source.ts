import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Exercise } from "./entity/Exercise"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "labber",
    password: "labber",
    database: "tostrong",
    synchronize: true,
    logging: false,
    entities: [User, Exercise],
    migrations: [],
    subscribers: [],
})
