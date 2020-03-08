import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,    
    Nav,
    NavItem,
    NavLink,    
    NavbarText
} from 'reactstrap'

export const Header = ()=>{
    
    // Navbar toggler and collapse
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>setIsOpen(!isOpen)

    return (
        <Navbar 
            color='dark'
            dark
            expand='sm'
            className='mb-3 fixed-top'
        >
            <NavbarText className='ml-2 flickr-pics-logo'>
                <Link to='/'>Flickr-Pics</Link>
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen} className='pl-2'>
                <Nav navbar className='ml-auto'>
                    <NavItem>
                        <NavLink href='https://www.flickr.com'>Flickr</NavLink>
                    </NavItem>
                    <NavItem className='mr-4'>
                        <NavLink href='https://github.com/zycau/flickr-pics'>GitHub</NavLink>
                    </NavItem>                           
                </Nav>
            </Collapse>
        </Navbar>
    )
}