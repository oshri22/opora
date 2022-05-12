import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Qualifying {

    @PrimaryColumn()
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
    
    @Column({
        type: 'text',
        nullable: true
        
    })
    q1: string
    
    @Column({
        type: 'text',
        nullable: true
        
    })
    q2: string
    
    @Column({
        type: 'text',
        nullable: true
        
    })
    q3: string

}