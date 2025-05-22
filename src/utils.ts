import { Client } from 'pg';

export async function getClient() {
 
    const client = new Client({
        host: 'localhost',
        port: Number(process.env.DB_Port) || 5432,
        user: 'postgres',         // change if you're using a different user
        database: 'learning',       // replace with your DB name
        password: '', // replace with your actual password
    });
    await client.connect();
    return client;
}