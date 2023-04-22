import crypto from '../Img/crypto.png';
import Header from '../Header/Header';

const MainPage = () =>{
    return (
      <>
        <Header/>
        <div className='container mx-auto text-white'>

          <p className='text-center text-3xl font-[600] pt-[50px]'>NotNull Company</p>
          <img src={crypto} className="mx-auto pt-6" alt="логотип"/>
          
        </div>
      </>
    );
  }
  export default MainPage;