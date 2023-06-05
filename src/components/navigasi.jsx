import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Menu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className='title'>Portofolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              {/* <Nav.Link href="#Projects">Portofolio</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu
