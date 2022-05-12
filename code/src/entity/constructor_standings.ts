import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Constructor_standings {
    
    @PrimaryColumn()
    constructorStandingsId: number

    @Column()
    raceId: number

    @Column()
    constructorId: number
    
    @Column()
    points: number

    @Column()
    position: number

    @Column()
    positionText: string

    @Column()
    wins: number

}