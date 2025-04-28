import React from 'react'
import { useState } from "react";

const SingleObject = () => {
    const [car] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
    
  return (
    <div >
    <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </div>
  )
}

export default SingleObject
