import React, { useRef, useState } from "react";

const inputStyle = "my-1 bg-white/20 rounded px-3 py-1"
const pStyle = "lg:text-xl text-slate-300"

const BankForm = () => {
    //Проверка переноса строк
    const cardNumberRef = useRef();
    const cardHolderRef = useRef();
    const expiryDateRef1 = useRef();
    const expiryDateRef2 = useRef();

    const [bank, setBank]=useState({
      number: "",
      month:"",
      year:"",
      cvv:""
    })

  const handleInputChange = (e, ref) => {
    const input = e.target;
    if (input.value.length === input.maxLength) {
      ref.current.focus();
    }
  };

  return (
    <div className="text-white lg:px-12 pb-8 container lg:w-7/12 md:w-10/12 w-full bg-[#354555d1] rounded">
      <div className="flex-column w-full justify-center mb-3">
        <p className={pStyle}>Введите номер карты</p>
        <input
          className={inputStyle + ' w-full'}
          id="card"
          placeholder="1234567890123456"
          type="text"
          maxLength={19}
          value={bank.number}
          onChange={(e) => {
            handleInputChange(e, cardHolderRef)
            setBank({...bank, number: e.target.value})
          }}
          ref={cardNumberRef}
        />
      </div>
      <div className='flex justify-between'>
        <div className="flex-column">
          <p className={pStyle}>Месяц/Год</p>
          <input
            className={inputStyle+' w-[40px] md:w-[60px] mr-1'}
            id="month"
            placeholder='MM'
            type="text"
            maxLength={2}
            value={bank.month}
            onChange={(e) => {
              handleInputChange(e, expiryDateRef1)
              setBank({...bank, month: e.target.value})
            }}
            ref={cardHolderRef}
          />
           / 
          <input
            className={inputStyle+' w-[45px] md:w-[70px] ml-1'}
            id="year"
            placeholder='YY'
            type="text"
            maxLength={2}
            value={bank.year}
            onChange={(e) => {
              handleInputChange(e, expiryDateRef2)
              setBank({...bank, year: e.target.value})
            }}
            ref={expiryDateRef1}
          />
        </div>

        <div className="flex-column">
          <p className={pStyle}>CVV</p>
          <input
            className={inputStyle + ' w-[70px] lg:w-[110px]'}
            id="CVV"
            type='password'
            placeholder='CVV'
            maxLength={3}
            ref={expiryDateRef2}
            value={bank.cvv} 
            onChange={(e)=>setBank({...bank, cvv: e.target.value})}
          />
        </div>
      </div>
      <br/>
      <div className="flex justify-center w-full">
        <button 
          className="my-3 w-full bg-cyan-800 border-white p-1 hover:bg-cyan-900 rounded-[10px] py-1 px-4 active:bg-cyan-950"
          onClick={()=>{
            console.log(bank);
          }}
        > Подтвердить</button>
      </div>
    </div>
  );
};

export default BankForm;
