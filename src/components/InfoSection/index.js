import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
     InfoContainer, 
     InfoWrapper,
     Column1,
     InfoRow,
     TextWrapper,
     TopLine,
     Heading,
     Subtitle, 
     BtnWrap, 
     Column2, 
     ImgWrap, 
     Img
    } from './InfoElements';

import { Button } from '../ButtonElement';

const InfoSection = ({
      lightBg,
      id,
      imgStart,
      topLine,
      lightText,
      headline,
      darkText,
      buttonLabel,
      img,
      alt,
      primary,
      dark,
      dark2,
      p1,
      p2,
      p3,
      
    }) => {

    useEffect(()=>{
         Aos.init({
             duration: 1600
         });
    },[]);

    return (
       <>
           <InfoContainer lightBg={lightBg} id={id}>
               <InfoWrapper>
                   <InfoRow data-aos="fade-up" imgStart={imgStart}>
                       <Column1 data-aos="fade-right">
                          <TextWrapper>
                              <TopLine>{topLine}</TopLine>

                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle darkText={darkText}>{p1}</Subtitle>
                              <Subtitle darkText={darkText}>{p2}</Subtitle>
                              <Subtitle darkText={darkText}>{p3}</Subtitle>
                              
                              <BtnWrap>
                                   <Button 
                                       to="home" 
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact={true}
                                       offset={-80}
                                       primary={primary ? 1: 0}
                                       dark={dark ? 1: 0}
                                       dark2={dark2 ? 1: 0}
                                    >{buttonLabel}</Button>
                              </BtnWrap>
                          </TextWrapper>
                       </Column1>

                       <Column2 data-aos="fade-left">
                           <ImgWrap>
                              <Img 
                                  
                                   src={img} alt={alt}
                                />
                           </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
           </InfoContainer>
       </>
    )
}

export default InfoSection;
