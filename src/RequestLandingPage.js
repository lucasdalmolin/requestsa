import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

//COMPONENTES
import Header from 'components/hero/HeaderLandingPage'
import About from "components/features/TwoColSingleFeatureWithStats2.js";
import ProfessionalServices from "components/features/DashedBorderSixFeatures";
import EskerSolutions from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Customers from "components/cards/PortfolioTwoCardsWithImage.js";
import Partners from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Company from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  
    // Para activar o desactivar la animacion de entrada de los componentes hay que quitar o poner la propiedad "disabled"(sin comillas) en el componente: <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  <AnimationRevealPage disabled>
    <Header />
    <About
      subheading = "About Us"
      description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
    <ProfessionalServices />
    <EskerSolutions />
    <Customers />
    <Partners
      subheading="Partners"
      heading={
        <>
          Our Clients <span tw="text-primary-700">Love Us.</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
          customerName: "Charlotte Hale",
          customerTitle: "CEO, Tesla Inc."
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
            "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
          customerName: "Adam Cuppy",
          customerTitle: "Founder, Nestle"
        }
      ]}
      textOnLeft={true}
    />
    <Company />
    <Footer />
  </AnimationRevealPage>
);
