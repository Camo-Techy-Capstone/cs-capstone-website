// @flow
import * as React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRoute from "./AppRoute";
import Home from "./Views/Home";
import PresentationStage from "./Views/PresentationStage";
import Donors from "./Views/Donors";
import TeamBios from "./TeamBios";

export const AppRouter = () => {
  return (
    <BrowserRouter basename="/cosc/2021">
      <AppRoute exact path="/" component={Home} />
      <AppRoute exact path="/teams/:slug" component={TeamBios} />
      <AppRoute exact path="/schedule" component={PresentationStage} />
      <AppRoute exact path="/donors" component={Donors} />
    </BrowserRouter>
  );
};
