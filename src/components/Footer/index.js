import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook,FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
             <FooterWrap>
             <SocialMedia>
                     <SocialMediaWrap>
                         <SocialLogo to="/" onClick={toggleHome}>NanoRocks</SocialLogo>
                    

                        <WebsiteRights>Copyright (c) {new Date().getFullYear()}, All Rights Reserved.</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="//www.Linkedin.com" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                     </SocialMediaWrap>
                 </SocialMedia>
                 {/* <FooterLinksContainer>
                     <FooterLinksWrapper>

                         <FooterLinkItems>
                             <FooterLinkTitle>About Us</FooterLinkTitle>
                                 <FooterLink to="/">Testimonials</FooterLink>
                                 <FooterLink to="/">Careers</FooterLink>
                                 <FooterLink to="/">Terms Of Service</FooterLink>
                         </FooterLinkItems>

                         <FooterLinkItems>
                             <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                 <FooterLink to="contact">Contact</FooterLink>
                                 <FooterLink to="/">Support</FooterLink>
                                 <FooterLink to="/">Sponcerships</FooterLink>  
                         </FooterLinkItems>

                     </FooterLinksWrapper>
                 </FooterLinksContainer> */}
             </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
