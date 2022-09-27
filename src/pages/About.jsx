import React from 'react';

const About = () => {
  return (
    <>
        <div className='w-[100%] h-[200px] md:h-[500px] flex items-center justify-center'>
            <div className='w-[90%] h-[100%] flex items-center justify-center gap-7'>
                <div className='rounded-lg w-[30%] h-[50%] md:h-[70%] bg-[#3c6a01] flex items-center justify-center'>
                    Image/Text
                </div>
                <div className='rounded-lg w-[30%] h-[50%] md:h-[70%] bg-[#3c6a01] flex items-center justify-center'>
                    Image/Text
                </div>
                <div className='rounded-lg w-[30%] h-[50%] md:h-[70%] bg-[#3c6a01] flex items-center justify-center'>
                    Image/text
                </div>
            </div>
        </div>
        <div>
            <p>Clientes que  confiam no nosso trabalho</p>
        </div>
    </>
  );
}

export default About;