import Header from '../Header/Header'
import { Tab } from '@headlessui/react';
import ProfileForm from '../Profile/ProfileCard';
import ParolForm from '../Profile/ParolCard';
import BankForm from '../Profile/BankCard';
import { useState } from 'react';

const tabStyle = "mt-1 px-3 py-6 text-gray-400 leading-5 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700"

const ProfilePage = () =>{

  const [activeTab, setActiveTab] = useState('tab1'); // Состояние для отслеживания активной кнопки

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // Обновляем состояние активной кнопки при клике на нее
  };
    return (
      
    <>
      <Header/>
      <div className='container h-[500px] bg-gray-800/50 backdrop-blur-sm mx-auto text-md mt-5 rounded text-white text-3xl'>
        <Tab.Group vertical >
          <div className="flex justify-center rounded h-max">
            <div className="rounded w-5/12 py-3 px-4">
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
            <Tab.Panels className="ml-3 rounded w-8/12">
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
      </div>
    </>
    );
  }
  export default ProfilePage;