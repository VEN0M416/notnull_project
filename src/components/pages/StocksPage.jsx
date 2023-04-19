import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../Header/Header'
import { DataShares } from '../charts/MainData';

const StocksPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [stocks, setStocks] = useState(DataShares);

  const clickTable = (symbol) => {
    navigate(`/stocks/${symbol}`);
  }

  /* Поиск / сортировка */
  useEffect(()=>{
    setStocks(DataShares.filter((item)=>
      item.name.toLowerCase().indexOf(searchText.toLowerCase()) === 0 || item.symbol.toLowerCase().indexOf(searchText.toLowerCase()) === 0
    ));
  },[searchText]);

  return (
    <>
      <Header />
      <div className='w-11/12 mx-auto '>

        {/* Список акций */}
        <div className="bg-gradient-to-tr from-white/10 to-white/20 backdrop-blur-md text-white rounded-lg shadow-md p-6">
          
          <div className='w-6/12'>
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
            <tbody>{/* Все акции */}
              {stocks.map((stock) => (
                <tr onClick={()=>{clickTable(stock.symbol)}} key={stock.symbol} className=" border-t-[1px] border-gray-200 hover:bg-white/10">
                  <td className="py-2 grid grid-rows">
                      <div>{stock.name}</div>
                      <div className='text-sm font-light'>{stock.symbol}</div>
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
