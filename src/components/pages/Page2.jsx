import Header from '../Header/Header'
import { useState } from "react";
import { Data } from '../charts/Data';
import LineChart from '../charts/LineChart';
import React from 'react';


const Page2 = () =>{
  const [chartData, setChartData] = useState({
    labels: Data.map((data)=>data.year),
    datasets: [{
        label: "users gained",
        data: Data.map((data)=>data.userGain),
        tension: 0.4,
      },{
        label: "users losted",
        data: Data.map((data)=>data.userLost),
        tension: 0.4,
      }
    ]
  });
  const lastData = Data.slice(-1)[0];

  const thStyle='py-3 px-10';
  const trStyle='py-1 px-10';
  const [showChart, setShowChart] = useState(false);
  const [showChart1, setShowChart1] = useState(false);
  const [showChart2, setShowChart2] = useState(false);
  
  return (
    <>
      <Header/>
      <div className='container mx-auto text-white'>

        <p className='text-2xl pt-[50px]'>Page2</p>

        <div className='bg-[#035b39] my-5 p-1 w-max rounded-lg text-white relative'>
          <table className='table-auto'>
            <thead className='bg-[#035b39] font-medium '>
              <tr>
                <th className={thStyle}>Id</th>
                <th className={thStyle}>Year</th>
                <th className={thStyle}>User Gain</th>
                <th className={thStyle}>User Lost</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                  className='text-center bg-[#00402f] hover:bg-white/10 cursor-pointer border-2 border-[#035b39]'
                  onClick={()=>setShowChart(!showChart)}
                >
                <td className={trStyle}>{lastData.id}</td>
                <td className={trStyle}>{lastData.year}</td>
                <td className={trStyle}>{lastData.userGain}</td>
                <td className={trStyle}>{lastData.userLost}</td>
              </tr>
              <tr>
                <td colSpan={'4'}>
                  <div className={`w-full bg-white rounded-lg overflow-hidden transition-all duration-500 ${showChart ? ' max-h-96' : 'max-h-0'}`}>
                    <LineChart chartData={chartData} />
                  </div>
                </td>
              </tr>
              <tr 
                  className='text-center bg-[#00402f] hover:bg-white/10 cursor-pointer border-2 border-[#035b39]'
                  onClick={()=>setShowChart1(!showChart1)}
                >
                <td className={trStyle}>{lastData.id}</td>
                <td className={trStyle}>{lastData.year}</td>
                <td className={trStyle}>{lastData.userGain}</td>
                <td className={trStyle}>{lastData.userLost}</td>
              </tr>
              <tr>
                <td colSpan={'4'}>
                  <div className={`w-full bg-white rounded-lg overflow-hidden transition-all duration-500 ${showChart1 ? ' max-h-96' : 'max-h-0'}`}>
                    <LineChart chartData={chartData} />
                  </div>
                </td>
              </tr>
              <tr 
                  className='text-center bg-[#00402f] hover:bg-white/10 cursor-pointer border-2 border-[#035b39]'
                  onClick={()=>setShowChart2(!showChart2)}
                >
                <td className={trStyle}>{lastData.id}</td>
                <td className={trStyle}>{lastData.year}</td>
                <td className={trStyle}>{lastData.userGain}</td>
                <td className={trStyle}>{lastData.userLost}</td>
              </tr>
              <tr>
                <td colSpan={'4'}>
                  <div className={`w-full bg-white rounded-lg overflow-hidden transition-all duration-500 ${showChart2 ? ' max-h-96' : 'max-h-0'}`}>
                    <LineChart chartData={chartData} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>  
      </div>
    </>
  );
}
export default Page2;
