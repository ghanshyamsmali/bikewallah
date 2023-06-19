import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';

export default function Cards1() {
  return (
    <MDBCardGroup className='row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
      <MDBCard>
        <MDBCardImage src='\img\ktm_rc_390.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>KTM 390 Adventure</MDBCardTitle>
          <MDBCardText>
          Price: Rs. 335,000 Lakh* onward
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardImage src='\img\ktm_ad.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>KTM Duke 390</MDBCardTitle>
          <MDBCardText>
          Price: Rs. 288,000 * onward
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='\img\ktm790.png' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>KTM 790 Duke</MDBCardTitle>
          <MDBCardText>
          Price: Rs. 864,000 * onward
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      

     

      
      

      
    </MDBCardGroup>
  );
}