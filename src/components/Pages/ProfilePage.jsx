import Header from '../Header/Header'
import { Tab } from '@headlessui/react';
import ProfileForm from '../Profile/ProfileCard';
import ParolForm from '../Profile/ParolCard';
import BankForm from '../Profile/BankCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhotoInputForm from '../Profile/PhotoInput';

const tabStyle = "mt-1 px-3 py-6 text-gray-400 leading-5 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700"

const ProfilePage = () =>{

  const [activeTab, setActiveTab] = useState('tab1'); // Состояние для отслеживания активной кнопки

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // Обновляем состояние активной кнопки при клике на нее
  };
    return (
      
    <>
      <Header/>
      <div className='container h-[500px] bg-gray-800/50 backdrop-blur-sm mx-auto text-md mt-5 rounded text-white lg:text-3xl'>
        <Tab.Group vertical className="hidden md:flex" >
          <div className="flex justify-center rounded h-max">
            <div className="rounded w-full md:w-5/12 py-3 px-4">
              <Tab.List className="flex flex-col">
              <Tab className={`${tabStyle} ${activeTab === 'tab1' ? 'bg-gray-700' : ''}`} onClick={() => handleTabClick('tab1')} id="tab1">
                Личные данные
              </Tab>

              <Tab className={`${tabStyle} ${activeTab === 'tab2' ? 'bg-gray-700' : ''}`} onClick={() => handleTabClick('tab2')} id="tab2">
                Безопасность и пароли
              </Tab>

              <Tab className={`${tabStyle} ${activeTab === 'tab3' ? 'bg-gray-700' : ''}`} onClick={() => handleTabClick('tab3')} id="tab3">
                Банковские реквизиты
              </Tab>
              </Tab.List>
            </div>
            <Tab.Panels className="ml-3 mt-8 rounded w-8/12">
              <Tab.Panel >
                <ProfileForm/>
              </Tab.Panel>
              
              <Tab.Panel >
                <ParolForm/>
              </Tab.Panel>

              <Tab.Panel>
                <BankForm/>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>

        <div className='md:hidden mt-12 p-4 bg-slate-800'>
          <h2 className='text-center mx-auto w-full'>Настройки профиля</h2>
          <PhotoInputForm/>
          <div className='mx-auto flex justify-center flex-col'>
            <div className="p-2 border color-white rounded mx-auto flex flex-col my-2 w-[200px]">
              <Link to="/profile/personal" className='text-center'>
                Личные данные
              </Link>
            </div>
            
            <div className="p-2 border color-white rounded mx-auto flex flex-col my-2 w-[200px]">
              <Link to="/profile/parols" className='text-center'>
                Безопасность и пароли
              </Link>
            </div>

            <div className="p-2 border color-white rounded mx-auto flex flex-col my-2 w-[200px]">
              <Link to="/profile/bank" className='text-center'>
                Банковские данные
              </Link>
            </div>

            <div className="p-2 border color-white rounded mx-auto flex flex-col my-2 w-[200px]">
              <Link to="/" className='text-center'>
                Венуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
  export default ProfilePage;