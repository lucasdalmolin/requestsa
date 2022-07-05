import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
//PAGINA DE ENTRADA

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`

//CONTAINER PAGINA ENTERA
const Container = styled.div`
  ${tw`relative bg-center bg-cover h-1/2 content-center border-b-4 border-black`}
  background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
`;
//LAYER DE OPACIDAD
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25 `;

//CONTAINER DE CABECERA
const HeroContainer = tw.div`relative sm:pt-4 py-24  mx-auto h-full flex flex-col z-10`;

const Content = tw.div`sm:pt-24 flex flex-1 flex-col justify-center items-center content-center`;

const Heading = styled.h1`
  ${tw`text-5xl text-center sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-snug  p-24`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const Subheading = styled.h1`
  ${tw`text-2xl text-center sm:text-2xl lg:text-2xl xl:text-3xl text-white -mt-20 mb-10 `}`
  ;

const PrimaryButton = tw(PrimaryButtonBase)`mt-0 text-sm inline-block bg-red-700 hocus:bg-red-500`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-bold shadow-lg transition duration-300 text-gray-100 
hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default ({
  heading = "TITULO",
  subheading = (
    <>
      hola
      <br/>
      <span tw="font-black text-red-700">"SUBTITULO"</span>
    </>
  )
}) => {

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <Heading>{heading}</Heading>
          <Subheading >{subheading}</Subheading>
          <PrimaryButton>Learn More</PrimaryButton>
          {/* <PrimaryAction tw="bg-gradient-to-r from-red-700 to-red-900 hocus:to-red-500 transition duration-300 ease-out hocus:ease-in">Abous Us</PrimaryAction> */}
        </Content>
      </HeroContainer>
    </Container>
  );
};
