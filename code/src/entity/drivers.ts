import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Drivers{ 
    @PrimaryGeneratedColumn()
    driverId: number

    @Column()
    driverRef: string

    @Column()
    number: number

    @Column()
    code: string

    @Column()
    forename: string

    @Column()
    surname: string

    @Column()
    dob: string

    @Column()
    nationality: string

    @Column()
    url: string
}