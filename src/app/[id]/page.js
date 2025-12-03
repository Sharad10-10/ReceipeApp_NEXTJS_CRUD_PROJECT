import React from 'react'

const page = async ({ params }) => {

  const {id} = await params;
  console.log(id);

   const fetchData = async()=> {
    try {

    const response = await fetch(`http://localhost:3000/api/receipe/${id}`)
    if(!response.ok) {
       throw new Error("Failed to fetch data")
    }
    return response.json()
   
  }


  catch (error){
    console.log(error);
    return null;
  }
   }

   const {data} = await fetchData()
   console.log(data[0].name);
   const cleanedData = data[0]
   console.log(cleanedData);

   const date = new Date(cleanedData.createdAt)
   const formattedDate = date.toLocaleDateString('en-US', {year: "numeric", month: "long", day:"numeric", hour: "2-digit", minute: "2-digit"})

   
 
  

  
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
                </div>
               
            </div>
            <div className="md:flex-1 px-4 flex flex-col gap-10">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{cleanedData?.name}</h2>
                     <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {cleanedData?.subname}
                    </p>
                </div>
                
               
               
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {cleanedData?.description}
                    </p>
                </div>

                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Created At:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {formattedDate}
                    </p>
                </div>
            </div>
        </div>
        <div className='flex gap-10 text-black'>
            <div className='bg-white w-20 rounded-2xl h-10 text-[20px] cursor-pointer flex items-center justify-center'>
                <button className='cursor-pointer'>Edit</button>
            </div>
            <div  className='bg-white w-20 rounded-2xl h-10 text-[20px]  cursor-pointer flex items-center justify-center'>
                <button className='cursor-pointer'>Delete</button>
            </div>
        </div> 
    </div>
</div>
    
    
    </>
  )
}

export default page