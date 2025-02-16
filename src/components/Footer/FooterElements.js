import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
   background-color: #101522;
`
export const FooterWrap = styled.div`
   padding: 20px 24px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   ma-width: 2000px;
   margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
   display: flex;
   justify-content: center;

   @media screen and (max-width: 820px){
       padding-top: 32px;     
   }
`

export const FooterLinksWrapper = styled.div`
   display: flex;
   

   @media screen and (max-width: 820px){
       flex-direction: column;
   }
`
export const FooterLinkItems = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin: 16px;
   text-align: left;
   width: 260px;
   box-sizing: border-box;
   color: #fff;

   @media screen and (max-width: 480px){
        margin: 0;
        padding: 10px;
        width: 100%;
   }
`
export const FooterLinkTitle = styled.h1`
   font-weight: bold;
   font-size: 20px;
   margin-top:16px;
   margin-bottom: 16px;
   
   @media screen and (max-width: 480px){
     font-size: 16px;
   }

  
`
export const FooterLinkSubTitle = styled.h2`
   color: #01bf71;
   font-weight: bold;
   font-size: 16px; 
   margin-top: 10px;

   @media screen and (max-width: 480px){
      font-size: 14px;
   }
`
export const FooterLinkText = styled.h2`
   font-weight: bold;
   font-size: 16px; 
   @media screen and (max-width: 480px){
      font-size: 14px;
   }

   @media screen and (max-width: 320px){
      font-size: 10px;
   }
`

export const FooterLink = styled(Link)`
   font-weight: bold;
   color: #fff;
   text-decoration: none;
   margin-bottom: 0.5rem;
   font-size: 16px;

   &:hover{
       color: #01bf71;
       transition: 0.3s ease-out;
       text-decoration: none;
   }

   @media screen and (max-width: 480px){
      font-size: 14px;
   }
`

export const FooterCard = styled.div`
    margin-top: 18px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 320px;
    max-width: 340px;
    padding: 5px;
    
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
      max-width: 50vw;
     
    }

    @media screen and (max-width: 540px){
      max-width: 90vw;
     
    }

  

    
`

export const SocialMedia = styled.section`
   max-width: 1000px;
   width: 100%;
`

export const SocialMediaWrap = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   max-width: 1100px;
   margin: 40px auto 0 auto;

   @media screen and (max-width: 820px){
       flex-direction: column;
   }
`

export const SocialLogo = styled(Link)`
  
   color: #01BF71;
   jsutify-self: start;
   cursor: pointer;
   text-decoration: none;
   font-size: 2rem;
   display: flex;
   align-items: center;
   margin-top: 0px;
   margin-bottom: 16px;
   font-weight: bold;

   &:hover{
      color: #fff;
      transition: 0.3s ease-out;
      text-decoration: none;
  }

  @media screen and (max-width: 480px){
     font-size: 20px;
  }
`
export const WebsiteRights = styled(Link)`
   text-decoration: none;
   margin-top: 20px;
   color: #fff;
   font-size: 15px;
   margin-bottom: 5px;
   
   @media screen and (max-width: 540px){
      font-size: 9px;
  }

  @media screen and (max-width: 320px){
   font-size: 8px;
  }

  &:hover{
   color: #01bf71;
   transition: 0.3s ease-out;
   text-decoration: none;
  }

`
export const Hr = styled.hr`
   display: block;
   margin-top: 0.5em;
   margin-bottom: 0.5em;
   margin-left: auto;
   margin-right: auto;
   border-style: inset;
   border-width: 1px;

`

export const SocialIcons = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 240px;

  
`

export const SocialIconLink = styled.a`
   color: #fff;
   font-size: 24px;
`

export const BtnWrap = styled.div`
   display: flex;
   justify-content: center;
`
export const Button = styled(Link)`
   margin-top: 50px; 
   border-radius: 50px;
   background: #01BF71  ;
   white-space: nowrap;
   padding:  14px 48px;
   color: #fff;
   font-size:  '20px';
   outline: none;
  
   border: none;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-in-out;

   &:hover{
    transition: all 0.2s ease-in-out;
    background:  #000 ;
    color: #fff;
    text-decoration: none;
   }
`
export const CardItems = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 20px;
  
   text-align: center;
   
   @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
   }
`
export const FooterImg = styled.img`
   width: 70px;
   height: 80px;
`


