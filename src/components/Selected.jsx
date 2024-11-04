
const Selected = ({playerQueue, toggleButton, handleRemove}) => {
    return (
        <div className="container mx-auto pb-52">
            <div>
                <h2 className="text-2xl font-bold">Selected player : ( {playerQueue.length} / 6 )</h2>
            </div>
            <div>
                {
                    playerQueue.map((player, index)=>(
                        <div key={index} className="border-2 p-4 grid grid-cols-1 rounded-xl my-4">
                            <div className="flex flex-row items-center">
                                <div className="w-20 h-20 flex items-center justify-center">
                                    <img src={player.image} className="w-full h-full object-cover rounded-xl" alt="" />
                                </div>
                                <div className="ml-4 flex-grow">
                                    <h2 className="text-xl font-bold">{player.name}</h2>
                                    <p className="text-gray-500">{player.role}</p>
                                    <p className="text-gray-800">Price: ${player.bidding_price}</p>
                                </div>
                                <div onClick={() => handleRemove(player.player_id)} className="w-12 h-12 flex justify-end items-end">
                                    <img className="w-full h-full" src="https://i.ibb.co.com/LdTWTLg/download.png" alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => toggleButton(true)} className="btn font-bold text-gray-800 bg-yellow-300 mt-2">Add More Player</button>
        </div>
    );
};

export default Selected;