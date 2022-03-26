import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, ManyToMany, JoinColumn } from "typeorm"
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

  @Column()
  exercise_name: string

  @Column()
  program_name: string

  // @Column()
  // program_id: number

  // @Column()
  // exercise_name: string

  @OneToOne(() => Exercise, (exercise) => exercise.name) // specify inverse side as a second parameter
  @JoinColumn()
  exercise: Exercise

  @ManyToOne(() => Program, (program) => program.planned_workouts)
  program: Program

};