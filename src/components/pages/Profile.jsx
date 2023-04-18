import Header from '../Header/Header'
import { Tab } from '@headlessui/react';
import ProfileForm from '../ProfileCard/ProfileCard';
import ParolForm from '../ParolCard/ParolCard';
import BankForm from '../BankCard/BankCard';
import { useState } from 'react';

const tabStyle = "mt-1 px-3 py-6 text-gray-400 leading-5 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700"

const Profile = () =>{
  const [personal, setPersonal] = useState()
  const [security, setSecurity] = useState()
  const [bank, setBank] = useState()

    return (
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
  export default Profile;