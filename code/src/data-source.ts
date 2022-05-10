import "reflect-metadata"
import { MYSQL } from "./config"

import { DataSource } from "typeorm"
import { Circuits } from "./entity/circuits"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: MYSQL.host,
    port: MYSQL.port,
    username: MYSQL.user,
    password: MYSQL.password,
    database: MYSQL.data_base,
    synchronize: true,
    logging: false,
    entities: [Circuits],
    migrations: [],
    subscribers: [],
})
