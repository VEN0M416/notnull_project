import { useState } from 'react'
import Modal from './Modal'

const InputStyle=' w-[80%] my-2 p-3 rounded-[10px] bg-gray-200 text-black placeholder:text-black/50 placeholder:font-light placeholder:text-xl';
const InputPos='flex justify-center';

export default function SignUpForm() {
    const [ open, setOpen ] = useState(false);
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
      });

    const Send=(data)=>{
        console.log(data);
    }

    return (
        <div>
            <button onClick={() => setOpen(true)} className="hover:bg-hoverBg rounded-[10px] py-1 px-4 active:bg-activeBg">Sign Up</button>
            <Modal open={open} onClose={() => setOpen(false)} SendData={() => Send(data)} FormType='Регистрация'>
                <div className=' text-black my-4 '>
                    <div className={InputPos}>
                        <input type="text" placeholder='Имя' className={InputStyle} onChange={(e)=>{setData((prevSate)=>({...prevSate,name:e.target.value}))}}/>
                    </div>
                    <div className={InputPos}>
                        <input type="text" placeholder='Фамилия' className={InputStyle} onChange={(e)=>{setData((prevSate)=>({...prevSate,surname:e.target.value}))}}/>
                    </div>
                    <div className={InputPos}>
                        <input type='email' placeholder='Почта' className={InputStyle} onChange={(e)=>{setData((prevSate)=>({...prevSate,email:e.target.value}))}}/>
                    </div>
                    <div className={InputPos}>
                        <input type='text' placeholder='Номер' className={InputStyle} onChange={(e)=>{setData((prevSate)=>({...prevSate,phone:e.target.value}))}}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}