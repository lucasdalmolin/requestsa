import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import ComponentRenderer from "ComponentRenderer.js";

import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from "react-router-dom";

import RequestLandingPage from "main/RequestLandingPage";
import Hero from "components/hero/BackgroundAsImage";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

import SAPDevelopingServices from './components/navbar/pages/ProfesionalServices/SAPDevelopingServices'

import AboutUs from "requestpages/AboutUs";
import ContactUs from "pages/ContactUs";
import Signup from "pages/Signup";
import ProfesionalServices from "requestpages/ProfesionalServices";
import EskerSolutions from "requestpages/EskerSolutions";
import Customers from "requestpages/Customers";
import Partners from "requestpages/Partners";
import Company from "requestpages/Company";


export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  // Para trabajar desde localhost hay que descomentar el que dice pruebas y comentar el que dice produccion y para trabajar en modo produccion o en un IIS hay que hacer al reves

  //const rutaServidor = "/"; //Pruebas
  const rutaServidor = "/requestsa"; //produccion

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path={rutaServidor} element={<RequestLandingPage />} />
        <Route path={rutaServidor + "/about"} element={<AboutUs />} />
        <Route path={rutaServidor + "/profservices"} element={<ProfesionalServices />} >
          <Route path={"sapdev"} element={<SAPDevelopingServices/>}/>
          {/* Poner rutas faltantes */}
        </Route>
        <Route path={rutaServidor + "/eskersol"} element={<EskerSolutions />} />
        <Route path={rutaServidor + "/customers"} element={<Customers />} />
        <Route path={rutaServidor + "/partners"} element={<Partners />} />
        <Route path={rutaServidor + "/company"} element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}


