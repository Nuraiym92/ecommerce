import React from 'react'
import Header from "../Header/Header"
import Hero from "../Hero"
import Category from '../Category/Category'
import Adverd from "../Adverd/Adverd"
import Stock from "../Stock/Stock"
import Footer from '../Footer/Footer'
import "./homescreen.css"
import AdverdSlider from '../AdverdSilder/AdverdSlider'

function HomeScreen() {
  return (
    <div className="app">
    
    <Header/> 
     <Hero/>
     <Stock/>
     <AdverdSlider/>
     <Category/>
     <Adverd/>
     <Footer/>
    </div>
   
  )
}

export default HomeScreen