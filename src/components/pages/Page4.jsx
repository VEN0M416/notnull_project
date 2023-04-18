import Header from '../Header/Header'
import { useState, Fragment } from "react";
import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTimeoutFn } from 'react-use';
import { ChartList } from '../charts/ChartList';
import { SharesList } from '../charts/SharesList';

const Page4 = () => {
  const [chartNum, setChartNum] = useState(-1);
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true);
  }

  let [crossPointer, ] = useState(false);

  let [, , ] = useTimeoutFn(() => crossPointer ? setIsOpen(true) : setIsOpen(false), 500)

  return (
    <>
      <Header />
      <div className='container mx-auto text-white'>

        <p className='text-2xl pt-[50px]'>Page4</p>

        <div className='bg-cyan-900 my-5 p-1 w-max rounded-lg text-white relative'>

          <SharesList openModal={openModal} onData={(i)=>{setChartNum(i)}}/>{/* table */}

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
                    <Dialog.Panel className=" w-full max-w-5xl transform overflow-hidden rounded-lg  bg-gradient-to-b from-cyan-900 to-cyan-950 p-2 text-left align-middle shadow-xl transition-all">
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
                      <div className=" mt-2">

                        <ChartList num = {chartNum}/>{/* chart */}

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
