import React from 'react'


const Home = () => {
  return (
    <>
    <div id='home'>
        <div className='bg-[#2d2d2d] w-[100%] h-[700px]'>
            <div className='w-[90%] h-[100%] m-auto flex flex-col md:flex-row items-center justify-center gap-4'>
                <div className='gap-4 w-[100%] md:w-[50%] h-[300px] md:h-[400px] flex flex-col items-center justify-center md:items-start'>
                    <p className='w-[100%] md:w[90%] h-[50px] md:h-[35%] font-bold text-xl md:text-5xl'>Desenvolvimento de Sistemas Web e Mobile</p>
                    <p className='font-normal text-lg md:h-[20%]'>Atuamos no desenvolvimento de sistemas web, mobile e integração de banco de dados, sob medida e sob demanda.</p>
                    <a href='a' className=' w-[200px] h-[50px] md:h-[50px] bg-[#555555] flex justify-center items-center'>SABER MAIS AGORA</a>
                </div>
                <div className='bg-[#6A6D9E] w-[100%] md:w-[50%] h-[400px] md:h-[600px] flex items-center justify-center'> 
                    Image/Text
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home