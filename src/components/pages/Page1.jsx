import Header from '../Header/Header'
import { useState, Fragment } from "react";
import { Data1 } from '../charts/MainData';
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

          <div className='flex flex-col mx-4 gap-8'> {/* body */}

            <div className='flex justify-between px-4 md:px-8
            bg-white rounded-lg text-black p-2 cursor-pointer shadow-lg shadow-gray-900'>
              <div className=''>
                <div className='text-lg font-bold'>Сбер Банк</div>
                <div className=' text-gray-600'>SBER</div>
              </div>

              <div className='flex gap-4 md:gap-8 lg:gap-16 xl:gap-24'>
                <div className='flex items-center'>
                  <div className='text-center text-xl'>218,89 ₽</div>
                </div>
                <div>
                  <div className='text-green-500 font-medium text-right text-xl'>+5,43 ₽</div>
                  <div className='text-green-500 text-right'>2,47%</div>
                </div>
              </div>
            </div>

            <div className='flex justify-between px-4 md:px-8
            bg-white rounded-lg text-black p-2 cursor-pointer shadow-lg shadow-gray-900'>
              <div className=''>
                <div className='text-lg font-bold'>Газпром</div>
                <div className=' text-gray-600'>GAZP</div>
              </div>

              <div className='flex gap-4 md:gap-8 lg:gap-16 xl:gap-24'>
                <div className='flex items-center'>
                  <div className='text-center text-xl'>184,04 ₽</div>
                </div>
                <div>
                  <div className='text-red-500 font-medium text-right text-xl'>-15,34 ₽</div>
                  <div className='text-red-500 text-right'>8,15%</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Page4;
