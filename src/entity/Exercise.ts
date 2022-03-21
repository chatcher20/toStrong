import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

}
