import React from "react";
import Link from "next/link";

const Card = ({receipeData}) => {
  console.log("Data for receipe",receipeData);

  const date = new Date(receipeData.createdAt)
  const formattedDate = date.toLocaleDateString('en-US', {year: "numeric", month: "long", day:"numeric", hour: "2-digit", minute: "2-digit"})


  return (
    <div className="flex flex-col">
     <Link href={`/${receipeData?.id}`}>

         <div
        className="max-w-sm rounded overflow-hidden shadow-lg"
        style={{"fontFamily" : 'Strait, sans-serif'}}
      >
        <img
          className="w-full"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfJ5hSkM1pGC5I_gTNx-Bmpyb0QrwWm-TwiARKclttVPrZrIKfr0bTHyP0afaIHL7zks-AbODA7zAf9LYhKdKVM6s2YXB8jkFl-fWBTmse2y6O68grQjw6tOOMrtdsG1qkVOwRT05R5XVZIoRoJFsn_wUqkrABJwEGZN0Q0OZlLZxis2zkhOH2u1RI_dNd/s518/colobus.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{receipeData?.name}</div>
          <p className="text-gray-700 text-base">
            {receipeData?.description}
          </p>
          <br></br>
         
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {formattedDate}
          </span>
        </div>
      </div>
     
     
     </Link>

      <Link
            href="/1/edit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded text-center"
          >
            Edit
      </Link>
    </div>
  );
};

export default Card;
