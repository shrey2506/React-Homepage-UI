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

                        <WebsiteRights>Copyright (c) {new Date().getFullYear()}, All Rights Reserved.</WebsiteRights>

                       
                     </SocialMediaWrap>
                 </SocialMedia>
               
             </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
