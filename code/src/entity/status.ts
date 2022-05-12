import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Status { 

    @PrimaryColumn()
    statusId: number

    @Column()
    status: string

}