import React from 'react';

import Img from '../assets/legado_aplicativos.png';

const Home = () => {
  return (
    <>
    <div id='home'>
        <div className='w-[100%] h-[800px] md:h-[670px]'>
            <div className='w-[90%] h-[100%] m-auto flex flex-col md:flex-row items-center justify-center gap-4'>
                <div className='gap-4 w-[100%] md:w-[50%] h-[300px] md:h-[400px] flex flex-col items-center justify-center md:items-start text-[#D3D3D3]'>
                    <p className='w-[100%] md:w[90%] h-[50px] md:h-[35%] font-bold text-xl md:text-5xl text-[#fff]'>Web and Mobile Systems Development</p>
                    <p className='font-normal text-lg md:h-[20%]'>We work in the development of web and mobile systems and database integration, tailored and on demand.</p>
                    <a href='a' className='rounded-lg w-[200px] h-[50px] md:h-[50px] bg-[#555555] flex justify-center items-center hover:bg-[#3c6a01] text-[#fff]'>KNOW MORE NOW</a>
                </div>
                <div className='w-[100%] md:w-[50%] h-[400px] md:h-[600px] flex items-center justify-center'> 
                    <img src={Img} alt='img' />
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Home;