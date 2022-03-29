import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Joins exercises and users

@Entity()
export class Actual_Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

//   @Column()
//   exercise_id: number;

//   @Column()
//   planned_workout_id: number;

//   @Column()
//   exercise_completion: boolean;

//   @Column("simple-json")
//   exerciseIsComplete: { squat: boolean; bench: boolean; deadlift: boolean; press: boolean; chinups: boolean }

  @Column()
  program_name: string;

  @Column()
  day: number;

  @Column("simple-json")
  exercisesCompleted: object[];

}
