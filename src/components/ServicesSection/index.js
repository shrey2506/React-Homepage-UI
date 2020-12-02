import React from 'react';
import Icon1 from '../../Images/ServicesSection/IOT.jpeg';

import Icon2 from '../../Images/ServicesSection/NanoTech.jpeg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesIcon,
    ServicesH2,
   
    ServicesCard
} from './ServiceElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Internet Of Things</ServicesH2>
                    </ServicesCard>
                   
               
              

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                     <ServicesH2>Nano Technology</ServicesH2>
                    
                </ServicesCard>

              
              
              
               
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
