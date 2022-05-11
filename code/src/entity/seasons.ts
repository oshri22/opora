import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Seasons {

    @PrimaryGeneratedColumn()
    year: number

    @Column()
    url: string

}