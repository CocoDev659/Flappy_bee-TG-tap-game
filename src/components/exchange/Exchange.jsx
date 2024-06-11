import React, { useEffect } from 'react'
import Card from './Cards'
import Others from './Others'
import Nav from '../Navigation/nav'
import AOS from 'aos'
import "aos/dist/aos.css";
// import Footer from '../footer/Footer'
import Footer from '../footer/Footer'

const Cards = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      duration: 700,
    });
  }, [])
  
  return (
    <div className=''>
      <Nav />
      <Card />
      <Others />
      <Footer />
    </div>

  )
}

export default Cards