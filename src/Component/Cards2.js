import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';

export default function Cards2() {
  return (
    <MDBCardGroup className='row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
      <MDBCard>
        <MDBCardImage src='\img\Image20230619154250.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>KTM RC 390 Adventure</MDBCardTitle>
          <MDBCardText>
          KTM RC 390 is a sports bike available at a starting price of Rs. 3,16,163 in India. It is available in 2 variants and 3 colours with top variant price starting from Rs. 3,18,382. The KTM RC 390 is powered by 373.27cc BS6 engine which develops a power of 42.9 bhp and a torque of 37 Nm. With both front and rear disc brakes, KTM RC 390 comes up with anti-locking braking system. This RC 390 bike weighs 172 kg and has a fuel tank capacity of 13.7 liters.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardImage src='\img\Image20230619155532.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>KTM 250 Adventure</MDBCardTitle>
          <MDBCardText>
          KTM 250 Adventure is a adventure bike available at a starting price of Rs. 2,45,177 in India. It is available in 2 variants and 4 colours with top variant price starting from Rs. 2,45,192. The KTM 250 Adventure is powered by 248.76cc BS6 engine which develops a power of 29.63 bhp and a torque of 24 Nm. With both front and rear disc brakes, KTM 250 Adventure comes up with anti-locking braking system. This 250 Adventure bike weighs 177 kg and has a fuel tank capacity of 14.5 liters.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='\img\Image20230619155721.png' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>KTM 450 Duke</MDBCardTitle>
          <MDBCardText>
          The 450 Duke, also known as the Scalpel, is KTM’s flagship offering for the Indian market. The street naked borrows the sharp styling and features from its elder sibling, the 1290 Super Duke which is sold by KTM in the international markets. The 450 Duke has aggressive lines along with a minimalistic look that is projected from every angle the bike is perceived. It has KTM’s signature split-LED headlamp unit, a full-colour TFT display and a high-set exhaust canister that gives it a hooligan appeal.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      

     

      
      

      
    </MDBCardGroup>
  );
}