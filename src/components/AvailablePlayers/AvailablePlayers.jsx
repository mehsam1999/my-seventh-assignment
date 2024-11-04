
const AvailablePlayers = ({ isActive, toggleButton, playerQueue }) => {
    return (
      <div className="flex items-center justify-between container mx-auto mt-10 px-4 lg:px-0">
        <h2 className="text-xl font-bold">
          {isActive ? "Available Players" : ""}
        </h2>
        <div className="flex">
          <button
            onClick={() => toggleButton(true)}
            className={`btn rounded-r ${isActive ? "bg-yellow-300" : "bg-gray-200"}`}
          >
            Available
          </button>
          <button
            onClick={() => toggleButton(false)}
            className={`btn rounded-l ${!isActive ? "bg-yellow-300" : "bg-gray-200"}`}
          >
            Selected ({playerQueue.length})
          </button>
        </div>
      </div>
    );
  };
  
  export default AvailablePlayers;