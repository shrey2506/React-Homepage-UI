import React,{useState, useEffect} from 'react';

import {  useHistory } from 'react-router-dom';
import Icon from '../../Images/Logo.png';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {IconContext} from 'react-icons/lib';
import {
      Nav, 
      NavbarContainer,
      NavLogo,
      MobileIcon,
      NavMenu,
      NavItem,
      NavLinks,
      NavH5,
      NavWrapper
    } from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]=useState(false);

   
    const history=useHistory();

    const toggleHome=()=>{
        scroll.scrollToTop();
        history.push("/");
    }


    const pushToCareers=()=>{
       
        history.push("/careers");
        scroll.scrollToTop();
       
    }

    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }



    useEffect(() => {
        window.addEventListener('scroll',changeNav);
    },[]);

    return (
       <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavWrapper>
                    <NavLogo src={Icon} onClick={toggleHome}/>
                    <NavH5>Think. Feel. Innovate.</NavH5>
                </NavWrapper>
               
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks 
                           to="about" 
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                           
                        >ABOUT US</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                           to="services"
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                           
                        >OUR SERVICES</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                           to="contact" 
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                           
                        >BLOG</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks 
                           onClick={pushToCareers}
                           to="/careers" 
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                           
                        >CAREERS</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks 
                           to="contact" 
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                           
                        >CONTACT US</NavLinks>
                    </NavItem>
                </NavMenu>


            </NavbarContainer>
        </Nav>
       </IconContext.Provider >
    );
};

export default Navbar;
