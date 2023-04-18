import { api } from '../../core/api';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

export default function LogOutForm() {

    const [cookies, setCookie, removeCookie] = useCookies(['sessionId', 'username']);
    const navigate = useNavigate();

    const send = () => {  
        api.post('/authorisation/logout',{sessionId: cookies.sessionId}).then((res)=>{
            if(res.data.status === 'done') {
                console.log('success log out');
                removeCookie('sessionId', { path: '/', sameSite: 'Lax' });
                removeCookie('username', { path: '/', sameSite: 'Lax' });
                navigate('/', { replace: true });
            }
        });
    }

    return (
        <>
        <div className="">
            <button
            type="button"
            onClick={send}
            className='hover:bg-violet-500 text-white group flex w-full items-center rounded-md px-2 py-2 text-sm my-1'
            >Выйти</button>
        </div>
        </>
    )
}
