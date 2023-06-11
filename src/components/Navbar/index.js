import React,{useEffect, useState} from 'react';
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink,MobileIcon} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import {FaLanguage} from 'react-icons/fa';
import { Button } from './NavbarElements';
import { FaBars } from 'react-icons/fa';



const Navbar = ({toggle}) => {

  const [scrollNav,setScrollNav]=useState(false)
  const changeNav=()=>{
    if(window.scroll>=80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }

useEffect(()=>{
window.addEventListener('scroll',changeNav)},[]);

const toggleHome=()=>{
  scroll.scrollToTop();
};
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>RGENAI
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
                <NavLinks to='about' 
                smooth={true} duration={500} spy={true} exact='true' 
                offset={-80}
                >About</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='discover'
                 smooth={true} duration={500} spy={true} exact='true' 
                 offset={-80}
                 >Discover</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='services'
                 smooth={true} duration={500} spy={true} exact='true' 
                 offset={-80}
                 >Services</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='contact'
                 smooth={true} duration={500} spy={true} exact='true' 
                 offset={-80}
                >Contact</NavLinks>
            </NavItem>
            <NavBtn >
                <NavBtnLink to='bookdemo'>Book a Demo</NavBtnLink>
                </NavBtn>
                
            <Button
            primary='false'
            dark='true'>
            <FaLanguage  size={30}/> 
            </Button>

                
          </NavMenu>
           
            </NavbarContainer>
      </Nav>

    </>
  )
}

export default Navbar