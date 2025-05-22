import { getClient } from "./utils";

async function createTable() {
    try {
        const client = await getClient();
    
        const createCitiesQuery = `
            CREATE TABLE cities (
                name VARCHAR(55),
                country VARCHAR(55),
                population INTEGER,
                area INTEGER
            )
        `

        const queryResult = await client.query(createCitiesQuery)

        console.log("Query Executed Successfully! ->", queryResult);
    } catch (error:any) {
        console.log("Error message -> "+error.message)
    }
   

}

createTable();