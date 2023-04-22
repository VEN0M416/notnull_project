import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

import Particle from './background/Particle';
import MainPage from "./components/Pages/MainPage";
import StocksPage from "./components/Pages/StocksPage";
import { StockPage } from "./components/Pages/StockPage";
import Page2 from "./components/Pages/Page2";
import Page3 from "./components/Pages/Page3";
import ChatPage from "./components/Pages/ChatPage";
import ProfilePage from "./components/Pages/ProfilePage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import UnAuthorized from "./components/Pages/UnAuthorized";

function App() {
  const [cookies, setCookie] = useCookies(['sessionId']);

  return (
    <div className="App">
      <Particle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/stocks' element={<StocksPage/>} />
          <Route path='/Page2' element={<Page2/> } />
          <Route path='/Page3' element={<Page3/> } />
          <Route path='/stocks/:symbol' element={<StockPage/>}/>
          <Route path='/profile' element={<ProfilePage/>} />
          <Route path="/*" element={<NotFoundPage/>}/>
          <Route path='/401error' element={cookies.sessionId ? <Navigate to='/' replace /> : <UnAuthorized />} />
          <Route path='/chat' element={cookies.sessionId ? <ChatPage /> : <Navigate to='/401error' replace />} />
          <Route path='/profile' element={cookies.sessionId ? <ProfilePage /> : <Navigate to='/401error' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
