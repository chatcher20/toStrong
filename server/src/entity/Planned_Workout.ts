import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { Program } from "../entity/Program"
import { Exercise } from "../entity/Exercise"

@Entity()
export class Planned_Workout {

  @PrimaryGeneratedColumn()       // auto-generated id column
  id: number

  @Column()
  day: number            

  @Column()
  exercise_order: number

  @ManyToOne(() => Program, (program) => program.planned_workouts)
  program: Program

  @Column()
  exercise_id: number     // this is a foreign key from exercise

  @ManyToMany(() => Exercise)
  @JoinTable()
  exercises: Exercise[]

}

// A planned_workout can have multiple exercises, and each exercise can belong to multiple planned_workouts.

// @JoinTable() is required for @ManyToMany relations. You must put @JoinTable on one (owning) side of relation.