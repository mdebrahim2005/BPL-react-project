
import React, { useState } from 'react';
import { FaUser , FaFlag  } from "react-icons/fa"
import { toast } from 'react-toastify';




const Card = ({player, setCoin,coin ,selectedPlayers, selectedplayers,setselectedplayers}) => {
  const isAlreadySelected = selectedplayers.some(p => p.name === player.name);


   const handleplayer =()=>{
    if (isAlreadySelected) {
           toast(`${player.name} already selected!`);
           return;
       }

       let newcoin=coin-player.price
         if(newcoin>=0){
   setCoin(coin-player.price)
      setselectedplayers([...selectedplayers, player]);
     
        toast(`${player.name} this player is select`)
         }   
         else{
            toast.error("your coin is low")
            return;
         }  

     
 

       
   }
   
    return (
        <div>
                         
                         
                <div className="card w-full max-w-sm mx-auto bg-base-100  shadow-sm">
          <figure>
         <img
      src={player.img}
      alt=""  className='h-80' w-full/>
     </figure>
        <div className="card-body ">
            <div className='flex items-center  gap-1' > 
                
                      <FaUser className='text-2xl' />
                
              
                 <h2 className="card-title mt-2 ">{player.name}</h2>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2 '>
                    <FaFlag />
                    <p className=' text-gray-500'>{player.country}</p>
                </div>
                <div className=''>
                    <button className="btn btn-xs">All-Rounder</button>
                </div>
            </div>
             <div className="divider"></div>
            
            <p className=' font-bold text-xl flex justify-between'>Rating:
                 <span className='text-gray-400'>{player.rating}</span>  </p>
            <p className=' font-bold text-base flex justify-between'>{player.batStyle}
                 <span className='text-gray-400'>{player.batStyle}</span>  </p>

      <div className="card-actions ">
          <p className='text-base font-bold '>price:${player.price}</p>
      <button onClick={handleplayer} disabled ={isAlreadySelected}
       className={`btn h-9 ${isAlreadySelected ? "bg-gray-400 text-white" : "bg-[#E7FE29] text-black hover:bg-[#d4eb25"}`}>
        {isAlreadySelected ? "Selected" : "Choose Player"}  </button>
    </div>
  </div>
</div>

            
            
        </div>
    
    );
};

export default Card;