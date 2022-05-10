import { AppDataSource } from "./data-source"
import { Circuits } from "./entity/circuits"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const circuits = new Circuits()

    circuits.alt = 1
    circuits.circuitRef = "a"
    circuits.country = "b"
    circuits.id = 2
    circuits.lat = 3
    circuits.lng = 4
    circuits.location = "c"
    circuits.name = "d"
    circuits.url = "e"


    await AppDataSource.manager.save(circuits)
    console.log("Saved a new user with id: " + circuits.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Circuits)
    console.log("Loaded Circuits: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
