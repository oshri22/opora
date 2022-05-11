import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Constructor_results {

    @PrimaryGeneratedColumn()
    constructorResultsId: number

    @Column()
    raceId: number

    @Column()
    constructorId: number

    @Column()
    points: string

}