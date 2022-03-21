import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()       // auto-generated id column
    id: number

    @Column({
        length: 50,
    })
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

    @Column({
        length: 250
    })
    about_me: string

    @Column()
    weight_change: number

}
