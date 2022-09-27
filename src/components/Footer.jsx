import React from 'react';

import {BsInstagram, BsTwitter} from 'react-icons/bs';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#1f1f1f] w-[100%] h-[200px] flex items-center justify-center mt-10'>
        <div className='w-[50%] h-[100%] flex flex-col items-center justify-center gap-4'>
            <div className='bg-[#3c6a01] w-[150px] h-[50px]'></div>
            <div className='flex gap-4'>
                <BsInstagram />
                <FaFacebookF />
                <BsTwitter />
                <FaLinkedinIn />
            </div>
            <div>
                <p className='text-sm font-normal text-[#D3D3D3]'>Ⓒ 2022, Samael Marjan</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;