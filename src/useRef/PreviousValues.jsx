import React from 'react'
import { useState, useEffect, useRef } from "react";

const PreviousValues = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  return (
    <div>
    <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        className="border-2 border-gray-300 p-2 rounded-md mb-4"
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </div>
  )
}

export default PreviousValues
