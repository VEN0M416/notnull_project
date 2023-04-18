import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import LogOutForm from '../Forms/LogOutForm'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropLink() {
  
  return (
    <div className="top-16 w-16 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20  text-sm font-medium text-white hover:bg-opacity-30  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img className="rounded-full" src='https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'></img>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >

          <Menu.Items className="absolute right-0 mt-2 w-30 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 border focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/profile" >
                    <button
                        className={`${
                        active ? 'bg-violet-500 text-white' : 'text-white'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        
                    >
                        Редактировать
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  // <button
                  //   className={`${
                  //     active ? 'bg-violet-500 text-white' : 'text-white'
                  //   } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  // >
                  //   Выйти
                  // </button>
                  <LogOutForm/>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


