import { connection, db } from './src/db/db.js'
import { migrate } from 'drizzle-orm/postgres-js/migrator';


(
    
async ()=> {

    await migrate(db, {migrationsFolder: './drizzle'})
   await connection.end()
    

}
)()

// this auto calls the function without giving any name basically a anonymous function which calls itself automatically when the file loads.