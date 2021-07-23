// @flow
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Layout from "./Layout";

interface Props extends RouteProps {
  component: React.ComponentType<any>;
};

const AppRoute = (props: Props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
};

export default AppRoute;