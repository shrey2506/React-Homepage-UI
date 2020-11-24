import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/ServicesSection';
import { HomeObjOne, HomeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen,setIsOpen]=useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }


    return (
        <>
         <SideBar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <HeroSection />
         <InfoSection {...HomeObjOne}/>
         <Services />
         <InfoSection {...HomeObjThree}/>
         <Footer />
        </>
    )
}

export default Home;
