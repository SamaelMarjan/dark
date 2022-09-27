import React from 'react';

const Navbar = () => {
  return (
    <>
        <div className='bg-[#1f1f1f] w-[100%] h-[60px]'>
            <div className='w-[90%] h-[100%] m-auto flex items-center justify-between'>
                <div className='bg-[#3c6a01] w-[30px] h-[30px]'>
                    
                </div>
                <div>
                    <div>
                        <a href='#home'>Home</a>
                        <a href='b'>Serviços</a>
                        <a href='c'>Vagas</a>
                        <a href='d'>Contato</a>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Navbar;