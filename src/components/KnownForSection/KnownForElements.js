import styled from 'styled-components';

export const KnownForContainer = styled.div`
   padding-top:10px;
   height: 800px;
   display: flex;
   flex-direction:  column;
   justify-content: center;
   align-items: center;
   background: #010606;

   @media screen and (max-width: 768px){
    height: 1300px;
   } 


   @media screen and (max-width: 480px){
        height: 1300px;
       
   }
  
`
export const KnownForWrapper = styled.div`
   
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr ;
   align-items: start;
   grid-gap: 25px;
   padding: 20px 50px;

   @media screen and (width: 1024px){
        grid-template-columns: 1fr 1fr 1fr ;
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

export const KnownForCard = styled.div`
    
    margin-bottom: 200px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 320px;
    max-width: 300px;
        
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (width: 1024px){
        max-width: 280px;
    }



    @media screen and (max-width: 1024px){
        margin-bottom: 0px;
    }
    
`

export const KnownForIcon = styled.img`
    margin-top: 10px;
    border-radius: 10px;
    height: 70%;
    width: 70%;
    margin-bottom: 10px;
    

`

export const KnownForH1 = styled.h1`
    
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 60px;
    font-weight: bold;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }

    @media screen and (max-width: 768px){
        margin-bottom: 20px;
        margin-top: 50px;
    }
`

export const KnownForH2 = styled.h2`
    text-align: justify;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 15px;
    margin-bottom: 5px;
    text-align: center;
`

export const KnownForP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
`