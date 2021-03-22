import Header from "./Header";
import Footer from "./Footer";

import { Children } from "react";

const Layout = ({children}) => {



  return (
    <>
 
      <Header  />

      {children}

    <Footer />
    </>
  );
};

export default Layout;
