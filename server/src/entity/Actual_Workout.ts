import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// Joins exercises and users

@Entity()
export class Actual_Workout {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    exercise_id: number

    @Column()
    exercise_completion: boolean

    // @Column()
    // planned_workout_id: number

    // @Column("simple-json")
    // exerciseIsComplete: { squat: boolean; bench: boolean; deadlift: boolean; press: boolean; chinups: boolean }
    
}


