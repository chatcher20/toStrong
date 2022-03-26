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
  program_id: number

  @Column()
  exercise_id: number  // join on exercise.name

  @OneToOne(() => Exercise, (exercise) => exercise.name) // specify inverse side as a second parameter
    @JoinColumn()
    exercise: Exercise

  @ManyToOne(() => Program, (program) => program.planned_workouts)
  program: Program

}




/*
SELECT Planned_Workouts.day AS day, Planned_Workouts.exercise_order AS order, Exercises.name as exercise
FROM Planned_Workouts
JOIN Exercises ON Planned_Workouts.exercise_id = Exercises.id
GROUP BY day
ORDER BY order;
*/
