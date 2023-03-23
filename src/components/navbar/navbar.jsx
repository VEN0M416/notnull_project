import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Rout from "./routers";

function Navbar() {
  return (
    <Router>
      <Rout/>
      <Routes>
        <Route path='/' exact component={<Main/>} />
        <Route path='/Page1' component={<Page1/>} />
        <Route path='/Page2' component={<Page2/> } />
        <Route path='/Page3' component={<Page3/> } />
      </Routes>
    </Router>
  );
}

export default Navbar;