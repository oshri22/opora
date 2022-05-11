import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Results {
    
    @PrimaryGeneratedColumn()
    resultId: number
    
    @Column()
    raceId: number
    
    @Column()
    driverId: number
    
    @Column()
    constructorId: number
    
    @Column()
    number: number
    
    @Column()
    grid: number
    
    @Column()
    position: number
    
    @Column()
    positionText: string
    
    @Column()
    positionOrder: number
    
    @Column()
    points: number
    
    @Column()
    laps: number
    
    @Column()
    time: string
    
    @Column()
    milliseconds: number
    
    @Column()
    fastestLap: number
    
    @Column()
    rank: number
    
    @Column()
    fastestLapTime: string
    
    @Column()
    fastestLapSpeed: string
    
    @Column()
    statusId: number
        
}