import { use } from 'react';
import React from 'react';
import Card from './Card';


const Player = ({playerpromis,coin, setCoin,selectedPlayers=[]}) => {
  const players= use(playerpromis);

  console.log(players)
    return (
        <> 
       <div className=' container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {
            players?.map((player) => {
                 
               return(
                <Card key={player.id}
                player={player} 
                setCoin ={setCoin}
                coin={coin}
                
                
                />
               )
          
         

})
        }
    
 </div>

        
        </>     
    
    );
};

export default Player;