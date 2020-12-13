import React, {useState} from 'react';
import {
    
    TopLine,
    JobHeading,
    Description
} from './CareersElements';

const CareersComponent = ({
    id,
    JobCategory,
    JobTitle,
    JobDescription,
    JobResponsibility,
    JobRequirement
}) => {
    const [showDetails, setShowDetails]= useState(false);
    const [showResposibilities, setShowResposibilities]= useState(false);
    const [showRequirements,setShowRequirements]=useState(false);

    const showDescription=()=>{
        setShowDetails(!showDetails);
        setShowResposibilities(false);
        setShowRequirements(false);
    }
    const showJobResponsibility=()=>setShowResposibilities(!showResposibilities);
    const showJobRequirement=()=>setShowRequirements(!showRequirements);
    

    return (
           <div id={id}>

                     <TopLine>{JobCategory}</TopLine>

                     <JobHeading onClick={showDescription}>{JobTitle}</JobHeading>
                     {showDetails && <Description>{JobDescription}</Description>}

                     {showDetails && <TopLine onClick={showJobResponsibility}>Responsibilities</TopLine>}
                     {showResposibilities && <Description>{JobResponsibility}</Description>}

                     {showDetails && <TopLine onClick={showJobRequirement}>Requiremnets</TopLine>}
                     {showRequirements && <Description>{JobRequirement}</Description>}
         </div>
    )
}

export default CareersComponent;
