import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Pit_stops {

    @PrimaryGeneratedColumn()
    raceId: number
    
    @Column()
    driverId: number
    
    @Column()
    stop: number
    
    @Column()
    lap: number
    
    @Column()
    time: string
    
    @Column()
    duration: string
    
    @Column()
    milliseconds: number

}