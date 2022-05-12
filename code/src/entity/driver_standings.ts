import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Driver_standings {

    @PrimaryColumn()
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