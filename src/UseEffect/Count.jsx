import React from 'react'
import { useState, useEffect } from "react";
const Count = () => {
    const [counting, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    } , []);
    // if we put empty array in useEffect then it will run only once
    // if we put count in useEffect then it will run every time count changes
  return (
    <div className='flex justify-center flex-col items-center bg-green-200 mt-5'>
    <h1 className='text-3xl font-bold text-center'>useEffect</h1>
        return <h1>I've rendered {counting} times!</h1>
    </div>
  )
}

export default Count
