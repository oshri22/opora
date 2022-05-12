import {Entity, Column, PrimaryColumn} from "typeorm";


@Entity()
export class Constructor_results {

    @PrimaryColumn()
    constructorResultsId: number

    @Column()
    raceId: number

    @Column()
    constructorId: number

    @Column()
    points: string

    @Column({
        type: 'text',
        nullable: true
    })
    status: string

}