import React from 'react';
import {  useHistory } from 'react-router-dom';
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
    SocialIconLink,
    Hr,
    FooterLinkSubTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinkText,
    FooterLink,
    FooterCard,
    BtnWrap,
    Button,
    CardItems
} from './FooterElements';

const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
        history.push("/");
    }

    const history=useHistory();

    const pushToContactForm=()=>{
       
        history.push("/contact");
        scroll.scrollToTop();
       
    }

    return (
        <FooterContainer>
             <FooterWrap>
             <SocialLogo to="/" onClick={toggleHome}>NanoRocks Innovation LLP</SocialLogo>
            
               <FooterLinksContainer>
                    {/* contact us section */}
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>CONTACT INFORMATON</FooterLinkTitle>

                           <FooterLinkSubTitle>ADDRESS</FooterLinkSubTitle>
                           <FooterLinkText>Sample Address</FooterLinkText>

                           <FooterLinkSubTitle>PHONE NUMBERS</FooterLinkSubTitle>
                           <FooterLinkText>+91 1111111111</FooterLinkText>
                           <FooterLinkText>+91 1111111111</FooterLinkText>

                           <FooterLinkSubTitle>EMAIL</FooterLinkSubTitle>
                           <FooterLinkText>sample@sample.com</FooterLinkText>
                           <FooterLinkText>sample@sample.com</FooterLinkText>

                       </FooterLinkItems>

                       {/* information section */}


                       <FooterLinkItems>
                           <FooterLinkTitle>INFORMATON</FooterLinkTitle>

                           <FooterLink>About Us</FooterLink>
                           <FooterLink>Our Services</FooterLink>
                           <FooterLink>Blogs</FooterLink>
                           <FooterLink>Careers</FooterLink>
                           <FooterLink>Contact Us</FooterLink>

                       </FooterLinkItems>

                       {/* submit RTF section */}
                       
                       <FooterCard>
                           
                              <CardItems>
                              <FooterLinkTitle className="pb-10">SUBMIT RFP</FooterLinkTitle>
                                <FooterLinkText>Find out how our teams expertise can help you and your company</FooterLinkText>
                                <BtnWrap>
                                   <Button onClick={pushToContactForm}>SUBMIT</Button>
                                </BtnWrap>
                              </CardItems>
                               
                          
                             
                        </FooterCard>
                   </FooterLinksWrapper>
               </FooterLinksContainer>

             <SocialMedia>
                     <SocialMediaWrap>
                         
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

                            <SocialIconLink href="//www.linkedin.com/company/nanorocks-innovation/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>

                     </SocialMediaWrap>

                     <Hr />

                     <div className="d-flex justify-content-between">
                           <WebsiteRights >Terms of use| Privacy | Careers</WebsiteRights>
                           <WebsiteRights >Copyright (c) {new Date().getFullYear()}, All Rights Reserved.</WebsiteRights>
                        </div>
                 </SocialMedia>
               
             </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
