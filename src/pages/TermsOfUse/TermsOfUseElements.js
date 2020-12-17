import styled from 'styled-components';

export const Container = styled.div`
   
padding-top:10px;
min-height: 1200px;
display: flex;

flex-direction:  column;
justify-content: center;
align-items: left;
background: #010606;



`

export const H1 = styled.h1`
    text-align: center;
    font-size: 3.5rem;
    color: #01BF71;
    margin-top: 200px;
    margin-bottom: 20px;
    font-weight: bold;

    @media screen and (max-width: 480px){
        padding-left: 5%;
        padding-right: 5%;
       
        font-size: 2rem;
        
    }

    @media screen and (max-width: 768px){
        margin-top: 200px;
        margin-bottom: 20px;
       
    }
`
export const H2 = styled.h2`
    margin-bottom: 0px;
    margin-top: 12px;
    font-size: 1.6rem;
    color: #01BF71;
   
    font-weight: bold;

    @media screen and (max-width: 540px){
        margin-bottom: 5px;
        margin-top: 20px;
        padding-left: 5%;
        padding-right: 5%;
       
    }

   
`

export const Wrapper = styled.div`
       
        display: grid;
        z-index: 1;
        min-height: 1200px;
        max-width: 3000px;
        margin-right: auto;
        margin-left: auto;
        padding: 0 24px;
        justify-content: center;
        margin-bottom: 100px;
       
   
`

export const Subtitle = styled.p`

   text-align: left;
   max-width: 800px;
   
   font-size: 16px;
  
   color:  #fff;

    @media screen and (max-width: 540px){
       max-width: 440px;
       font-size: 14px;
       padding-left: 5%;
       padding-right: 5%
      
    }
`

