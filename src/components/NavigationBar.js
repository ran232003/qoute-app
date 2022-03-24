import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import './NavigationBar.css'
const NavigationBar = ()=>{
console.log("a")
return(
    <div>
        <Navbar collapseOnSelect expand="lg" className="navbar-custom">
  <Container>
  <Navbar.Brand as = {Link} to="/">Quotes</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
        
      <Nav.Link as = {Link} to="/add"> Add Quote</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        All Quotes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
)
}

export default NavigationBar;