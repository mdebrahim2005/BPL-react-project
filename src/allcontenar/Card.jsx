
import React, { useState } from 'react';
import { FaUser , FaFlag  } from "react-icons/fa"


const Card = ({player, setCoin,coin ,selectedPlayers}) => {
   const [isSelected, setIsSelected] = useState(false);

   const handleplayer =()=>{
         setIsSelected(true);
        setCoin(coin-player.price)
   }
   
    return (
        <div>
                         
                         
                <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
         <img
      src={player.img}
      alt="" />
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
      <button onClick={handleplayer} disabled ={isSelected}
       className="btn  h-9"> {isSelected===true? "selected": "Choose Player"}  </button>
    </div>
  </div>
</div>

            
            
        </div>
    
    );
};

export default Card;