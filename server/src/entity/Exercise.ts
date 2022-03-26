import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne, JoinTable } from "typeorm"
import { User_Program } from "../entity/User_Program"
import { User } from "../entity/User"
import { Planned_Workout } from "./Planned_Workout"

@Entity()
export class Exercise {

  @PrimaryGeneratedColumn()       // auto-generated id column
  id: number

  @Column({
    length: 50
  })
  name: string

  @Column()
  description: string

  @Column()
  video_url: string
  
  @ManyToMany(() => User_Program)
    @JoinTable()
    user_programs: User_Program[];

  @ManyToMany(() => User)
    @JoinTable()
    users: User[];

  @OneToOne(() => Planned_Workout, (planned_workout) => planned_workout.exercise) // specify inverse side as a second parameter
  planned_workout: Planned_Workout

}
