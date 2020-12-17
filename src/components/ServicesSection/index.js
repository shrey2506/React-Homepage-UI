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
                    <Subtitle>•	The Internet of Things is a concept where every electronic device can be connected to the digital network by simply embedding certain computer chips or sensors. In other words, IoT application development platform is indeed making the electronic things “Smart”</Subtitle>
                    <Subtitle>•	Imagine the productivity loss in a factory due to unplanned downtime or the quality losses which would occur because certain operating conditions when in deviation could result in quality losses. At times, these failures start a domino effect as the failure of machine, would delay the fulfillment of the promised orders and resulting in customer dissatisfaction and potential loss of revenues.</Subtitle>
                    <Subtitle>•	Nanotechnology has the potential to influence almost every stage of manufacturing. Microsensors can help monitor the state of equipment and, using the big data from sensors, an IoT system give real-time (or near real-time) alerts when problems are detected. It provides much greater control over the properties of materials, which at times leads to completely new applications. </Subtitle>
                    <Subtitle>So, what we could expect in near future is the machines sending out alerts and notifications to the enterprise which are actionable before the point of failure.</Subtitle>
                </div>


            </Wrapper>
        </ServicesContainer>
    )
}

export default Services;
