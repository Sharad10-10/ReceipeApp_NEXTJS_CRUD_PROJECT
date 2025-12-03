import React from 'react'
import Form from '@/app/compnents/Form'


const page = async ({params}) => {

  const {id} = await params

  const response =await fetch(`http://localhost:3000/api/receipe/${id}`)
  const {data} = await response.json()
  console.log("Here is response:", data[0]);
  const postData = data[0]
  
  



  return (
    <>

        <Form buttonText = {"Edit a Post"} id={id} initialData={postData}  />
    
    </>
  )
}

export default page