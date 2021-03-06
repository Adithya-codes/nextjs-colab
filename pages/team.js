import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Form from "../components/Form";
import Floaters from "../components/Floaters";

import Layout from "../components/Layout";
import HubspotForm from "react-hubspot-form";
import { gsap, TweenMax, Power2, Power1, Power4 } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { getTeamHeaderData } from "../lib/api";
gsap.registerPlugin(ScrollTrigger);

const Team = ({ content }) => {
  const introText = useRef("null");
  const brandonImg = useRef("null");
  const sanjayImg = useRef("null");
  const cecilImg = useRef("null");
  const brianImg = useRef("null");

  useEffect(() => {
    gsap.from(introText.current, {
      scrollTrigger: {
        trigger: "#intro-text",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 35%",
        end: "bottom 50%",
        scrub: 0.35,
      },
      y: "60vh",
      ease: "power2.Out",
    });

    gsap.from(brandonImg.current, {
      scrollTrigger: {
        trigger: "#brandon-image",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 75%",
        end: "bottom 90%",
        scrub: 0.35,
      },
      y: "220vh",

      ease: "power2.Out",
    });

    gsap.from(sanjayImg.current, {
      scrollTrigger: {
        trigger: "#sanjay-image",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 75%",
        end: "bottom 90%",
        scrub: 0.35,
      },
      y: "220vh",

      ease: "power2.Out",
    });

    console.log(content);

    gsap.from(cecilImg.current, {
      scrollTrigger: {
        trigger: "#cecil-image",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 75%",
        end: "bottom 90%",
        scrub: 0.35,
      },
      y: "220vh",

      ease: "power2.Out",
    });

    gsap.from(brianImg.current, {
      scrollTrigger: {
        trigger: "#brian-image",
        toggleActions: "play none none reset",

        markers: false,

        start: "top 75%",
        end: "bottom 90%",
        scrub: 0.35,
      },
      y: "220vh",

      ease: "power2.Out",
    });
  }, []);

  const headerData = content[0].pageBuilder[0];
  const trust = headerData.Bigheading;
  console.log(trust);
  const description1 = headerData.description1.children.text;
  const description2 = headerData.description2.children.text;
  const heading1= headerData.heading1;
  const spanHeading = headerData.spanHeading;
  const heading2 = headerData.heading2;
  console.log(description1);
  console.log(description2);
  console.log(heading2);
  console.log(spanHeading);

  return (
    <div className="team-wrapper">
      <Layout>
        <div className="container px-4 w-full">
          <div className="row flex flex-wrap -mx-4">
            <div className="xxs:hidden sm:block">
              <section className="mb-8 relative" id="intro-text">
                <div className="circle-img "></div>
                <div className="container px-4 w-full">
                  <div className=" h-full flex flex-wrap -mx-4 justify-center relative xxs:mt-28 xl:-top-32 ">
                    <div
                      className="heading relative self-center text-center break-words"
                      ref={introText}
                    >
                      <h1 className="span-h1 text-2.8 leading-1 font-medium break-words text-center  relative sm:text-5 lg:text-8xl">
                        {" "}
               {heading1}
                        <span className="home-h1 text-2.8 sm:text-5 lg:text-8xl">
                      {spanHeading}
                        </span>{" "}
                      </h1>
                      <h1 className="text-clip text-center text-2.8 font-display mt-4 bg-clip-text sm:text-5 lg:text-8.4">
                        {trust}
                      </h1>
                      <img
                        src="/images/down-arrow.png"
                        alt=""
                        className="mt-3 mx-auto"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-4">
                    <div className="self-center text-center  px-4 break-words relative xxs:flex-grow-0 xxs:flex-shrink-0 xxs:w-full xxs:max-w-full xxs:mt-14 ">
                      <p className="small-text xxs:text-1.26 sm:text-lg lg:text-2xl lg:leading-1.65">
                        {description1}
                      </p>
                      <img
                        src="/images/down-arrow.png"
                        alt=""
                        className="mt-14 mx-auto"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap xxs:my-14 xxs:mx-auto ">
                    <div className="self-center text-center px-4 relative break-words xxs:flex-shrink-0 xxs:flex-grow-0 xxs:max-w-full xxs:w-full">
                      <div className="flex flex-wrap -mx-4 ">
                        <div className="col-10  text-justify px-4 relative xxs:flex-shrink-0 xxs:flex-grow-0 xxs:max-w-83.3 xxs:w-10/12 xxs:ml-5">
                          <h1
                            className="span-h1 text-8xl text-center w-75 font-thin text-stroke-0 mt-16 xxs:text-2.7 xxs:w-20 xxs:-ml-4 xs:ml-2
                       xxs:mt-4 sm:text-3.43 lg:text-5.2 xl:text-8xl lg:-ml-40 xl:-ml-16 sm:w-75 sm:-ml-64"
                          >
                            {" "}
                            {heading2}
                          </h1>
                        </div>
                      </div>

                      <p className="small-text text-center xxs:text-xl sm:text-lg lg:text-2xl xxs:mt-4 lg:leading-1.65">
                        {description2}
                      </p>
                      <img
                        src="/images/down-arrow.png"
                        alt=""
                        className="mt-12 mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 xxs:mt-9 sm:mt-20 sm:h-100v"
                id="brandon-image"
              >
                <div className="container px-4 w-full sm:mt-12 lg:mt-24 xl:mt-4 ">
                  <div className="row flex flex-wrap -mx-4 justify-center ">
                    <div className="relative px-4 w-full xxs:min-w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 lg:w-2/6 lg:max-w-33.3 lg:min-w-0 lg:-mr-12 lg:top-0">
                      <div className="img" ref={brandonImg}>
                        <img
                          src="/images/Brandon-fullshot.png"
                          alt=""
                          className=" xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto sm:w-auto sm:justify-center sm:h-45 sm:max-w-screen-xl"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-left px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-40  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:text-right lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-4 self-center ">
                      <div className="heading pb-4 lg:text-right">
                        <h1 className="home-h1 text-6xl xxs:leading-1 xxs:mb-2 sm:text-2.5 lg:text-3.8 lg:leading-0.9">
                          t.brandon barker
                        </h1>
                        <h3 className="text-4xl uppercase font-display font-black leading-1 xxs:text-white xxs:span-h1 xxs:text-3.12 sm:text-4xl lg:text-2 sm:text-navy-blue lg:mt-6">
                          {" "}
                          founder & ceo
                        </h3>
                        <div className="para">
                          <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 sm:leading-1.65 sm:text-lg lg:leading-1.65 lg:text-2xl">
                            An accomplished C-level executive, Brandon
                            continually sets extremely high standards for
                            himself and the IDC team. He’s also the co–founder
                            and COO of Innova Zones, a technology-centric
                            organization providing integrated management
                            services to Fortune 1000 companies across diverse
                            industry sectors. Before that, he had a successful
                            career with Justin Brands, where he provided
                            leadership and innovation in sales, marketing,
                            product development and brand management.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 lg:mt-12 xl:mt-52 sm:h-100v"
                id="sanjay-image"
              >
                <div className="container px-4 w-full">
                  <div className="row flex flex-wrap -mx-4 justify-center">
                    <div className="relative px-4 w-full xxs:min-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50  sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                      <div className="img" ref={sanjayImg}>
                        <img
                          src="/images/sanjay-fullshot.png"
                          alt=""
                          className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center sm:h-45 sm:w-auto sm:max-w-screen-xl  "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-right co px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-48 sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0 sm:text-left self-center ">
                      <div className="heading pb-4">
                        <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-2.5 lg:text-3.8">
                          sanjay bhati
                        </h1>
                        <h3 className="text-4xl  uppercase font-display font-black xxs:leading-1 xxs:text-white xxs:text-3.12 sm:text-4xl lg:text-2 lg:mt-6 sm:text-navy-blue">
                          {" "}
                          founder & coo
                        </h3>
                        <div className="para">
                          <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 sm:leading-1.65  sm:text-lg lg:text-2xl lg:leading-1.65">
                            Sanjay Bhati has “been there, done that.” In his 25+
                            years in business, he’s handled a wide range of key
                            functions, from finance to accounts to human
                            resources. In the past two decades, Sanjay has held
                            senior positions in shared services, outsourcing and
                            human resources. He’s an expert in outsourcing,
                            having led many companies through organization
                            design, strategy development, delivery center setup,
                            transition management and continuous improvement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 lg:mt-12 xl:mt-52 sm:h-100v"
                id="cecil-image"
              >
                <div className="container px-4 w-full">
                  <div className="row flex flex-wrap -mx-4 justify-center">
                    <div className="relative px-4 w-full xxs:min-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 sm:-ml-12 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                      <div className="img" ref={cecilImg}>
                        <img
                          src="/images/cecil-fullshot.png"
                          alt=""
                          className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center  lg:-mr-28 sm:max-w-screen-xl sm:w-auto sm:h-45 "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-left  px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-48 sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0 sm:text-left lg:text-right  self-center ">
                      <div className="heading pb-4 lg:text-right">
                        <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-2.5 lg:text-3.8 ">
                          cecil bostany
                        </h1>
                        <h3 className="text-4xl  uppercase font-display font-black xxs:leading-1 xxs:text-3.12 xxs:text-white sm:text-4xl lg:text-2 sm:text-navy-blue lg:mt-6 ">
                          {" "}
                          founder & cfo
                        </h3>
                        <div className="para">
                          <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 sm:leading-1.65  sm:text-lg lg:text-2xl lg:leading-1.65">
                            Cecil brings a wealth of financial expertise to IDC.
                            He’s advised and worked with software companies for
                            40+ years and has 25+ years of experience with
                            venture capital companies, publicly traded firms and
                            mergers & acquisitions. A CPA since 1980, Cecil was
                            a partner with an international accounting firm and
                            has served clients in a variety of industries,
                            including technology and life sciences,
                            manufacturing, food and beverage, and automotive.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 xl:mt-52 sm:h-100v"
                id="brian-image"
              >
                <div className="container px-4 w-full">
                  <div className="row flex flex-wrap -mx-4 justify-center">
                    <div className="relative px-4 w-full xxs:min-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                      <div className="img" ref={brianImg}>
                        <img
                          src="/images/brian-fullshot.png"
                          alt=""
                          className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center sm:w-auto sm:max-w-screen-xl sm:h-45 "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-right co px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-40 sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0 self-center sm:text-left ">
                      <div className="heading pb-4">
                        <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-2.5 lg:text-3.8">
                          t.brian barker
                        </h1>
                        <h3 className="text-4xl  leading-1 uppercase font-display font-black xxs:leading-1 xxs:text-white xxs:text-3.12 sm:text-4xl lg:text-2 sm:text-navy-blue lg:mt-6">
                          {" "}
                          director/ founder
                        </h3>
                        <div className="para">
                          <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 sm:leading-1.65 sm:text-lg lg:text-2xl lg:leading-1.65">
                            A member of the IDC Board of Directors, Brian is an
                            experienced business executive who offers valuable
                            insights in multiple areas, from daily operations to
                            offshore software development. He co-founded Innova
                            Zones in 2015 with Brandon Barker, and before that
                            was COO of the Integrated Advantage Group, where he
                            served on the Board of Directors. He has also held
                            leadership positions at Cintas and the Vincit Group.
                            Currently, Brian is the CEO and Chairman of the
                            Board of Innova Zones.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="sm:hidden">
              <section className="mb-8 relative" id="intro-text">
                <div className="circle-img "></div>
                <div className="container px-4 w-full">
                  <div className=" h-full flex flex-wrap -mx-4 justify-center relative xxs:mt-28 xl:mt-80 ">
                    <div className="heading relative self-center text-center break-words">
                      <h1 className="span-h1 text-2.8 leading-1 font-medium break-words text-center  relative sm:text-5 lg:text-8xl">
                        {" "}
                {heading1}
                        <span className="home-h1 text-2.8 sm:text-5 lg:text-8xl">
                          {" "}
             {spanHeading}
                        </span>{" "}
                      </h1>
                      <h1 className="text-clip text-center text-2.8 font-display mt-4 bg-clip-text sm:text-5 lg:text-8.4">
                        {trust}
                      </h1>
                      <img
                        src="/images/down-arrow.png"
                        alt=""
                        className="mt-3 mx-auto"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-4">
                    <div className="self-center text-center  px-4 break-words relative xxs:flex-grow-0 xxs:flex-shrink-0 xxs:w-full xxs:max-w-full xxs:mt-14 ">
                      <p className="small-text xxs:text-1.26 sm:text-lg lg:text-2xl lg:leading-1.65">
                        {description1}
                      </p>
                      <img
                        src="/images/down-arrow.png"
                        alt=""
                        className="mt-14 mx-auto"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap xxs:my-14 xxs:mx-auto ">
                    <div className="self-center text-center px-4 relative break-words xxs:flex-shrink-0 xxs:flex-grow-0 xxs:max-w-full xxs:w-full">
                      <div className="flex flex-wrap -mx-4 ">
                        <div className="col-10  text-justify px-4 relative xxs:flex-shrink-0 xxs:flex-grow-0 xxs:max-w-83.3 xxs:w-10/12 xxs:ml-5">
                          <h1
                            className="span-h1 text-8xl text-center w-75 font-thin text-stroke-0 mt-16 xxs:text-2.7 xxs:w-20 xxs:-ml-4 xs:ml-2
                       xxs:mt-4 sm:text-3.43 lg:text-5.2 xl:text-8xl lg:-ml-40 xl:-ml-16 sm:w-75 sm:-ml-64"
                          >
                            {" "}
                      {heading2}
                          </h1>
                        </div>
                      </div>

                      <p className="small-text text-center xxs:text-xl sm:text-lg lg:text-2xl xxs:mt-4 lg:leading-1.65">
                        {description2}
                      </p>
                      <img
                        src="/images/down-arrow.png"
                        alt=""
                        className="mt-12 mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 xxs:mt-9 sm:mt-20 sm:h-100v"
                id="brandon-image"
              >
                <div className="container px-4 w-full sm:mt-12 lg:mt-24 xl:mt-4 ">
                  <div className="row flex flex-wrap -mx-4 justify-center ">
                    <div className="relative px-4 w-full xxs:min-w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 lg:w-2/6 lg:max-w-33.3 lg:min-w-0 lg:-mr-12 lg:top-0">
                      <div className="img">
                        <img
                          src="/images/Brandon-fullshot.png"
                          alt=""
                          className=" xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto sm:w-auto sm:justify-center sm:h-45 sm:max-w-screen-xl"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-left px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-40  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:text-right lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-4 self-center ">
                      <div className="heading pb-4 lg:text-right">
                        <h1 className="home-h1 text-6xl xxs:leading-1 xxs:mb-2 sm:text-2.5 lg:text-3.8 lg:leading-0.9">
                          t.brandon barker
                        </h1>
                        <h3 className="text-4xl uppercase font-display font-black leading-1 xxs:text-white xxs:span-h1 xxs:text-3.12 sm:text-4xl lg:text-2 sm:text-navy-blue lg:mt-6">
                          {" "}
                          founder & ceo
                        </h3>
                        <div className="para">
                          <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 sm:leading-1.65 sm:text-lg lg:leading-1.65 lg:text-2xl">
                            An accomplished C-level executive, Brandon
                            continually sets extremely high standards for
                            himself and the IDC team. He’s also the co–founder
                            and COO of Innova Zones, a technology-centric
                            organization providing integrated management
                            services to Fortune 1000 companies across diverse
                            industry sectors. Before that, he had a successful
                            career with Justin Brands, where he provided
                            leadership and innovation in sales, marketing,
                            product development and brand management.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 lg:mt-12 xl:mt-52 sm:h-100v"
                id="sanjay-image"
              >
                <div className="container px-4 w-full">
                  <div className="row flex flex-wrap -mx-4 justify-center">
                    <div className="relative px-4 w-full xxs:min-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50  sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                      <div className="img">
                        <img
                          src="/images/sanjay-fullshot.png"
                          alt=""
                          className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center sm:h-45 sm:w-auto sm:max-w-screen-xl  "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-right co px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-48 sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0 sm:text-left self-center ">
                      <div className="heading pb-4">
                        <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-2.5 lg:text-3.8">
                          sanjay bhati
                        </h1>
                        <h3 className="text-4xl  uppercase font-display font-black xxs:leading-1 xxs:text-white xxs:text-3.12 sm:text-4xl lg:text-2 lg:mt-6 sm:text-navy-blue">
                          {" "}
                          founder & coo
                        </h3>
                        <div className="para">
                          <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 sm:leading-1.65  sm:text-lg lg:text-2xl lg:leading-1.65">
                            Sanjay Bhati has “been there, done that.” In his 25+
                            years in business, he’s handled a wide range of key
                            functions, from finance to accounts to human
                            resources. In the past two decades, Sanjay has held
                            senior positions in shared services, outsourcing and
                            human resources. He’s an expert in outsourcing,
                            having led many companies through organization
                            design, strategy development, delivery center setup,
                            transition management and continuous improvement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 lg:mt-12 xl:mt-52 sm:h-100v"
                id="cecil-image"
              >
                <div className="container px-4 w-full">
                  <div className="row flex flex-wrap -mx-4 justify-center">
                    <div className="relative px-4 w-full xxs:min-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 sm:-ml-12 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                      <div className="img">
                        <img
                          src="/images/cecil-fullshot.png"
                          alt=""
                          className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center  lg:-mr-28 sm:max-w-screen-xl sm:w-auto sm:h-45 "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-left  px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-48 sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0 sm:text-left lg:text-right  self-center ">
                      <div className="heading pb-4 lg:text-right">
                        <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-2.5 lg:text-3.8 ">
                          cecil bostany
                        </h1>
                        <h3 className="text-4xl  uppercase font-display font-black xxs:leading-1 xxs:text-3.12 xxs:text-white sm:text-4xl lg:text-2 sm:text-navy-blue lg:mt-6 ">
                          {" "}
                          founder & cfo
                        </h3>
                        <div className="para">
                          <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 sm:leading-1.65  sm:text-lg lg:text-2xl lg:leading-1.65">
                            Cecil brings a wealth of financial expertise to IDC.
                            He’s advised and worked with software companies for
                            40+ years and has 25+ years of experience with
                            venture capital companies, publicly traded firms and
                            mergers & acquisitions. A CPA since 1980, Cecil was
                            a partner with an international accounting firm and
                            has served clients in a variety of industries,
                            including technology and life sciences,
                            manufacturing, food and beverage, and automotive.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 xl:mt-52 sm:h-100v"
                id="brian-image"
              >
                <div className="container px-4 w-full">
                  <div className="row flex flex-wrap -mx-4 justify-center">
                    <div className="relative px-4 w-full xxs:min-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                      <div className="img">
                        <img
                          src="/images/brian-fullshot.png"
                          alt=""
                          className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center sm:w-auto sm:max-w-screen-xl sm:h-45 "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-right co px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-40 sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0 self-center sm:text-left ">
                      <div className="heading pb-4">
                        <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-2.5 lg:text-3.8">
                          t.brian barker
                        </h1>
                        <h3 className="text-4xl  leading-1 uppercase font-display font-black xxs:leading-1 xxs:text-white xxs:text-3.12 sm:text-4xl lg:text-2 sm:text-navy-blue lg:mt-6">
                          {" "}
                          director/ founder
                        </h3>
                        <div className="para">
                          <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 sm:leading-1.65 sm:text-lg lg:text-2xl lg:leading-1.65">
                            A member of the IDC Board of Directors, Brian is an
                            experienced business executive who offers valuable
                            insights in multiple areas, from daily operations to
                            offshore software development. He co-founded Innova
                            Zones in 2015 with Brandon Barker, and before that
                            was COO of the Integrated Advantage Group, where he
                            served on the Board of Directors. He has also held
                            leadership positions at Cintas and the Vincit Group.
                            Currently, Brian is the CEO and Chairman of the
                            Board of Innova Zones.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section className="grated-pattern-teams relative lg:-top-12 xl:mt-16 xl:-top-2   2xl:-top-12">
              <Form heading1="let's" heading2="win" heading3="together" />
            </section>
          </div>
        </div>
        <Floaters />
      </Layout>
    </div>
  );
};

export default Team;

export async function getStaticProps({ preview = false }) {
  const content = await getTeamHeaderData(preview);

  return {
    props: { content, preview },
    revalidate: 1,
  };
}
