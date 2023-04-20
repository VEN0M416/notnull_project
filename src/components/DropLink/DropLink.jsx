import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../core/api';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";



export default function DropLink() {

  const [isShowing, setIsShowing] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['sessionId', 'username']);
  const navigate = useNavigate();
  const send = () => {
    api.post('/authorisation/logout', { sessionId: cookies.sessionId }).then((res) => {
      if (res.data.status === 'done') {
        console.log('success log out');
        removeCookie('sessionId', { path: '/', sameSite: 'Lax' });
        removeCookie('username', { path: '/', sameSite: 'Lax' });
        navigate('/', { replace: true });
      }
    });
  }


  return (
    <div className="text-right z-10"
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <div className={`bg-sky-600 hover:bg-sky-700 h-9 flex justify-between pl-2 rounded-full items-center max-w-full min-w-min ${cookies.username.length < 4 ? 'w-28' : ''}`}>
            <Link to="/profile" className='mx-3'>{"" + cookies.username}</Link>
            <Menu.Button className="z-10 inline-flex w-12">
              <img className="rounded-full" src='https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'></img>
            </Menu.Button>
          </div>
        </div>

        <Transition
          show={isShowing}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="bg-sky-800 absolute left-1/2 transform -translate-x-1/2 w-20 rounded-b-md ">
            <div className="px-1 py-1">
              <Menu.Item>
                {() => (
                  <Link to="/profile" >
                    <button
                      className='hover:bg-sky-950 text-white group flex w-full items-center rounded-md px-2 py-2 text-sm my-1'
                    >
                      Profile
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <button
                    type="button"
                    onClick={send}
                    className='hover:bg-sky-950 text-white group flex w-full items-center rounded-md px-2 py-2 text-sm my-1'
                  >Log out</button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu >
    </div >
  )
}

