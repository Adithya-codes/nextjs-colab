import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import Layout from "../components/Layout";
import Form from '../components/HubspotForm'
import { SERVICES_DATA as data } from "../helpers/constants";
import { gsap, TweenMax, Power2, Power1 } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Floaters from "../components/Floaters";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { getServicesData } from "../lib/api";
import { imageBuilder } from "../lib/sanity";

gsap.registerPlugin(ScrollTrigger);

const Services = ({ content }) => {
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
        zIndex: "10",
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
        zIndex: "10",

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

  console.log(content);

  let contentArr = content[0].pageBuilder;

  const [, , ...servicesArr] = contentArr;

  const dataArr = [];

  const description1 = content[0].pageBuilder[0].description;
  console.log(description1);

  // const label = content[0].pageBuilder;  //map servicesArr

  servicesArr.map((el, index) => {
    dataArr.push({
      title: el.heading,
      description: el.description,
      image: el.backgroundImage.asset._ref,
    });
  });

  console.log(dataArr);

  const bridgeImage = content[0].pageBuilder[0].backgroundImage.asset._ref;

  // const [, ...servicesData] = dataArr;
  // console.log(servicesData);

  const heading1 = content[0].pageBuilder[0].heading;
  console.log(heading1);

  const title = JSON.stringify(heading1);
  console.log(title.length);

  const title1 = title.slice(1, 17);
  const title2 = title.slice(17, 34);
  const spanHeading = title.slice(34, 43);
  console.log(title2);

  //footer

  const footerTextStr = JSON.stringify(content[0].pageBuilder[1].label);

  console.log(footerTextStr);

  const letsWin = footerTextStr.slice(1, 10);

  const lets = footerTextStr.slice(1, 7);

  const win = footerTextStr.slice(7, 10);

  const together = footerTextStr.slice(10, 19);

  const footerDescriptionStr = JSON.stringify(
    content[0].pageBuilder[1].tagline
  );

  console.log(footerDescriptionStr);

  const footerDescription1 = footerDescriptionStr.slice(1, 42);

  const footerDescription2 = footerDescriptionStr.slice(44, 82);

  const footerDescription3 = footerDescriptionStr.slice(84, 100);

  return (
    <div className="services-wrapper">
      <Layout>
        <section className="bridge-section h-85v" id="the-bridge">
          <div
            className="bridge-img"
            style={{ backgroundImage: `url(${imageBuilder(bridgeImage)})` }}
          >
            <div className="container px-4 w-full">
              <div className="flex flex-wrap -mx-4 relative justify-center h-full">
                <div className=" bridge-text flex flex-col relative self-center xxs:w-full xxs:max-w-full xxs:-top-24 xs:-top-28 xxs:flex-grow-0 xxs:flex-shrink-0 sm:-top-48 xl:-top-32">
                  <h1 className="home-h1 -mb-14 text-center xxs:text-2.1 xxs:leading-0.8 sm:text-7xl lg:text-5.62">
                    {title1}
                  </h1>
                  <h1 className="home-h1 -mb-2 text-center xxs:text-2.1 xxs:leading-0.8 sm:text-7xl lg:text-5.62 sm:-mb-6">
                    {title2}{" "}
                  </h1>
                  <h1 className="span-h1 text-center xxs:text-3.12 xs:text-4.125 sm:text-8.4">
                    {" "}
                    {spanHeading}
                  </h1>
                </div>
                <div className="bridge-para flex flex-wrap relative m-0 justify-center xs:top-8 sm:top-32 lg:top-28">
                  <div className="relative px-4 xxs:w-full lg:flex-grow-0 lg:flex-shrink-0 lg:w-75.67 lg:max-w-83.3 lg:self-center">
                    <p className="small-text text-center mb-12 xxs:text-1.125  xxs:leading-1.65 xxs:px-4 sm:text-1.2 lg:text-2xl lg:leading-1.65 ">
                      {description1}
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
                  {dataArr.map((key) => (
                    <div className="services-content text-center mx-0 xxs:my-9 sm:my-24  ">
                      <img
                        src={imageBuilder(key.image)}
                        alt=""
                        className="w-10% block min-w-70 h-auto mx-auto mb-4"
                      />
                      <h6 className="home-h1  text-center mt-0 mb-2 xxs:text-1.9 xxs:leading-1.2 sm:text-3.12 lg:text-2.7">
                        {" "}
                        {key.title}
                      </h6>
                      <p className="small-text text-center xxs:text-1.17 sm:text-xl sm:leading-1.65 lg:text-1.2 lg:leading-1.75 xl:text-1.3">
                        {key.description}
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
                  {dataArr.map((key) => (
                    <div className="services-content flex relative text-center mx-0 xxs:my-9 sm:my-24 lg:flex-grow-0 lg:flex-shrink-0 lg:w-6/12 lg:max-w-65 lg:-top-12 lg:left-40 xl:left-46 xl:top-6 xl:overflow-hidden ">
                      <img
                        src={imageBuilder(key.image)}
                        alt={key.alt}
                        className="w-10% block min-w-70 h-auto mx-auto mb-4"
                      />
                      <h6 className="home-h1  text-center mt-0 mb-2 xxs:text-1.9 xxs:leading-1.2 sm:text-3.12 lg:text-2.7">
                        {" "}
                        {key.title}
                      </h6>
                      <p className="small-text text-center xxs:text-1.17 sm:text-xl sm:leading-1.65 lg:text-1.2 lg:leading-1.75 xl:text-1.3">
                        {key.description}
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
            <div className="row flex flex-wrap -mx-4 relative sm:mx-auto lg:top-14  ">
              <div className="relative w-full px-4 sm:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50 ">
                <div className="heading xl:-mt-10">
                  <h1 className="home-h1 font-display mb-4  mx-auto xxs:leading-1 xxs:text-5xl sm:hidden">
                    {letsWin} <br /> {together}
                  </h1>
                  <h1 className="home-h1 font-display mb-4  mx-auto xxs:leading-0.9 xxs:text-5xl xxs:hidden sm:block sm:text-3.43  lg:text-h1  sm:text-left lg:text-right">
                    {lets} <br /> {win} <br /> {together}
                  </h1>
                </div>
                <div className="para">
                  <p className="small-text xxs:leading-1.65 xxs:text-1.2  sm:text-lg sm:leading-1.65 sm:text-left lg:text-2xl lg:leading-1.65 lg:text-right">
                    {footerDescription1}
                    <br />
                    {footerDescription2}
                    <br />
                    {footerDescription3}
                    <br />
                  </p>
                </div>
              </div>
             <Form/>
            </div>
          </div>
        </section>
        <Floaters />
        <div id='contact-form'> </div>
      </Layout>
    </div>
  );
};

export default Services;

export async function getStaticProps({ preview = false }) {
  const content = await getServicesData(preview);

  return {
    props: { content, preview },
    revalidate: 1,
  };
}
