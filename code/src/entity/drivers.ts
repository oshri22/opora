import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Drivers{ 
    @PrimaryColumn()
    driverId: number

    @Column()
    driverRef: string

    @Column({
        type: 'int',
        nullable: true
        
    })
    number: number

    @Column({
        type: 'text',
        nullable: true
        
    })
    code: string

    @Column({
        type: 'text',
        nullable: true
        
    })
    forename: string

    @Column({
        type: 'text',
        nullable: true
        
    })
    surname: string

    @Column({
        type: 'text',
        nullable: true
        
    })
    dob: string

    @Column({
        type: 'text',
        nullable: true
        
    })
    nationality: string

    @Column({
        type: 'text',
        nullable: true
        
    })
    url: string
}