import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    password_confirmation: string

    @Column()
    weight: number

    @Column()
    height: number

    @Column()
    avatar: string

    @Column()
    about_me: string

    @Column()
    weight_change: number

}
