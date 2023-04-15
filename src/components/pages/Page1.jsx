import Header from '../Header/Header'
import { useState, Fragment } from "react";
import { Data1 } from '../charts/Data1';
import LineChart from '../charts/LineChart';
import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTimeoutFn } from 'react-use';

const Page4 = () => {
  const [chartData, setChartData] = useState({
    labels: Data1[0].chartPrice.map((data) => data.date),
    datasets: [{
      label: "Сбербанк",
      data: Data1[0].chartPrice.map((data) => data.price),
      /* tension: 0.4, */
    } 
    ]
  });
  const lastData = Data1[0].chartPrice.slice(-1)[0];

  const thStyle = 'py-3 px-10';
  const trStyle = 'py-1 px-10';
  /*   const [showChart1, setShowChart1] = useState(false);
    const [showChart2, setShowChart2] = useState(false); */

  /* -------------------------------------------------------------------- */
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  let [crossPointer, setCrosPtr] = useState(false);

  let [, , resetIsShowing] = useTimeoutFn(() => crossPointer ? setIsOpen(true) : setIsOpen(false), 500)

  return (
    <>
      <Header />
      <div className='w-11/12 mx-auto text-white'>

        <p className='text-2xl pt-[50px]'>Page1</p>

        <div className="w-full h-[50vh] rounded-xl p-2
        bg-gradient-to-tr from-[#141E30]/80 to-[#243B55]/80 bg-transparent backdrop-blur-sm">

          <div className='grid grid-cols-12 py-2'> {/* header */}
            <div className='col-span-1'></div>
            <div className='text-left col-span-7'>Название</div>
            <div className='text-center col-span-2'>Цена</div>
            <div className='text-center col-span-2'>Изменение за сутки</div>
          </div>

          <div className='flex flex-col'>

            <div className='flex flex-row bg-white rounded-lg text-black p-2'>
              <div className='relative w-10 h-10 rounded-full overflow-hidden mx-auto'>
                <img className='' src="https://invest-brands.cdn-tinkoff.ru/sber3x640.png"/>
              </div>
            
              <div className=''>
                zdfgzgagz
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
export default Page4;
