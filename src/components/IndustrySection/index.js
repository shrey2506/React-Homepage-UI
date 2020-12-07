import React from 'react';
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
    return (
        <IndustryContainer id='Industry'>
            <IndustryH1>Industries We Serve</IndustryH1>
            <IndustryWrapper>
                
                    <IndustryCard>
                        <IndustryIcon src={Icon1} />
                        <IndustryH2>Industrial Automation</IndustryH2>
                    </IndustryCard>
                   
                    <IndustryCard>
                        <IndustryIcon src={Icon2} />
                        <IndustryH2>Chemical and Manufacturing</IndustryH2>
                    </IndustryCard>

                    <IndustryCard>
                        <IndustryIcon src={Icon3} />
                        <IndustryH2>Pharmaceuticals</IndustryH2>
                    </IndustryCard>

                    <IndustryCard>
                        <IndustryIcon src={Icon4} />
                        <IndustryH2>Automotive</IndustryH2>
                    </IndustryCard>

                    <IndustryCard>
                        <IndustryIcon src={Icon5} />
                        <IndustryH2>Agriculture</IndustryH2>
                    </IndustryCard>

                    <IndustryCard>
                        <IndustryIcon src={Icon6} />
                        <IndustryH2>Food Technology</IndustryH2>
                    </IndustryCard>


              
              
              
               
            </IndustryWrapper>
        </IndustryContainer>
    )
}

export default Industries;
