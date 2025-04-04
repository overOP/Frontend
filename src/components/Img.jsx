import React from 'react'

const Img = ({Image}) => {
  return (
    <div className='w-32 h-28 bg-stone-300 rounded-2xl shadow-2xl p-5'>
      {Image ? <img src={Image} alt='Image' /> : <p>No image</p>}
    </div>
  )
}

export default Img