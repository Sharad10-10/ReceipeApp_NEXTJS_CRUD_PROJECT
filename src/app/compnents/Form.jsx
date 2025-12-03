"use client"
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const Form = ( {buttonText, initialData = null , id = null} ) => {


    const pathName = usePathname()
    const router = useRouter();

    const isEditMode = pathName.includes("/edit") || id !== null

     const [formData, setFormData] = useState({
            name: initialData?.name || "",
            subname: initialData?.subname || "",
            description: initialData?.description || ""
        })

    const handleInput= (e)=> {

        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

     const handleSubmit = async(e)=> {
        e.preventDefault()

        try {

            if(isEditMode) {
                const response = await fetch(`http://localhost:3000/api/receipe/${id}`,
                    {
                        method : "PUT",
                        headers: {
                            "CONTENT-Type" : "application/json"
                        },
                        body: JSON.stringify(formData)
                    }
                )
                if(!response.ok) {
                    throw new Error("Failed to update post")
                }
                router.push(`/${id}`)
            }
            else 
                {
                const response = await fetch("http://localhost:3000/api/receipe", {
                    method: "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(formData)
                })
                if(!response.ok) {
                    throw new Error("Failed to create post")
                }
                router.push(`/`)
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    

  return (
    <div>

        <div className="bg-white border-4 rounded-lg shadow relative m-10">

    <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">
            {buttonText}
        </h3>
    </div>

    <div className="p-6 space-y-6">
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                    <input onChange={handleInput} type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder='Name'  required="">
                    </input>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="subname" className="text-sm font-medium text-gray-900 block mb-2">Subname</label>
                    <input onChange={handleInput} type="text" name="subname" id="subname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder='SubName' required="">
                    </input>
                </div>
               
        
                <div className="col-span-full">
                    <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                    <textarea onChange={handleInput} id="description" name='description' rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description"></textarea>
                </div>

                <div className="p-6 border-t border-gray-200 rounded-b">
                    <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer" type="submit">{buttonText}</button>
                </div>
            </div>
                
        </form>
    </div>

    

</div>



    </div>
  )
}

export default Form



