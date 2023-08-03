import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import './home.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Galery from './components/Galery/Galery'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

export const Home = () => {
  
  return (
    <div className='container'>
      <Header/>
      <About/>
      <Galery/>
      <Contact/>
      <Footer/>
    </div>
  )
}


