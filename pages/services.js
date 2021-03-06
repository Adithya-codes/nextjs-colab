import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import Layout from "../components/Layout";
import Form from "../components/Form";
import HubspotForm from "react-hubspot-form";
import {SERVICES_DATA as data} from '../helpers/constants'
import { gsap, TweenMax, Power2, Power1 } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Floaters from '../components/Floaters'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const Arrow = ({ className, style, onClick }) => (
    <button
      className={""}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        position: "relative",
        right: "-98.5%",
        top: "-45%",
        outline: "none",
        zIndex:'10'
      }}
    >
      <img src="/images/right.png" />
    </button>
  );

  const LeftArrow = ({ className, style, onClick }) => (
    <button
      className={""}
      onClick={onClick}
      style={{
        display: "block",
        content: "",
        position: "relative",
        top: "48%",
        left: "-7%",
        zIndex:'10',
 
        outline: "none",
      }}
    >
      <img src="/images/left.png" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    swipe: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <LeftArrow />,
  };

 

  useEffect(() => {
    gsap.from(".bridge-img", {
      scrollTrigger: {
        trigger: "#the-bridge",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 75%",
        end: "bottom 60%",
        scrub: 0.35,
      },
      y: "500px",

      ease: "power2.Out",
    });

    gsap.from(".bridge-text", {
      scrollTrigger: {
        trigger: "#the-bridge",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 75%",
        end: "bottom 40%",
        scrub: 0.35,
      },
      y: "70%",

      ease: "power1.Out",
    });
  }, []);

  return (
    <div className="services-wrapper">
      <Layout>
        <section className="bridge-section h-85v" id="the-bridge">
          <div className="bridge-img">
            <div className="container px-4 w-full">
              <div className="flex flex-wrap -mx-4 relative justify-center h-full">
                <div className=" bridge-text flex flex-col relative self-center xxs:w-full xxs:max-w-full xxs:-top-24 xs:-top-28 xxs:flex-grow-0 xxs:flex-shrink-0 sm:-top-48 xl:-top-32">
                  <h1 className="home-h1 -mb-14 text-center xxs:text-2.1 xxs:leading-0.8 sm:text-7xl lg:text-5.62">
                    show us a goal.{" "}
                  </h1>
                  <h1 className="home-h1 -mb-2 text-center xxs:text-2.1 xxs:leading-0.8 sm:text-7xl lg:text-5.62 sm:-mb-6">
                    we'll show you a{" "}
                  </h1>
                  <h1 className="span-h1 text-center xxs:text-3.12 xs:text-4.125 sm:text-8.4">
                    {" "}
                    solution.
                  </h1>
                </div>
                <div className="bridge-para flex flex-wrap relative m-0 justify-center xs:top-8 sm:top-32 lg:top-28">
                  <div className="relative px-4 xxs:w-full lg:flex-grow-0 lg:flex-shrink-0 lg:w-75.67 lg:max-w-83.3 lg:self-center">
                    <p className="small-text text-center mb-12 xxs:text-1.125  xxs:leading-1.65 xxs:px-4 sm:text-1.2 lg:text-2xl lg:leading-1.65 ">
                      At IDC, developing high-quality software at a reasonable
                      cost isn’t a foreign concept. In fact, it’s the core what
                      we do. On average, we can save you 25% over other
                      developers. And our proven process removes the usual
                      obstacles to success. So you get clear communication. Full
                      accountability. And a DevOps team that keeps you informed
                      every step of the way. Since our technology stacks are
                      scalable, you can protect your investment and add
                      functionality as your operation evolves.
                    </p>
                    <img
                      src="/images/down-arrow.png"
                      alt=""
                      className="mt-3 mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-mob xxs:mt-64 sm:mt-56 lg:hidden">
          <div className="container px-4 ">
            <div className=" flex flex-wrap relative w-full xxs:justify-center">
              <div className=" overflow-auto relative w-full px-4 z-30 mx-auto">
                <div>
                  {data.map((key) => (
                    <div className="services-content text-center mx-0 xxs:my-9 sm:my-24  ">
                      <img
                        src={`/images/icons/${key.img}.png`}
                        alt={key.alt}
                        className="w-10% block min-w-70 h-auto mx-auto mb-4"
                      />
                      <h6 className="home-h1  text-center mt-0 mb-2 xxs:text-1.9 xxs:leading-1.2 sm:text-3.12 lg:text-2.7">
                        {" "}
                        {key.name}
                      </h6>
                      <p className="small-text text-center xxs:text-1.17 sm:text-xl sm:leading-1.65 lg:text-1.2 lg:leading-1.75 xl:text-1.3">
                        {key.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-slide w-full absolute top-0 z-40 xxs:hidden lg:block">
                <img
                  src="/images/services-slide.png"
                  alt=""
                  className=" w-full max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services-mob xxs:mt-36 sm:mt-52 xl:mt-32 xxs:hidden lg:block  ">
          <div className="container px-4">
            <div className=" flex relative w-full xxs:justify-center  ">
              <div className=" flex flex-col  relative w-full px-4 z-30 mx-auto  ">
                <Slider {...settings}>
                  {data.map((key) => (
                    <div className="services-content flex relative text-center mx-0 xxs:my-9 sm:my-24 lg:flex-grow-0 lg:flex-shrink-0 lg:w-6/12 lg:max-w-65 lg:-top-12 lg:left-40 xl:left-46 xl:top-6 xl:overflow-hidden ">
                      <img
                        src={`/images/icons/${key.img}.png`}
                        alt={key.alt}
                        className="w-10% block min-w-70 h-auto mx-auto mb-4"
                      />
                      <h6 className="home-h1  text-center mt-0 mb-2 xxs:text-1.9 xxs:leading-1.2 sm:text-3.12 lg:text-2.7">
                        {" "}
                        {key.name}
                      </h6>
                      <p className="small-text text-center xxs:text-1.17 sm:text-xl sm:leading-1.65 lg:text-1.2 lg:leading-1.75 xl:text-1.3">
                        {key.text}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="service-slide w-full absolute top-0 z-40 xxs:hidden lg:block">
                <img
                  src="/images/services-slide.png"
                  alt=""
                  className=" w-full max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className=" relative grated-pattern-footer z-40 xl:pb-12 "
          id="services-page"
        >
          <div className="container px-4 w-full sm:pb-12">
            <div className="row flex flex-wrap -mx-4 relative sm:mx-auto  ">
              <div className="relative w-full px-4 sm:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50 ">
                <div className="heading ">
                  <h1 className="home-h1 font-display mb-4  mx-auto xxs:leading-1 xxs:text-5xl sm:hidden">
                    Let's win <br /> together
                  </h1>
                  <h1 className="home-h1 font-display mb-4  mx-auto xxs:leading-0.9 xxs:text-5xl xxs:hidden sm:block sm:text-3.43  lg:text-h1  sm:text-left lg:text-right">
                    Let's <br /> win <br /> together
                  </h1>
                </div>
                <div className="para">
                  <p className="small-text xxs:leading-1.65 xxs:text-1.2  sm:text-lg sm:leading-1.65 sm:text-left lg:text-2xl lg:leading-1.65 lg:text-right">
                    High-quality services. Affordable prices.
                    <br />
                    Trusted guidance. Get it all with IDC.
                    <br />
                    Contact us today.
                    <br />
                  </p>
                </div>
              </div>
              <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6 sm:top-12 sm:px-0 lg:px-4 sm:flex-grow-0 sm:flex-shrink-0 sm:w-6/12 sm:max-w-50">
                <HubspotForm
                  portalId="7830205"
                  formId="138fc0a1-fbc3-4e84-a27c-98b6cce7a9da"
                  onSubmit={() => console.log("Submit!")}
                  onReady={(form) => console.log("Form ready!")}
                />
              </div>
            </div>
          </div>
        </section>
        <Floaters />
  
      </Layout>
    </div>
  );
};

export default Services;
