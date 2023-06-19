import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MyNavigationLinks() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" expand="lg">
        <Container>

        <Navbar.Brand href='#'>
  <img
    src=".\img\logo.png"
    width="50"
    height="50"
    className="d-inline-block align-center"
    alt="Brandimg"
  />
  <span style={{ fontWeight: 'bold', color: 'orange',fontSize: '2.5rem' }}>BikeWallah</span>
</Navbar.Brand>

          {/* <Navbar.Brand href="#home">My Project</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* <Navbar.Toggle
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </Navbar.Toggle> */}

          
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="ms-auto"> */}

            <Nav className='mr-auto mb-2 mb-lg-0'>
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to={"/Motor"}>
                Motor
              </Nav.Link>
              <Nav.Link as={Link} to={"/Aboutus"}>
              Aboutus
              </Nav.Link>
              <Nav.Link as={Link} to={"/Contactus"}>
              Contactus
              </Nav.Link>
              <Nav.Link as={Link} to={"/AppLogin"}>
              AppLogin
              </Nav.Link>

              <Nav.Link as={Link} to={"/MyRegistration"}>
              MyRegistration
              </Nav.Link>
              <Nav.Link as={Link} to={"/user-list"}>
              user-list
              </Nav.Link>
              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
 );
}

export default MyNavigationLinks;