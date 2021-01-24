import Header from "./Header";
import Footer from "./Footer";

import { Children } from "react";

const Layout = (props) => {
  return (
    <>
      <Header />

      {props.children}

    <Footer />
    </>
  );
};

export default Layout;
