// @flow
import * as React from "react";
import { BrowserRouter, HashRouter, Redirect } from "react-router-dom";
import AppRoute from "./AppRoute";
import Home from "./Views/Home";
import PresentationStage from "./Views/PresentationStage";
import TeamBios from "./TeamBios";

type Props = {};
export const AppRouter = (props: Props) => {
  return (
    <HashRouter>
      <AppRoute exact path="/" component={Home} />
      <AppRoute exact path="/teams/:slug" component={TeamBios} />
      <AppRoute exact path="/2021-schedule" component={PresentationStage} />
    </HashRouter>
  );
};
