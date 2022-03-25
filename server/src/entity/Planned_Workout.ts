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

  @ManyToOne(() => Program, (program) => program.planned_workouts)
  program: Program

  // @Column()
  // exercise_id: number     // this is a foreign key from exercise

  @ManyToOne(() => Exercise)
  @JoinColumn()
  exercise: Exercise

}



// @ManyToOne(type => Category)
// @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
// category: Category;