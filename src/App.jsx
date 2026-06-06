import { Suspense, useState } from 'react'
import Navber from './allcontenar/Navber'
import './App.css'
import Banner  from './allcontenar/Banner'
import Player from './allcontenar/Player'

const playerdata = async ()=>{
  const res = await fetch('/Players.json')
  return res.json();
}

function App() {
  const playerpromis = playerdata();

  
  return (
    <>
  
     <Navber/>
     <Banner/>
     <Suspense fallback ={
      <span className="loading loading-dots loading-xl"></span>
     }>
      <Player playerpromis={playerpromis} />
     </Suspense>
     
     
    </>
  )
}

export default App
