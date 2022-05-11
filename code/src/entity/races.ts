import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Races {

    @PrimaryGeneratedColumn()
    raceId: number
    
    @Column()
    year: number
    
    @Column()
    round: number
    
    @Column()
    circuitId: number
    
    @Column()
    name: string
    
    @Column()
    date: string
    
    @Column()
    time: string
    
    @Column()
    url: string

}