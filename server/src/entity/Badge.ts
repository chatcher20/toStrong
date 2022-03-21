import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Badge {

  @PrimaryGeneratedColumn()       // auto-generated id column
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  image: string

}
