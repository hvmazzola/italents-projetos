import React from 'react'
import jsLogo from '../../assets/JS-logo.png'

const Projeto = () => {
  return (
    <div className='bg-cards border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
        <span className='bg-primary border border-green-300 rounded-full text-gray-100 text-primary text-sm px-4 py-1 inline-block mb-4'>React.js</span>
        <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={jsLogo} alt='Imagem da Linguagem'/>
        <div className='flex flex-col items-center my-3 space-y-2'>
            <h1 className='text-white text-2xl font-semibold'>Projeto JS</h1>
            <p className='text-gray-200 text-sm text-center'>descrição do projeto descrição do projeto descrição do projeto descrição do projeto descrição do projeto descrição do projeto descrição do projeto descrição do projeto</p>
            <div className='space-x-4'>
                <span className='bg-secondary rounded-full text-gray-900 text-primary text-sm px-4 py-1 my-2 inline-block'>tecnologia</span>
                <span className='bg-secondary rounded-full text-gray-900 text-primary text-sm px-4 py-1 my-2 inline-block'>tecnologia</span>
                <span className='bg-secondary rounded-full text-gray-900 text-primary text-sm px-4 py-1 my-2 inline-block'>tecnologia</span>
                <span className='bg-secondary rounded-full text-gray-900 text-primary text-sm px-4 py-1 my-2 inline-block'>tecnologia</span>
            </div>
            <button className='bg-primary text-white px-8 py-2 rounded-full transition transform duration-300 hover:scale-105'>Ver Detalhes</button>
        </div>
    </div>
  )
}

export default Projeto