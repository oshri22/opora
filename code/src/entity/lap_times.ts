import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Lap_times {

    @PrimaryGeneratedColumn()
    raceId: number
    
    @Column()
    driverId: number
    
    @Column()
    lap: number
    
    @Column()
    position: number
    
    @Column()
    time: string
    
    @Column()
    milliseconds: number

}