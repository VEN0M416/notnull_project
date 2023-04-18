import { Data1 } from './MainData';
import React from 'react';
import { useState, useEffect } from 'react';


export const SharesList=({openModal, onData})=>{
    const [tr, setTr] = useState([]);
    const thStyle = 'py-3 px-10';
    const trStyle = 'py-1 px-10';

    const TrList=()=>{
        let trlist=[];
        for(let i = 0; i < Data1.length ; i++){
            let lastData = Data1[i].chartPrice.slice(-1)[0];
            trlist[i]=(
                <tr
                key={i}
                className='text-center bg-cyan-950 hover:bg-white/10 border-2 border-cyan-900'
                >
                    <td className={trStyle}>{Data1[i].name}</td>
                    <td className='grid place-items-center py-1 px-10 h-[34px]'>{
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6 cursor-pointer"
                            onClick={()=>{openModal(); onData(i)}}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                      </svg>                      
                    }</td>
                    <td className={trStyle}>{lastData.date}</td>
                    <td className={trStyle}>{lastData.price}</td>
                    <td className={trStyle}>{Data1[i].changeOnRercent}</td>
                    <td className={trStyle}>{Data1[i].changeOnValue}</td>
                </tr>
            );
        }
        return trlist;
    }

    useEffect(() => {
        setTr(TrList);
    }, []);

    return(
        <>
            <table className='table-auto'>
                <thead className='bg-cyan-900 font-medium '>
                    <tr>
                        <th className={thStyle}>Bank</th>
                        <th className={thStyle}>Chart</th>
                        <th className={thStyle}>CurDate</th>
                        <th className={thStyle}>CurValue, ₽</th>
                        <th className={thStyle}>changAll, %</th>
                        <th className={thStyle}>changAll, ₽</th>
                    </tr>
                </thead>
                <tbody>
                    {tr}
                </tbody>
            </table>
        </>
    );
}
