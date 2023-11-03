import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            <Link to='/' style={{textDecoration:'none'}}>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home" className='text-light fs-2'>
                    <i class="fa-regular fa-address-book"></i>
                      <b> DETAILS APP</b> 
                    </Navbar.Brand>
                </Container>
            </Navbar>
            </Link>
        </div>
    )
}

export default Header