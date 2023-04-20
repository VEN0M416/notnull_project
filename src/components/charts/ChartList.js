import { DataStocks } from './MainData';
import LineChart from './LineChart';
import React from 'react';


export const ChartList=({ticket})=>{
    const fillData=()=>{
        for(let i = 0; i < DataStocks.length ; i++){
            if (DataStocks[i].ticket===ticket){
                let Data={
                    labels: DataStocks[i].chartPrice.map((data) => data.date),
                    datasets: [{
                        label: DataStocks[i].name,
                        data: DataStocks[i].chartPrice.map((data) => data.price),
                    }]
                }
                return Data;
            }
        }
        
    }

    return(
        <>
            <div className=' bg-slate-900 rounded-lg p-2 '>
                <LineChart chartData={fillData()} />
            </div>
        </>
    );
}