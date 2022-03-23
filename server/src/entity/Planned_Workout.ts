import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Program } from "../entity/Program"

@Entity()
export class Planned_Workout {

  @PrimaryGeneratedColumn()       // auto-generated id column
  id: number

  @Column()
  day: number            // day 1 has an assigned exercises of squat, bench, deadlift for example. (An object where the keys are the exercise)

  @Column()
  exercise_order: string

  @ManyToOne(() => Program, (program) => program.planned_workouts)
    program: Program


}
