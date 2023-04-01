import { useState } from 'react'
import Modal from './Modal'

const InputStyle=' w-[80%] my-2 p-3 rounded-[10px] bg-gray-200 text-black placeholder:text-black/50 placeholder:font-light placeholder:text-xl';
const InputPos='flex justify-center';

export default function SignUpForm() {
    const [ open, setOpen ] = useState(false)
    return (
        <div>
            <button onClick={() => setOpen(true)} className="hover:bg-hoverBg rounded-[10px] py-1 px-4 active:bg-activeBg">Sign Up</button>
            <Modal open={open} onClose={() => setOpen(false)} FormType='Регистрация'>
                <div className=' text-black my-4 '>
                    <div className={InputPos}>
                        <input type="text" placeholder='Имя' className={InputStyle}/>
                    </div>
                    <div className={InputPos}>
                        <input type="text" placeholder='Фамилия' className={InputStyle}/>
                    </div>
                    <div className={InputPos}>
                        <input type='email' placeholder='Почта' className={InputStyle}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}