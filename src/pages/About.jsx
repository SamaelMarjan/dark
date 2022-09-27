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
        <div className='w-[90%] h-[100%] m-auto flex flex-col gap-4'>
            <div className='w-[100%] h-[900px] md:h-[500px] flex flex-col md:flex-row gap-4'>
                <div className='rounded-lg w-[100%] md:w-[50%] h-[40%] md:h-[100%] bg-[#3c6a01] flex items-center justify-center'>Image/Text</div>
                <div className='w-[100%] md:w-[50%] h-[30%] md:h-[100%] flex flex-col justify-center gap-4'>
                    <p className='w-[100%] md:w-[90%] h-[50%] md:h-[15%] font-bold text-4xl'>
                        Systems development <span className='block text-[#FA002D]'>web <span className='text-[#fff]'>and</span> mobile</span>
                    </p>
                    <p className='w-[100%] md:w-[90%] h-[50%] font-normal text-lg'>
                        We work in the development of web and mobile systems and database integration, tailored and on demand. The main technologies are php, c#, react native, angular.js, react.js, node.js, java, among others. Systems development has the following modalities: Project development, from analysis to implementation; Project development, development and implementation; Development of specific demands in legacy systems; Reactive or predictive systems support;
                    </p>
                </div>
            </div>
            <div className='w-[100%] h-[900px] md:h-[500px] flex flex-col md:flex-row gap-4'>
                <div className=' w-[100%] md:w-[50%] h-[60%] md:h-[100%] flex flex-col md:justify-center gap-4'>
                    <p className='mt-[100px] md:mt-0 w-[100%] md:w-[90%] h-[22%] md:h-[15%] font-bold text-4xl'>
                        Maximizing your productivity
                        <span className='block text-[#FA002D]'>Outsourcing</span>
                    </p>
                    <p className='w-[100%] md:w-[90%] h-[50%] md:h-[30%] font-normal text-lg'>
                        We are looking for professionals in the job market to work for our clients. The professional goes through a selection, tests and evaluations to identify if the candidate's profile is compatible with the vacancy profile of our clients. The professional can be hired in the following ways: PJ or CLT by us and allocated within the client's office; PJ or CLT by us and acting in our office with the client's demands;
                    </p>
                </div>
                <div className='rounded-lg w-[100%] md:w-[50%] h-[40%] md:h-[100%] bg-[#3c6a01] flex items-center justify-center'>Image/Text</div>
            </div>
            <div className=' w-[100%] h-[900px] md:h-[500px] flex flex-col md:flex-row gap-4'>
                <div className='rounded-lg w-[100%] md:w-[50%] h-[40%] md:h-[100%] bg-[#3c6a01] flex items-center justify-center'>Image/Text</div>
                <div className='w-[100%] md:w-[50%] h-[30%] md:h-[100%] flex flex-col items-center justify-center gap-4'>
                    <p className='w-[100%] md:w-[90%] h-[60%] md:h-[15%] font-bold text-4xl'>
                        systems support
                        <span className='block text-[#FA002D]'>legacy <span className='text-[#fff]'>and</span> applications</span>
                    </p>
                    <p className='w-[100%] md:w-[90%] h-[40%] md:h-[20%] font-normal text-lg'>
                        We work on the knowledge of our customers' legacy systems so that we can provide the support, small adjustments and development necessary for their evolution and continuity. We set up and adapt the support team according to the reality of each company. Languages ​​we support: .Net, C#, PHP and React Native
                    </p>
                </div>
            </div>
            <div className='w-[100%] h-[900px] md:h-[500px] flex flex-col md:flex-row gap-4'>
                <div className='w-[100%] md:w-[50%] h-[45%] md:h-[100%] flex flex-col md:justify-center gap-4'>
                    <p className='md:mt-0 w-[100%] md:w-[90%] h-[22%] md:h-[15%] font-bold text-4xl'>
                        Selection with
                        <span className='block text-[#FA002D]'>hunting accuracy</span>
                    </p>
                    <p className='w-[100%] md:w-[90%] h-[70%] md:h-[30%] font-normal text-lg'>
                        Buscamos profissionais no mercado de trabalho para os nossos clientes contratarem internamente. O profissional passa por uma seleção, testes e avaliações para identificar se o perfil do candidato é compatível com o perfil da vaga de nossos clientes. O profissional pode ser contratado da seguinte maneira:
                        PJ ou CLT vinculado ao cliente, e atuando dentro das dependências do cliente;
                    </p>
                </div>
                <div className='rounded-lg w-[100%] md:w-[50%] h-[40%] md:h-[100%] bg-[#3c6a01] flex items-center justify-center'>Image/Text</div>
            </div>
        </div>
    </>
  );
}

export default About;