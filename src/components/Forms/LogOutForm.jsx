import { api } from '../../core/api';
import { useCookies } from 'react-cookie';

export default function LogOutForm() {

    const [cookies, setCookie, removeCookie] = useCookies(['sessionId', 'username']);

    const send = () => {  
        api.post('/authorisation/logout',{sessionId: cookies.sessionId}).then((res)=>{
            if(res.data.status === 'done') {
                console.log('success log out');
                removeCookie('sessionId', { path: '/', sameSite: 'Lax' });
                removeCookie('username', { path: '/', sameSite: 'Lax' });
            }
        });
    }

    return (
        <>
        <div className="">
            <button
            type="button"
            onClick={send}
            className="hover:bg-hoverBg rounded-[10px] py-1 px-4  active:bg-activeBg"
            >Log Out</button>
        </div>
        </>
    )
}
