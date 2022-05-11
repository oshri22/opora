import "reflect-metadata"
import { MYSQL } from "./config"
import { DataSource } from "typeorm"
import { Circuits } from "./entity/circuits"
import { Constructor_results } from "./entity/constructor_results"
import { Constructor_standings } from "./entity/constructor_standings"
import { Constructors } from "./entity/constructors"
import { Driver_standings } from "./entity/driver_standings"
import { Drivers } from "./entity/drivers"
import { Lap_times } from "./entity/lap_times"
import { Pit_stops } from "./entity/pit_stops"
import { Qualifying } from "./entity/qualifying"
import { Races } from "./entity/races"
import { Results } from "./entity/results"
import { Seasons } from "./entity/seasons"
import { Status } from "./entity/status"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: MYSQL.host,
    port: MYSQL.port,
    username: MYSQL.user,
    password: MYSQL.password,
    database: MYSQL.data_base,
    synchronize: true,
    logging: false,
    entities: [Circuits, Constructor_results, Constructor_standings, Constructors, Driver_standings, Drivers, Lap_times, Pit_stops, Qualifying, Races, Results, Seasons, Status],
    migrations: [],
    subscribers: [],
})
