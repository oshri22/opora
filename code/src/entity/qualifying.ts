import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Qualifying {

    @PrimaryGeneratedColumn()
    qualifyId: number
    
    @Column()
    raceId: number
    
    @Column()
    driverId: number
    
    @Column()
    constructorId: number
    
    @Column()
    number: number
    
    @Column()
    position: number
    
    @Column()
    q1: string
    
    @Column()
    q2: string
    
    @Column()
    q3: string

}