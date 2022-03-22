import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm"
import { Planned_Workout } from "../entity/Planned_Workout"

@Entity()
export class Program {

  @PrimaryGeneratedColumn()       // auto-generated id column
  id: number

  @Column()
  planned_workout_id: string     // this is a foreign key from planned workout

  @Column()
  name: string

  @Column()
  duration: number

  @Column()
  description: string

  @Column()
  modality: string

  @Column()
  equipment_type: string

  @OneToMany(() => Planned_Workout, (planned_workout) => planned_workout.program)      // note: we will create program property in the Planned_Workout class
    planned_workouts: Planned_Workout

}

