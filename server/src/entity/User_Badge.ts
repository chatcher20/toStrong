import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// Joins users and badges

@Entity()
export class User_Badge {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    badge_id: number

}