import React from 'react';
import { Link } from "react-router-dom";
import Particle from '../../background/Particle';
import SignUpLogInForm from '../Forms/SignUpLogInForm';
import { useCookies } from 'react-cookie';
import LogOutForm from '../Forms/LogOutForm';


const LnkStyle="hover:bg-hoverBg rounded-[10px] py-1 px-4 active:bg-activeBg";

const Header= () =>{

  const [cookies, setCookie] = useCookies(['sessionId']);

  return (
    <>
      <Particle/>
      <div className="container mx-auto text-headerLinks mt-7 text-[22px] font-semibold">
        <div className='flex justify-between place-items-center'>
          <div className='space-x-2'>
            <Link to="/" className={LnkStyle}>Main</Link>
            <Link to="/Page1" className={LnkStyle}>Page1</Link>
            <Link to="/Page2" className={LnkStyle}>Page2</Link>
            <Link to="/Page3" className={LnkStyle}>Page3</Link>
            <Link to="/chat" className={LnkStyle}>Chat</Link> 
          </div>

          <div className='space-x-2 flex'>
            {
              (cookies.sessionId)? (
                <>
                  Signed in as:{cookies.sessionId}
                  <LogOutForm/>
                </>
              ) : (
                <>
                  <SignUpLogInForm/>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;