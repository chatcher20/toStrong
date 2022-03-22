import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Planned_Workout {

  @PrimaryGeneratedColumn()       // auto-generated id column
  id: number

  @Column()
  exercise_id: number             // this is a foreign key from Exercise

  @Column()
  name: string

  @Column()
  sets: number

  @Column()
  reps: number

}