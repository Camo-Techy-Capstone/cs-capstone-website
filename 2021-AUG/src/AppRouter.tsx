// @flow
import * as React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRoute from "./AppRoute";
import Home from "./Home";
import TeamBios from "./TeamBios";

type Props = {};
export const AppRouter = (props: Props) => {
  return (
    <HashRouter>
      <AppRoute exact path="/" component={Home} />
      <AppRoute exact path="/:slug" component={TeamBios} />
    </HashRouter>
  );
};
