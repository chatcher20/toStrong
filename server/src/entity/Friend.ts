import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Friend {

  @PrimaryGeneratedColumn()       // auto-generated id column
  id: number

  @Column()
  user_id: number             // this is a foreign key from user

  // Need a second user_id to match two users as "friends" ?


}