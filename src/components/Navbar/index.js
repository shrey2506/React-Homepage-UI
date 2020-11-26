import React,{useState, useEffect} from 'react';
import Icon from '../../Images/Untitled.png';
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

    const toggleHome=()=>{
        scroll.scrollToTop()
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
                           
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                           to="services"
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                           
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                           to="contact" 
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                           
                        >Contact Us</NavLinks>
                    </NavItem>
                </NavMenu>


            </NavbarContainer>
        </Nav>
       </IconContext.Provider >
    );
};

export default Navbar;
