import Header from '../Header/Header'
import GenderSelect from '../Profile/GenderSelect';
import { useState } from 'react';
import avatar from '../Img/profile.png'

const inputStyle = "w-full my-1 bg-white rounded placeholder:text-gray-400 text-black px-3 py-1";

const Page3 = () => {
  const [gender, setGender] = useState("");
  const handleGenderChange = (e) => {
    setGender(e);
  }

  return (
    <>
      <Header />
      <div className='container grid grid-cols-2 grid-rows-3 gap-7 mx-auto mt-6 bg-white/30 backdrop-blur-sm rounded-md p-7'>
        <div className="row-span-3 border border-white p-3 rounded-md text-white">
          <div className="flex justify-center h-1/3">
            <img
              className=" h-full bg-slate-500 rounded-full "
              src={avatar}
              alt="avatar"
            />
          </div>
          <h1
            className=" text-2xl text-white font-md my-2 text-center"
          >Личные данные</h1>
          <hr />
          <div className='w-1/2 mx-auto my-5'>
            <div className='w-full'>
              <label
                className='flex'
                htmlFor="name"
              >Имя</label>
              <input
                id='name'
                placeholder="Имя"
                className={inputStyle}
              />
            </div>
            <div className='w-full'>
              <label
                className='flex'
                htmlFor="lastName"
              >Фамилия</label>
              <input
                id='lastName'
                placeholder="Фамилия"
                className={inputStyle}
              />
            </div>
            <div className='w-full'>
              <label
                className='flex'
                htmlFor="nickName"
              >Никнейм</label>
              <input
                id='nickName'
                placeholder="Никнейм"
                className={inputStyle}
              />
            </div>
            <div className='w-full'>
              <label
                className='flex'
                htmlFor="meeting-date"
              >Дата рождения</label>
              <input
                type='date'
                id="meeting-date"
                name="meeting-date"
                className={inputStyle + " [color-scheme:light]"}
              />
            </div>
            <div className=''>
              <GenderSelect onChange={handleGenderChange} />
            </div>
          </div>

        </div>
        <div className=" border border-white p-3 rounded-md">

        </div>
        <div className="row-span-2 border border-white p-3 rounded-md">

        </div>
        {/* <div className=" container mx-auto text-md mt-5 bg-blue-950/50 backdrop-blur-sm rounded-md h-[700px]">
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
                           onClick={}
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
                         onClick={}
                    > Подтвердить</button>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div> */}
      </div>
    </>
  );
}
export default Page3;