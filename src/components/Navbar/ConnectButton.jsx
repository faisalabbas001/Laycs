import { useWeb3Modal } from '@web3modal/wagmi/react'; 
import { useAccount } from 'wagmi';
export default function ConnectButton() {
  const { open } = useWeb3Modal(); 
  const { address, isConnected } = useAccount(); 
  return (
    <div className="flex-shrink-0">
      {isConnected ? (
        <div
          onClick={() => open()} 
          className="flex items-center cursor-pointer bg-black text-white font-bold py-2 px-4 sm:text-sm rounded transition duration-300 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"
        >
          
          {`${address.slice(0, 6)}...${address.slice(-4)}`} 
        </div>
      ) : (
        <button
          onClick={() => open()}
          className="flex items-center justify-center bg-black text-white font-bold py-2 px-4 sm:text-sm rounded transition duration-300 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
        >
         
          Connect Wallet
        </button>
      )}
    </div>
  );
}
