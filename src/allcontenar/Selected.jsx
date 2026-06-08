import React from 'react';

const Selected = ({ selectedPlayers, setselecte}) => {
    return (
        <div>
           <div className="space-y-4">
            {selectedPlayers.length === 0 ? (
                <div className="text-center mt-10">
                    <h2 className="text-xl font-bold text-gray-400">No players selected yet!</h2>
                </div>
            ) : (
                selectedPlayers.map((player) => (
                    <div key={player.id} className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-4">
                            <img src={player.img} alt={player.name} className="w-16 h-16 object-cover rounded-xl bg-gray-100" />
                            <div>
                                <h3 className="text-lg font-bold">{player.name}</h3>
                                <p className="text-gray-500 text-sm">{player.role}</p>
                                <p className="text-black text-sm font-semibold">${player.price}</p>
                            </div>
                        </div>
                        {/* ডিলিট বা রিমুভ করার বাটন */}
                        <button 
                            onClick={() => handleRemovePlayer(player.id)}
                            className="btn btn-sm btn-ghost text-red-500 font-bold hover:bg-red-50"
                        >
                            ❌ Remove
                        </button>
                    </div>
                ))
            )}

            {/* পেজের নিচে 'Add More Player' বাটন (ফিগমা অনুযায়ী) */}
            <div className="pt-4">
                <button 
                    onClick={() => setselecte("Available")} 
                    className="btn bg-[#E7FE29] text-black font-bold rounded-xl border-none hover:bg-[#d4ea24]"
                >
                    Add More Player
                </button>
            </div>
        </div>
        </div>
    );
};

export default Selected;