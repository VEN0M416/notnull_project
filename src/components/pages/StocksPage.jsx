import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Header from '../Header/Header'
import { click } from '@testing-library/user-event/dist/click';

const StocksPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const clickTable = (symbol) => {
    navigate(`/stocks/${symbol}`);
  }


  const stocks = [
    { name: "Apple Inc.", symbol: "AAPL", price: "134.16", change: 0.64, percentChange: 0.48 },
    { name: "Microsoft Corporation", symbol: "MSFT", price: "258.74", change: -0.59, percentChange: -0.23 },
    { name: "Procter & Gamble Co", symbol: "PG", price: "134.35", change: 0.44, percentChange: 0.33 },
    { name: "Amazon.com, Inc.", symbol: "AMZN", price: "3,187.75", change: -20.22, percentChange: -0.63 },
    { name: "Alphabet Inc. Class A", symbol: "GOOGL", price: "2,268.30", change: -6.23, percentChange: -0.27 },
    { name: "Johnson & Johnson", symbol: "JNJ", price: "165.07", change: 0.33, percentChange: 0.20 },
    { name: "Facebook, Inc.", symbol: "FB", price: "314.63", change: -0.53, percentChange: -0.17 },
    { name: "Tesla, Inc.", symbol: "TSLA", price: "747.92", change: -10.00, percentChange: -1.32 },
    { name: "Netflix, Inc.", symbol: "NFLX", price: "590.35", change: 1.31, percentChange: 0.22 },
    { name: "Walt Disney Co", symbol: "DIS", price: "186.81", change: 0.20, percentChange: 0.11 },
  ];

  return (
    <>
      <Header />
      <div className='w-11/12 mx-auto '>

        {/* Список акций */}
        <div className="bg-gradient-to-tr from-white/10 to-white/20 backdrop-blur-md text-white rounded-lg shadow-md p-6">
          
          <div className='relative'>
            <input type="text" value={searchText} 
              onChange={(e)=>setSearchText(e.target.value)} placeholder="Название или тикер"
              className='bg-white p-4 w-full rounded-full text-black focus:outline-none'
            />
          </div>
          
          <h2 className="mt-8 text-xl font-bold mb-4">Акции</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left pb-2">Название</th>
                <th className="text-right pb-2">Цена</th>
                <th className="text-right pb-2 " >Изменение цены</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr onClick={()=>{clickTable(stock.symbol)}} key={stock.symbol} className=" border-t-[1px] border-gray-200 hover:bg-white/10">
                  <td className="py-2 grid grid-rows">
                      <div>{stock.name}</div>
                      <div className='text-sm'>{stock.symbol}</div>
                  </td>
                  <td className="py-2 text-right">{parseFloat(stock.price.replace(/,/g, '')).toFixed(2)} $</td>
                  <td className='py-2 grid grid-rows'>
                    <div className={`text-right ${stock.change >= 0 ? 'text-green-500' : 'text-red-400'}`}>{stock.change.toFixed(2)} $</div>
                    <div className={`text-sm text-right ${stock.percentChange >= 0 ? 'text-green-500' : 'text-red-400'}`}>{stock.percentChange.toFixed(2)}%</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}
export default StocksPage;
