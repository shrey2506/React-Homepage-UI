import React, { useEffect } from 'react';
import Icon1 from '../../Images/ServicesSection/IOT.jpeg';
import Aos from 'aos';
import Icon2 from '../../Images/ServicesSection/NanoTech.jpeg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesIcon,
    ServicesH2,
    Wrapper,
    ServicesCard,
    Subtitle
} from './ServiceElements';

const Services = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <ServicesContainer id='services'>
            <ServicesH1 data-aos="fade-down">Our Services</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <ServicesIcon data-aos="fade-right" src={Icon1} />
                    <ServicesH2>Internet Of Things</ServicesH2>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon data-aos="fade-left" src={Icon2} />
                    <ServicesH2>Nanotechnology</ServicesH2>
                </ServicesCard>





            </ServicesWrapper >
            <Wrapper data-aos="fade-up">

                <div className="d-flex flex-column">
                    <Subtitle>•Nanotechnology creates exciting opportunities for new business models, process efficiencies and improved forms of engagement. These include: unproven software functionality and use cases, a story behind new micro-devices, sensors and actuators, advanced communication protocols and complex development scenarios and industry- specific compliance and security requirements.</Subtitle>
                    <Subtitle >• Our end to end IoT engineering services enable customers to leverage the architecture and build connected devices all together using micro-sensors, IoT Chipsets, firmware development and create full- stack infrastructure (Web, Android- iOS framework, Cloud, Analytics) around it</Subtitle>
                </div>


            </Wrapper>
        </ServicesContainer>
    )
}

export default Services;
