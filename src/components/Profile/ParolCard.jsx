import React, { useState } from "react";
import 'react-phone-input-2/lib/style.css'
import CustomTel from "./CustomTel";

const inputStyle = "my-1 bg-white/20 rounded px-3 py-1"
const pStyle = "text-xl text-slate-300"
const ParolForm = () => {


  const [parols, setParols]=useState({
      mail: "",
      parol: "",
      phone: ""
    })

  return (
    <div className="rounded px-12 mx-2 bg-[#354555d1] w-7/12 container">
        <p className={pStyle}>
        Электронная почта
        </p>
        <input
            className={inputStyle}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={parols.mail} 
            onChange={(e)=>setParols({...parols, mail: e.target.value})}
        ></input>

        <p className={pStyle}>
        Пароль
        </p>
        <input
            className={inputStyle}
            id="password"
            type="password"
            placeholder="********"
            value={parols.parol} 
            onChange={(e)=>setParols({...parols, parol: e.target.value})}
        />

        <p className={pStyle}>
        Телефон
        </p>
        {/* <input
            className={inputStyle}
            id="phone"
            placeholder="+7 (___) ___-__-__"
            value={parols.phone} 
            
        /> */}
        {/* <input type="tel" name="phone" required placeholder="7 (   )   -   -  " maxLength={23} className={inputStyle}/> */}
        
        <CustomTel
          //value = {parols.phone}
          onChange={(e)=>setParols({...parols, phone: e})}
        />

        {/* <MaskInput 
          onFocus={()=>setFocus(true)}
          onBlur={handleBlur}
          className={inputStyle+` ${focus?"text-white":"text-gray-400"}`} 
          value={parols.phone} 
          alwaysShowMask mask={'+7 (000) 000 - 00-00'} size={20} 
          showMask maskChar="_" 
           
        /> */}
        <br/>
        <button 
            className="my-3 bg-cyan-800 border-white p-1 hover:bg-cyan-900 rounded-[10px] py-1 px-4 active:bg-cyan-950"
            onClick={()=>{
                console.log(parols);
            }}
        > Сохранить</button>
    </div>
  );
};

export default ParolForm;
