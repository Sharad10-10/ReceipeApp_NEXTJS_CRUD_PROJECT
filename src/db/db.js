import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres"


const connectionString = process.env.DB_URL

export const connection = postgres(connectionString);

export const db = drizzle(connection)



