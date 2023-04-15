import Header from '../Header/Header'
import { Tab } from '@headlessui/react';
import React, { useRef, useState } from "react";
import GenderSelect from '../GenderSelect/GenderSelect'; 


const tabStyle = "mt-1 px-3 py-6 text-gray-400 leading-5 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700"
const inputStyle = 'bg-white/20 rounded placeholder:text-white text-white px-3 py-1'


const handleInputChange = (e, ref) => {
  const input = e.target;
  if (input.value.length === input.maxLength) {
    ref.current.focus();
  }
};


const Profile = () =>{
      //Проверка переноса строк
    const cardNumberRef = useRef();
    const cardHolderRef = useRef();
    const expiryDateRef1 = useRef();
    const expiryDateRef2 = useRef();
    const cvvRef = useRef();

    const [user, setUser]=useState({
      name:"",
      lastname:"",
      nickname:"",
      gender:"",
      bdate:""
    })

    const [parols, setParols]=useState({
      mail: "",
      parol: "",
      phone: ""
    })

    const [bank, setBank]=useState({
      number: "",
      month:"",
      year:"",
      cvv:""
    })

    return (
      //Profile Edit page
    <>
      <Header/>
      <div className='container h-[700px] bg-gray-800/50 backdrop-blur-sm mx-auto text-md mt-5 rounded text-white text-3xl'>
        <Tab.Group vertical >
          <div className="flex justify-center rounded h-max">
            <div className="rounded w-5/12 py-3 px-4">
              <Tab.List className="flex flex-col">
                <Tab className={tabStyle}>
                  Личные данные
                </Tab>

                <Tab className={tabStyle}>
                  Безопасность и пароли
                </Tab>

                <Tab className={tabStyle}>
                  Банковские реквизиты
                </Tab>
              </Tab.List>
            </div>
            <Tab.Panels className="ml-3 rounded w-7/12">
              <Tab.Panel >
                <div className="flex mx-1">
                  <div className="mx-2 items-center justify-center">
                    <p>Имя</p>
                    <input placeholder='Имя'
                      className={inputStyle}
                      value = {user.name}
                      onChange={(e)=>setUser({...user, name: e.target.value})} 
                    ></input>

                    <p>Пол</p>
                    <GenderSelect
                    onChange={(e)=>setUser({...user, gender: e})}
                    
                    />
                    
                    <p>Никнейм</p>
                    <input placeholder="никнейм" 
                      className={inputStyle} 
                      value={user.nickname} 
                      onChange={(e)=>setUser({...user, nickname: e.target.value})}                  
                    ></input>
                    <br/>
                    <button 
                      className="my-3 rounded border border-white p-1"
                      onClick={()=>{
                        console.log(user);
        
                      }}
                    > Сохранить</button>
                  </div>

                  <div className="mx-3 items-center justify-center">
                    <p>Фамилия</p>
                    <input placeholder='Фамилия' 
                      className={inputStyle}
                      value={user.lastname} 
                      onChange={(e)=>setUser({...user, lastname: e.target.value})}                     
                    ></input>

                    <p>Дата рождения</p>
                    <input type="date" 
                      id="meeting-time"
                      name="meeting-time" defaultValue="2003-03-12"
                      className={inputStyle}
                      value={user.bdate}
                      onChange={(e)=>setUser({...user, bdate: e.target.value})} 
                    ></input>  
                  </div>
                </div>
              </Tab.Panel>
              
              <Tab.Panel >
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
              </Tab.Panel>

              <Tab.Panel>
                <div className="text-white my-3 px-12 pb-8 mx-2">
                  <p className='font-md my-1'>Введите номер карты</p>
                  <input
                    className='bg-white/20 rounded placeholder:text-white text-white p-1.5'
                    id="card"
                    placeholder="1234567890123456"
                    type="number"
                    maxLength={16}
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
               
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </>
    );
  }

  export default Profile;