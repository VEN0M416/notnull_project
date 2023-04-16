import React, { useState } from "react";

const inputStyle = 'bg-white/20 rounded placeholder:text-white text-white px-3 py-1'

const ParolForm = () => {
  
    const [parols, setParols]=useState({
        mail: "",
        parol: "",
        phone: ""
      })

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
        <input
            className={inputStyle}
            id="phone"
            type="tel"
            placeholder="Введите номер телефона"
            value={parols.phone} 
            onChange={(e)=>setParols({...parols, phone: e.target.value})}
        />
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
