import {  Link } from "react-router-dom";
import '../../styles/Navbar.css'

const Rout= () =>{
  return (
  <div className="Navbar">
    <Link to="/" className="nav">Main</Link>
    <Link to="/cats" className="nav">Page1</Link>
    <Link to="/sheeps" className="nav">Page2</Link>
    <Link to="/goats" className="nav">Page3</Link>
  </div>
  );
}
export default Rout;