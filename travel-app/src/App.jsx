import { useState, createContext, useEffect } from 'react'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Packages from './components/Packages'
import PackageDetail from './components/PackageDetail'
import { places } from '../data'
import {Routes,Route} from 'react-router-dom'

export const PackageContext = createContext()


function App() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(places);
    places.forEach(place => {
      const img = new Image();
      img.src = place.src;
    });
  }, []);

  return (
    <PackageContext.Provider value={{ packages, setPackages }}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Hero />} />
          <Route path='/packages'  element={<Packages />}/>
          <Route path='/packages/:id' element={<PackageDetail />} />      
        </Route>
      </Routes>
    </PackageContext.Provider>
  )
}

export default App
