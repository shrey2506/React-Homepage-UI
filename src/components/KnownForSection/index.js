import React from 'react';
import Icon1 from '../../Images/KnownForSection/businessTech.jpeg';
import Icon2 from '../../Images/KnownForSection/bottomUp.jpeg';
import Icon3 from '../../Images/KnownForSection/1.jpeg';
import {
    KnownForContainer,
    KnownForH1,
    KnownForWrapper,
    KnownForIcon,
    KnownForH2,
    KnownForCard
    
} from './KnownForElements';

const KnownFor = () => {
    return (
        <KnownForContainer id='KnownFor'>
            <KnownForH1>We Are Known For</KnownForH1>
            <KnownForWrapper>
                
                    <KnownForCard>
                        <KnownForIcon src={Icon1} />
                        <KnownForH2>Intent focus on the business implications of technological change</KnownForH2>
                    </KnownForCard>
                   
               
              

                <KnownForCard>
                    <KnownForIcon src={Icon2} />
                     <KnownForH2>Rapid and tangible results enabled by proprietary bottom-up research</KnownForH2>
                    
                </KnownForCard>

                <KnownForCard>
                    <KnownForIcon src={Icon3} />
                     <KnownForH2>Deep engagement with domain experts and startup ecosystems</KnownForH2>
                    
                </KnownForCard>
              
               
            </KnownForWrapper>
        </KnownForContainer>
    )
}

export default KnownFor;
