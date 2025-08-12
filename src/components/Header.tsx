import React from 'react'
import { FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <div className='w-full bg-red-800 flex justify-between'>
        <div className='text-white text-xl p-2'>
           Todo App
        </div>
        <a href="https://github.com/Parveengill02" target="_blank" rel='noopener noreferrer'>
            <div className='text-white text-xl p-2'>
         <FaGithub />

        </div>
        </a>
    
    </div>
  )
}

export default Header