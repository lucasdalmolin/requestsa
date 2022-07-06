import React from "react";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";

//NECESARIO PARA RENDERIZAR LOS COMPONENTES
import ComponentRenderer from "ComponentRenderer.js";

//REACT-ROUTER COMPONENTES
import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from "react-router-dom";

import Prueba from './other/pages/Login'

//LANDING PAGE
import RequestLandingPage from "./RequestLandingPage";

//PAGINAS
import AboutUs from "pages/AboutUs";
import ProfesionalServices from "pages/ProfesionalServices";
import EskerSolutions from "pages/EskerSolutions";
import Customers from "pages/Customers";
import Partners from "pages/Partners";
import Company from "pages/Company";

//PAGINAS ANIDADAS
import SAPDevelopingServices from './components/navbar/pages/ProfesionalServices/SAPDevelopingServices'


export default function App() {

  // RUTA BASE, ALTERAR A NECESIDAD.
  const rutaServidor = "/requestsa";

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


