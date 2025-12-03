"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

const Delete = ({ id }) => {
    console.log("received id: ", id);

    const router = useRouter();

    const deleteData = async()=> {
        const response = await fetch(`http://localhost:3000/api/receipe/${id}`, {
            method: "DELETE"
        })
        if (!response.ok){
            throw new Error("Error while deleting")
        }
        alert("Data has been deleted successfully...") 
        router.push("./")      
    }

  

  return (
    <div>
        
        <div className='bg-white w-20 rounded-2xl h-10 text-[20px]  cursor-pointer flex items-center justify-center'>
            <button onClick={deleteData} className='cursor-pointer'>Delete</button>
         </div>

    </div>
  )
}

export default Delete