//rafce
import React from 'react'
import Card from './components/card'
import Nav from './components/Nav'

const App = () => {
  return (
    <React.Fragment>
    <div className=' sticky top-0'>
      <Nav/>
    </div>
      <div className=' h-screen w-screen bg-slate-600 flex justify-center gap-8'>
        <Card/>
        <Card/>
      </div>
    </React.Fragment>
  )
}

export default App
