import React, {useState,useEffect} from 'react';
import Aos from 'aos';
import Footer from '../../components/Footer';
import InfoSection from '../../components/InfoSection';
import { HomeObjFive } from '../../components/InfoSection/Data';
import {CareerObjOne} from './data';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/Sidebar';
import CareersComponent from './CareersComponent';
import {
    Container,
    Wrapper,
    H1
    
} from './CareersElements';


const CareerPage = () => {

    const [isOpen,setIsOpen]=useState(false);
    

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        Aos.init({
            duration: 1600
        });
   },[]);

    return (
        <> 
             <Navbar toggle={toggle}/>
             <SideBar isOpen={isOpen} toggle={toggle}/>
             <InfoSection {...HomeObjFive}/>
             <Container id="careers" >
                 <Wrapper data-aos="fade-up">
                     <H1>Job Positions</H1>
                     <CareersComponent {...CareerObjOne}/>
                    
                </Wrapper>
             </Container>   
             
            
             <Footer />
        </>
    )
}

export default CareerPage;
