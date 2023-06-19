import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function MyCarousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='img\corosal1.jpg'
        alt='...'
        
      >
        <h5>Explore the BikeWallah</h5>
        <p>One Stop Solution</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='img\corosal2.jpg'
        alt='...'
      >
       <h5>Explore the BikeWallah</h5>
        <p>One Stop Solution</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='img\corosal4.jpg'
        alt='...'
      >
        <h5>Explore the BikeWallah</h5>
        <p>One Stop Solution</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}