import React from 'react';
import {FaFacebook,FaInstagram,FaLinkedinIn,FaTwitter} from 'react-icons/fa';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWarper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SoicalIcons,SocialIconLink,WebsiteRight } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
      };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWarper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/' 
                            smooth={true} duration={500} spy={true} exact='true' 
                            offset={-80}>About our work</FooterLink>
                            {/* <FooterLink to="/signin">How it works</FooterLink> */}
                            <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    {/* <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                    </FooterLinkItems> */}
                </FooterLinksWarper>
                <FooterLinksWarper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Book Demo</FooterLink>
                            {/* <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink> */}
                    </FooterLinkItems>
                    {/* <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">LinkedIn</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                    </FooterLinkItems> */}
                </FooterLinksWarper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>RGENAI</SocialLogo>
                    <WebsiteRight>RGENAI © {new Date().getFullYear()}
                    All rights reserved. </WebsiteRight>
                    <SoicalIcons>
                        <SocialIconLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.twitter.com" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/company/rgen-ai/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedinIn/>
                        </SocialIconLink>
                    </SoicalIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer