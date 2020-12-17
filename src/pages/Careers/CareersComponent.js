import React, {useState} from 'react';
import {
    
    TopLine,
    JobHeading,
    Description,
} from './CareersElements';

const CareersComponent = ({
    id,
    JobTitle,
    Responsibility1,
    Responsibility2,
    Responsibility3,
    Responsibility4,
    Responsibility5,
    Responsibility6,
    Responsibility7,
    Responsibility8,

    Requiremnet1,
    Requiremnet2,
    Requiremnet3,
    Requiremnet4,
    Requiremnet5,
    Requiremnet6,
    Requiremnet7
   
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
           <div className id={id}>

                     

                     <JobHeading onClick={showDescription}>{JobTitle}</JobHeading>
                     

                     {showDetails && <TopLine onClick={showJobResponsibility}>Responsibilities</TopLine>}
                     {showResposibilities && 
                         <div >
                             {Responsibility1 && <Description>{Responsibility1}</Description>}
                             {Responsibility2 && <Description>{Responsibility2}</Description>}
                             {Responsibility3 && <Description>{Responsibility3}</Description>}
                             {Responsibility4 && <Description>{Responsibility4}</Description>}
                             {Responsibility5 && <Description>{Responsibility5}</Description>}
                             {Responsibility6 && <Description>{Responsibility6}</Description>}
                             {Responsibility7 && <Description>{Responsibility7}</Description>}
                             {Responsibility8 && <Description>{Responsibility8}</Description>}
                         </div>
                     }

                     {showDetails && <TopLine onClick={showJobRequirement}>Requiremnets</TopLine>}
                     {showRequirements && 
                           <div >
                                {Requiremnet1 && <Description>{Requiremnet1}</Description>}
                                {Requiremnet2 && <Description>{Requiremnet2}</Description>}
                                {Requiremnet3 && <Description>{Requiremnet3}</Description>}
                                {Requiremnet4 && <Description>{Requiremnet4}</Description>}
                                {Requiremnet5 && <Description>{Requiremnet5}</Description>}
                                {Requiremnet6 && <Description>{Requiremnet6}</Description>}
                                {Requiremnet7 && <Description>{Requiremnet7}</Description>}
                                
                           </div>
                         
                     }
         </div>
    )
}

export default CareersComponent;
