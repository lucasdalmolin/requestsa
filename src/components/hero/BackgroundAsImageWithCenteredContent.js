import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import Navbar from "components/navbar/Navbar.js";

const StyledHeader = styled(Header)`
  ${tw`max-w-none w-full bg-red-900 bg-gradient-to-r from-red-700 via-red-700 fixed h-20 w-screen z-20 p-10 shadow-xl`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-300 hover:border-gray-300 hover:text-white`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50 `;

const HeroContainer = tw.div`z-10 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-bold shadow-lg transition duration-300 text-gray-100 
hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {

  return (
    <Container>
      
      <StyledHeader />
      <br/>
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <Heading>
              REQUEST
              <br />
              Information Technology
          </Heading>
          <PrimaryAction tw="bg-gradient-to-r from-red-700 to-red-900 hocus:to-red-500 transition duration-300 ease-out hocus:ease-in">Abous Us</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
