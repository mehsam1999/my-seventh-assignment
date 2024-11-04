import { useEffect, useState } from "react";

const Players = ({ addPlayerToQueue }) => { 
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('./players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2 pb-52">
            {players.map(player => (
                <div key={player.player_id} className="card bg-base-100 border-2">
                    <figure className="w-full h-64 p-4">
                        <img className="h-full w-full rounded-xl object-cover"
                            src={player.image}
                            alt="Player" />
                    </figure>
                    <div className="px-4">
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-user text-2xl"></i>
                            <h2 className="card-title">{player.name}</h2>
                        </div>
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-flag"></i>
                                <p>{player.country}</p>
                            </div>
                            <div>
                                <button className="btn">{player.role}</button>
                            </div>
                        </div>
                        <div className="py-2 space-y-2">
                            <div className="flex items-center justify-between">
                                <h2 className="font-bold">Rating</h2>
                                <p>{player.rating}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="font-bold">{player.batting_type}</p>
                                <p className="font-bold text-gray-400">{player.bowling_type}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-bold">Price: ${player.bidding_price}</p>
                                <p onClick={() => addPlayerToQueue(player)} className="btn font-bold text-gray-800 hover:bg-yellow-300">Choose Player</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Players;