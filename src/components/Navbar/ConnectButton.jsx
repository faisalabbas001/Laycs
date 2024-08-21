import { useWeb3Modal } from '@web3modal/wagmi/react'; // Import useWeb3Modal if available
import { FaWallet } from 'react-icons/fa'; // Import FaWallet if you haven't already

export default function ConnectButton() {
  const { open } = useWeb3Modal(); // Assuming useWeb3Modal is available

  const handleConnectClick = () => {
    open(); // Open the WalletConnect modal
  };

  return (
    <div className="flex-shrink-0">
      <button 
        onClick={handleConnectClick}
        className="flex items-center justify-center bg-black text-white font-bold py-2 px-4 sm:text-sm rounded transition duration-300 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
      >
        <FaWallet className="mr-2" />
        Connect Wallet
      </button>
    </div>
  );
}
