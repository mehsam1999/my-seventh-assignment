import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Players from "./components/Players";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Footer from "./components/Footer";
import Selected from "./components/Selected";

const App = () => {
  
  const [coins, setCoins] = useState(0);
  const addCoins = () => {
    setCoins(coins + 6000000);
  };

  const [isActive, setIsActive] = useState(true);
  const toggleButton = (available) => {
    setIsActive(available);
  };

  const[playerQueue, setPlayerQueue] = useState([])
  const addPlayerToQueue = player =>{
    if (coins === 0 || coins < player.bidding_price) {
      toast.error("Not enough money to buy this. Claim some credits!");
      return;
    }

    if (playerQueue.length >= 6) {
      toast.error("You can only add up to 6 players!");
      return;
    }
    const isExist = playerQueue.find(previousPlayer => previousPlayer.player_id === player.player_id)
    if(!isExist){
      setPlayerQueue([...playerQueue,player])
      setCoins(coins - player.bidding_price)
      toast.success(`Congrats! ${player.name} is now in your squad`)
    }
    else{
      toast.error("Player has already been selected!!!")
    }
  }

  const [removePlayer, setRemovePlayer] = useState([])
  const handleRemove = id =>{
    const deletedPlayer = playerQueue.find(player => player.player_id === id)

    const updatedQueue = playerQueue.filter(player => player.player_id !== id)
    setPlayerQueue(updatedQueue) 
    setRemovePlayer([...removePlayer, deletedPlayer])
    toast.warning(`${deletedPlayer.name} has been removed`);
  }

  return (
    <div className="font-sora">
        <ToastContainer position="top-center"></ToastContainer>
        <div className="sticky top-0 z-10 backdrop-blur-lg bg-base-50 bg-opacity-80">
          <Header coins={coins}></Header>
        </div>
        <Banner addCoins={addCoins}></Banner>
        <AvailablePlayers isActive={isActive} toggleButton={toggleButton} playerQueue={playerQueue}></AvailablePlayers>
        <div className="container mx-auto mt-4 px-4 lg:px-0">
          {isActive && <Players addPlayerToQueue={addPlayerToQueue}></Players>}
        </div>
        <div className="px-4 lg:px-0">
          {!isActive && <Selected playerQueue={playerQueue} toggleButton={toggleButton} handleRemove= {handleRemove}></Selected>}
        </div>
        <Footer></Footer>
    </div>  
  );
};

export default App;