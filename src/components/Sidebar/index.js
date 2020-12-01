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
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                
                    <SidebarLink to="contact" onClick={toggle}>Request A Demo</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default SideBar;
