import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Main  from '../pages/Main.jsx';
import Page1 from "../pages/Page1.jsx";
import Page2 from "../pages/Page2.jsx";
import Page3 from "../pages/Page3.jsx";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Page1' element={<Page1/>} />
        <Route path='/Page2' element={<Page2/> } />
        <Route path='/Page3' element={<Page3/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;