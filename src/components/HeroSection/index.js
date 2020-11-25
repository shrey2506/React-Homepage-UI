import React from 'react';
import './style.css';
import Video from '../../videos/video1.mp4';
// import ReactPlayer from 'react-player';

import {HeroContainer, HeroBg,HeroContent,HeroH1,HeroP, VideoBg} from './HeroElements';

const HeroSection = () => {
    return (
       
          <HeroContainer id="home">
              <HeroBg>
                <VideoBg  autoPlay loop muted src={Video} type='video/mp4'  />
              </HeroBg>
          
            <HeroContent>
                 <HeroH1>End to end automation using IoT and Blockchain</HeroH1>
                 <HeroP>
                     Contact us for turning your ideas into meaningful applications!
                 </HeroP>

             </HeroContent> 
          
           
           
          </HeroContainer>
         
        
    )
}

export default HeroSection;
