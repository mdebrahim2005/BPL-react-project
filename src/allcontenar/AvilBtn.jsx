import React, { useState } from 'react'; 
import Selected from './Selected';
import Player from './player';

const AvilBtn = ({playerpromis,selectedPlayers,setCoin,}) => {
    const[selecte,setselecte]=useState("Available")
    return (
        <div> 
            <div className='container mx-auto mt-10 flex justify-between  '>
                 <h1 className='text-2xl font-bold'>
                    {selecte === "Available" ? "Available Players" :
                     `Selected Players (${selectedPlayers.length})`}

                 </h1>

                <div className=''>
                    <button onClick={()=> setselecte("Available")}
                     className={`btn btn-soft  ${selecte==="Available"?"bg-[#E7FE29]" :"bg-red-500"}
                    rounded-l-xl font-semibold`}>Available</button>
                    <button  onClick={()=> setselecte("Selected")}
                     className={`btn btn-soft  ${selecte==="Selected"?"bg-[#E7FE29]" :"bg-red-500"}
                    rounded-l-xl font-semibold`}>Selected (0)</button>

                </div>
            </div>
         
            <div className="container mx-auto mt-6 px-4">
                {
                   selecte === "Available" ? (
                        <Player playerpromis={playerpromis}
                          setCoin={setCoin}
                          coin={coin}
                         selectedPlayers={selectedPlayers}
                       
                          />
      
                    ):( <Selected  selectedPlayers={selectedPlayers}
                    />)
                }

            </div>

         
      


            
        </div>
    );
};

export default AvilBtn;