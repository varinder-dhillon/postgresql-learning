import { getClient } from "./utils";

async function deleteCity() {
    const client = await getClient();
    
    // const deleteTodoText = 'DELETE FROM todos WHERE id = $1';
    // await client.query(deleteTodoText, [todoId]);
    
    // console.log(`Todo with ID ${todoId} deleted!`);
    const deleteCityQuery = `DELETE FROM cities WHERE name = 'Sao Paulo' RETURNING *`;
    const result = await client.query(deleteCityQuery);

    console.log("Deleted City -> ", result.rows[0]);
    
}

// const todoIdToDelete = 1;
deleteCity();
