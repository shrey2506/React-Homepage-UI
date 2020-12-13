import React, {useState} from 'react';
import {
    Container,
    H1,
    H2,
    Subtitle,
    Wrapper
} from './TermsOfUseElements';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/Sidebar';

const TermsOfUse = () => {
    
    const [isOpen,setIsOpen]=useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
             <Navbar toggle={toggle}/>
             <SideBar  isOpen={isOpen} toggle={toggle}/>
                <Container>
                    <Wrapper>
                    <H1>Terms Of Use</H1>
                    <Subtitle>This website is owned and operated by Nanorocks Innovation LLP. These Terms set forth the terms and conditions under which you may use our website and services as offered by us. This website offers information on our services and previous projects. By accessing or using the website of our service, you approve that you have read, understood, and agree to be bound by these Terms.</Subtitle>

                    <H2>Who can use our website</H2>
                    <Subtitle>In order to use our website and/or receive our services, you must be at least 18 years of age, or of the legal age of majority in your jurisdiction, and possess the legal authority, right and freedom to enter into these Terms as a binding agreement. You are not allowed to use this website and/or receive services if doing so is prohibited in your country or under any law or regulation applicable to you.</Subtitle>

                    <H2>Retention of right to change offering</H2>
                    <Subtitle>We may, without prior notice, change the services; stop providing the services or any features of the services we offer; or create limits for the services. We may permanently or temporarily terminate or suspend access to the services without notice and liability for any reason, or for no reason.</Subtitle>
                    
                    <H2>Ownership of intellectual property, Copyrights and logos</H2>
                    <Subtitle>The Service and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, logos, patents, trademarks, service marks, copyrights, photographs, audio and videos all Intellectual Property Rights related thereto, are the exclusive property of Sahil Asija. Except as explicitly provided herein, nothing in these Terms shall be deemed to create a license in or under any such Intellectual Property Rights, and you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit, or create derivative works thereof.</Subtitle>
                    
                    <H2>Indemnification</H2>
                    <Subtitle>You agree to indemnify and hold Nanorocks harmless from any demands, loss, liability, claims or expenses (including attorneys’ fees), made against them by any third party due to, or arising out of, or in connection with your use of the website or any of the services offered on the website.</Subtitle>

                    <H2>Limitation of liability</H2>
                    <Subtitle>To the maximum extent permitted by applicable law, in no event shall Nanorocks, be liable for any indirect, punitive, incidental, special, consequential or exemplary damages, including without limitation, damages for loss of profits, goodwill, use, data or other intangible losses, arising out of or relating to the use of, or inability to use, the service. </Subtitle>
                    <Subtitle>To the maximum extent permitted by applicable law, [website owner] assumes no liability or responsibility for any (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to or use of our service; and (iii) any unauthorized access to or use of our secure servers and/or all personal information stored therein.</Subtitle>

                    <H2>Right to change and modify Terms</H2>
                    <Subtitle>We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review these pages periodically. When we change the Terms in a material manner, we will notify you that material changes have been made to the Terms. Your continued use of the Website or our service after any such change constitutes your acceptance of the new Terms. If you do not agree to any of these terms or any future version of the Terms, do not use or access (or continue to access) the website or the service.</Subtitle>

                    <H2>Promotional emails and content</H2>
                    <Subtitle>These Terms, the rights and remedies provided hereunder, and any and all claims and disputes related hereto and/or to the services, shall be governed by, construed under and enforced in all respects solely and exclusively in accordance with the internal substantive laws of India, without respect to its conflict of laws principles. </Subtitle>

                  
                    <Subtitle>Customer support details and contact info. </Subtitle>
                    <Subtitle style={{textAlign: 'left'}}>
                           For more details contact – nanorocksinnovation@gmail.com
                    </Subtitle>

               
                    </Wrapper>
                    </Container>
             <Footer />
        </>
       
    )
}

export default TermsOfUse;
