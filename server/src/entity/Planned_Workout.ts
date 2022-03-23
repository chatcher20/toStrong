import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { Program } from "../entity/Program"
import { User } from "../entity/User"

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

  @ManyToOne(() => Program, (program) => program.planned_workouts)
    program: Program

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

}
