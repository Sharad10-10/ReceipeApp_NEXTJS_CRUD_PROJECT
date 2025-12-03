import { pgTable, varchar, serial, text, timestamp } from "drizzle-orm/pg-core";


export const receipe = pgTable('receipe',{

    id: serial("id").primaryKey(),
    name: varchar("name", {length: 30}).notNull(),
    description : text("description").notNull(),
    subname : varchar("subname", {length: 30}),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow()
    
})