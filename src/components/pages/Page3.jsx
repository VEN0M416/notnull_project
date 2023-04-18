import Header from '../Header/Header'
import GenderSelect from '../GenderSelect/GenderSelect';
import { Tab } from '@headlessui/react';
import { useState } from 'react';

const tabStyle = "my-1 px-3 py-2 text-gray-400 leading-5 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700";
const inputStyle = "my-1 bg-white/20 rounded placeholder:text-gray-400 text-white px-3 py-1";

const Page3 = () =>{
  const [gender, setGender] = useState("");
  const handleGenderChange=(e)=>{
    setGender(e);
  }

  return (
    <>
      <Header/>
      <div className='container mx-auto text-black'>
        <p className='text-2xl pt-[50px] text-white'>Page3</p>
        <div className=" container mx-auto text-md mt-5 bg-blue-950/50 backdrop-blur-sm rounded-md h-[700px]">
          <Tab.Group >
            <div className='flex justify-center flex-wrap sm:flex-nowrap'>
              <div className=' ms:whitespace-nowrap rounded-xl p-1 w-5/12 h-max mx-1 text-lg'>
                <Tab.List className="flex flex-col ">
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
              <Tab.Panels className=" w-7/12">
                <Tab.Panel >
                  <div className="flex text-white mx-1">
                    <div className="mx-3 items-center justify-center">
                      <p>Имя</p>
                      <input 
                        placeholder='Имя'
                        className={inputStyle}
                      />
                      <p>Пол</p>
                      <GenderSelect onChange={handleGenderChange}/> 
                      <p>Никнейм</p>
                      <input 
                        placeholder="Никнейм" 
                        className={inputStyle}
                      />
                      <br/>
                      <button 
                        className="my-3 border px-4 py-1 rounded text-white"
                        onClick={()=>{
                          console.log(gender);
                        }}
                      > Сохранить</button>
                    </div>
                    <div className="mx-3">
                      <p>Фамилия</p>
                      <input 
                        placeholder='Фамилия' 
                        className={inputStyle}
                      />
                      <p>Дата рождения</p>
                      <input 
                        type='date' 
                        id="meeting-date"
                        name="meeting-date"
                        className={inputStyle+" [color-scheme:dark]"}
                      />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel >
                  <div className="text-white mx-1 rounded">
                    <div className="my-2 mx-3">
                      <p>Электронная почта</p>
                      <input
                        className={inputStyle}
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                      ></input>
                      <p>Пароль</p>
                      <input
                        className={inputStyle}
                        id="password"
                        type="password"
                        placeholder="Enter password"
                      />
                      <p>Телефон</p>
                      <input
                        className={inputStyle}
                        id="phone"
                        type="tel"
                        placeholder="Введите номер телефона"
                      />
                      <br />
                      <button 
                        className="my-3 border px-4 py-1 rounded text-white"
                        /* onClick={} */
                      > Сохранить</button>
                    </div> 
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="text-white my-3 mx-3 rounded">
                    <p>Карта</p>
                    <input
                      className={inputStyle}
                      id="card"
                      type="tel"
                      placeholder="Введите номер карты"
                    />
                    <div className='flex space-x-5'>
                      <div>
                        <p>Месяц / Год</p>
                        <input 
                          type="text" 
                          className={inputStyle+" w-[100px]"} 
                          placeholder="MM/YYYY"
                        />
                      </div>
                      <div>
                      <p>CVV</p>
                        <input 
                          type="password" 
                          className={inputStyle+" w-[60px]"} 
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                    <button 
                      className="px-3 border color-white rounded my-2 py-1"
                      /* onClick={} */
                    > Подтвердить</button>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}
export default Page3;