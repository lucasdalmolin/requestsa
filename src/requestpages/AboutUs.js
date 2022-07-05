import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import MainFeature1 from "components/features/TwoColWithButton.js";

import Home from 'components/hero/PagesComponent'
import Objetivos from "components/features/ThreeColWithSideImage";
import Information from "components/blogs/ThreeColSimpleWithImage";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light";

//Componente con navbar
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`

const StyledHeader = styled(Header)`
  ${tw`fixed h-20 max-w-none w-screen pt-8 p-10 w-full bg-red-900 bg-gradient-to-r from-red-700 via-red-700  shadow-xl z-20`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 `}`;

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {

  return (
    <AnimationRevealPage disabled>
      <Container>
        <StyledHeader />
        <Home
          heading = "ABOUT US"
          subheading = "Compañia lider en tecnologia"
        />
        <Objetivos
          subheading={false}
          heading = "NUESTRA MISION"
        />
        <Information />
        <Objetivos
          subheading={false}
          heading = "NUESTRA VISION"
        />
        <Objetivos
          subheading={false}
          heading = "NUESTROS VALORES"
        />
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
