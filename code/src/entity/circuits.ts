import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Circuits {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    circuitRef: string

    @Column()
    name: string

    @Column()
    location: string

    @Column()
    country: string

    @Column()
    lat: number

    @Column()
    lng: number

    @Column()
    alt: number

    @Column()
    url: string


}

