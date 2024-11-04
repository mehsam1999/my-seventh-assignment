import { toast } from "react-toastify";

const Banner = ({ addCoins }) => {
  const handleClaimCredit = () => {
    addCoins();
    toast.success("Credits have been added to your account!");
  };

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center text-center space-y-6 border-2 rounded-xl mt-4 py-10 bg-black bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.ibb.co.com/SyMcXDC/bg-shadow.png)',
        }}>
        <div className="space-y-2">
          <img src="https://i.ibb.co.com/cCKQby1/banner-main.png" alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <p className="font-normal text-gray-400">Beyond Boundaries Beyond Limits</p>
        </div>
        <div className="border-2 p-1 rounded-xl">
          <button onClick={handleClaimCredit} className="btn font-bold bg-yellow-300 bg-cover bg-no-repeat" style={{
            backgroundImage: 'url(https://i.ibb.co.com/SyMcXDC/bg-shadow.png)'
          }}>Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
