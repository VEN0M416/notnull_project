import {  Link } from "react-router-dom";
import '../../styles/Navbar.css'

const Rout= () =>{
  return (
  <div className="Navbar">
    <Link to="/" className="nav">Main</Link>
    <Link to="/Page1" className="nav">Page1</Link>
    <Link to="/Page2" className="nav">Page2</Link>
    <Link to="/Page3" className="nav">Page3</Link>
  </div>
  );
}
export default Rout;