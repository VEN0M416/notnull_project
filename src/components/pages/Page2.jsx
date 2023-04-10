import Header from '../Header/Header'
import { useState } from "react";
import { Data } from '../charts/Data';
import LineChart from '../charts/LineChart';


const Page2 = () =>{
  const [chartData, setChartData] = useState({
    labels: Data.map((data)=>data.year),
    datasets: [{
        label: "users gained",
        data: Data.map((data)=>data.userGain),
        tension: 0.4,
        /* fill: 1 */
      },{
        label: "users losted",
        data: Data.map((data)=>data.userLost),
        tension: 0.4,
        /* fill: true */
      }
    ]
  });

  return (
    <>
      <Header/>
      <div className='container mx-auto text-white'>

        <p className='text-2xl pt-[50px]'>Page2</p>

        <div className='bg-white my-5 p-5 rounded-lg h-[50%] w-[50%]'>
          <LineChart chartData={chartData} />
        </div>

      </div>
    </>
  );
}
export default Page2;
