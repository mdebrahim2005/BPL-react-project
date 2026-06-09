import { Suspense, use, useState } from 'react'
import Navber from './allcontenar/Navber'
import './App.css'
import Banner  from './allcontenar/Banner'
import Player from './allcontenar/Player'
import AvilBtn from './allcontenar/AvilBtn'
import { ToastContainer } from 'react-toastify'


const playerdata = async ()=>{
  const res = await fetch('/Players.json')
  return res.json();
}

function App() {
  const playerpromis = playerdata();
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // const handlechoose =(player)=>{
      
  //      const isselct = selectedPlayers.find(p => p.id ===player.id);

  //      if(isselct){
  //      return alert("Player already selected!");
  //      }
  //      else{
  //       setSelectedPlayers([...selectedPlayers,player])
  //      }


  // }

  const [coin , setCoin]=useState(1000000)

  
  return (
    <>
  
     <Navber coin={coin}
     />
     <Banner/>
     <Suspense fallback ={
      <span className="loading loading-dots  loading-xl"></span>
     }>
  
      <AvilBtn playerpromis={playerpromis} 
      setCoin={setCoin}
      coin={coin}
      selectedPlayers={selectedPlayers}
      //  handlechoose={handlechoose}
      />
     
     </Suspense>

       <ToastContainer />
     
     
    </>
  )
}

export default App
