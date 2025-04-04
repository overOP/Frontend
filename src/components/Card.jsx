import React from 'react'
//destructuring
const Card = ({same,das}) => {
  return (
    <div>

    <div  className=' w-32 h-28 bg-stone-300 rounded-2xl shadow-2xl p-5'>
    <h1 className=' flex justify-center text-2xl text-blue-500'>{same}</h1>
    <p className=' flex justify-center text-2xl text-blue-500'>{das ? das : "no dasc" }</p>
    </div>
    </div>
  )
}

export default Card
