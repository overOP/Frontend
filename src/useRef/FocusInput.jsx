import React from 'react'
import { useRef } from "react";

const FocusInput = () => {
    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.focus();
    };
  
  return (
    <div className='flex flex-col items-center justify-center bg-purple-200 mt-5'>
    <h1>
        Focus Input
    </h1>
    <input className='border-2 border-gray-300 p-2 rounded-md mb-4' type="text" ref={inputElement} />
    <button className='border-2 border-gray-300 p-2 rounded-md mb-4' onClick={focusInput}>Focus Input</button>

    </div>
  )
}

export default FocusInput
