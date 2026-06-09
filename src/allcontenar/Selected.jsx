import React from 'react';
import { FaUser } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Selected = ({ selectedplayers, setselectedplayers, setselecte,coin,setCoin }) => {
    console.log(selectedplayers, "selectedplayers");
     
    const handeldelet = (playeres) => {
          console.log(playeres, "player");
          const filterplayer = selectedplayers.filter(selectedplayeres => selectedplayeres.name !== playeres.name);
          console.log(filterplayer);
          setselectedplayers(filterplayer);
          setCoin(coin+ playeres.price)
    };

    return (
        <div>
            <div className='space-y-6'>
              
                {selectedplayers.length === 0 ? (
                    <div className="text-center mt-10">
                        <h2 className="text-xl font-bold text-gray-400">No players selected yet!</h2>
                    </div>
                ) : (
                    selectedplayers.map((playeres, index) => {
                        return (
                            <div key={index} className='flex items-center gap-6 justify-between rounded-2xl border-2 border-red-400 py-10'>
                                <div className='flex items-center gap-2 pl-5'>
                                    <img src={playeres.img} alt="" className='h-[70px] w-auto'/>
                                    <div>
                                        <h1 className='flex items-center gap-2 font-bold text-2xl'> 
                                            <FaUser /> {playeres.name}
                                        </h1>
                                        <p className='text-gray-400'> {playeres.batStyle}</p>
                                    </div>
                                </div>
                                <button 
                                    className='btn text-red-500' 
                                    onClick={() => handeldelet(playeres)}
                                >
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        );
                    }) 
                )}
            </div>

            <div className="mt-8">
                <button 
                    onClick={() => setselecte("Available")} 
                    className="btn bg-[#E7FE29] text-black font-bold px-5 py-3 rounded-xl border border-black shadow-sm"
                >
                    Add More Player
                </button>
            </div>
        </div>
    );
};

export default Selected;