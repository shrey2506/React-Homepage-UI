import React from 'react';
import AddressIcon from '../../Images/Footer/map.svg';
import PhoneIcon from '../../Images/Footer/call.svg';
import MailIcon from '../../Images/Footer/mail.svg';
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
    CardItems,
    FooterImg,
    
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

    const pushToTermsOfUse=()=>{
       
        history.push("/terms-of-use");
        scroll.scrollToTop();
       
    }

    const pushToPrivacyPolicy=()=>{
       
        history.push("/privacy-policy");
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

                           <div className="d-flex flex-row">
                               <FooterImg className="p-2" src={AddressIcon}/>

                               <div className="p-2">
                                  <FooterLinkSubTitle>ADDRESS</FooterLinkSubTitle>
                                  <FooterLinkText>Plot no. 25/1-B Ground floor, industrial area near Ashok Park- Siwani Haryana (127046)</FooterLinkText>
                               </div>
                           </div>

                           <div className="d-flex flex-row">
                               <FooterImg className="p-2" src={PhoneIcon}/>

                               <div className="p-2">
                                  <FooterLinkSubTitle>GIVE US A CALL</FooterLinkSubTitle>
                                  <FooterLinkText>01255-277045</FooterLinkText>
                                  <FooterLinkText>+91-8307003522</FooterLinkText>
                               </div>
                           </div>

                           <div className="d-flex flex-row">
                               <FooterImg className="p-2" src={MailIcon}/>

                               <div className="p-2"> 
                                <FooterLinkSubTitle>SEND US AN EMAIL</FooterLinkSubTitle>
                                <FooterLinkText>nanorocksinnovation@gmail.com</FooterLinkText>
                                <FooterLinkText>hello@nanorocks.in</FooterLinkText>
                                <FooterLinkText>sales@nanorocks.in</FooterLinkText>
                                
                               </div>
                           </div>
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
                         <div className="d-flex flex-row">
                             <WebsiteRights onClick={pushToTermsOfUse}>Terms of use </WebsiteRights>
                             <div style={{opacity: '0.0'}}>a</div>
                             <WebsiteRights onClick={pushToPrivacyPolicy}> Privacy </WebsiteRights>
                             <div style={{opacity: '0.0'}}>a</div>
                             <WebsiteRights > Careers</WebsiteRights>
                         </div>
                          
                           <WebsiteRights >Copyright (c) {new Date().getFullYear()}, All Rights Reserved.</WebsiteRights>
                        </div>
                 </SocialMedia>
               
             </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
