import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { AppNav } from "AppNav";
// import AgencyLandingPage from "demos/AgencyLandingPage";

Modal.setAppElement("#root");

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
