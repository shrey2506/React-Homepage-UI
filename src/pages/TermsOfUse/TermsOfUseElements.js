import styled from 'styled-components';

export const Container=styled.div`
   
padding-top:10px;
min-height: 1200px;
display: flex;

flex-direction:  column;
justify-content: center;
align-items: left;
background: #010606;



`

export const H1 = styled.h1`
    text-align: left;
    font-size: 3.5rem;
    color: #01BF71;
    margin-top: 200px;
    margin-bottom: 40px;
    font-weight: bold;

    @media screen and (max-width: 480px){
        padding-left: 10%;
        padding-right: 10%;
        margin-top: 200px;
        font-size: 2.5rem;
        margin-bottom: 60px;
    }

    @media screen and (max-width: 768px){
        margin-top: 200px;
        margin-bottom: 20px;
        margin-bottom: 60px;
    }
`
export const H2 = styled.h2`
    margin-bottom: 10px;
    margin-top: 30px;
    font-size: 1.5rem;
    color: #01BF71;
   
    font-weight: bold;

    @media screen and (max-width: 540px){
        margin-bottom: 10px;
        margin-top: 40px;
        padding-left: 10%;
        padding-right: 10%;
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
   word-spacing: 3px;
   text-align: justify;
   max-width: 700px;
   inter-word: 1px;
   text-justify: inter-word;
  
   font-size: 18px;
  
   color:  #fff;

    @media screen and (max-width: 540px){
       max-width: 440px;
       font-size: 14px;
       padding-left: 10%;
       padding-right: 10%;
      
    }
`

