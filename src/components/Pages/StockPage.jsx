import { useParams } from "react-router-dom";
import { ChartList } from "../Charts/ChartList";
import { DataStocks } from "../Charts/MainData";
import { useNavigate } from 'react-router-dom';

import Header from "../Header/Header";

function StockPage() {
    const stockId = useParams().symbol;
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className=" w-11/12 mx-auto bg-gradient-to-tr from-white/10 to-white/20 backdrop-blur-md rounded-lg shadow-md p-8 mt-5">
                <div className="mb-5 text-white font-normal text-2xl flex justify-center items-center space-x-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" fixed left-[32px] w-6 h-6 cursor-pointer"
                        onClick={()=>navigate(-1)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    <div>{DataStocks.map((stock) => ((stock.ticket === stockId) ? stock.name : ""))}</div>
                    <div>{stockId}</div>
                </div>
                <div className="container mx-auto">
                    <ChartList ticket={stockId} />
                </div>
            </div>
        </>
    )
}

export { StockPage };