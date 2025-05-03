import { React } from 'react'
import { useState, useContext, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import { PackageContext } from '../App' 
import { FaArrowAltCircleLeft } from 'react-icons/fa'

export default function PackageDetail(){
    const { id } = useParams()
    const { packages } = useContext(PackageContext)
    const [packagePlace, setPackagePlace] = useState(null);
    const [weather, setWeather] = useState(null)
    const [loadedImages, setLoadedImages] = useState(false);
    
      const handleImageLoad = () => { 
        setLoadedImages(false)
        let loadTimeOut
        clearTimeout(loadTimeOut)  
        loadTimeOut = setTimeout(() => {
        setLoadedImages(true)
        },100)
      };
    

    useEffect(() => {
      const foundPackage = packages.find(place => place.id.toString() === id);
      setPackagePlace(foundPackage); 
      handleImageLoad()
    }, [id, packages]);

    useEffect(() => {
        try{
            fetch('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=d7uh6dfyigxcTnqGA8gPZVc10H2qxtFf&q=chongqqing')
            .then(res => res.json())
            .then (data => {
                console.log(data)
            })
        }catch(error){
            console.log(error)
        }    
    }, [])

    return(
        <>
        <section className=' details-container flex justify-center items-center align-center'>
        { packagePlace && 
                <div key={packagePlace.city} className='details-card flex items-center justify-center align-center bg-neutral-950 rounded-md gap-5 py-5 px-5'>
                    <img className={`detailImg transition-opacity duration-500 
                        ${loadedImages ? 'opacity-100' : 'opacity-0'}`} 
                        src={packagePlace.src} 
                        onLoad={() => handleImageLoad(packagePlace.city)}
                        alt={packagePlace.city}
                        />
                    <div className='details'> 
                        <h1 className='text-orange-600'>{packagePlace.city}</h1>
                        <p className='text-m'>{packagePlace.description}</p>
                        <Link className="p-5" to='/packages'>
                            <FaArrowAltCircleLeft className=' arrow text-orange-600'/>
                        </Link>  
                    </div> 
              </div> 
        }    
    </section>

    </>
    )
}


