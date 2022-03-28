import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Program } from "./Program"
import { Badge } from "./Badge"

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

    @Column({nullable: true})
    password_confirmation: string

    @Column()
    weight: number

    @Column()
    height_feet: number

    @Column()
    height_inches: number

    @Column({nullable: true})
    avatar: string

    @Column({nullable: true})
    about_me: string

    @Column()
    weight_change: string    // example: "bulk" or "cut"

    @ManyToMany(() => Program)
    @JoinTable()
    programs: Program[];

    @ManyToMany(() => Badge)
    @JoinTable()
    badges: Badge[];

}

