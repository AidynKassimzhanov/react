import React, { useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Header from './Header'

const NavBar = () => {

  const [isLogin, setIsLogin] = useState(false)

  return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"> <Header /> </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Admin Page</Nav.Link>
              <Nav.Link href="#features">User Page</Nav.Link>
              <Nav.Link href="#pricing">Games</Nav.Link>
            </Nav>
            {isLogin ?
              <div>
                <Button >Log out</Button> 
              </div>
            :
              <div>
                <Button style={{marginRight: '20px'}}>Log in </Button> 
                <Button >Register</Button> 
              </div>
            }
            
          </Container>
        </Navbar>
   
  )
}

export default NavBar