import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import  Main  from '../pages/Main.jsx';
import Page1 from "../pages/Page1.jsx";
import Page2 from "../pages/Page2.jsx";
import Page3 from "../pages/Page3.jsx";
import Page4 from "../pages/Page4.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ChatPage from "../pages/ChatPage.jsx";
import { useCookies } from 'react-cookie';
import Profile from "../pages/Profile.jsx";
import Unauthorized from "../pages/UnAuthorized.jsx";


function Router() {
  const [cookies, setCookie] = useCookies(['sessionId']);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Page1' element={<Page1/>} />
        <Route path='/Page2' element={<Page2/> } />
        <Route path='/Page3' element={<Page3/> } />
        <Route path='/Page4' element={<Page4/> } />
        <Route path='/profile' element={<Profile/>} />
        <Route path="/*" element={<NotFoundPage/>}/>
        <Route path='/401error' element={cookies.sessionId ? <Navigate to='/' replace /> : <Unauthorized />} />
        <Route path='/chat' element={cookies.sessionId ? <ChatPage /> : <Navigate to='/401error' replace />} />
        <Route path='/profile' element={cookies.sessionId ? <Profile /> : <Navigate to='/401error' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;