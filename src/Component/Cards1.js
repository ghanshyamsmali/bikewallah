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
          KTM 390 Adventure is a adventure bike available at a starting price of Rs. 3,39,247 in India. It is available in 2 variants and 3 colours with top variant price starting from Rs. 3,61,377. The KTM 390 Adventure is powered by 373.27cc BS6 engine which develops a power of 42.9 bhp and a torque of 37 Nm. With both front and rear disc brakes, KTM 390 Adventure comes up with anti-locking braking system. This 390 Adventure bike weighs 177 kg and has a fuel tank capacity of 14.5 liters.
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
          KTM 390 Duke is a street bike available in only 1 variant. 390 Duke price starts at Rs. 2,97,814 in India. The KTM 390 Duke is powered by 373.27cc BS6 engine which develops a power of 42.9 bhp and a torque of 37 Nm. With both front and rear disc brakes, KTM 390 Duke comes up with anti-locking braking system. This 390 Duke bike weighs 171 kg and has a fuel tank capacity of 13.4 liters.
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
          The 790 Duke, also known as the Scalpel, is KTM’s flagship offering for the Indian market. The street naked borrows the sharp styling and features from its elder sibling, the 1290 Super Duke which is sold by KTM in the international markets. The 790 Duke has aggressive lines along with a minimalistic look that is projected from every angle the bike is perceived. It has KTM’s signature split-LED headlamp unit, a full-colour TFT display and a high-set exhaust canister that gives it a hooligan appeal.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      

     

      
      

      
    </MDBCardGroup>
  );
}