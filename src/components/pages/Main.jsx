import '../styles/Main.css';
import logo from '../Img/logo.png';
import Navbar from '../navbar/navbar';

const Main = () =>{
    return (
      <div className="Main">
      <header className="Header"> 
      <Navbar/>
      </header>
      <div className='Body'>

        <p>NotNull Company</p>
        <img src={logo} className="logo" alt="логотип"/>
        
      </div>
      
    </div>
    );
  }
  export default Main;