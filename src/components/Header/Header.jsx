import React from 'react';
import { Link } from "react-router-dom";
import SignUpLogInForm from '../Forms/SignUpLogInForm';
import { useCookies } from 'react-cookie';
import DropLink from './DropLink';
import './Header.css'



const Header= () =>{
  
  const LnkStyle="hover:bg-hoverBg rounded-[10px] py-1 px-4 active:bg-activeBg";
  const [cookies, setCookie] = useCookies(['username', 'sessionId']);

  return (
    <>
      <div className="px-4 lg:px-8 mx-auto text-headerLinks mt-2 sm:mt-7 text-[22px] font-semibold">
        <div className='hidden sm:block'>
          <div className='flex justify-between place-items-center'>
            <div className='space-x-2'>
              <Link to="/" className={LnkStyle}>Main</Link>
              <Link to="/stocks" className={LnkStyle}>Акции</Link>
              <Link to="/Page2" className={LnkStyle}>Page2</Link>
              <Link to="/Page3" className={LnkStyle}>Page3</Link> 
              {cookies.sessionId && <Link to="/chat" className={LnkStyle}>Chat</Link>} 
            </div>

            <div className='space-x-2 flex'>
              {
                (cookies.sessionId)? (
                  <DropLink/>
                ) : (
                  <div className='whitespace-nowrap'>
                    <SignUpLogInForm/>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <div className='sm:hidden'>

              <input type="checkbox" id="burgerButton" /> {/* 'виртуальная' кнопка */}
              
              <label className="sidebarIcon" htmlFor='burgerButton'>  {/* дизайн кнопки */}
                      <div className="spinner diagonal part-1"></div>
                      <div className="spinner horizontal"></div>
                      <div className="spinner diagonal part-2"></div>
              </label>

              <div id='sidebarMenu' className='bg-gradient-to-br from-white-40 to-white-10 backdrop-blur-md'> {/* то, что будет появляться */}
                <div className='p-4 pt-20 mx-auto text-white grid grid-rows-6 content-evenly text-center text-4xl h-full'>
                  <Link to="/" className="tracking-widest  text-gray-100 font-light">Главная</Link>
                  <Link to="/stocks" className="tracking-widest  text-gray-100 font-light">Акции</Link>
                  <Link to="/Page2" className="tracking-widest  text-gray-100 font-light">Page2</Link>
                  <Link to="/Page3" className="tracking-widest  text-gray-100 font-light">Page3</Link> 
                  {cookies.sessionId && <Link to="/chat" className="tracking-widest  text-gray-100 font-light">Чат</Link>}
                  {cookies.sessionId && <Link to="/profile" className="tracking-widest  text-gray-100 font-light">Профиль</Link>}
                </div>
              </div>

        </div>
      </div>
    </>
  );
}
export default Header;