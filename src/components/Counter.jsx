import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const Add = () => {
        setCount(count + 1)
        if (count === 10) {
            setCount(0)
        }
    }
    const Sub = () => {
        setCount(count - 1)
        if (count === -10) {
            setCount(0)
        }
    }
    const Reset = () => {
        setCount(0)
    }

    const Previous = () => {
        // setCount(count - 1)
        setCount((prevCount) => prevCount - 1)
        if (count === -10) {
            setCount(0)
        }
    }

  return (
    <>
    <div className='flex justify-center gap-8'>
    <button onClick={Sub} className='border border-black rounded-lg bg-red-400 '>Sub</button>
      <button onClick={Add} className='border border-black rounded-lg bg-blue-400'>Add</button>
    </div>
    <p className='lg:ml-[51rem] ml-56 flex justify-center h-10 w-11  text-2xl text-white border border-white rounded-lg'>{count}</p>
    <div className='flex justify-center gap-8'>
    <button onClick={Reset} className=' border border-black rounded-lg bg-purple-700'>Reset</button>
    <button onClick={Previous} className='border border-black rounded-lg bg-green-400'>Prev</button>
    </div>
    </>
  )
}

export default Counter
