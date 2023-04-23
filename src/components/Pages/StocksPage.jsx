import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../Header/Header'
import { DataStocks } from '../Charts/MainData';

const StocksPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState(""); // текст для поиска акций
  const [stocks, setStocks] = useState(DataStocks); // список акций или облигаций
  const [showStocks, setShowStocks] = useState(true); // вывод акций в дефолте

  const clickTable = (symbol) => { /*  */
    navigate(`/stocks/${symbol}`);
  }

  /* Поиск / сортировка */
  useEffect(() => {
    setStocks(DataStocks.filter((item) =>
      item.name.toLowerCase().indexOf(searchText.toLowerCase()) === 0 || item.ticket.toLowerCase().indexOf(searchText.toLowerCase()) === 0
    ));
  }, [searchText]);

  return (
    <>
      <Header />
      <div className='w-full px-4 pt-10 sm:w-11/12 sm:px-0 mx-auto mt-5'>

        {/* Список акций */}
        <div className="p-2 sm:p-6 bg-gradient-to-tr from-white/10 to-white/20 backdrop-blur-md text-white rounded-lg shadow-md ">

          {/* Поиск */}
          <div className='w-full sm:w-6/12 mt-2 sm:mt-0'>
            <input type="text" value={searchText}
              onChange={(e) => setSearchText(e.target.value)} placeholder="Название или тикер"
              className='bg-white py-2.5 px-5 w-full rounded-full text-black focus:outline-none'
            />
          </div>

          {/* Кнопки  Акции / Облигации */}
          <div className='mt-8 mb-4 space-x-4'>
            <button onClick={() => { setShowStocks(!showStocks) }} className={`hover:text-white ${showStocks ? 'text-xl font-medium' : 'font-light text-gray-300'}`}>Акции</button>
            <button onClick={() => { setShowStocks(!showStocks) }} className={`hover:text-white ${showStocks ? 'font-light text-gray-300' : 'text-xl font-medium'}`}>Облигации</button>
          </div>

          <table className="w-full table-fixed sm:table-auto ">
            <thead className='text-xs sm:text-xl'>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left pb-2">Название</th>
                <th className="text-center pb-2 px-5">График</th>
                <th className="text-center pb-2 px-5">Текущая цена</th>
                <th className="text-right pb-2 " >Изменение цены</th>
              </tr>
            </thead>
            <tbody>{/* Все акции */}
              {stocks.map((stock) => (
                <tr key={stock.ticket} className=" border-t-[1px] border-gray-200 hover:bg-white/10">
                  <td className="py-2">
                    <div>{stock.name}</div>
                    <div className='text-sm font-light'>{stock.ticket}</div>
                  </td>
                  <td>{
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => { clickTable(stock.ticket) }}
                      /* onClick={() => { openModal(); onData(i) }} */
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                      </svg>
                    </div>
                  }</td>
                  <td className="py-2 text-center">{parseFloat(stock.chartPrice.slice(-1)[0].price).toFixed(2)} $</td>
                  <td className='py-2'>
                    <div className={`text-right ${stock.changeOnValue >= 0 ? 'text-green-500' : 'text-red-400'}`}>{stock.changeOnValue.toFixed(2)} $</div>
                    <div className={`text-sm text-right ${stock.changeOnPercent >= 0 ? 'text-green-500' : 'text-red-400'}`}>{stock.changeOnPercent.toFixed(2)}%</div>
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
