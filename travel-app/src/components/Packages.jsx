import { React, useEffect } from 'react'
import { useState, useRef, createContext, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { PackageContext } from '../App' 
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Packages() {
  const { packages } = useContext(PackageContext);
  const [loadedImages, setLoadedImages] = useState(false);
  
  const loadTimeOut = useRef(null);
      
    const handleImageLoad = () => { 
        clearTimeout(loadTimeOut.current)  
        loadTimeOut.current = setTimeout(() => {
        setLoadedImages(true)
        },100)
    };
     
return (
    <section className='packages-container '>
        <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl'>GRAB THE LATEST PROMOTIONS !</h1>
        <div className='packages'>
        { packages && packages.length > 0 &&
          packages.map(place => (
            <div key={place.city} className='card flex justify-between items-start bg-neutral-950 rounded-md gap-2 py-5 px-5'>                    
                <div className='card-details flex items-center'> 
                   <img className={`packageImg transition-opacity duration-500 ${loadedImages ? 'opacity-100' : 'opacity-0'}`} 
                   alt={`${place.city}, ${place.country}`}
                   onLoad={handleImageLoad}
                   src={place.src}/>
                    <p className='text-white text-m px-3'>
                        {place.city},
                        <span className='text-xs uppercase text-orange-600  mt-0 py-0'> {place.country}</span>
                    </p>
                </div>
                 <Link to={`${place.id}`}>
                    <FaArrowAltCircleRight className=' arrow text-orange-600'/>
                 </Link>
             </div>
          ))
        }
        </div>
    </section>
  )
}

