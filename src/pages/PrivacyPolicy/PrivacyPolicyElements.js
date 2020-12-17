import styled from 'styled-components';

export const H1 = styled.h1`
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
    font-size: 3.5rem;
    color: #01BF71;
    margin-top: 200px;
    margin-bottom: 20px;
    font-weight: bold;

    @media screen and (max-width: 480px){
        padding-left: 5%;
        padding-right: 5%;
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
    margin-bottom: 0px;
    margin-top: 10px;
    font-size: 1.6rem;
    color: #01BF71;
    
    font-weight: bold;

    @media screen and (max-width: 540px){
        margin-bottom: 10px;
        margin-top: 40px;
        padding-left: 5%;
        padding-right: 5%;
       
    }

   

`

export const Subtitle = styled.p`
  
   text-align: justify;
   max-width: 750px;
   text-justify: distribute;
   word-spacing: -1px;
   font-size: 16px;
  
   color:  #fff;
    @media screen and (max-width: 540px){
       max-width: 440px;
       font-size: 14px;
       padding-left: 5%;
       padding-right: 5%;
       word-spacing: -2px;
      
    }
`