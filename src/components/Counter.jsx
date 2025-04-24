import CounTer from "../hook/Counterrr"

const Counter = () => {
    const {Add, Sub, Reset, Previous, count} = CounTer()

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
