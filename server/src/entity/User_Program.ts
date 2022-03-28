import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// Joins users and programs

@Entity()
export class User_Program {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    program_id: number

    // @Column()
    // start_date: string

    @Column('date', { nullable: false, default: () => 'NOW()' })  
    start_date: Date

    @Column('date', { nullable: false, default: () => 'now()::DATE + 84' })
    end_date: Date

    

}
