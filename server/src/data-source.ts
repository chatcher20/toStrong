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
    migrations: ["src/migration/*.js"],       // indicates that typeorm must load migrations from the given "migration" directory.
    subscribers: [],
})
