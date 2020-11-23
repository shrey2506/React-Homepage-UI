import React from 'react';
import './style.css';
import Video from '../../videos/video1.mp4';
// import ReactPlayer from 'react-player';

import {HeroContainer, HeroBg,HeroContent,HeroH1,HeroP, VideoBg} from './HeroElements';

const HeroSection = () => {
    return (
       
          <HeroContainer>
              <HeroBg>
                {/* <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player' 
                            url={Video}
                            muted={true}
                            playing={true} 
                            width='100%'
                            height='100%'
                            loop={true}   
                        />

                
                </div> */}
                <VideoBg  autoPlay loop muted src={Video} type='video/mp4'  />
              </HeroBg>
          
            <HeroContent>
                 <HeroH1> I.O.T. and A.I. Solutions</HeroH1>
                 <HeroP>
                     Contact us for turning your ideas into meaningful applications!
                 </HeroP>

             </HeroContent> 
          
           
           
          </HeroContainer>
         
        
    )
}

export default HeroSection;
