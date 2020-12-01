import styled from 'styled-components';

export const ServicesContainer = styled.div`
   height: 800px;
   display: flex;
   flex-direction:  column;
   justify-content: center;
   align-items: center;
   background: #010606;

   @media screen and (max-width: 1024px){
       height: 1300px;
   }


   @media screen and (max-width: 768px){
    height: 1300px;
   } 


   @media screen and (max-width: 480px){
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

   @media screen and (max-width: 1024px){
        grid-template-columns: 1fr ;
        grid-gap: 20px;
   }

   @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        
   }
   @media screen and (max-width: 480px){
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
   
    padding: 30px;
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
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
    @media screen and (max-width: 1024px){
        height: 200px;
        width: 200px;
    }

`

export const ServicesH1 = styled.h1`
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
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`