import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable } from "typeorm"
import { User_Program } from "../entity/User_Program"
import { User } from "../entity/User"
import { Planned_Workout } from "../entity/Planned_Workout"

@Entity()
export class Exercise {

  @PrimaryGeneratedColumn()       // auto-generated id column
  id: number

  @Column()
  planned_workout_id: number     // this is a foreign key from planned workout

  @Column({
    length: 50
  })
  name: string

  @Column()
  description: string

  @Column()
  video_url: string

  @OneToMany(() => Planned_Workout, (planned_workout) => planned_workout.program)      // note: we will create program property in the Planned_Workout class
    planned_workouts: Planned_Workout
  
  @ManyToMany(() => User_Program)
    @JoinTable()
    user_programs: User_Program[];

  @ManyToMany(() => User)
    @JoinTable()
    users: User[];

}
