import React, {useEffect} from 'react';
import {  useHistory } from 'react-router-dom';
import Aos from 'aos';
import {animateScroll as scroll} from 'react-scroll';
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

    const history=useHistory();

    const pushToIndustrialAutomationPage=()=>{
        history.push("/industry/industrial-automation");
        scroll.scrollToTop();
    }

    const pushToChemicalAndManufacturingnPage=()=>{
        history.push("/industry/chemical-and-manufacturing");
        scroll.scrollToTop();
    }

    const pushToPharmaceuticalsPage=()=>{
        history.push("/industry/pharmaceuticals");
        scroll.scrollToTop();       
    }

    const pushToAutomotivePage=()=>{
        history.push("/industry/automotive");
        scroll.scrollToTop();       
    }

    const pushToAgriculturePage=()=>{
        history.push("/industry/agriculture");
        scroll.scrollToTop();       
    }

    const pushToFoodTechPage=()=>{
        history.push("/industry/food-tech");
        scroll.scrollToTop();       
    }

    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
   },[]);

    return (
        <IndustryContainer id='Industry'>
            <IndustryH1 data-aos="fade-down">Industries We Serve</IndustryH1>
            <IndustryWrapper>
                
                    <IndustryCard onClick={pushToIndustrialAutomationPage}>
                        <IndustryIcon data-aos="fade-right" src={Icon1} />
                        <IndustryH2>Industrial Automation</IndustryH2>
                    </IndustryCard>
                   
                    <IndustryCard onClick={pushToChemicalAndManufacturingnPage}>
                        <IndustryIcon data-aos="fade-down" src={Icon2} />
                        <IndustryH2>Chemical and Manufacturing</IndustryH2>
                    </IndustryCard>

                    <IndustryCard onClick={pushToPharmaceuticalsPage}>
                        <IndustryIcon data-aos="fade-left" src={Icon3} />
                        <IndustryH2>Pharmaceuticals</IndustryH2>
                    </IndustryCard>

                    <IndustryCard onClick={pushToAutomotivePage}>
                        <IndustryIcon data-aos="fade-right" src={Icon4} />
                        <IndustryH2>Automotive</IndustryH2>
                    </IndustryCard>

                    <IndustryCard onClick={pushToAgriculturePage}>
                        <IndustryIcon data-aos="fade-up" src={Icon5} />
                        <IndustryH2>Agriculture</IndustryH2>
                    </IndustryCard>

                    <IndustryCard onClick={pushToFoodTechPage}>
                        <IndustryIcon data-aos="fade-left" src={Icon6} />
                        <IndustryH2>Food Technology</IndustryH2>
                    </IndustryCard>


              
              
              
               
            </IndustryWrapper>
        </IndustryContainer>
    )
}

export default Industries;
