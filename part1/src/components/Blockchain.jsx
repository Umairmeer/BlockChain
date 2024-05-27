import React from 'react'
import ETHERIUM from '../images/ETH.svg'
import COSMO from '../images/COSMOS.svg'
import OSMOSIS from '../images/Osmo.svg'
import bsc from '../images/BSC.svg'
import ARBITRIUM from '../images/arbit.svg'
import POLYGON from '../images/poly.svg'
import ZK from '../images/zkSync.svg'
import StarkNet from '../images/star.svg'
import OPTISM from '../images/op.svg'
import AWAX from '../images/awax.svg'
import { FaSearch } from 'react-icons/fa';


const Blockchain = () => {
    return (
        <>
        <div>
            <div className='font-bold pl-5'>Select Blockchain</div>
            <div className="flex space-x-2 p-4 ">
                <div className="bg-gray-50 w-9 h-9 flex justify-center hover:border-blue-600 items-center rounded-sm">All</div>
                <div className="bg-gray-100 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={ETHERIUM} className="w-6" alt="Ethereum" />
                </div>
                <div className="bg-gray-50 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={COSMO} className="w-6" alt="Cosmo" />
                </div>
                <div className="bg-gray-50 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={OSMOSIS} className="w-6" alt="Osmosis" />
                </div>
                <div className="bg-gray-50 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={bsc} className="w-6" alt="BSC" />
                </div>
                <div className="bg-gray-50 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={ARBITRIUM} className="w-6" alt="Arbitrium" />
                </div>
            </div>
            {/* SECOND ROW */}
            <div className="flex space-x-2 p-4 ">
                <div className="bg-gray-100 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={POLYGON} className="w-6" alt="Ethereum" />
                </div>
                <div className="bg-gray-50 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={ZK} className="w-6" alt="Cosmo" />
                </div>
                <div className="bg-gray-50 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={StarkNet} className="w-6" alt="Osmosis" />
                </div>
                <div className="bg-gray-50 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={OPTISM} className="w-6" alt="BSC" />
                </div>
                <div className="bg-gray-50 w-9 h-9 flex justify-center items-center rounded-sm">
                    <img src={AWAX} className="w-6" alt="Arbitrium" />
                </div>
                <div className="bg-gray-50 text-blue-400 w-9 h-9 flex justify-center text-sm items-center rounded-sm">More 52+</div>
            </div>
        </div>

        {/* <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch className="text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Search token"
          
          className="pl-10 pr-4 py-2 w-72 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
        />
      </div>     */}

        </>
    )
}

export default Blockchain
