import React, { useRef, useState } from "react";

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
    <div className="text-white my-3 px-12 pb-8 mx-2">
      <p className='font-md my-1'>Введите номер карты</p>
      <input
        className='bg-white/20 rounded placeholder:text-white text-white p-1.5'
        id="card"
        placeholder="1234567890123456"
        type="number"
        maxLength={19}
        value={bank.number}
        onChange={(e) => {
          handleInputChange(e, cardHolderRef)
          setBank({...bank, number: e.target.value})
        }}
        ref={cardNumberRef}
      />
      <div className='flex space-x-4'>
        <div>
          <p>Месяц/Год</p>
          <input
            className='bg-white/20 rounded placeholder:text-white text-white p-1.5 w-[70px]'
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
            className='bg-white/20 rounded placeholder:text-white text-white p-1.5 w-[70px]'
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
        <div className='mx-2'>
          <p >CVV</p>
          <input
            className='bg-white/20 rounded placeholder:text-white text-white p-1.5 w-[110px]'
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
      <button 
        className="mx-5 px-3 border color-white rounded"
        onClick={()=>{
          console.log(bank);
        }}
      > Подтвердить</button>
    </div>
  );
};

export default BankForm;
