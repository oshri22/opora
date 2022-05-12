import { AppDataSource } from "./data-source"
import { readdir, createReadStream } from "fs"
import "readline"
import { createInterface, cursorTo, moveCursor } from "readline"


//TODO(CHANGE TO .ENV)
const csv_folder = "/home/oshri/Documents/opera/OneDrive_1_8-22-2021/csv"


const transfer_csvs = () => {
    readdir(csv_folder, (err, files) => {
        if (err) 
            return 

        files.forEach( async file => {
            const file_stream = createReadStream(`${csv_folder}/${file}`)            
            let counter = 0
            const rl = createInterface( {
                input: file_stream,
                crlfDelay: Infinity
            })  


            rl.on('line', (line) => {
                if (!isNaN(Number(line.split(",")[0]))) {

                    AppDataSource.manager.query(`
                        REPLACE INTO ${file.split(".")[0]} VALUES
                        (${line.trim().replaceAll("\\N", 'NULL')})
                    `)    
                    counter++;
                    
                }
            })

        })
    })
}



AppDataSource.initialize().then(async () => {

    //AppDataSource.manager.query("CREATE database opera;")
    transfer_csvs()


    // console.log("Inserting a new user into the database...")
    // const circuits = new Circuits()

    // circuits.alt = 1
    // circuits.circuitRef = "a"
    // circuits.country = "b"
    // circuits.id = 2
    // circuits.lat = 3
    // circuits.lng = 4
    // circuits.location = "c"
    // circuits.name = "d"
    // circuits.url = "e"


    // await AppDataSource.manager.save(circuits)
    // console.log("Saved a new user with id: " + circuits.id)
 
    // console.log("Loading users from the database...")


    // const users = await AppDataSource.manager.find(Circuits)
    // console.log("Loaded Circuits: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

console.log("done")
