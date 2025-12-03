import React, { cache } from 'react'
import Card from './compnents/Card'

const Page = async () => {


  const fetchReceipe = async ()=> {
    

    try{
      const response = await fetch("http://localhost:3000/api/receipe"
      )
      if(!response.ok) {
        throw new Error("Failed to fetch data")
      }

     return response.json()
    }

    catch(error) {
      console.log(error);
    }

  }

  const {data} = await fetchReceipe()
  console.log(data);

  return (
    <div className='flex gap-8 justify-center flex-wrap mt-16'>
      {
        data.map((receipeData)=> {
          return (
            <Card key={receipeData.id} receipeData={receipeData} />
          )
        })
      }
      
    </div>
  )
}

export default Page