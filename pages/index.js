import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useRef } from "react";

import Layout from "../components/Layout";
import Floaters from "../components/Floaters";
import HubspotForm from "react-hubspot-form";
import { gsap, TweenMax, Power2, Linear } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import * as gtag from "../lib/gtag";

import "animate.css/animate.css";

gsap.registerPlugin(ScrollTrigger);

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const index = () => {
  const globe = useRef("null");
  const sections = useRef("null");
  const unicorn = useRef("null");
  const octopus = useRef("null");
  const hands = useRef("null");
  const mountains = useRef("null");

  const handleFormSubmit = () => {
    gtag.event({ action: "formSubmit", category: "Form", label: "homePage", value: "1" })
  };

  useEffect(() => {
    new WOW().init();
    gsap.from(globe.current, {
      scrollTrigger: {
        trigger: "#the-globe",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 75%",
        end: "bottom 80%",
        scrub: 0.35,
      },
      y: "200vh",

      ease: "power2.Out",
    });

    gsap.from(unicorn.current, {
      scrollTrigger: {
        trigger: "#the-unicorn",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 75%",
        end: "bottom 90%",
        scrub: 0.35,
      },
      y: "220vh",

      ease: "power2.Out",
    });

    gsap.from(octopus.current, {
      scrollTrigger: {
        trigger: "#the-octopus",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 75%",
        end: "bottom 90%",
        scrub: 0.35,
      },
      y: "220vh",

      ease: Linear.easeNone,
    });
    gsap.from(".mountain-img", {
      scrollTrigger: {
        trigger: "#the-mountain",
        toggleActions: "play none none reset",
        markers: false,
        start: "top 75%",
        end: "bottom 10%",
        scrub: 0.35,
      },
      y: "120vh",

      // backgroundPosition: "-60% 50%",
      //            delay: -1.5,

      ease: "power2.out",
    });

    gsap.from(".left-hand", {
      scrollTrigger: {
        trigger: ".left-hand",
        toggleActions: "play none none none",
        markers: false,
        start: "top 75%",
        end: "bottom 10%",
      },
      x: "-120vw",

      ease: "power2.out",
    });

    gsap.from(".right-hand", {
      scrollTrigger: {
        trigger: ".right-hand",
        toggleActions: "play none none none",
        markers: false,
        start: "top 75%",
        end: "bottom 10%",
      },
      x: "120vw",

      ease: "power2.out",
    });
  }, []);

  return (
    <div className="home-wrapper ">
      <Layout>
        <div className="sections-continer">
          <section className=" sm:h-60v lg:h-100v" id="the-globe">
            <div className="container px-4 w-full xxs:mt-20  ">
              <div className="flex flex-wrap relative -mx-4 h-full sm:flex-nowrap xxs:top-8 lg:-mx-2 xl:-mx-4  lg:top-56 xl:-top-2 2xl:top-24  ">
                <div className="globe-content flex flex-col self-center w-full px-4 z-30 xxs:min-w-58 sm:flex-grow-0 sm:flex-shrink-0 sm:max-w-50 sm:min-w-50 sm:w-3/6 lg:ml-offset">
                  <div className="heading">
                    <h1 className="home-h1-main font-display xxs:text-2.81 xxs:leading-1 sm:leading-0.9 sm:text-3.43 lg:text-5.3 xl:text-globe">
                      {" "}
                      make the <br /> connection.{" "}
                    </h1>
                  </div>

                  <div className="para">
                    <p class="small-text mt-2 xxs:leading-1.65 sm:text-xl sm:leading-1.65 md:text-lg lg:text-2xl  lg:leading-1.65 leading-4 overflow-x-hidden xxs:text-xl ">
                      When you’re developing software, the right partner makes
                      all the difference in the world. IDC is your global link
                      to superior software development. We offer a better way to
                      get the job done, with U.S.-based project managers leading
                      talented teams of offshore developers.
                    </p>
                  </div>
                </div>

                <div className="globe-pic w-full px-4 relative z-10 xxs:mx-auto md:flex-shrink-0 md:flex-grow-0 md:max-w-41 md:w-41.6 sm:-ml-20 lg:-ml-16 xl:-ml-20">
                  <div
                    className="globe-img relative bg-no-repeat bg-100 h-25 xxs:bg-center xxs:w-full sm:w-full sm:bg-80 sm:-top-12 md:bg-100 lg:-top-44 xl:-top-28 2xl:-top-14 xl:h-33"
                    ref={globe}
                  >
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="lg:z-50 sm:h-60v lg:h-100v xl:h-100v "
            id="the-unicorn"
          >
            <div className="container  px-4 w-full z-30  ">
              <div className="flex flex-wrap mt-8 -mx-4 h-full md:flex-nowrap sm:mt-0 lg:ml-offset  ">
                <div className="unicorn-pic w-full px-4 relative z-30 h-full xxs:ml-0 sm:-ml-10 sm:flex-grow-0 sm:flex-shrink-0 sm:w-1/2 sm:max-w-50">
                  <div
                    className="unicorn-img relative bg-no-repeat xxs:bg-center bg-100 w-full h-30 top-12 xl:h-100v sm:ml-8 xl:-ml-2 z-10"
                    ref={unicorn}
                  ></div>
                </div>
                <div className="unicorn-content text-right flex flex-col self-center w-full px-4 xxs:min-w-58 sm:flex-shrink-0 sm:flex-grow-0 sm:w-1/2 sm:min-w-50 sm:max-w-50 lg:w-46.67 lg:max-w-50 lg:min-w-41 lg:-ml-12 z-40">
                  <div className="heading">
                    <h1 className="home-h1 font-display xxs:text-3.12 sm:text-6xl xxs:leading-1 sm:leading-0.9 md:text-h1 lg:text-h1">
                      {" "}
                      where <br /> software <br /> dreams <br /> come true{" "}
                    </h1>
                  </div>

                  <div className="para">
                    <p class="small-text mt-2 xxs:leading-1.65 sm:text-1.125 lg:text-2xl lg:leading-1.65 leading-4 overflow-x-hidden xxs:text-xl ">
                      You want great results at an affordable price. With IDC,
                      that’s exactly what you get. Mobile applications.
                      Customized websites. EDI systems. We do it all – on
                      target, on time, on budget.
                    </p>
                    <button className="btn-double-outline float-right  mt-4">
                      <span>
                        <a className="btn-text" href="/services">
                          {" "}
                          learn what we do{" "}
                        </a>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className=" sm:h-60v lg:h-100v xl:h-100v 2xl:h-93.5 xl:mt-10 2xl:mt-2 "
            id="the-octopus"
          >
            <div className=" blue-part">
              <div className="container px-4 w-full xl:mt-20">
                <div className="flex flex-wrap mt-8 -mx-4 h-full justify-center sm:mt-0 md:flex-nowrap ">
                  <div className="oct-content relative flex flex-col self-center px-4 z-40 xxs:mt-50 sm:mt-25 sm:flex-grow-0 sm:flex-shrink-0 sm:w-5/6 sm:max-w-83.3 xl:mt-25">
                    <div className="oct-img self-center" ref={octopus}></div>
                    <div className="heading relative z-50">
                      <h1 className="home-h1 xxs:text-5xl leading-1 xxs:w-4/5 xxs:ml-8 xxs:mb-4 xs:w-full xs:ml-0  sm:leading-0.9 text-center sm:text-3.43 lg:text-h1 ">
                        {" "}
                        custom edi with
                        <br />
                        <span className="span-h1 lg:text-h1">
                          {" "}
                          instant pricing{" "}
                        </span>{" "}
                      </h1>
                    </div>
                    <div className="para z-50">
                      <p className="small-text text-center xxs:text-xl xxs:leading-1.65 sm:leading-1.65 sm:text-xl lg:text-2xl lg:leading-1.65 leading-1.75 ">
                        We’ve even developed a product of our own: the Armor
                        Connect Engine (ACE). You can see pricing in seconds
                        with our online calculator. And unlike many providers,
                        we provide custom integration with your ERP system.
                      </p>
                      <button className="btn-double-outline mx-auto mt-4">
                        <span>
                          <a className="btn-text" href="/edi">
                            {" "}
                            calculate your fees{" "}
                          </a>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="hand-section sm:h-60v lg:h-100v xl:h-full xl:mt-20 2xl:h-90 2xl:-mt-20"
            id="the-hand"
          >
            <div className="hands-img">
              <div className="container px-4 w-full ">
                <div className="flex flex-wrap mt-12 -mx-4 h-full sm:mt-12 md:flex-nowrap justify-center">
                  <div className="hand-content flex flex-col self-center relative px-4 w-full xxs:pt-60% xxs:text-center md:flex-grow-0 md:flex-shrink-0 md:w-full md:max-w-full lg:w-4/6 lg:max-w-66.6 sm:pt-0 2xl:mb-8 md:text-left">
                    <div className="heading">
                      <h1 className="home-h1 xxs:text-5xl leading-1 sm:text-left sm:text-3.43 lg:text-h1">
                        {" "}
                        a relationship <br />
                        <span className=" text-globe xxs:text-3.43 sm:text-h1 lg:text-5.25">
                          {" "}
                          built to last{" "}
                        </span>{" "}
                      </h1>
                    </div>

                    <div className="para">
                      <p className="small-text text-center xxs:leading-1.65 sm:leading-1.65 xxs:text-xl sm:text-lg lg:text-2xl lg:leading-1.65 sm:text-left">
                        At IDC, we've always got your back. We're more than your
                        software developer or EDI provider - we're your partner,
                        dedicated to your success today and tomorrow.
                      </p>
                      <button className="btn-double-outline mx-auto mt-4 sm:float-left">
                        <span>
                          <a className="btn-text xxs:" href="/team">
                            {" "}
                            meet the team{" "}
                          </a>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container w-full max-w-full px-4">
                <div className="row flex flex-nowrap mx-4">
                  <div className="left-hand left-0 -ml-20  xxs:hidden sm:block">
                    <img
                      src="/images/left-hand.png"
                      className="w-full flex-shrink-0 flex-grow-0 sm:w-full max-w-full p-0 wow bounceInLeft    "
                    />
                  </div>

                  <div className="right-hand relative -mr-20 xxs:hidden sm:block right-0 ">
                    <img
                      src="/images/right-hand.png"
                      className="w-full flex-shrink-0 flex-grow-0 sm:w-full max-w-full wow bounceInRight "
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="mountain-sec sm:h-60v sm:mt-16 lg:mt-20 xl:mt-12 lg:h-100v xl:h-100v 2xl:h-90 "
            id="the-mountain"
          >
            <div className="mountain-img z-10 relative"> </div>
            <div className="container px-4 w-full z-40 md:pt-40 2xl:pt-56">
              <div className="flex flex-wrap -mx-2 h-full xxs:pt-0 sm:flex-nowrap ">
                <div className="mountain-content text-right relative z-40  sm:flex-grow-0 sm:flex-shrink-0 sm:w-1/2 sm:max-w-50 xxs:px-4 sm:px-0 xxs:mt-20 sm:-mt-12">
                  <div className="heading">
                    <h1 className="home-h1 font-display mb-2  mx-auto xxs:text-5xl sm:hidden">
                      let's win together
                    </h1>
                    <h1 className="home-h1 font-display mb-2 mx-auto sm:text-6xl lg:text-h1 xl:leading-1 xxs:hidden sm:block">
                      let's <br /> win <br /> together
                    </h1>
                  </div>

                  <div className="para">
                    <p className="small-text xxs:text-xl sm:text-1.125 lg:text-2xl lg:leading-1.65">
                      High-quality services. Affordable prices.
                      <br />
                      Trusted guidance. Get it all with IDC.
                      <br />
                      Contact us today.
                      <br />
                    </p>
                  </div>
                </div>
                <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6">
                  <HubspotForm
                    portalId="7830205"
                    formId="138fc0a1-fbc3-4e84-a27c-98b6cce7a9da"
                    onSubmit={handleFormSubmit}
                    onReady={(form) => console.log("Form ready!")}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Floaters />
      </Layout>
    </div>
  );
};

export default index; 