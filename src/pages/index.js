import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import KnownFor from '../components/KnownForSection';
import Services from '../components/ServicesSection';
import { HomeObjOne, HomeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import Footer from '../components/Footer';
import Industries from '../components/IndustrySection';

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
         <KnownFor />
         <Industries />
         <Services   />
         <InfoSection {...HomeObjThree}/>
         <Footer />
        </>
    )
}

export default Home;
