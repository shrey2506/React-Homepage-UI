import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarLink,SidebarMenu} from './SidebarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>ABOUT US</SidebarLink>
                
                    <SidebarLink to="services" onClick={toggle}>OUR SERVICES</SidebarLink>
                
                    <SidebarLink to="contact" onClick={toggle}>BLOG</SidebarLink>

                    <SidebarLink to="/careers" onClick={toggle}>CAREERS</SidebarLink>

                    <SidebarLink to="contact" onClick={toggle}>CONTACT US</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default SideBar;
