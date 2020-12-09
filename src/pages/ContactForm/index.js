import React, {useState} from 'react'
import ContactFormComponent from '../../components/ContactFormPage';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/Sidebar';

const ContactForm = () => {

    const [isOpen,setIsOpen]=useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
           <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <ContactFormComponent />
                   
            <Footer />
            
        </>
    )
}

export default ContactForm;
