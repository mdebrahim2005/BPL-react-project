import React, { use } from 'react';

const Player = ({playerpromis}) => {
  const players= use(playerpromis);
  console.log(players)
    return (
        <>
         <div className=' container mx-auto mt-10'>
            <div className=''>

            </div>
            
        </div>
        
        </>
       
    );
};

export default Player;