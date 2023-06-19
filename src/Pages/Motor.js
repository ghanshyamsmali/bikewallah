import React from 'react'
import Navbar from '../Component/Navbar'

import Cards from '../Component/Cards'
import Cards1 from '../Component/Cards1'
import Footer from '../Component/Footer'
import Cards2 from '../Component/Cards2'


function Motor() {
  return (
    <div>
      <h2 style={{textAlign: 'center', fontSize: 35, fontWeight: 'bold',marginTop: "5%"}}>Our Collection</h2>
    {/* <Navbar /> */}
    <br />
    <Cards/>
    <br />
    <Cards1/>
    <br/>
    <Cards2/>
    <br />
    <Footer />
    </div>
  )
}

export default Motor