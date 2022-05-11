import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Constructors{

    @PrimaryGeneratedColumn()
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