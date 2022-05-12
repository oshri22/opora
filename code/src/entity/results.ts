import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Results {
    
    @PrimaryColumn()
    resultId: number
    
    @Column()
    raceId: number
    
    @Column()
    driverId: number
    
    @Column()
    constructorId: number
    
    @Column({
        type: 'int',
        nullable: true
    })
    number: number
    
    @Column()
    grid: number
    
    @Column({
        type:'text',
        nullable: true
    })
    position: number
    
    @Column({
        type: 'text',
        nullable: true
    })
    positionText: string
    
    @Column({
        type: 'int',
        nullable: true
    })
    positionOrder: number
    
    @Column({
        type: 'text',
        nullable: true
    })
    points: string
    
    @Column()
    laps: string
    
    @Column({
        type: 'text',
        nullable: true
        
    })
    time: string
    
    @Column({
        type: 'text',
        nullable: true
        
    })
    milliseconds: number
    
    @Column({
        type: 'text',
        nullable: true
         
    })
    fastestLap: number
    
    @Column({
        type: 'text',
        nullable: true  
    })
    rank: number
    
    @Column({
        type: 'text',
        nullable: true
    })
    fastestLapTime: string
    
    @Column({
        nullable: true
    })
    fastestLapSpeed: string
    
    @Column({
        type: 'text',
        nullable: true
    })
    statusId: number
        
}