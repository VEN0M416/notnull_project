import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';



function ChatPage () {

    const stompClient = useRef(null);

    const [connection, setConnection] = useState(true);
    const [currentMessage, setCurrentMesssage] = useState("");
    
    const [chatHistory, setChatHistory] = useState([
        {username: "Владимир", message: "Привет", date: "08.04.2023, 11:26:16"},
        {username: "Амон", message: "Привет", date: "08.04.2023, 11:26:17"},
        {username: "Владимир", message: "Как дела?", date: "08.04.2023, 11:26:18"},
        {username: "Амон", message: "Хорошо, ты как?", date: "08.04.2023, 11:26:19"},
        {username: "Владимир", message: "Тоже", date: "08.04.2023, 11:26:20"},
        {username: "Амон", message: "Пока!", date: "08.04.2023, 11:26:21"},
    ]);

    const myName = "Владимир";

    const connected = () => {
        stompClient.current = over(new SockJS('http://localhost:8082/ws'));
        stompClient.current.connect({}, onConnected, onError);
    };

    const onConnected =()=>{
        console.log('WS connected');
        stompClient.current.subscribe('/chatroom/public', chatMessages());
        setConnection(true);
    };

    const chatMessages = (payload) => {

        const payloadData = JSON.parse(payload.body);
        console.log(payloadData);
        setChatHistory((prev)=>[
          ...prev,
          {
            username: payloadData.senderName,
            message: payloadData.message,
            date: payloadData.date
          }]
        );
    };    

    const sendMessage=()=>{
        if(stompClient.current !== null) {
            if (currentMessage.trim() !== "") {
                const newDate = new Date();
                const newMessage = {
                  username: myName,
                  message: currentMessage.trim(),
                  date: newDate.toLocaleString(),
                };
                stompClient.current.send("/app/message", {}, JSON.stringify(newMessage));
                setCurrentMesssage("");
                setChatHistory([...chatHistory, newMessage]);
            }
        }
    };

    const onError =()=>{
        console.log('WS error');
        setConnection(false);
    };

    useEffect(() => { //подключаемся / отключаемся
        stompClient.current = over(new SockJS('http://localhost:8082/ws'));
        stompClient.current.connect({}, onConnected, onError);

        return () => { // выполняется при размонтировании компонента
            stompClient.current && stompClient.current.disconnect();
        };
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          sendMessage();
        }
    };
    
    const chatEndRef = useRef(null); // ссылка на конец чата 

    // Обновляем скролл до конца чата каждый раз, когда добавляется новое сообщение
    useEffect(() => {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    return(<>
        <Header/>
        <div className='container mx-auto h-[90vh] antialiased p-6 text-gray-800 '>
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 bg-gradient-to-tr from-[#141E30]/80 to-[#243B55]/80 ">
                <div className="flex flex-col h-full overflow-x-auto mb-4 ">

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
                        <div ref={chatEndRef} />
                    </div>
                    {!connection && (<div className="text-center text-red-500">Чат сломался :(</div>)}
                </div>
                <div className="flex flex-row items-center h-16 rounded-xl bg-[#314f71] bg-transparent w-full px-4" >

                    <div className="flex-grow ml-4">
                        <div className="relative w-full">
                            <input
                            onKeyDown={handleKeyDown}
                            value={currentMessage}
                            onChange={(e)=>setCurrentMesssage(e.target.value)}
                            type="text"
                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                            />
                        </div>
                    </div>

                    <div className="ml-4">
                        <button 
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
    </>)
}

export default ChatPage;