//rafce
import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import Color from './components/Colorr'
import Img from './components/img'
import Counter from './components/counter'
//UseState
import UpdateState from './UseState/UpdateState'
import MultipleState from './UseState/MultipleState'
import SingleObject from './UseState/SingleObject'
//UseContext
import Home from './UseContext/Home'
//UseEffect
import Count from './UseEffect/Count'
import EffectApi from './UseEffect/EffectApi'
import Counterr from './UseEffect/Counterr'
//UseRef
import TrackApp from './useRef/TrackApp'
import FocusInput from './useRef/FocusInput'
import PreviousValues from './useRef/PreviousValues'


const App = () => {
  //title
  const Card1 = "pradeep"
  const Card2 = "Chaudhary"
  const Card3 = "Over"
  const Card4 = "PUBG"
  //description
  const das1 = "me"
  const das4 = "game"

  //image
  const image = "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0IQhVr9DDJCq61QX28zCoiqDrvezBh5ylw&s"
  return (
    <React.Fragment>
<div className='bg-slate-600 '>
    <div className=' sticky top-0'>
      <Nav/>
    </div>

    <h1 className=' flex justify-center text-white'>Text</h1>
      <div className=' h-screen w-screen grid grid-rows-4 grid-cols-2 place-items-center gap-8'>
        <Card same = {Card1} das = {das1}/>
        <Card same = {Card2}/>
        <Card same = {Card3}/>
        <Card same = {Card4} das = {das4}/>
      </div> 

      <h1 className=' flex justify-center text-white'>Color</h1>
       <div className=' h-screen w-screen grid grid-rows-4 grid-cols-2 place-items-center gap-8'>
       <Color className = " bg-orange-500"/>
       <Color/>
       <Color className=" bg-blue-500"/>
       <Color className = "bg-green-500"/>
       </div>

       <h1 className=' flex justify-center text-white'>Image</h1>
       <div className=' h-screen w-screen grid grid-rows-4 grid-cols-2 place-items-center gap-8'>
       <Img Image={image}/>
       <Img/>
       <Img/>
       <Img Image={img}/>
       </div>
       <h1 className=' flex justify-center text-white'>Counter by useState</h1>
       <Counter/>
       </div>
       {/* UseState */}
       <UpdateState/>
       <MultipleState/>
        <SingleObject/>
       {/* UseContext */}
       <Home/>

       {/* UseEffect */}
       <Count/>
       <EffectApi/>
       <Counterr/>
       {/* UseRef */}
       <TrackApp/>
       <FocusInput/>
       <PreviousValues/>
    </React.Fragment>
  )
}

export default App