import styled from 'styled-components';

export const Container = styled.div`
   color: #fff;
   background: #010606;

   @media screen and (max-width : 768px){
       padding: 100px 0;
   }
`

export const Wrapper = styled.div`
  
   
   z-index: 1;
   min-height: 1000px;
   width: 100%;
   max-width: 3000px;
   
   padding-left: 10%;
   padding-right: 10%;
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


export const H1 = styled.h1`
    text-align: center;
    padding-top: 100px;
    font-weight: bold;
    font-size: 3rem;
    color: #fff;
    padding-bottom: 40px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase ;

    @media screen and (max-width: 480px){
        margin-top: 50px;
        font-size: 2rem;
        margin-bottom: 40px;
    }
`
export const TopLine = styled.p`
   cursor: pointer;
   color: #01bf71;
   font-size: 16px;
   line-weight: 16px;
   font-weight: 700;
   letter-spacing: 1.4px;
   text-transform: uppercase ;
   margin-bottom: 16px;
`
export const JobHeading = styled.h2`
    cursor: pointer;
    padding-top: 20px;
    font-weight: bold;
    font-size: 2.5rem;
    color: #fff;
    padding-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase ;

    @media screen and (max-width: 480px){
        
        font-size: 2rem;
        
    }
`

export const Description = styled.p`
    text-align: justify;
   
   max-width: 600px;
   margin-bottom: 35px;
   font-size: 18px;
   line-height: 24px;
   color:  #fff;

   @media screen and (max-width: 1024px){
      max-width: 400px;
      font-size: 16px;
  }

   @media screen and (max-width: 480px){
      
      font-size: 12px;
  }

   
`