import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/request/logo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import Navbar from "components/navbar/Navbar.js";
import Dropdown from "components/navbar/Dropdown.js";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-lg mx-auto flex content-center
`;

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
  text-2xl my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  border-transparent border-b-2
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded text-gray-100 bg-red-700
  hocus:bg-gray-100 hocus:text-red-700 
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center ml-0! bg-red-700`};

  img {
    ${tw`w-32`}
  }
`;

//Navbar Container
export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between z-20`; //ver esto para arreglar el mobile menu

//Hamburger Menu
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

//Links Navbar

export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 pt-10 pl-10 h-screen border text-center rounded-none text-gray-900 bg-white`} 
  ${NavLinks} {
    ${tw`flex flex-col items-start`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center p-8
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {


  const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 1024) {
        setDropdown(false);
        } else {
        setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 1024) {
        setDropdown(false);
        } else {
        setDropdown(false);
        }
    };

  const rutaServidor = "/requestsa"; //Pruebas
  //const rutaServidor = "/"; //produccion

  const defaultLinks = [
    <NavLinks key={1}>
      <ul className="navbar">
        <li className="nav-item">
          <NavLink href={ rutaServidor + "/about" }
              className='nav-links nav-links-mobile'
          >
            About
          </NavLink>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}   
        >
          <NavLink
              href={ rutaServidor + "/profservices" }
              className='nav-links nav-links-mobile'  
          >
            Profesional Services
          {dropdown && <Dropdown />}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink href={ rutaServidor + "/eskersol" }
              className='nav-links nav-links-mobile'
          >
            Esker Solutions
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink href={ rutaServidor + "/customers" }
              className='nav-links nav-links-mobile'
          >
            Customers
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink href={ rutaServidor + "/partners" }
              className='nav-links nav-links-mobile'
          >
            Partners
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink href={ rutaServidor + "/company" }
              className='nav-links nav-links-mobile'
          >
            Company
          </NavLink>
        </li>
      </ul>
      
      
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink tw="inline-block bg-gradient-to-r from-red-700 to-red-500 hocus:to-red-900" href="/#">
        Contact Us
      </PrimaryLink>
    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/requestsa">
      <img src={logo} alt="logo"/>
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {defaultLinks}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        {/** valores normales: x: "150%", display:"none" */}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {logoLink}
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar}  className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
