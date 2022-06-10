import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Avatar } from 'antd'
import '../App.css'
import icon from '../image/juke.png'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>
            <Avatar src={icon} size='small' className='avatar' />
            Jukebox
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/albums'>
                <i className='fas fa-music'> </i> Albums
              </Nav.Link>
              <Nav.Link href='/'>
                <i className='fas fa-user'> </i> Users
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
