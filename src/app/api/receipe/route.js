import { receipe } from "@/db/schema"
import { db } from "../../../db/db"


// API // to get all the data 
export const GET = async()=> {
    const data = await db.select().from(receipe)
    return Response.json({
        success: true,
        message: "Hello World",
        data
    })
}

// API // to post or insert the data

export const POST = async(request)=> {
    const data = await request.json()
    try {
        await db.insert(receipe).values(data)
        return Response.json({
            success: true,
            message: "Data inserted successfully...",
            data
        }, {status: 201})
    }

    catch(error) {
        return Response.json({
            success: false,
            message: "Failed to insert the data"
        }, {status: 500})
    }
}