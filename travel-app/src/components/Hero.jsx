import React from 'react'
import {Link} from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className=' hero flex flex-col gap-5 items-center'>
            <p className='--text-3xl'>TIME TO ZAP</p>
            <h1 className='uppercase font-semibold'>
            WANDER<span className='text-orange-600'>ZAP</span>
            </h1>
            <p className='text-sm md:text-base'>
            Get going, feel inspired, 
            and <span className='text-orange-600 font-bold'> explore</span> the world with our expert tips and support
            </p>
            <button className='mt-5 px-8 py-4 rounded-md border-2 bg-orange-600 border-orange-900 orangeShadow transition duration-300 xl:text-3xl'>
                <Link to='/packages' className='text-white font-medium'>Start Here</Link>
            </button>
      </div>
    </div>
  )
}
