import React from 'react';
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
    return (
        <KnownForContainer id='KnownFor'>
            <KnownForH1>Our Philosophy</KnownForH1>
            <KnownForWrapper>
                
                    <KnownForCard>
                        <KnownForIcon src={Icon1} />
                        <KnownForH2>Helping organizations leverage the full potential bringing new innovations and refinements to their business processes</KnownForH2>
                    </KnownForCard>
                   
               
              

                <KnownForCard>
                    <KnownForIcon src={Icon2} />
                     <KnownForH2> Save time and costs by making your business process smarter</KnownForH2>
                    
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
