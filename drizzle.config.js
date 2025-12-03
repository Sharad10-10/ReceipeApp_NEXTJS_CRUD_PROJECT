import { defineConfig } from "drizzle-kit";

// migrations file


export default defineConfig({
    schema : './src/db/schema.js',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DB_URL
    }
})




