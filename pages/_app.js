import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import * as gtag from "../lib/gtag";
import "../styles/tailwind.css";
import "../public/index.css";
import "../styles/home.scss";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />

      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default App;
