import styled from 'styled-components';

export const InfoContainer = styled.div`
   color: #fff;
   background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

   @media screen and (max-width : 768px){
       padding: 100px 0;
   }
`

export const InfoWrapper = styled.div`
  
   display: grid;
   z-index: 1;
   height: 1000px;
   width: 100%;
   max-width: 3000px;
  
   padding: 0 24px;
   justify-content: center;

   @media screen and (width: 1024px){
     padding-top: 80px;
     height: 1200px;
   }

   @media screen and (width: 768px){
      padding-top: 80px;
      height: 700px;
    }
    

    @media screen and (max-width: 480px){
      height: 500px;
      margin-top: 10px;
    }

    @media screen and (max-width: 320px){
      height: 600px;
      margin-top: 10px;
    }


`
export const InfoRow = styled.div`
padding-left: 5%;
padding-right: 5%;

   margin-top: 10px;
   margin-bottom: 20px;
   display: grid;
   grid-auto-columns: minmax(auto, 1fr);
   align-items: center;
   grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

   @media screen and (max-width : 768px){
     grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
   }

   
`

export const Column1 = styled.div`
  
   margin-bottom: 15px;
   padding: 0 10px;
   grid-area: col1;

`
export const Column2 = styled.div`
   margin-bottom: 15px;
   padding: 0 10px;
   grid-area: col2;

   @media screen and (max-width: 768px){
      width: 0;
   }
   
`
export const TextWrapper = styled.div`

   max-width: 540px;
   padding-top: 0;
   padding-bottom: 60px;
`

export const TopLine = styled.p`
  
   
   color: #01bf71;
   font-size: 16px;
   line-weight: 16px;
   font-weight: 700;
   letter-spacing: 1.4px;
   text-transform: uppercase ;
   margin-bottom: 16px;
`

export const Heading = styled.h1`
   margin-bottom: 24px;
   font-size: 48px;
   line-height: 1.1;
   font-weight: 600;
   color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#101606')};

   @media screen and (max-width: 480px){
       font-size: 32px;
   }
`

export const Subtitle = styled.p`
    text-align: justify;
   
   max-width: 600px;
   margin-bottom: 35px;
   font-size: 18px;
   line-height: 24px;
   color: ${({ darkText }) => (darkText ? '#101606' : '#fff')};

   @media screen and (max-width: 1024px){
      max-width: 400px;
      font-size: 14px;
  }

   @media screen and (max-width: 480px){
      
      font-size: 10px;
  }

   
`

export const BtnWrap = styled.div`
   display: flex;
   justify-content: flex-start;
`
export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;

   @media screen and (max-width: 768px){
      width: 0;
   }
`

export const Img = styled.img`
   width: 100%;
   margin: 0 0 10px 0;
   padding-right: 0 20px;

   @media screen and (width: 1024px){
      width: 90%;
   }

   @media screen and (max-width: 768px){
      width: 0;
   }

`