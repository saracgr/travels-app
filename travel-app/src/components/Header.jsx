import React from 'react'
import {Link} from 'react-router-dom'
import plane from '../../public/images/planito.png'
export default function Header() {
  return (
    <header className='flex flex-row justify-between items-center px-4 py-4'>
        <img className='logo max-w-[70px] animate-pulse hover rotate--30 duration-500 ease-in-out' src={plane} alt='plane' />
        <nav className='flex flex-row gap-5'>
            <Link className='bg-orange-600 p-2 rounded-sm' to='/'>Home</Link>
            <Link className='bg-orange-600 p-2 rounded-sm' to='/packages'>Packages</Link>
        </nav>
    </header>
  )
}
