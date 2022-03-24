import "reflect-metadata"
import { DataSource } from "typeorm"
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

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "labber",
    password: "labber",
    database: "tostrong",
    synchronize: true,
    logging: true,
    entities: [User, Exercise, Program, Badge, Planned_Workout, Friend, User_Program, Initial_Weight, User_Badge, Actual_Workout],
    migrations: [],
    subscribers: [],
})

// find way to put the seed information currently filling up index.ts into the migrations folder and update the misgrations array inside AppDataSource here on line 24.

// 5432 is the pg database port, express server port is 3000