import Header from '../Header/Header'
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import GenderSelect from '../GenderSelect/GenderSelect'; 


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Profile = () =>{
    return (
      //Profile Edit page
      <>
      <Header/>
        <Tab.Group vertical >
        <div className="flex justify-center border color-white rounded">
          <Tab.List className="flex flex-col rounded w-5/12 py-3 px-4">
          <Tab className="mt-1 px-3 py-2 text-gray-400 text-sm font-medium leading-5 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700">
              Личные данные
            </Tab>
            <Tab className="mt-1 px-3 py-2 text-gray-400 text-sm font-medium leading-5 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700">
              Безопасность и пароли
            </Tab>
            <Tab className="mt-1 px-3 py-2 text-gray-400 text-sm font-medium leading-5 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700">
              Банковские реквизиты
            </Tab>
          </Tab.List>
          <Tab.Panels className="ml-3 rounded w-7/12">
            <Tab.Panel >
              <div className="grid grid-cols-2 text-gray-400">
                <div className="mx-2 items-center justify-center">
                  <p>Имя</p>
                  <input placeholder='Имя'className='bg-white/20 rounded placeholder:text-white text-white px-3 py-1' defaultValue="Initial value"></input>
                  
                  <p>Пол</p>
                  <GenderSelect/>
                  
                  <p>Никнейм</p>
                  <input placeholder="никнейм" className='bg-white/20 rounded placeholder:text-white text-white px-3 py-1' defaultValue="Initial value"></input>
                  <br></br>
                  <button className="my-3"> Сохранить</button>
                </div>
                <div className="mx-3">
                <p>Фамилия</p>
                  <input placeholder='Фамилия' className='bg-white/20 rounded placeholder:text-white text-white px-3 py-1' defaultValue="Initial value"></input>
                  <span></span>
                <p>Дата рождения</p>
                <input type="datetime-local" id="meeting-time"
       name="meeting-time" defaultValue="2003-03-1215:32"
       className='bg-white/20 rounded placeholder:text-white text-white px-3 py-1'
       ></input>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel >
              <div className="text-gray-400 rounded border color-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                      Электронная почта
                    </label>
                    <input
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="example@example.com"
                      defaultValue="Initial value"
                    ></input>
                    <button className="mx-5 px-3 border color-white rounded"> Сохранить</button>
                </div> 
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Пароль
                </label>
                <input
                  className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                  defaultValue="Initial value"
                />
                <button className="mx-5 px-3 border color-white rounded"> Сохранить</button>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 py-2" for="phone">
                  Телефон
                </label>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Введите номер телефона"
                  defaultValue="Initial value"
                />
                <button className="mx-5 px-3 border color-white rounded"> Сохранить</button>
              </div>
                
              </div>
              

            </Tab.Panel>
            <Tab.Panel>
              <div className="text-white my-3">
              <input
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="card"
                  type="tel"
                  placeholder="Введите номер карты"
                  defaultValue="Initial value"
                />
                <button className="mx-5 px-3 border color-white rounded"> Подтвердить</button>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>



    </>
    );
  }
  export default Profile;