import './styles/App.css';
import Particle from './background/Particle';
import Navbar from './components/navbar/navbar';
import logo from './components/logo.png';


function App() {

  return (
    <div className="App">
      <Particle/>
      <header className="Header"> 
      <Navbar/>
      </header>
      <body>

        <p>NotNull Company</p>
        <img src={logo} className="logo"/>
        
      </body>
      
    </div>
  );
}

export default App;
