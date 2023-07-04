import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Registration from './Components/Registration'
import About from './Components/About'
import Rooms from './Components/Rooms'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import NavEveryPage from './Components/NavEveryPage'

const App = () => {
  return (
    <>
       <BrowserRouter>
       <NavEveryPage/>
       <NavEveryPage/>
       <NavEveryPage/>
       <NavEveryPage/>
       <NavEveryPage/>
         <Routes>
           <Route path='/' element = {<Navbar/>}/>
           <Route path='/about' element = {<About/>}/>
           <Route path='/rooms' element = {<Rooms/>}/>
           <Route path='/services' element = {<Services/>}/>
           <Route path='/testim' element = {<Testimonials/>}/>
           <Route path='/register' element = {<Registration/>}/>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
