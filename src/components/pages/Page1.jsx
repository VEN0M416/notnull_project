import Header from '../Header/Header'
import React, { useState, useRef, useEffect } from 'react';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient =null;
const Page1 = () => {
  const [userMsg, setUserMsg] = useState({
    senderName: '',
    message: '',
    date: '',
  });
  const [publicMsg, setpublicMsg] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [signed, setSigned] = useState(false);
  const [signedName, setSignedName] = useState(''); 
  const [currentMessage, setCurrentMesssage] = useState("");

  const chatWindowRef = useRef(null);
  
  const connect =()=>{
    let Sock = new SockJS('http://localhost:8082/ws');
    stompClient = over(Sock);
    stompClient.connect({},onConnected, onError);
  }
  const onConnected =()=>{
    console.log('WS connected')
    stompClient.subscribe('/chatroom/public', chatMessages);
  }
  const onError =()=>{
    console.log('WS error')
  }
  const send=()=>{
    if(stompClient !== null) {
      const newDate = new Date();
      var mess={ 
        senderName: userMsg.senderName,
        message: userMsg.message,
        date: newDate.toLocaleString()}
      stompClient.send("/app/message", {}, JSON.stringify(mess));
      setUserMsg((prevState=>({
        ...prevState,senderName: "",
        ...prevState,message: "",
        ...prevState,date: ""
      })));
      setCurrentMesssage("");
    }
  }
  const chatMessages = (payload) => {
    const payloadData = JSON.parse(payload.body);
    console.log(payloadData);
    const isOwnMessage = signedName === payloadData.senderName;
    setpublicMsg((prevState) => [
      ...prevState,
      {
        sender: payloadData.senderName,
        mess: payloadData.message,
        dat: payloadData.date,
        position: isOwnMessage ? "justify-end" : "justify-start", // устанавливаем позицию сообщения
      },
    ]);
    setShowMessage(true);
  };

  useEffect(() => {
    chatWindowRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [publicMsg]);


  return (
    <>
      <Header/>
    <div className=' mx-auto text-white'>

      <p className='text-2xl pt-[50px]'>Page1</p>

      <div className=' border-2 p-4 mt-5'>
        
        {!signed && <div className='flex my-2'>
          <input 
            type="text" 
            placeholder='Имя пользователя' 
            className=' mx-3 text-black px-2 py-1 rounded'
            onChange={(e)=>{
              setUserMsg((prevState=>({...prevState, senderName: e.target.value})));
              setSignedName(e.target.value);
            }}
          />
          <button 
            className='mx-3 bg-gray-400 px-2 rounded'
            onClick={()=>{
              connect();
              setSigned(true);
            }}
          >Подключиться</button>
        </div>}
        {signed && <div className='ml-3 flex my-2 text-lg'>Signed as:{' '+signedName}</div>}
        {signed && <div className=' flex my-2'>
          <input 
            type="text" 
            value={currentMessage}
            placeholder='Введите сообщение' 
            className=' mx-3 text-black px-2 py-1 rounded'
            onChange={(e)=>{
              setUserMsg((prevState=>({...prevState, message: e.target.value})));
              setCurrentMesssage(e.target.value);
            }}
          />
          <button 
            className='mx-3 bg-gray-400 px-2 rounded'
            onClick={()=>{
              setUserMsg((prevState=>({...prevState, date: new Date()})))
              send();
            }}
          >Отправить</button>
        </div>}

        <div className='border-2 h-[500px] mx-3 my-4 text-white overflow-auto'>
          {showMessage &&
            publicMsg.map((msg, index) => (
              <div key={index} className={`flex my-3 mx-10 ${msg.position}`}>
              <div className='bg-white p-1 px-3 rounded-l text-lg text-black'>{msg.sender + " : " + msg.mess}</div>
              <div className='bg-gray-400 p-1 pr-1 items-end pt-3 rounded-r text-sm text-black'>{msg.dat}</div>
            </div>
          ))}
          <div ref={chatWindowRef}/>
        </div>

      </div>
      
    </div>
    </>
  );
}
  export default Page1;