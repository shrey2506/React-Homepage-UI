import React, {useState,useEffect} from 'react';

import Aos from 'aos';
import Footer from '../../components/Footer';
import InfoSection from '../../components/InfoSection';
import { HomeObjFive } from '../../components/InfoSection/Data';
import {CareerObjOne, CareerObjTwo,CareerObjThree, CareerObjFour, CareerObjFive} from './data';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/Sidebar';
import CareersComponent from './CareersComponent';
import {
    Container,
    Wrapper,
    H1,
    TopLine
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
             <InfoSection  {...HomeObjFive}/>
             <Container  id="careers" >
                 <Wrapper  data-aos="fade-up">
                     <H1 >Job Positions</H1>
                     
                        <TopLine>RESEARCH AND DEVELOPMENT</TopLine>
                        <CareersComponent {...CareerObjOne}/>
                        <CareersComponent {...CareerObjTwo}/>

                        <TopLine style={ {paddingTop: '60px'}}>BUSINESS</TopLine>
                        <CareersComponent {...CareerObjThree}/>
                        <CareersComponent {...CareerObjFour}/>
                        <CareersComponent {...CareerObjFive}/>
                    
                     
                </Wrapper>
             </Container>   
             
            
             <Footer />
        </>
    )
}

export default CareerPage;
