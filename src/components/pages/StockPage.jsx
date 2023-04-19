import { useParams } from "react-router-dom";

import Header from "../Header/Header";

function StockPage () {
    const stockId = useParams().symbol;
    console.log(stockId);
return (<>
    <Header/>

    <div className="text-white text-3xl p-8">
        <div className="text-base">Здесь должен быть график и тд и тд</div>
        StocPage, symbol = {stockId}
    </div>
</>)
}

export {StockPage};