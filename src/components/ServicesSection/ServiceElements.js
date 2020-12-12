import styled from 'styled-components';

export const ServicesContainer = styled.div`
   height: 800px;
   display: flex;
   flex-direction:  column;
   justify-content: center;
   align-items: center;
   background: #010606;


   @media screen and (max-width: 540px){
        height: 1300px;
       
   }
  
`
export const ServicesWrapper = styled.div`
   
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 1fr ;
   align-items: start;
   grid-gap: 25px;
   padding: 0 50px;

   @media screen and (width: 1024px){
        grid-template-columns: 1fr 1fr ;
        grid-gap: 20px;
   }

   @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
        
   }
   @media screen and (max-width: 540px){
        grid-template-columns: 1fr;
        margin-top: 30px;
    }
   


`

export const ServicesCard = styled.div`
    
    margin-bottom: 200px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 5px;
    
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1024px){
        margin-bottom: 0px;
    }

  

    
`

export const ServicesIcon = styled.img`
    border-radius: 10px;
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
    @media screen and (max-width: 1024px){
        height: 220px;
        width: 250px;
    }

`

export const ServicesH1 = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 60px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }

    @media screen and (max-width: 768px){
        margin-bottom: 20px;
    }
`

export const ServicesH2 = styled.h2`
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`
export const Subtitle = styled.p`
   text-align: left;
   max-width: 540px;
   margin-bottom: 35px;
   font-weight: bold;
   font-size: 20px;
   line-height: 24px;
   color:  #fff;

   @media screen and (width: 1024px){
       
    font-size: 16px;
   }
`

export const Wrapper = styled.div`
   
   margin: 40px auto;
   display: grid;
   grid-template-columns: 1fr  ;
   align-items: start;
   grid-gap: 25px;
   padding: 0 50px;

   @media screen and (width: 1024px){
       
        grid-gap: 20px;
        padding-top: 40px
   }

   @media screen and (max-width: 768px){
       
        padding-top: 40px
        
   }
   @media screen and (max-width: 540px){
        
        margin-top: 30px;
    }
   


`