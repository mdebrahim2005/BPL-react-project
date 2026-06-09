import React, { use, useState } from 'react'; 
import Selected from './Selected';
import Player from './player';

const AvilBtn = ({playerpromis,selectedPlayers,setCoin,coin}) => {
    const pla = use(playerpromis)
    console.log(pla)
    const[selecte,setselecte]=useState("Available")
        const [selectedplayers , setselectedplayers] =useState([]);
    return (
        <div> 
            <div className='container mx-auto mt-10 flex justify-between  '>
                 <div className='text-xl md:text-2xl font-bold text-center md:text-left'>
                    {selecte === "Available" ?
                    <h1 className='font-bold text-2xl'>
                        Available Players
                    </h1>  :
                    <h1>
                         Selected Players ({selectedplayers.length}/{pla.length})
                    </h1>
                    }

                 </div>

                <div className=''>
                    <button onClick={()=> setselecte("Available")}
                     className={`btn btn-soft  ${selecte==="Available"?"bg-[#E7FE29]" :"bg-red-500"}
                    rounded-l-xl font-semibold`}>Available</button>
                    <button  onClick={()=> setselecte("Selected")}
                     className={`btn btn-soft  ${selecte==="Selected"?"bg-[#E7FE29]" :"bg-red-500"}
                    rounded-l-xl font-semibold`}>Selected ({selectedplayers.length})</button>

                </div>
            </div>
         
            <div className="container mx-auto mt-6 px-4">
                {
                   selecte === "Available" ? (
                        <Player playerpromis={playerpromis}
                          setCoin={setCoin}
                          coin={coin}
                         selectedPlayers={selectedPlayers}
                         setselectedplayers={setselectedplayers}
                         selectedplayers={selectedplayers}
                       
                          />
      
                    ):( <Selected selectedplayers={selectedplayers} 
                        setselectedplayers={setselectedplayers}
                        setselecte={setselecte}
                         setCoin={setCoin}
                          coin={coin}
                        
                    />)
                }

            </div>

         
      


            
        </div>
    );
};

export default AvilBtn;