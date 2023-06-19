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
          KTM 200 Duke is a street bike available at a starting price of Rs. 1,92,936 in India. It is available in only 1 variant and 2 colours. The KTM 200 Duke is powered by 199.5cc BS6 engine which develops a power of 24.67 bhp and a torque of 19.3 Nm. With both front and rear disc brakes, KTM 200 Duke comes up with anti-locking braking system.
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
          KTM 250 Duke is powered by 248.76 cc engine.This 250 Duke engine generates a power of 30 PS @ 9000 rpm and a torque of 24 Nm @ 7500 rpm. The claimed mileage of 250 Duke is 41 kmpl. KTM 250 Duke gets Disc brakes in the front and rear. The kerb weight of 250 Duke is 170 Kg. KTM 250 Duke has Tubeless Tyre and Alloy Wheels.
          </MDBCardText>
          {/* <a href="\Bike_desc\Bike_info250.html" class="btn ">Know More</a> */}
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
          KTM RC 125 is a sports bike available at a starting price of Rs. 1,89,628 in India. It is available in only 1 variant and 2 colours. The KTM RC 125 is powered by 124.7cc BS6 engine which develops a power of 14.34 bhp and a torque of 12 Nm. With both front and rear disc brakes, KTM RC 125 comes up with anti-locking braking system. This RC 125 bike weighs 160 kg and has a fuel tank capacity of 13.7 liters.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    

     

      
      

      
    </MDBCardGroup>
  );
}