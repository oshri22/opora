import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Status { 

    @PrimaryGeneratedColumn()
    statusId: number

    @Column()
    status: string

}