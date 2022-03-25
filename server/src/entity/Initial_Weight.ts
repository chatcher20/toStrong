import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// Joins exercises and user_programs

@Entity()
export class Initial_Weight {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_program_id: number

    @Column()
    exercise_id: number

    @Column()
    weight: number

}
