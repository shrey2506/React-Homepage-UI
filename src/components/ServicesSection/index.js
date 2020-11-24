import React from 'react';
import Icon1 from '../../Images/image2.svg';
import Icon2 from '../../Images/image3.svg';
import Icon3 from '../../Images/image4.svg';
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
                    <ServicesH2>Robotics</ServicesH2>

                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Artificial Intelligence</ServicesH2>

                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Automation</ServicesH2>

                </ServicesCard>

               
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
