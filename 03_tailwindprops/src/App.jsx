import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let productDetails1 = {
    productName : "boAt Airdopes 161",
    productPrice : "20.00",
    productDescription : "Wireless Earbuds with Massive Playback of upto 40 Hours, IPX5 Water & Sweat Resistance, IWP Technology, Type C Interface" 
  }
  let productDetails2 = {
    productName : "boAt Airdopes 141",
    productPrice : "25.00",
    productDescription : "Wireless Earbuds with 8mm drivers, Upto 42 Hours Playback, ENx™ Technology, IPX4 Water Resistance" 
  }  

  return (
    <>
      {/* <h1 className="text-stone-600 underline">Tailwind test</h1> */}
      <Card cardName="Shoping Card" productDetails={productDetails1} />
      <Card cardName="Shoping Card" productDetails={productDetails2} btntext="Add To Cart" />
    </>
  )
}

export default App
