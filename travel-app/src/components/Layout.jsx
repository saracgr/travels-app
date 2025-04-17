import {Outlet} from 'react-router-dom'
import React from 'react'
import Header from './Header'

export default function Layout() {
  return (
    <main className='min-h-screen min-w-[100vw] flex-col bg-gradient-to-r 
    from-neutral-900 to-zinc-800 text-white text-sm sm:text-base'>
    <Header/>
    <div className='content-container'>
    <Outlet />
    </div>
    </main>
  )
}
