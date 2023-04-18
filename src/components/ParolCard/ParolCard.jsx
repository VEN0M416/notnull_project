import React, { useState } from "react";
import MaskInput from 'react-maskinput';
import 'react-phone-input-2/lib/style.css'

const inputStyle = 'bg-white/20 rounded placeholder:text-white text-white px-3 py-1'

const ParolForm = () => {
  
    const [parols, setParols]=useState({
        mail: "",
        parol: "",
        phone: ""
      })

      const handlePhoneChange = (e) => {
        let input = e.target.value;
           // Удаляем все, кроме цифр из ввода
            input = input.replace(/[^\d]/g, "");
            // Применяем маску для ввода номера телефона
            if (input.length <= 10) {
              input = input.replace(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2}).*/, (_, p1, p2, p3, p4) => {
                return `+7 (${p1}${p2 ? ") " + p2 : ""}${p3 ? "-" + p3 : ""}${p4 ? "-" + p4 : ""}`;
              });
            } else {
              input = `+7 (${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 8)}-${input.slice(8, 10)}`;
            }
        setParols({...parols, phone: input});
      };

  return (
    <div className="rounded px-12 pb-8 mx-2">
        <p className="my-1">
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

        <p className="my-1">
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

        <p className="my-1">
        Телефон
        </p>
        {/* <input
            className={inputStyle}
            id="phone"
            placeholder="+7 (___) ___-__-__"
            value={parols.phone} 
            onChange={handlePhoneChange}
        /> */}
        <MaskInput className={inputStyle} value={parols.phone} alwaysShowMask mask={'+7 (000) 000 - 00-00'} size={20} showMask maskChar="_" onChange={(e)=>setParols({...parols, phone: e.target.value})} />
        <br/>
        <button 
            className="my-3 rounded border border-white p-1"
            onClick={()=>{
                console.log(parols);
            }}
        > Сохранить</button>
    </div>
  );
};

export default ParolForm;
