import React, {useState} from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/Sidebar';
import {
    Container,
    Wrapper,
    H1,
    H2,
    Subtitle

} from '../TermsOfUse/TermsOfUseElements';



const PrivacyPolicy = () => {

    const [isOpen,setIsOpen]=useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle}/>
                 <Container>
                     <Wrapper>
                     <H1>Privacy Policy</H1>
                      <Subtitle>This privacy policy applies to information that we collect about you when using our websites or provide contact details for us to contact you, or when signing up to any of our newsletters.</Subtitle>

                      <H2>Your privacy is important to us and this is our guiding principles:</H2>
                      
                        <div className="d-flex flex-column">
                            <Subtitle>• We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you</Subtitle>
                            
                            <Subtitle>• We store information for only as long as we have a reason to keep it</Subtitle>
                            
                            <Subtitle>• We aim for full transparency on how we gather and use your personal information</Subtitle>
                        </div>
                        
                         
                     
                      <H2>How do we process your personal data?</H2>
                     <Subtitle>When you are browsing our websites, we process your IP address, cookies, information how you interact with our website, and contact detail in case you subscribe to a newsletter or fill in a form for us to contact you. We process your data for the purpose of communicating with you, including marketing purposes, to optimize the website and improve the user friendliness.</Subtitle>

                     <H2>How long do we keep your information?</H2>
                     <Subtitle>We will keep your information for as long as we need it to communicate with you and to improve our website. You can at any time opt out of our contacts with you or ask us to delete the information we have about you.</Subtitle>

                     <H2>Do we share information about you with others?</H2>
                     <Subtitle>No, we do not share the information we have about you with others.</Subtitle>
                     
                     <H2>What about our privacy policy for the services we provide?</H2>
                     <Subtitle>For the services we provide there is a separate privacy policy you as a user have to accept before the service is made available to you.</Subtitle>
                     </Wrapper>
                    

                 </Container>
            <Footer />
        </>
    )
}

export default PrivacyPolicy;
