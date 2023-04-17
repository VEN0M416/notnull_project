import React, { useState } from "react";
import GenderSelect from "../GenderSelect/GenderSelect";

const inputStyle = 'bg-white/20 rounded placeholder:text-white text-white px-3 py-1'

const ProfileForm = () => {
  
  const [user, setUser]=useState({
    name:"",
    lastname:"",
    nickname:"",
    gender:"",
    bdate:""
  })

  return (
    <div className="flex mx-1">
      <div className="mx-2 items-center justify-center">
        <p>Имя</p>
        <input placeholder='Имя'
          className={inputStyle}
          value = {user.name}
          onChange={(e)=>setUser({...user, name: e.target.value})} 
        ></input>

        <p>Пол</p>
        <GenderSelect
        onChange={(e)=>setUser({...user, gender: e})}
        
        />
        
        <p>Никнейм</p>
        <input placeholder="никнейм" 
          className={inputStyle} 
          value={user.nickname} 
          onChange={(e)=>setUser({...user, nickname: e.target.value})}                  
        ></input>
        <br/>
        <button 
          className="my-3 rounded border border-white p-1"
          onClick={()=>{
            console.log(user);

          }}
        > Сохранить</button>
      </div>

      <div className="mx-3 items-center justify-center">
        <p>Фамилия</p>
        <input placeholder='Фамилия' 
          className={inputStyle}
          value={user.lastname} 
          onChange={(e)=>setUser({...user, lastname: e.target.value})}                     
        ></input>

        <p>Дата рождения</p>
        <input type="date" 
          id="meeting-time"
          name="meeting-time" defaultValue="2003-03-12"
          className={inputStyle}
          value={user.bdate}
          onChange={(e)=>setUser({...user, bdate: e.target.value})} 
        ></input>  
      </div>
    </div>
  );
};

export default ProfileForm;
