import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Constructors{

    @PrimaryColumn()
    constructorId: number

    @Column()
    constructorRef: string

    @Column()
    name: string

    @Column()
    nationality: string

    @Column()
    url: string

}