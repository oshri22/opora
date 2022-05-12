import {Entity, Column, PrimaryColumn} from "typeorm";


@Entity()
export class Lap_times {

    @PrimaryColumn()
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