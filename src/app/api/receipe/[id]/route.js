import { receipe } from "../../../../db/schema.js"
import { db } from "../../../../db/db.js"
import { eq } from "drizzle-orm";
 



// API // to get data by ID

export const GET = async(request, {params})=> {
    
    const {id} = await params
    console.log(id);

    
   
  try {
      const data = await db.select().from(receipe).where(eq(receipe.id, Number(id)))
    if (data.length == 0) {
        return Response.json({
            success: true,
            message: "No data found"
        }, {status: 404})
    }
    return Response.json({
        success: true,
        message: "Data fetched successfully...",
        data
    },{status: 201})
  }

  catch (error) {
    return Response.json({
        success: false,
        message: "Failed to retrieve data",
        error
    }, {status: 500})
  }

}

// API // to delete the data

export const DELETE = async (request, {params})=> {
    const {id}= await params

    try{
         const data = await db.select().from(receipe).where(eq(receipe.id, Number(id)))
            if(data.length == 0) {
            return Response.json({
                success: true,
                message: "No data found to delete"
            }, {status: 404})
        }

        const deleteData = await db.delete(receipe).where(eq(receipe.id,Number(id))).returning()
        return Response.json({
            success: true,
            message: "Data deleted successfully...",
            deleteData
        }, {status: 201})
        

    }
    catch (error) {
        return Response.json({
            success:false,
            message: "Failed to delete the data",
            error
        }, {status: 500})
    }
}


// API // to update the data 

export const PUT= async (request, {params})=> {

    const {id} = await params;
    const body = await request.json()
    console.log(body.name);

    try {

        const data = await db.select().from(receipe).where(eq(receipe.id, Number(id)))
            if(data.length == 0) {
            return Response.json({
                success: true,
                message: "No data found to update"
            }, {status: 404})
        }

       const updateData = await db.update(receipe).set({
        name: body.name,
        description: body.description,
        subname: body.subname,
        updatedAt: new Date()
       })
       .where(eq(receipe.id, Number(id))).returning()

       return Response.json({
        success: true,
        message: "Data updated successfully",
        updateData
       }, {status: 201})

    }

    catch (error) {
        return Response.json({
            success: false,
            message: "Failed to update the data",
            error
        }, {status: 500})
    }


}