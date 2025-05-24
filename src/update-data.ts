import { getClient } from "./utils";

async function updateCity() {
    const client = await getClient();
    
    // const updateTodoText = 'UPDATE todos SET done = $1 WHERE id = $2';
    // await client.query(updateTodoText, [true, todoId]);
    
    // console.log(`Todo with ID ${todoId} updated to done!`);

    const updateCityQuery = `UPDATE cities SET population = 39505000 WHERE name = 'Tokyo' RETURNING *`
    const result = await client.query(updateCityQuery);

    console.log('Query Executed -> ', result.rows[0])
}

// const todoIdToUpdate = 1;
updateCity();
