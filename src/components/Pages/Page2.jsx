import Header from '../Header/Header'
import { useState } from 'react';

import { CardCarousel } from '../Profile/CardCarousel';

const Page2 = () =>{
  
  const gradientGlass = 'bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md';
  const glass = 'rounded-xl shadow-lg bg-white/20 backdrop-blur-md'
  
  return (
    <>
      <Header/>
      <div className='w-full pt-16 sm:pt-10  mx-auto text-white'>

        <div className={`w-10/12 mx-auto`}>
            <div className='w-full p-8 text-3xl tracking-wide flex flex-wrap'>
              <div className='font-light pr-2 text-gray-200'>Здравствуйте,</div>
              <div>Владимир!</div>
            </div>

            <div>
              <CardCarousel/>
            </div>
            


        </div>
      </div>
    </>
  );
}
export default Page2;
