import styled from 'styled-components';

export const Container = styled.div`
   color: #fff;
   display: flex;
   background: #010606;

   @media screen and (max-width : 768px){
       padding: 100px 0;
   }
`

export const Wrapper = styled.div`
  
   
   z-index: 1;
   min-height: 1200px;
   width: 100%;
   max-width: 3000px;
   padding-bottom: 10%;
   padding-left: 30%;
   padding-right: 30%;
   justify-content: center;

   @media screen and (width: 1024px){
    padding-left: 10%;
    padding-right: 10%;
     padding-top: 80px;
     min-height: 1200px;
   }

   @media screen and (width: 768px){
    padding-left: 10%;
    padding-right: 10%;
      padding-top: 80px;
      min-height: 700px;
    }
    
    @media screen and (max-width: 540px){
      padding-left: 10%;
      padding-right: 10%;
      min-height: 500px;
    }
    
    

   

   

`


export const H1 = styled.h1`
    text-align: center;
    padding-top: 100px;
    font-weight: bold;
    font-size: 3rem;
    color: #fff;
    margin-bottom: 50px;
    
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase ;

    @media screen and (max-width: 480px){
        padding-top: 0px;
        
        font-size: 2rem;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 360px){
       
        
        font-size: 1.5rem;
        
    }
`
export const TopLine = styled.p`
   cursor: pointer;
   color: #01bf71;
   font-size: 16px;
   line-weight: 16px;
   font-weight: 700;
   letter-spacing: 1.15px;
 
   margin-bottom: 16px;
   @media screen and (max-width: 480px){
    
    margin-bottom: 4px;
}

`
export const JobHeading = styled.h2`
    cursor: pointer;
    padding-top: 15px;
    font-weight: bold;
    font-size: 1.7rem;
    color: #fff;
   
    font-weight: 700;
    letter-spacing: 1.4px;
    

    @media screen and (max-width: 480px){
         
        font-size: 1rem;
        
    }
`

export const Description = styled.p`
    text-align: left;
    
   max-width: 600px;
   padding-left: 10%;
   margin-bottom: 13px;
   font-size: 16px;
   line-height: 24px;
   color:  #fff;

   :before {
    content:"• ";
   }

   @media screen and (max-width: 1024px){
      max-width: 400px;
      font-size: 16px;
  }

   @media screen and (max-width: 480px){
      margin-bottom: 8px;
      font-size: 12px;
  }

   
`