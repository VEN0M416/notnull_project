import '../styles/Main.css';
import logo from '../Img/logo.png';
import Header from '../Header/Header';

const Main = () =>{
    return (
      <div className="Main">
        <Header/>
        <div className='Body'>

          <p>NotNull Company</p>
          <img src={logo} className="logo" alt="логотип"/>
          
        </div>
      
    </div>
    );
  }
  export default Main;