import React,{useState,useEffect} from 'react';
import Aos from 'aos';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import InfoSection from '../../components/InfoSection';
import { HomeObjSix } from '../../components/InfoSection/Data';

const IndustrialAutomation = () => {

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
            <InfoSection {...HomeObjSix}/>
            <Footer />
        </>
    )
}

export default IndustrialAutomation;
