import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import CompPage from './stores/pages/CompPage'
import FridgePage from './stores/pages/FridgePage'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TvPage from './stores/pages/TvPage'
import BookPage from './stores/pages/BookPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import AcSingle from './singles/AcSingle'
import ComputerSingle from './singles/ComputerSingle'
import FridgeSingle from './singles/FridgeSingle'
import WatchSingle from './singles/WatchSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import TvSingle from './singles/TvSingle'
import KitchenSingle from './singles/KitchenSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import MenSingle from './singles/MenSingle'
import WomanSingle from './singles/WomanSingle'


const App = () => {
  return (
  <div>
     <Routes>
      <Route path='/' element ={<LandingPage />}/>
      <Route path='/abc' element ={<Kitchen/>}/>
      <Route path='/mobiles' element ={<MobilePage/>}/>
      <Route path='/ac' element ={<AcPage/>}/>
      <Route path='/laptops' element ={<CompPage/>}/>
      <Route path='/fridge' element ={<FridgePage/>}/>
      <Route path='/furniture' element ={<FurniturePage/>}/>
      <Route path='/kitchen' element ={<KitchenPage/>}/>
      <Route path='/watches' element ={<WatchPage/>}/>
      <Route path='/mensdress' element ={<MenPage/>}/>
      <Route path='/womansdress' element ={<WomanPage/>}/>
      <Route path='/speaker' element ={<SpeakerPage/>}/>
      <Route path='/tv' element ={<TvPage/>}/>
      <Route path='/books' element ={<BookPage/>}/>
      <Route path='/cart' element={<UserCart/>} />

             <Route path='/mobiles/:id' element={<MobileSingle/>} />
             <Route path='/ac/:id' element={<AcSingle/>} />
             <Route path='/computers/:id' element={<ComputerSingle/>} />
             <Route path='/fridge/:id' element={<FridgeSingle/>} />
             <Route path='/watch/:id' element={<WatchSingle/>} />
             <Route path='/furniture/:id' element={<FurnitureSingle/>} />
             <Route path='/tv/:id' element={<TvSingle/>} />
             <Route path='/kitchen/:id' element={<KitchenSingle/>} />
             <Route path='/speaker/:id' element={<SpeakerSingle/>} />
             <Route path='/men/:id' element={<MenSingle/>} />
             <Route path='/woman/:id' element={<WomanSingle/>} />
             

            


     </Routes>
  </div>
  )
}

export default App
