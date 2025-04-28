import React from 'react'
import { useState } from "react";

const UpdateState = () => {
    const [color, setColor] = useState("red");
  return (
    <div className='flex flex-col justify-center items-center '>
    <h1 className='text-3xl font-bold text-center'>UseState</h1>
    <h1 className='text-3xl font-bold text-center'>My favorite color is {color}!</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </div>
  )
}

export default UpdateState
