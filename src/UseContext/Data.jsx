import React, { useContext } from 'react'
import { DataContext } from '../UseContext/Home'

const Data = () => {
    const me = useContext(DataContext)
    //it is used to access the data from the context
  return (
    <>
    <h1>{me?.data}</h1>
    <h1>{me?.data1}</h1>
    </>
  )
}

export default Data
