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
      <div className='container mx-auto text-white'>

        <p className='text-2xl pt-[50px]'>Page4</p>

        <div className='bg-[#035b39] my-5 p-1 w-max rounded-lg text-white relative'>
          <table className='table-auto'>
            <thead className='bg-[#035b39] font-medium '>
              <tr>
                <th className={thStyle}>Bank</th>
                <th className={thStyle}>CurDate</th>
                <th className={thStyle}>CurValue, ₽</th>
                <th className={thStyle}>changAll, %</th>
                <th className={thStyle}>changAll, ₽</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className='text-center bg-[#00402f] hover:bg-white/10 cursor-pointer border-2 border-[#035b39]'
                onClick={openModal}
              >
                <td className={trStyle}>{Data1[0].name}</td>
                <td className={trStyle}>{lastData.date}</td>
                <td className={trStyle}>{lastData.price}</td>
                <td className={trStyle}>{Data1[0].changeOnRercent}</td>
                <td className={trStyle}>{Data1[0].changeOnValue}</td>
              </tr>
            </tbody>
          </table>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-1 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className=" w-full max-w-5xl transform overflow-hidden rounded-lg  bg-gradient-to-b from-[#035b39] to-[#00402f] p-2 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="flex justify-center mb-1 text-lg font-medium leading-6 text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className=" fixed left-[8px] w-6 h-6 cursor-pointer"
                          onClick={closeModal}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Graf
                      </Dialog.Title>
                      <div className="opacity-0 animate-appearanceInp mt-2">
                        <div className=' bg-white rounded-lg overflow-hidden transition-all duration-500 p-2'>
                          <LineChart chartData={chartData} /> 
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
}
export default Page4;
