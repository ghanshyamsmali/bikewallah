import React from 'react'
import Navbar from '../Component/Navbar'

import Cards from '../Component/Cards'
import Cards1 from '../Component/Cards1'
import Footer from '../Component/Footer'
import MyCarousel from '../Component/MyCarousel1'
import MyCarousel1 from '../Component/MyCarousel1'

function Homepage() {
  return (
    <div>
    {/* <Navbar /> */}
    
    <MyCarousel1/>
    <br />
    <Cards/>
    <br />
    <Cards1/>
    <br />
    <Footer />
    </div>
  )
}

export default Homepage