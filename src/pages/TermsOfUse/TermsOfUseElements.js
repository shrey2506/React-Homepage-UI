import styled from 'styled-components';

export const Container=styled.div`
   
padding-top:10px;
min-height: 1200px;
display: flex;
padding-left: 35%;
padding-right: 35%;
flex-direction:  column;
justify-content: center;
align-items: left;
background: #010606;

@media screen and (max-width: 1024px){
    padding-left: 25%;
    padding-right: 25%;
}

@media screen and (width: 540px){
    padding-left: 15%;
    padding-right: 15%;
}

@media screen and (max-width: 480px){
    padding-left: 0;
    padding-right: 0;
}

`

export const H1 = styled.h1`
    
    font-size: 3rem;
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
        height: 100%;
        width: 100%;
        max-width: 3000px;
        margin-right: auto;
        margin-left: auto;
        padding: 0 24px;
        justify-content: center;

        @media screen and (max-width: 1024px){
        padding-top: 80px;
        height: 1200px;
        }

        @media screen and (max-width: 768px){
        padding-top: 80px;
        height: 700px;
        }

        @media screen and (max-width: 480px){
        height: 800px;
        margin-top: 50px;
        }
   
`

export const Subtitle = styled.p`
  text-align: left;
   max-width: 580px;
   
  
   font-size: 18px;
  
   color:  #fff;

    @media screen and (max-width: 540px){
       max-width: 440px;
       font-size: 14px;
       padding-left: 10%;
       padding-right: 10%;
      
    }
`

