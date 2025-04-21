import React from 'react'
import Contact from '../UseContext/Contact';
import { createContext } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext();
const Home = () => {
    const data = "pradeep";
    const data1 = "Over";
    // we can send data in object form
     const dataall = {
        data,
        data1
     }
  return (
    <>
    <DataContext.Provider value={ dataall}>
      <h1 className='text-3xl font-bold text-center'>UseContext</h1>
      <div className='flex justify-center items-center'>
        <div className='w-32 bg-stone-300 rounded-2xl shadow-2xl p-5'>
          <p>{data}</p>
        </div>
        <div className='w-32 bg-stone-300 rounded-2xl shadow-2xl p-5'>
          <p>{data1}</p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-11'><Contact/></div>
    </DataContext.Provider>
    </>
  )
}

export default Home
