import React from 'react';

import Img4 from '../assets/imagem_sistemas.png';
import Img5 from '../assets/outsourcing.png';
import Img6 from '../assets/legado_aplicativos.png';

const Contact = () => {
  return (
    <>
        <div className='w-[100%] h-[100%] md:h-[500px]'>
            <div className='w-[90%] h-[100%] m-auto flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='text-center md:text-start'>
                    <p className='font-bold text-[#fff] text-4xl'>Recent <span className='text-[#FA002D]'>Jobs</span></p>
                    <p className='text-[#D3D3D3] font-normal text-xl'>Construa uma carreira com a gente</p>
                </div>
                <div className='bg-[#000] w-[80%] md:w-[250px] h-[400px] md:h-[250px] rounded-lg flex items-center justify-center'>
                    <img src={Img4} alt='img' />
                </div>
                <div className='bg-[#000] w-[80%] md:w-[250px] h-[400px] md:h-[250px] rounded-lg flex items-center justify-center'>
                    <img src={Img5} alt='img' />
                </div>
                <div className='bg-[#000] w-[80%] md:w-[250px] h-[400px] md:h-[250px] rounded-lg flex items-center justify-center'>
                    <img src={Img6} alt='img' />
                </div>
            </div>
        </div>
    </>
  );
}

export default Contact;