import * as dotenv from "dotenv"
dotenv.config()

const MYSQL_HOST = process.env.MYSQL_HOST || "localhost"
const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
const MYSQL_PORT =  +process.env.MYSQL_PORT
const MYSQL_DATABASE = process.env.MYSQL_DATABASE

export const MYSQL = {
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    port: MYSQL_PORT,
    data_base: MYSQL_DATABASE
}
