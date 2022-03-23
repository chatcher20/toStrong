import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Program } from "../entity/Program"
import { Exercise } from "../entity/Exercise"

@Entity()
export class Planned_Workout {

  @PrimaryGeneratedColumn()       // auto-generated id column
  id: number

  @Column()
  day: string

  @Column()
  exercise_order: string

  @ManyToOne(() => Program, (program) => program.planned_workouts)
    program: Program


}
