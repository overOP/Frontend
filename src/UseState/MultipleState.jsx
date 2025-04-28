import React from 'react'
import { useState } from "react";
const MultipleState = () => {
    const [brand] = useState("Ford");
    const [model] = useState("Mustang");
    const [year] = useState("1964");
    const [color] = useState("red");
  return (
    <div className='flex flex-col justify-center items-center  mt-5 bg-slate-500'>
    <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </div>
  )
}

export default MultipleState
