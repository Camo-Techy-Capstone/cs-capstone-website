import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@material-ui/core";

const Layout: React.FC = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <Box pt={10}>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
