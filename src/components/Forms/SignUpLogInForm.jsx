import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { api } from '../../core/api';
import { useTimeoutFn } from 'react-use';
import { useCookies } from 'react-cookie';

const InputStyle=' flex w-full my-4 p-3 pl-9 rounded-[10px] bg-gray-100 placeholder:text-black/50 placeholder:font-light placeholder:text-xl';


export default function SignUpLogInForm({buttonColor}) {

    const [, setCookie] = useCookies(['sessionId','username']);
    const [PassWrong ,setPassWrong] = useState(false);
    const [NotReg ,setNotReg] = useState(false);
    const [alreadyReg ,setAlreadyReg] = useState(false);
    const [mailAlreadyReg, setMailAlreadyReg] = useState(false);
    const [alert, setAlert] = useState(false);
    const [confirmCode, setConfirmCode] = useState("");
    const [codeEmpty, setCodeEmpty] = useState(false);
    const [EmptyEmail, setEmptyEmail] = useState(false);
    const [codeError, setCodeError] = useState(false);

    const [user, setUser] = useState({
        name:"",
        password:"",
        mail:""
    })
    const [isCorrect, setCrPss] = useState(true);
    const [Empty, setEmpty] = useState(false);

    const [typeForm, setTypeForm] = useState(true); /* true - sign up form; false - log in form*/

    const send1 = () => {
        if (user.name === "" || user.password === "" || user.mail === "") {
            setEmpty(true);
            setEmptyEmail(true);
            return;
        } 
        api.post('/authorisation/registration/createRegistrationCode',{username: user.name, mail: user.mail}).then((res)=>{
            if(res.data.status === 'done'){
                api.post('/authorisation/registration/sendCode',{mail: user.mail});
                setAlert(true);
            } else if(res.data.status === 'user already exists'){
                setAlreadyReg(true);
                return;
            } else if(res.data.status === 'mail already exists'){
                setMailAlreadyReg(true);
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

    const isEmptyEmail=()=>{
        (user.mail === "")? setEmptyEmail(true) : setEmptyEmail(false);
    }
    const isEmpty=()=>{
        (user.name === "" || user.password === "")? setEmpty(true) : setEmpty(false);
    }
    const isCodeEmpty=()=>{
        (confirmCode === "")? setCodeEmpty(true) : setCodeEmpty(false);
    }

    const sendCode = () =>{
        if (confirmCode === ""){
            setCodeEmpty(true);
            return;
        }
        api.post('/authorisation/registration/mailConfirmation',{username: user.name, mail: user.mail, password: user.password, code: confirmCode}).then((res)=>{
            if(res.data.status === 'done'){
                api.post('/authorisation/login',{username: user.name, password: user.password}).then((res)=>{
                    setCookie('sessionId', res.data.sessionId, { path: '/', sameSite: 'Lax' });
                    setCookie('username', user.name, { path: '/', sameSite: 'Lax' });
                    closeModal();
                    setUser({name: "", password: ""});
                });
                console.log("Пользователь успешно зарегистрирован!");
            } else if (res.data.status === 'denied'){
                setCodeError(true);
            }
        });
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
        setMailAlreadyReg(false);
        setAlert(false);
        setConfirmCode("");
        setCodeError(false);
        setEmptyEmail(false);
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
            className={`${buttonColor} ${buttonColor ? 'hover:bg-blue-700':'hover:bg-hoverBg'}  rounded-[10px] py-1 px-4 mx-1 active:bg-activeBg`}
            >Sign Up</button>
            <button
            type="button"
            onClick={()=>{
                openModal();
                setTypeForm(false);
            }}
            className={`${buttonColor} ${buttonColor ? 'hover:bg-blue-700':'hover:bg-hoverBg'} hover:bg-hoverBg rounded-[10px] py-1 px-4 mx-1 active:bg-activeBg`}
            >Log In</button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={openModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg border-2 border-[#8696b0]  bg-gradient-to-b from-[#32528a] to-[#30384a] p-6 text-left align-middle shadow-xl transition-all">
                    

                    <Dialog.Title
                        as="h3"
                        className="flex justify-center mb-7 text-lg font-medium leading-6 text-white"
                    >
                        {!alert && <><svg 
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
                        {!typeForm && <>USER LOGIN</>}</>}
                        {alert && <>CONFIRM EMAIL</>}
                    </Dialog.Title>

                    {!alert && <><div className="opacity-0 animate-appearanceInp mt-2">
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
                        {typeForm && <><svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className=" fixed w-6 h-6 ml-2 mt-3 text-black/50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <input 
                            className={InputStyle} 
                            type="email" 
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            placeholder='email' 
                            onChange={(e)=>{setUser((prevState=>({...prevState,mail: e.target.value}))); isEmptyEmail();}}
                        /></>}
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
                        {!isCorrect && <span className='flex justify-center text-base text-red-500'>Пароли не совпадают!</span>}</>}
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
                        {(Empty || EmptyEmail) && <>Заполните все поля формы!</>}
                        {NotReg && <>Вы ещё не зарегистрированы!</>}
                        {PassWrong && <>Неверный пароль!</>}
                        {alreadyReg && <>Такой пользователь уже зарегистрирован!</>}
                        {mailAlreadyReg && <>Пользователь с такой почтой уже зарегистрирован!</>}
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
                                setCrosPtr(true);
                                resetIsShowing();
                            }}
                        >Are you not registered yet? Go to sign up</p>}
                    </div></>}
                    {alert && <>
                        <div className="opacity-0 animate-appearanceInp mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="fixed w-6 h-6 ml-2 mt-3 text-black/50">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <input 
                                className={InputStyle} 
                                type="text" 
                                placeholder='enter code' 
                                onChange={(e)=>{setConfirmCode(e.target.value); isCodeEmpty();}}
                            />
                        </div>
                        <div className='flex justify-center my-5 text-red-500 items-center'>
                            {codeEmpty && <>Введите код!</>}
                            {codeError && <>Неверный код!</>}
                        </div>
                        <div className='flex justify-between space-x-3'>
                            <button
                                className="w-1/2 rounded-md border border-transparent bg-[#2fc0ff] px-4 py-2 text-base text-white hover:bg-blue-500 active:bg-[#2fc0ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={sendCode}
                            >SEND CODE</button>
                            <button
                                className="w-1/2 rounded-md border border-transparent bg-[#2fc0ff] px-4 py-2 text-base text-white hover:bg-blue-500 active:bg-[#2fc0ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={()=>setAlert(false)}
                            >BACK</button>
                        </div>
                    </>}
                </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
        </>
    )
}
