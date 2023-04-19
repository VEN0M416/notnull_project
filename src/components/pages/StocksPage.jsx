import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../Header/Header'
import { DataStocks } from '../charts/MainData';

const StocksPage = () => {
  const navigate = useNavigate(); 
  const [searchText, setSearchText] = useState(""); // текст для поиска акций
  const [stocks, setStocks] = useState(DataStocks); // список акций или облигаций
  const [showStocks, setShowStocks] = useState(true); // вывод акций в дефолте

  const clickTable = (symbol) => { /*  */
    navigate(`/stocks/${symbol}`);
  }

  /* Поиск / сортировка */
  useEffect(()=>{
    setStocks(DataStocks.filter((item)=>
      item.name.toLowerCase().indexOf(searchText.toLowerCase()) === 0 || item.ticket.toLowerCase().indexOf(searchText.toLowerCase()) === 0
    ));
  },[searchText]);

  return (
    <>
      <Header />
      <div className='w-11/12 mx-auto '>

        {/* Список акций */}
        <div className="bg-gradient-to-tr from-white/10 to-white/20 backdrop-blur-md text-white rounded-lg shadow-md p-6">
          
          {/* Поиск */}
          <div className='w-6/12'>
            <input type="text" value={searchText} 
              onChange={(e)=>setSearchText(e.target.value)} placeholder="Название или тикер"
              className='bg-white p-4 w-full rounded-full text-black focus:outline-none'
            />
          </div>
          
          {/* Кнопки  Акции / Облигации */}
          <div className='mt-8 mb-4 space-x-4'>
            <button onClick={()=>{setShowStocks(!showStocks)}} className={`hover:text-white ${showStocks ? 'text-xl font-medium' : 'font-light text-gray-300'}`}>Акции</button>
            <button onClick={()=>{setShowStocks(!showStocks)}} className={`hover:text-white ${showStocks ? 'font-light text-gray-300' : 'text-xl font-medium'}`}>Облигации</button>
          </div>

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
                <tr onClick={()=>{clickTable(stock.ticket)}} key={stock.ticket} className=" border-t-[1px] border-gray-200 hover:bg-white/10">
                  <td className="py-2 grid grid-rows">
                      <div>{stock.name}</div>
                      <div className='text-sm font-light'>{stock.ticket}</div>
                  </td>
                  <td className="py-2 text-right">{parseFloat(stock.chartPrice.slice(-1)[0].price).toFixed(2)} $</td>
                  <td className='py-2 grid grid-rows'>
                    <div className={`text-right ${stock.changeOnValue >= 0 ? 'text-green-500' : 'text-red-400'}`}>{stock.changeOnValue.toFixed(2)} $</div>
                    <div className={`text-sm text-right ${stock.percentChange >= 0 ? 'text-green-500' : 'text-red-400'}`}>{stock.changeOnPercent.toFixed(2)}%</div>
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
