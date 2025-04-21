import React from 'react'
import { useState, useEffect } from "react";

const Counterr = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  return (
    <div className='flex justify-center flex-col items-center bg-slate-600 text-white'>
            <p>Count: {count}</p>
      <button className='bg-slate-400 border border-black rounded-lg w-8' onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  )
}

export default Counterr
