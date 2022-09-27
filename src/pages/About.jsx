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
                        Desenvolvimento de sistemas <span className='block text-[#FA002D]'>web <span className='text-[#fff]'>e</span> mobile</span>
                    </p>
                    <p className='w-[100%] md:w-[90%] h-[50%] font-normal text-lg'>
                        Trabalhamos no desenvolvimento de sistemas web, mobile e integração de banco de dados, sob medida e sob demanda. As tecnologias principais são php, c#, react native, angular.js, react.js, node.js, java, entre outras. O desenvolvimento de sistemas tem as seguintes modalidades:
                        Desenvolvimento de projeto, da análise a implantação;
                        Desenvolvimento de projeto, desenvolvimento e implantação;
                        Desenvolvimento de demandas pontuais em sistemas legados;
                        Sustentação de sistemas reativa ou preditiva;
                    </p>
                </div>
            </div>
            <div className='w-[100%] h-[900px] md:h-[500px] flex flex-col md:flex-row gap-4'>
                <div className=' w-[100%] md:w-[50%] h-[60%] md:h-[100%] flex flex-col md:justify-center gap-4'>
                    <p className='mt-[100px] md:mt-0 w-[100%] md:w-[90%] h-[22%] md:h-[15%] font-bold text-4xl'>
                        Maximizando sua produtividade <span className='block text-[#FA002D]'>Outsourcing</span>
                    </p>
                    <p className='w-[100%] md:w-[90%] h-[50%] md:h-[30%] font-normal text-lg'>
                        Buscamos profissionais no mercado de trabalho para atuar em nossos clientes. O profissional passa por uma seleção, testes e avaliações para identificar se o perfil do candidato é compatível com o perfil da vaga de nossos clientes. O profissional pode ser contratado das seguintes maneiras:
                        PJ ou CLT por nós e alocado dentro do escritório do cliente;
                        PJ ou CLT por nós e atuando em nosso escritório com demandas do cliente;
                    </p>
                </div>
                <div className='rounded-lg w-[100%] md:w-[50%] h-[40%] md:h-[100%] bg-[#3c6a01] flex items-center justify-center'>Image/Text</div>
            </div>
            <div className=' w-[100%] h-[900px] md:h-[500px] flex flex-col md:flex-row gap-4'>
                <div className='rounded-lg w-[100%] md:w-[50%] h-[40%] md:h-[100%] bg-[#3c6a01] flex items-center justify-center'>Image/Text</div>
                <div className='w-[100%] md:w-[50%] h-[30%] md:h-[100%] flex flex-col items-center justify-center gap-4'>
                    <p className='w-[100%] md:w-[90%] h-[60%] md:h-[15%] font-bold text-4xl'>
                        Sustentação de sistemas <span className='block text-[#FA002D]'>legados <span className='text-[#fff]'>e</span> aplicativos</span>
                    </p>
                    <p className='w-[100%] md:w-[90%] h-[40%] md:h-[20%] font-normal text-lg'>
                        Trabalhamos no conhecimento dos sistemas legado de nossos clientes para que possamos dar o suporte, pequenos ajustes e desenvolvimento necessário para a evolução e continuidade dos mesmos. Montamos e adequamos a equipe de sustentação conforme a realidade de cada empresa. Linguagens que atendemos na sustentação: .Net, C#, PHP e React Native
                    </p>
                </div>
            </div>
            <div className='w-[100%] h-[900px] md:h-[500px] flex flex-col md:flex-row gap-4'>
                <div className='w-[100%] md:w-[50%] h-[45%] md:h-[100%] flex flex-col md:justify-center gap-4'>
                    <p className='md:mt-0 w-[100%] md:w-[90%] h-[22%] md:h-[15%] font-bold text-4xl'>
                    Seleção com<span className='block text-[#FA002D]'>precisão hunting</span>
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