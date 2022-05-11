import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Driver_standings {

    @PrimaryGeneratedColumn()
    driverStandingsId: number

    @Column()
    raceId: number
    
    @Column()
    driverId: number

    @Column()
    points: number

    @Column()
    position: number

    @Column()
    positionText: string

    @Column()
    wins: number

}