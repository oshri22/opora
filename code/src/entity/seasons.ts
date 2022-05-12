import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Seasons {

    @PrimaryColumn()
    year: number

    @Column()
    url: string

}