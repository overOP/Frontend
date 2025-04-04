//rafce
import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import Color from './components/Colorr'
import Img from './components/img'

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

    <div className=' sticky top-0'>
      <Nav/>
    </div>

    <h1 className=' flex justify-center'>Text</h1>
      <div className=' h-screen w-screen bg-slate-600 grid grid-rows-4 grid-cols-2 place-items-center gap-8'>
        <Card same = {Card1} das = {das1}/>
        <Card same = {Card2}/>
        <Card same = {Card3}/>
        <Card same = {Card4} das = {das4}/>
      </div> 

      <h1 className=' flex justify-center'>Color</h1>
       <div className=' h-screen w-screen bg-slate-600 grid grid-rows-4 grid-cols-2 place-items-center gap-8'>
       <Color className = " bg-orange-400"/>
       <Color/>
       <Color/>
       <Color className = " bg-red-500"/>
       </div>

       <h1 className=' flex justify-center'>Image</h1>
       <div className=' h-screen w-screen bg-slate-600 grid grid-rows-4 grid-cols-2 place-items-center gap-8'>
       <Img Image={image}/>
       <Img/>
       <Img/>
       <Img Image={img}/>
       </div>
    </React.Fragment>
  )
}

export default App
