import { getClient } from "./utils";

// async function getUsers() {
//     const client = await getClient();
    
//     const selectUsersText = 'SELECT * FROM users';
//     const userRes = await client.query(selectUsersText);
    
//     console.log("Users:");
//     for (let user of userRes.rows) {
//         console.log(`ID: ${user.id}, Email: ${user.email}`);
//     }
// }

// async function getUserFromEmail(email: string) {
//     const client = await getClient();
    
//     const selectUserText = 'SELECT * FROM users WHERE email = $1';
//     const userRes = await client.query(selectUserText, [email]);
    
//     console.log("Single User detail:");
//     for (let user of userRes.rows) {
//         console.log(`ID: ${user.id}, Email: ${user.email}`);
//     }
// }

// async function getTodosForUser(userId: number) {
//     const client = await getClient();
    
//     const selectTodosText = 'SELECT * FROM todos WHERE user_id = $1';
//     const todoRes = await client.query(selectTodosText, [userId]);
    
//     console.log(`Todos for User ID ${userId}:`);
//     for (let todo of todoRes.rows) {
//         console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, Done: ${todo.done}`);
//     }
// }

// getUsers();

// getUserFromEmail("john.do11e@gmail2.com")

// const userIdToFetch = 1;
// getTodosForUser(userIdToFetch);

const getCities = async () => {
    const client = await getClient();

    // SELECT name || country FROM cities;

    // SELECT name || ', ' || country FROM cities;

    // SELECT name || ', ' || country AS location FROM cities;

    // SELECT CONCAT(name, country) AS location FROM cities;

    // SELECT CONCAT(name, ', ', country) AS location FROM cities;

    // SELECT
    // CONCAT(UPPER(name), ', ', UPPER(country)) AS location
    // FROM
    // cities;

    // SELECT
    // UPPER(CONCAT(name, ', ', country)) AS location
    // FROM
    // cities;

    // const getCitiesQuery = `SELECT * FROM cities`
    // const getCitiesQuery = `SELECT name, population/area AS population_density FROM cities`;  // Virtual column with Calculations
    // const getCitiesQuery = `SELECT * FROM cities WHERE name <> 'Delhi'`;  // Where with != or <>
    // const getCitiesQuery = `SELECT * FROM cities WHERE name <> 'Delhi' AND name <> 'Tokyo'`;  // Where with AND/OR
    // const getCitiesQuery = `SELECT * FROM cities WHERE name NOT IN ('Delhi', 'Tokyo')`;  // Where with IN/NOT IN
    const getCitiesQuery = `SELECT name, population/area AS population_density FROM cities WHERE population/area BETWEEN 4000 AND 5000`;  // Where with BETWEEN and calculations

    const result = await client.query(getCitiesQuery);
    console.log("result ->", result.rows);

}

getCities();