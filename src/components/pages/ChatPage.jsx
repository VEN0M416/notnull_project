import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";


function ChatPage () {

    const [connection, setConnection] = useState(false);
    const [currentMessage, setCurrentMesssage] = useState("");
    const [messages, setMessages] = useState([
        {username: "Владимир", message: "Привет"},
        {username: "Амон", message: "Привет"},
        {username: "Владимир", message: "Как дела?"},
        {username: "Амон", message: "Хорошо, ты как?"},
        {username: "Владимир", message: "Тоже"},
        {username: "Амон", message: "Пока!"},
    ]);

    const myName = "Владимир";

    useEffect(() => {
        const Socket = new WebSocket('ws://localhost:8082/ws');

        Socket.onopen = () => {
            console.log('WebSocket opened');
            setConnection(true);
        };

        Socket.onclose = () => {
            console.log('WebSocket closed');
            setConnection(false);
        };

        return () => {
            Socket.close();
        };
    }, []);
    

    const sendMessage = (e) => {
        if (currentMessage.trim() !== "") {
            const newMessage = {
              username: myName,
              message: currentMessage.trim()
            };
            setCurrentMesssage("");
            setMessages([...messages, newMessage]);
          }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          sendMessage();
        }
    };
    
    const chatEndRef = useRef(null); 

    // Обновляем скролл до конца чата каждый раз, когда добавляется новое сообщение
    useEffect(() => {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return(<>
        <Header/>
        <div className='container mx-auto h-[90vh] antialiased p-6 text-gray-800 '>
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 bg-gradient-to-tr from-[#141E30]/80 to-[#243B55]/80 ">
                <div className="flex flex-col h-full overflow-x-auto mb-4 ">

                    <div className="grid grid-cols-12 gap-y-2 ">
                        {messages.map((msg) => (
                            msg.username !== myName ?
                            (<div className="col-start-1 col-end-8 p-3 rounded-lg">
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
                            (<div className="col-start-6 col-end-13 p-3 rounded-lg">
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
                    
                    <div>
                        {/*  <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                            <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            >
                            </path>
                            </svg>
                        </button> */}
                    </div>

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