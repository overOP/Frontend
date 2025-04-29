import React from 'react'
import { useState, useEffect, useRef } from "react";

const TrackApp = () => {
    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });
  return (
    <div className='flex flex-col items-center justify-center bg-purple-200 mt-5'>
    <h1 className='text-3xl font-bold text-center'>useRef</h1>
    <h1>
        Track App
    </h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        className="border-2 border-gray-300 p-2 rounded-md mb-4"
      />
      <h1 className='text-2xl'>Render Count: {count.current}</h1>
    </div>
  )
}

export default TrackApp
