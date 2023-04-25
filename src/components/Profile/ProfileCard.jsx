import React, { useState } from "react";
import GenderSelect from "./GenderSelect";
import PhotoInputForm from "./PhotoInput"; 
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { saveFirstName } from "../../core/profileSlice";

const inputStyle = "bg-white/20 rounded px-3 py-1"
const pStyle = "text-xl text-slate-300"
const ProfileForm = () => {
  const [focus, setFocus]=useState(false)
  const [user, setUser]=useState({
    name:"",
    lastname:"",
    nickname:"",
    gender:"",
    bdate:""
  })

  const dispatch = useDispatch();


  return (
    <>
     <div className="container hidden md:flex rounded bg-[#354555d1] backdrop-blur-sm juctify-center">
       <div className="flex flex-col items-center">
         <PhotoInputForm/>
      </div>

       <div className=" items-center justify-center">
         <p className={pStyle}>Имя</p>
         <input placeholder='Имя' 
         className={inputStyle}
         value = {user.name}
          onChange={(e)=>setUser({...user, name: e.target.value})} 
         ></input>

         <p className={pStyle}>Пол</p>
         <GenderSelect
         onChange={(e)=>setUser({...user, gender: e})}
         />
        
     <p className={pStyle}>Никнейм</p>
     <input placeholder="никнейм" 
       className={inputStyle} 
       value={user.nickname} 
       onChange={(e)=>setUser({...user, nickname: e.target.value})}                  
     ></input>
     <br/>
     <button 
       className="my-3 bg-cyan-800 border-white p-1 hover:bg-cyan-900 rounded-[10px] py-1 px-4 active:bg-cyan-950"
       onClick={()=>{
         console.log(user);
         dispatch(saveFirstName(user.name))
       }}
     > Сохранить</button>
   </div>

       <div className="px-2 items-center justify-center">
         <p className={pStyle + " w-full"}>Фамилия</p>
         <input placeholder='Фамилия' 
           className={inputStyle}
           value={user.lastname} 
           onChange={(e)=>setUser({...user, lastname: e.target.value})}                     
         ></input>

         <p className={pStyle}>Дата рождения</p>
        <input type="date" 
           id="meeting-time"
           name="meeting-time"
           onFocus={()=>setFocus(true)}
           className={inputStyle + ` [color-scheme:dark] ${focus?"text-white":"text-gray-400"}`}
           value={user.bdate}
           onChange={(e)=>setUser({...user, bdate: e.target.value})} 
         ></input>  
       </div>
     </div>
      <div className=" bg-slate-700 rounded p-3 md:hidden">
        <button
            className="my-3 bg-cyan-800 border-white p-1 hover:bg-cyan-900 rounded-[10px] py-1 px-4 active:bg-cyan-950" 
          >
            <Link to="/profile">Назад</Link>
          </button>
        <div className="container flex justify-center flex-col">
          
          <PhotoInputForm/>
          <p className={pStyle}>Фамилия</p>
          <input 
            placeholder="Фамилия"
            className={inputStyle}
          />
          <p className={pStyle}>Имя</p>
          <input 
            placeholder="Имя"
            className={inputStyle}
          />
          <p className={pStyle}>Пол</p>
          <GenderSelect/>

          <p className={pStyle}>Дата рождения</p>
          <input type="date" 
              id="meeting-time"
              name="meeting-time"
              onFocus={()=>setFocus(true)}
              className={inputStyle + ` [color-scheme:dark] ${focus?"text-white":"text-gray-400"}`}
              value={user.bdate}
            onChange={(e)=>setUser({...user, bdate: e.target.value})} 
          ></input>
          <p className={pStyle}>Никнейм</p>
          <input 
            className={inputStyle}
            placeholder="nickname"
          />
          <button
            className="my-3 bg-cyan-800 border-white p-1 hover:bg-cyan-900 rounded-[10px] py-1 px-4 active:bg-cyan-950"
          >
          Сохранить   
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
