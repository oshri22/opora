import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Races {

    @PrimaryColumn()
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
    
    @Column({
        type: 'text',
        nullable: true
        
    })
    time: string
    
    @Column({
        type: 'text',
        nullable: true
        
    })
    url: string

}