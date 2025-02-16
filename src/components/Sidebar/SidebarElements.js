import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
   margin-right: 2%;
   position: fixed;
   z-index: 999;
   width: 50%;
   height: 60%%;
   background: #0d0d0d;
   display: grid;
   align-items: center;
   border-radius: 10px;
   top: 0;
   right: 0;
   transition: 0.3s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
   top:${({ isOpen }) => (isOpen ? '0' : '-100%')};

   @media screen and (max-width: 360px){
      margin-right: 12%;
   }
  
   
`;

export const CloseIcon = styled(FaTimes)`
   color: #fff;
`;
export const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`;

export const SidebarWrapper = styled.div`
   color: #fff;
   justify-content: center;
`;

export const SidebarMenu = styled.ul`
   padding-top: 60px;
   display: grid;
   justify-content: center;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(5, 70px);
   
   jusitfy-content: center;
   
   @media screen and (max-width: 480px){
       grind-template-rows: repeat(5, 60px);
   }
`;

export const SidebarLink = styled(Link)`
   display: flex;
   
   font-size: 1rem;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease-in-out;
   margin-left: auto;
   margin-right: auto;
   text-decoration: none;
  
   color: #fff;
   cursor: pointer;

   &:hover{
       color: #01bf71;
       transtion: 0.2s ease-in-out;
       text-decoration: none;
   }
`;

