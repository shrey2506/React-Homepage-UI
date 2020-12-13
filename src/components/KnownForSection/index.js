import React,{useEffect} from 'react';
import Aos from 'aos';
import Icon1 from '../../Images/KnownForSection/IntentFocus.jpeg';
import Icon2 from '../../Images/KnownForSection/RapidTangible.jpeg';
import Icon3 from '../../Images/KnownForSection/DeepEngagement.jpeg';
import {
    KnownForContainer,
    KnownForH1,
    KnownForWrapper,
    KnownForIcon,
    KnownForH2,
    KnownForCard
    
} from './KnownForElements';

const KnownFor = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
   },[]);

    return (
        <KnownForContainer id='KnownFor'>
            <KnownForH1 data-aos="fade-down">Our Philosophy</KnownForH1>
            <KnownForWrapper  >
                
                    <KnownForCard>
                        <KnownForIcon  data-aos="fade-right"  src={Icon1} />
                        <KnownForH2>Helping organizations leverage the full potential bringing new innovations and refinements</KnownForH2>
                    </KnownForCard>
                   
               
              

                <KnownForCard>
                    <KnownForIcon data-aos="fade-up" src={Icon2} />
                     <KnownForH2> Save time and costs by making your business processes smarter</KnownForH2>
                    
                </KnownForCard>

                <KnownForCard>
                    <KnownForIcon data-aos="fade-left" src={Icon3} />
                     <KnownForH2>Deep engagement with domain experts and startup ecosystems</KnownForH2>
                    
                </KnownForCard>
              
               
            </KnownForWrapper>
        </KnownForContainer>
    )
}

export default KnownFor;
