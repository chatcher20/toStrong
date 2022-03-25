// move these seeds into migrations. You don;t want to seed when you start your server.
// migrations: one side: create the database and tbales,
// the second side seeds data into the tables inside the db
// before you seed data, add in a command to delete what existed there previously. Delete any existing data and then insert new data (but keep the structure)




planned workout:

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinColumn } from "typeorm"
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
  program_id: number

  @Column()
  exercise_id: number  // join on exercise.name

  @OneToOne(() => Exercise, (exercise) => exercise.name) // specify inverse side as a second parameter
    @JoinColumn()
    exercise: Exercise

  @ManyToOne(() => Program, (program) => program.planned_workouts)
  program: Program

  @ManyToOne(() => Exercise)
  @JoinColumn()
  exercise: Exercise

}



// @ManyToOne(type => Category)
// @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
// category: Category;