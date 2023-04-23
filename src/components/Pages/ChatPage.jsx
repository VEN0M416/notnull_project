import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import { useCookies } from 'react-cookie';
import { api } from "../../core/api";


function ChatPage () {
    const [cookies, setCookie] = useCookies(['username']);
    const stompClient = useRef(null); // ссылка но зачем уже не помню

    const [connection, setConnection] = useState(true); // подключены ли мы 
    const [currentMessage, setCurrentMessage] = useState(""); // отправляемое сообщение
    
    const [chatHistory, setChatHistory] = useState([]); // все сообщения чата

    const myName = cookies.username;

    const onConnected =()=>{ // подключаемся)))
        console.log('WS connected');
        stompClient.current.subscribe('/chatroom/public', chatMessages);
        setConnection(true);
    };

    const chatMessages = (payload) => { // слушаем сервер и добавляем в chatHistory
        console.log(payload);
        const payloadData = JSON.parse(payload.body);
        console.log(payloadData);
        setChatHistory((prev)=>[
          ...prev,
          {
            username: payloadData.username,
            message: payloadData.message,
            date: payloadData.date
          }]
        );
    };    

    const sendMessage=()=>{ // угадай по названию 
        if(stompClient.current !== null) {
            if (currentMessage.trim() !== "") {
                const newDate = new Date();
                const newMessage = {
                  username: myName,
                  message: currentMessage.trim(),
                  date: newDate.toLocaleString(),
                };
                stompClient.current.send("/app/message", {}, JSON.stringify(newMessage));
                setCurrentMessage("");
            }
        }
    };

    const onError =()=>{ // ничего не работает 
        console.log('WS error');
        setConnection(false);
    };

    useEffect(() => { //подключаемся / отключаемся
        stompClient.current = over(new SockJS('http://localhost:8082/ws'));
        stompClient.current.connect({}, onConnected, onError); 
        getHistoryOfChat(); // первичная загрузка сообщений (не помню)

        return () => { // выполняется при размонтировании компонента
            stompClient.current && stompClient.current.disconnect();
        };
    }, []);

    const handleKeyDown = (event) => { // отправка при нажатии Enter
        if (event.key === "Enter") {
          sendMessage();
        }
    };

    const getHistoryOfChat=()=>{
        api.get('/pastMessages/load').then((res)=> {
            console.log(res.data);
            Object.entries(res.data).map(([key, value]) => {
                setChatHistory((prev)=>[
                    ...prev,
                    {
                        username: value.username,
                        message: value.message,
                        date: value.date
                    }]
                );
            })
            /* const payloadData = JSON.parse(payload.body);
            console.log(payloadData);
            setChatHistory((prev)=>[
            ...prev,
            {
                username: payloadData.username,
                message: payloadData.message,
                date: payloadData.date
            }]
            ); */
        })
    }
    
    const chatEndRef = useRef(null); // ссылка на конец чата для скрола

    // Обновляем скролл до конца чата каждый раз, когда добавляется новое сообщение
    useEffect(() => {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    return(<>
        <Header/>
        <div className='container mx-auto h-[90vh] antialiased p-6 text-gray-800 '>
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 bg-gradient-to-tr from-[#141E30]/80 to-[#243B55]/80 ">
                <div className="flex flex-col h-full overflow-x-auto mb-4 ">
                <div className="overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 h-full">

                    <div className="grid grid-cols-12 gap-y-2 ">
                        {chatHistory.map((msg) => ( /* выводим весь чат */
                            msg.username !== myName ? /* чьё сообщение  */
                            (<div key={msg.date} className="col-start-1 col-end-8 p-3 rounded-lg">
                                <div className="flex flex-row items-center">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                        {msg.username[0]} {/* // первая буква */}
                                    </div>
                                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                        <div>{msg.message}</div>
                                    </div>
                                </div>
                            </div>)
                            :
                            (<div key={msg.date} className="col-start-6 col-end-13 p-3 rounded-lg">
                                <div className="flex items-center justify-start flex-row-reverse">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                        {msg.username[0]}
                                    </div>
                                    <div className="relative mr-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                        <div>{msg.message}</div>
                                    </div>
                                </div>
                            </div>)
                        ))}
                        <div ref={chatEndRef} /> {/* ссылка на конец чата */}
                    </div>
                    {!connection && (<div className="text-center text-red-500">Чат сломался :(</div>)} {/* если connection = false */}
                </div>
                <div className="flex flex-row h-16 rounded-xl bg-[#314f71] bg-transparent w-full px-4" >

                    <div className="flex-grow ml-4 ">
                        <div className="relative w-full">
                            <input /* ввод сообщения */
                            onKeyDown={handleKeyDown}
                            value={currentMessage}
                            onChange={(e)=>setCurrentMessage(e.target.value)}
                            type="text"
                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                            />
                        </div>
                    </div>

                    <div className="ml-4">
                        <button /* кнопка отправить */
                            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                            onClick={sendMessage}
                            >
                            <span>Send</span>
                            <span className="ml-2">
                            <svg
                                className="w-4 h-4 transform rotate-45 -mt-px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>  
            </div>
        </div>
        </div>
    </>)
}

export default ChatPage;