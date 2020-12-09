import styled from 'styled-components';
// import { Link as LinkRouter} from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`

   background: ${({scrollNav}) => (scrollNav ? '#000000' : '#000000')};
   height: 130px;
   margin-top: -130px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;

   @media screen and (max-width: 960px){
       transition: 0.8s all ease;
   }

`

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 110px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;

`
export const NavWrapper= styled.div`
   verticle-align: middle;
`

export const NavLogo = styled.img`
      
      padding-left: 10px;
      width: 110px;
      height: 100px;

      @media screen and (max-width: 480px){
         width: 100px;
         height: 100px;
         padding-left: 5px;
      }
  
`

export const NavH5=styled.h5`
   padding-left: 10px;
   color: #FFFFFF;
   font-size: 10px;
   text-align: center;
`

export const MobileIcon=styled.div`
   display: none;

   @media screen and (max-width: 1024px){
       display: block;
       position: absolute;
       top: 0;
       right: 0;
       transform: translate(-100%, 60%);
       font-size: 1.8rem;
       cursor: pointer;
       color: #fff;
   }
 
`
export const NavMenu= styled.ul`
   display: flex;
   align-items: center;
   list-styles: none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: 1024px){
       display: none
   }
`

export const NavItem=styled.li`
  height: 50px;
  padding: 0 15px;
`

export const NavLinks=styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
   color: #01bf71;
   transition: 0.3s ease-out;
   text-decoration: none;
  }

  &.active{
      border-bottom: 3px solid #01bf71;
      text-decoration: none;
  }

`