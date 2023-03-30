import React from 'react';
import { Link } from "react-router-dom";
import Particle from '../../background/Particle';
import logo from '../Img/logo.png';

const LnkStyle="hover:bg-hoverBg rounded-[10px] py-1 px-4 active:bg-activeBg";
const BtnStyle="hover:bg-hoverBg rounded-[10px] py-1 px-4 active:bg-activeBg";

const Header= () =>{
  return (
    <>
      <Particle/>
      <div className="container mx-auto text-headerLinks mt-7 text-[22px] font-semibold">
        <div className='flex justify-between'>
          <div className='space-x-2'>
            <Link to="/" className={LnkStyle}>Main</Link>
            <Link to="/Page1" className={LnkStyle}>Page1</Link>
            <Link to="/Page2" className={LnkStyle}>Page2</Link>
            <Link to="/Page3" className={LnkStyle}>Page3</Link>
          </div>
          <div className='space-x-2 w-1/4'>
            <img src={logo} alt="logo" className='h-[35px] inline my-auto'/>
            <h1 className='inline'>NotNull Company</h1>
          </div>
          <div className='space-x-2 '>
            <button className={BtnStyle}>Log in</button>
            <button className={BtnStyle}>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;