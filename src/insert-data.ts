import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    // const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    // const userValues = ['john.do11e@gmail2.com', 'hashed_password_here'];

    // let response = await client.query(insertUserText, userValues);
    // const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    // const todoValues = ['Buy groceries', 'Milk, bread, and eggs', response.rows[0].id, false];
    // await client.query(insertTodoText, todoValues);

    // console.log("Entries created!");

    const insertCities = `INSERT INTO cities (name, country, population, area)
        values($1, $2, $3, $4)
        RETURNING *;
    ` 
    const citiesResult = await client.query(insertCities, ["Sao Paulo", "Brazil", 20935000, 3043]);
    console.log("Data Inserted ->", citiesResult.rows)
}



createEntries();