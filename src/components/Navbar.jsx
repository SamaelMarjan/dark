import React from 'react';

const Navbar = () => {
  return (
    <>
        <div className='bg-[#1f1f1f] w-[100%] h-[60px]'>
            <div className='w-[90%] h-[100%] m-auto flex items-center justify-between'>
                <div className='bg-[#3c6a01] w-[30px] h-[30px]'>
                    
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <div className='flex gap-[4px]'>
                        <a href='#home' className='w-[50px] h-[20px] rounded-lg p-1 flex items-center justify-center'>Home</a>
                        <a href='b' className='w-[100%] h-[20px] rounded-lg p-1 flex items-center justify-center'>Services</a>
                        <a href='c' className='w-[1000%] h-[20px] rounded-lg p-1 flex items-center justify-center'>Jobs</a>
                        <a href='d' className='w-[100%] h-[20px] rounded-lg p-1 flex items-center justify-center'>Contact</a>
                    </div>
                    <div className='bg-[#3c6a01] p-2 rounded-lg'>SignUp</div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Navbar;