import React, { useState } from 'react';

const items = [
  { src: 'https://rango.vip/tokens/ALL/OSMO.png', symbol: 'OSMO', name: 'OSMOSIS' },
  { src: 'https://rango.vip/tokens/ALL/ION.png', symbol: 'ION', name: 'OSMOSIS' },
  { src: 'https://rango.vip/tokens/ALL/IBCX.png', symbol: 'IBCX', name: 'OSMOSIS' },
  { src: 'https://rango.vip/tokens/ALL/STIBCX.png', symbol: 'STIBCX', name: 'OSMOSIS' },
  { src: 'https://rango.vip/tokens/ALL/USDT.E.png', symbol: 'USDT', name: 'OSMOSIS' },
];

function ScrollableList() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full overflow-y-auto outline-none relative bg-white shadow-md rounded-md">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M14.707 13.293a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 1 1 1.414-1.414l2.5 2.5z" clipRule="evenodd" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search token"
          value={searchTerm}
          onChange={handleSearch}
          className="pl-10 pr-4 py-2 w-72 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
        />
      </div>
      <ul className="box-border pt-0 mt-0">
        {filteredItems.map((item, index) => (
          <li key={index} className="w-full overflow-hidden h-15 flex items-center border-b p-2" tabIndex={index}>
            <div className="pr-1.5">
              <img className="w-10 h-10" src={item.src} alt={item.symbol} />
            </div>
            <div>
              <div className="font-medium text-gray-900">{item.symbol}</div>
              <div className="text-gray-500">{item.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScrollableList;
