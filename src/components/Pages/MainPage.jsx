import crypto from '../Img/crypto.png';
import Header from '../Header/Header';

import { useSelector } from 'react-redux';

const MainPage = () =>{

  const name =useSelector(state => state.profile.firstname)
    return (
      <>
        <Header/>
        <div className='container mx-auto text-white'>

          <p className='text-center text-3xl font-[600] pt-[50px]'>NotNull Company</p>
          <img src={crypto} className="mx-auto pt-6" alt="логотип"/>
          

          <div className='text-3xl text-red-500 m-8'>{name}</div>
        </div>
      </>
    );
  }
  export default MainPage;