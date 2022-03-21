import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

}
