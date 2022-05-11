import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Constructor_standings {
    
    @PrimaryGeneratedColumn()
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