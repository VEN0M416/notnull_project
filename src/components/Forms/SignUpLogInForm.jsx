import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { api } from '../../core/api';
import { useTimeoutFn } from 'react-use';
import { useCookies } from 'react-cookie';

const InputStyle=' flex w-full my-4 p-3 pl-9 rounded-[10px] bg-gray-100 placeholder:text-black/50 placeholder:font-light placeholder:text-xl';


export default function SignUpLogInForm() {

    const [cookies, setCookie] = useCookies(['sessionId','username']);
    const [PassWrong ,setPassWrong] = useState(false);
    const [NotReg ,setNotReg] = useState(false);
    const [alreadyReg ,setAlreadyReg] = useState(false);

    const [user, setUser] = useState({
        name:"",
        password:"",
    })
    const [isCorrect, setCrPss] = useState(true);
    const [Empty, setEmpty] = useState(false);

    const [typeForm, setTypeForm] = useState(true); /* true - sign up form; false - log in form*/

    const send1 = () => {
        if (user.name === "" || user.password === "") {
            setEmpty(true);
            return;
        }   
        api.post('/authorisation/registration',{username: user.name, password: user.password}).then((res)=>{
            if(res.data.status === 'done'){
                closeModal();
                setCookie('sessionId', res.data.sessionId, { path: '/', sameSite: 'Lax' });
                setCookie('username', user.name, { path: '/', sameSite: 'Lax' });
                setUser({name: "", password: ""})
            } else if(res.data.status === 'user already exists'){
                setAlreadyReg(true);
                return;
            }
            
        });
        
    }
    const send2 = () => {
        if (user.name === "" || user.password === "") {
            setEmpty(true);
            return;
        }
        api.post('/authorisation/login',{username: user.name, password: user.password}).then((res)=>{
            if(res.data.status === 'done'){
                setCookie('sessionId', res.data.sessionId, { path: '/', sameSite: 'Lax' });
                setCookie('username', user.name, { path: '/', sameSite: 'Lax' });
                closeModal();
                setUser({name: "", password: ""});
            } else if(res.data.status === 'wrong password'){
                setPassWrong(true);
                setNotReg(false);
                return;
            } else if(res.data.status === 'user does not exist'){
                setNotReg(true);
                setPassWrong(false);
                return;
            }
        });

    }

    const isEmpty=()=>{
        (user.name === "" || user.password === "")? setEmpty(true) : setEmpty(false);
    }

    /* ------------------------------------------------------------------------------------- */
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false);
        setCrPss(true);
        setEmpty(false);
        setNotReg(false);
        setPassWrong(false);
        setAlreadyReg(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    let [crossPointer, setCrosPtr] = useState(false);

    let [, , resetIsShowing] = useTimeoutFn(() => crossPointer ? setIsOpen(true): setIsOpen(false), 500)

    return (
        <>
        <div className="">
            <button
            type="button"
            onClick={()=>{
                openModal();
                setTypeForm(true);
            }}
            className="hover:bg-hoverBg rounded-[10px] py-1 px-4 mx-1 active:bg-activeBg"
            >Sign Up</button>
            <button
            type="button"
            onClick={()=>{
                openModal();
                setTypeForm(false);
            }}
            className="hover:bg-hoverBg rounded-[10px] py-1 px-4 mx-1 active:bg-activeBg"
            >Log In</button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border-2 border-[#8696b0]  bg-gradient-to-b from-[#32528a] to-[#30384a] p-6 text-left align-middle shadow-xl transition-all">
                    

                    <Dialog.Title
                        as="h3"
                        className="flex justify-center mb-7 text-lg font-medium leading-6 text-white"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className=" fixed left-[25px] w-6 h-6 cursor-pointer" 
                            onClick={closeModal}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        {typeForm && <>USER SIGNUP</>}
                        {!typeForm && <>USER LOGIN</>}
                    </Dialog.Title>

                    <div className="opacity-0 animate-appearanceInp mt-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className=" fixed w-6 h-6 ml-2 mt-3 text-black/50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <input 
                            className={InputStyle} 
                            type="text" 
                            placeholder='username' 
                            onChange={(e)=>{setUser((prevState=>({...prevState,name: e.target.value}))); isEmpty();}}
                        />
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="fixed w-6 h-6 ml-2 mt-3 text-black/50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <input 
                            className={InputStyle} 
                            type="password" 
                            name="password"
                            placeholder='password' 
                            onChange={(e)=>{
                                setUser((prevState=>({...prevState,password: e.target.value})));
                                e.target.value === user.password ? setCrPss(true) : setCrPss(false);
                                isEmpty();
                            }}
                        />
                        { typeForm && <><svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="fixed w-6 h-6 ml-2 mt-3 text-black/50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <input 
                            className={InputStyle} 
                            type="password" 
                            name="confirmPassword"
                            placeholder='confirm password' 
                            onChange={(e)=>{e.target.value === user.password ? setCrPss(true) : setCrPss(false);}}
                        />
                        {!isCorrect && <span className='text-base text-red-500'>Пароли не совпадают!</span>}</>}
                        <div className='flex mt-2 text-white justify-between '>
                            <div>
                                <input type="checkbox" id="rememder" className=' cursor-pointer'/>
                                <label className="ml-3 text-base cursor-pointer" htmlFor="rememder">Remember Me</label>
                            </div>
                            <p
                                className=' cursor-pointer'
                            >Forgot password?</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-5 text-red-500 items-center'>
                        {(Empty || NotReg || PassWrong) && <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="w-7 h-7 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>}
                        {Empty && <>Заполните все поля формы!</>}
                        {NotReg && <>Вы ещё не зарегистрированы!</>}
                        {PassWrong && <>Неверный пароль!</>}
                        {alreadyReg && <>Такой пользователь уже существует!</>}
                    </div>
                    <div className="mt-7">
                        {typeForm && <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent bg-[#2fc0ff] px-4 py-2 text-lg font-medium text-white hover:bg-blue-500 active:bg-[#2fc0ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={()=> {
                            if (isCorrect && !Empty){
                                send1();
                            }
                        }}
                        >
                        Sign Up
                        </button>}
                        {!typeForm && <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent bg-[#2fc0ff] px-4 py-2 text-lg font-medium text-white hover:bg-blue-500 active:bg-[#2fc0ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={()=> {
                            if (!Empty){
                                send2();
                            }
                        }}
                        >
                        Log In
                        </button>}
                        {typeForm && <p
                            className='flex justify-center cursor-pointer text-white my-4 hover:text-gray-400'
                            onClick={()=>{
                                closeModal();
                                setTypeForm(false);
                                setCrosPtr(true);
                                resetIsShowing();
                            }}
                        >Are you already registered? Go to log in</p>}
                        {!typeForm && <p
                            className='flex justify-center cursor-pointer text-white my-4 hover:text-gray-400'
                            onClick={()=>{
                                closeModal();
                                setTypeForm(true);
                                resetIsShowing();
                            }}
                        >Are you not registered yet? Go to sign up</p>}
                    </div>
                </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
        </>
    )
}
