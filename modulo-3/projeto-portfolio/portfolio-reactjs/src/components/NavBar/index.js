import React from 'react'
import logo from '../../assets/logo.svg'

const NavBar = () => {
  return (
    <header className='bg-secondary z-50 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
          <div className='flex flex-grow items-center'>
            <img src={logo} alt='Logo' className='w-32 cursor-pointer mx-6'/>
            <h1 className='text-center text-3xl px-6 font-semibold text-gray-700'>Henrique Mazzola</h1>
            <h1 className='text-center text-3xl font-semibold text-gray-700'>|</h1>
            <h1 className='text-center text-3xl px-6 font-light text-gray-700'>Full Stack Dev</h1>
          </div>
          <div className='flex items-center justify-end space-x-6'>
            <button>Login</button>
            <button className='bg-primary px-6 py-3 text-white rounded-full transition duration-700 hover:scale-105'>Contato</button>
          </div>
        </nav>
    </header>
  )
}

export default NavBar;