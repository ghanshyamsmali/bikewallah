import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import './Contactus.css'


function Contactus() {
    return (
        <div >
            {/* <Navbar/> */}
        <div>
            <br/>
            <br/>
            <br/>

  <h2 style={{textAlign: 'center', fontSize: 35, fontWeight: 'bold'}}>Our Team</h2>
  <br/>
  <br/>
  <br/>
  <div className="row justify-content-center ">
    <div className="col-sm-12 col-md-3">
      <div className="card">
        <img src="/img/image_sham.png" alt="Jane" style={{height: 220}} />
       
        <div className="container">
        <br/>
          <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Ghanshyam Mali </h4>
          <p className="title"style={{textAlign: 'center', fontWeight: 'bold'}}>Team 60</p>
          {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
          <p style={{textAlign: 'center', fontWeight: 'bold'}}>8999764387</p>
          <p style={{textAlign: 'center', fontWeight: 'bold'}}>ghanshyams.mali.com</p>
          <p style={{ textAlign: 'center' }}>
  <button className="button">Contact</button>
</p>
          {/* <p><a href="https://in.linkedin.com/in/ghanshyam-mali-601474138" className="button">Contact</a></p> */}
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-3">
      <div className="card">
        <img src="/img/Shivanshu_img.jpeg" alt="Jane" style={{height: 220}} />
        <div className="container">
          <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Shivanshu Soni </h4>
          <p className="title" style={{textAlign: 'center', fontWeight: 'bold'}}>Team 60</p>
          {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
          <p style={{textAlign: 'center', fontWeight: 'bold'}}>8602201443</p>
          <p style={{textAlign: 'center', fontWeight: 'bold'}}>shivanshuss13@gmail.com</p>
          <p style={{textAlign: 'center'}}><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-3">
      <div className="card">
        <img src="/img/Omar_img.jpg" alt="Jane" style={{height: 220}} />
        <div className="container">
          <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Omar Sirkazi </h4>
          <p className="title" style={{textAlign: 'center', fontWeight: 'bold'}}>Team 60</p>
          {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
          <p style={{textAlign: 'center', fontWeight: 'bold'}}>9511605800</p>
          <p style={{textAlign: 'center', fontWeight: 'bold'}}>omar13@gmail.com</p>
          <p style={{textAlign: 'center', fontWeight: 'bold'}}><button className="button" >Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>
        <Footer/>
      </div>
      
    );
  };
  
  
  export default Contactus