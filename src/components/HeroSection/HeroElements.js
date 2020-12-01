import styled from 'styled-components';

export const HeroContainer=styled.div`
   
   background: #0c0c0c;
   z-index: 1;
   position: relative;
   height: 1000px;
   padding: 0 30px;
   display: flex;
   jsutify-content: center;
   align-items: center;

   :before{
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,6) 100% ), 
                   linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
       z-index: 2;            

   }

   @media screen and (max-width: 768px){
      height: 600px;
    }

    @media screen and (max-width: 480px){
      height: 500px;
    }
`

export const HeroBg=styled.div`
   position: absolute;
  
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
`

export const VideoBg=styled.video`
   width: 100%;
   height: 100%;
   -o-object-fit: cover;
   object-fit: cover;
   background: #232a34;
` 
export const HeroContent=styled.div`
   margin-top: 0px;
   margin-bottom: 200px;
   margin-right: auto;
   margin-left: auto;
   z-index: 3;
   verticle-align: middle;
   max-width: 3000px;
   position: relative;
   padding: 8px 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media screen and (max-width: 768px){
      margin-top: 300px;
    }

`
export const HeroH1=styled.h1`
  
   
   color: #FFFFFF;
   font-size: 64px;
   text-align: center;

   @media screen and (max-width: 768px){
       font-size: 48px;

   }
   @media screen and (max-width: 480px){
    font-size: 32px;  
   }

   @media screen and (max-width: 320px){
      font-size: 22px;  
     }

`


export const HeroP=styled.p`
   margin-top: 24px;
   color: #FFFFFF;
   font-size: 32px;
   text-align: center;
   max-width: 600px;
   
   @media screen and (max-width: 768px){
       font-size: 24px;

    }

    @media screen and (max-width: 480px){
       font-size: 18px;  
    }

`