import React from 'react'
import {FaLanguage} from 'react-icons/fa';
import { Button } from './SidebarElements';
import { CloseIcon, Icon, SidebarContainer,SidebarWrapper,SideBtnWrap,SidebarLink,SidebarRoute ,SidebarMenu} from './SidebarElements'

const SideBar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/bookdemo">Book Demo</SidebarRoute>
            </SideBtnWrap>
            <br/>
            <SideBtnWrap>
            <Button
            primary='false'
            dark='true'>
            <FaLanguage  size={30}/>
            </Button>
            </SideBtnWrap>
           
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar