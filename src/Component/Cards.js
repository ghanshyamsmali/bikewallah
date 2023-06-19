import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';

export default function Cards() {
  return (
    <MDBCardGroup className='row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
      <MDBCard>
        <MDBCardImage src='\img\ktm200.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>KTM 200 Duke</MDBCardTitle>
          <MDBCardText>
          Price: Rs. 186,000 * onward
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardImage src='\img\ktm250.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>KTM 250 Duke</MDBCardTitle>
          <MDBCardText>
          Price: Rs. 229,000 * onward
          </MDBCardText>
          {/* <a href="/Bike_desc/Bike_info790.html" class="btn ">Know More</a> */}
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='\img\ktm_rc125.png' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>KTM RC 125</MDBCardTitle>
          <MDBCardText>
          Price: Rs. 182,000 * onward
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    

     

      
      

      
    </MDBCardGroup>
  );
}