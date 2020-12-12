import React, {useEffect} from 'react';
import Aos from 'aos';
import Icon1 from '../../Images/IndustrySection/IndustrialAutomation.jpeg';
import Icon2 from '../../Images/IndustrySection/Chemicals.jpeg';
import Icon3 from '../../Images/IndustrySection/Pharma.jpeg';
import Icon4 from '../../Images/IndustrySection/Automotive.jpeg';
import Icon5 from '../../Images/IndustrySection/Agriculture.jpeg';
import Icon6 from '../../Images/IndustrySection/Food.jpeg';
import {
    IndustryContainer,
    IndustryH1,
    IndustryWrapper,
    IndustryIcon,
    IndustryH2,
   
    IndustryCard
} from './IndustryElements';

const Industries = () => {

    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
   },[]);

    return (
        <IndustryContainer id='Industry'>
            <IndustryH1 data-aos="fade-down">Industries We Serve</IndustryH1>
            <IndustryWrapper>
                
                    <IndustryCard>
                        <IndustryIcon data-aos="fade-right" src={Icon1} />
                        <IndustryH2>Industrial Automation</IndustryH2>
                    </IndustryCard>
                   
                    <IndustryCard>
                        <IndustryIcon data-aos="fade-down" src={Icon2} />
                        <IndustryH2>Chemical and Manufacturing</IndustryH2>
                    </IndustryCard>

                    <IndustryCard>
                        <IndustryIcon data-aos="fade-left" src={Icon3} />
                        <IndustryH2>Pharmaceuticals</IndustryH2>
                    </IndustryCard>

                    <IndustryCard>
                        <IndustryIcon data-aos="fade-right" src={Icon4} />
                        <IndustryH2>Automotive</IndustryH2>
                    </IndustryCard>

                    <IndustryCard>
                        <IndustryIcon data-aos="fade-up" src={Icon5} />
                        <IndustryH2>Agriculture</IndustryH2>
                    </IndustryCard>

                    <IndustryCard>
                        <IndustryIcon data-aos="fade-left" src={Icon6} />
                        <IndustryH2>Food Technology</IndustryH2>
                    </IndustryCard>


              
              
              
               
            </IndustryWrapper>
        </IndustryContainer>
    )
}

export default Industries;
