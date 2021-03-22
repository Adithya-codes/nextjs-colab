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
import { imageBuilder } from "../lib/sanity";
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
      y: "20vh",
      ease: "power2.Out",
    });

    gsap.from('.brandonImg', {
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

    gsap.from('.sanjayImg', {
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

    gsap.from('.cecilImg', {
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

    gsap.from('.brianImg', {
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

  const data = [
    {
      heading:'brandon barker',
      designation:'ceo',
      tagline:`An accomplished C-level executive, Brandon continually sets
      extremely high standards for himself and the IDC team. He’s
      also the co–founder and COO of Innova Zones, a
      technology-centric organization providing integrated
      management services to Fortune 1000 companies across diverse
      industry sectors. Before that, he had a successful career
      with Justin Brands, where he provided leadership and
      innovation in sales, marketing, product development and
      brand management.`,
     
      classImg: `relative px-4 w-full   sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 lg:w-2/6 lg:max-w-33.3 lg:min-w-0 lg:-mr-12 lg:top-0`,

      id: "brandon",
    },
    {

      heading:'brandon barker',
      designation:'ceo',
      tagline:`An accomplished C-level executive, Brandon continually sets
      extremely high standards for himself and the IDC team. He’s
      also the co–founder and COO of Innova Zones, a
      technology-centric organization providing integrated
      management services to Fortune 1000 companies across diverse
      industry sectors. Before that, he had a successful career
      with Justin Brands, where he provided leadership and
      innovation in sales, marketing, product development and
      brand management.`,
     
      classImg: `relative px-4 w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50  sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12`,

      id: "sanjay",
    },
    {

      heading:'brandon barker',
      designation:'ceo',
      tagline:`An accomplished C-level executive, Brandon continually sets
      extremely high standards for himself and the IDC team. He’s
      also the co–founder and COO of Innova Zones, a
      technology-centric organization providing integrated
      management services to Fortune 1000 companies across diverse
      industry sectors. Before that, he had a successful career
      with Justin Brands, where he provided leadership and
      innovation in sales, marketing, product development and
      brand management.`,
     
      classImg: `relative px-4 w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 sm:-ml-12 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12`,

      id: "cecil",
    },
    {

      heading:'brandon barker',
      designation:'ceo',
      tagline:`An accomplished C-level executive, Brandon continually sets
      extremely high standards for himself and the IDC team. He’s
      also the co–founder and COO of Innova Zones, a
      technology-centric organization providing integrated
      management services to Fortune 1000 companies across diverse
      industry sectors. Before that, he had a successful career
      with Justin Brands, where he provided leadership and
      innovation in sales, marketing, product development and
      brand management.`,
     
      classImg: `relative px-4 w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12`,

      id: "brian",
    },
  ];

  const helperArr = [
    {
      classImg: `relative px-4 w-full   sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 lg:w-2/6 lg:max-w-33.3 lg:min-w-0 lg:-mr-12 lg:top-0`,
      id: "brandon",
    },

    {
      
      classImg: `relative px-4 w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50  sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12`,
      id: "sanjay",
    },
    {
      classImg: `relative px-4 w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 sm:-ml-12 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12`,
      id: "cecil",
    },
    {
      classImg: `relative px-4 w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12`,
      id: "brian",
    },
  ];

  console.log(content); 

  const gett = (val, index, array) => {
    if (index > 0 && index < 5) {
      return val;
    }
  };
  const label = content[0].pageBuilder;

  var mainArray = label.filter(gett);
  console.log({ mainArray });

  const teamArr = [];

  mainArray.map((val, idx) => {
    let newarr = { ...helperArr[idx], ...val };
    console.log(newarr);
    teamArr.push(newarr);
  });

  console.log(teamArr);

  console.log(label[0]);

  const trustText = label[0].Bigheading;
  const title1 = JSON.stringify(label[0].heading1);

  console.log(title1.length);

  const title2 = title1.slice(1, 12);
  const title3 = title1.slice(12, 23);

  const spanHeading = label[0].spanHeading;

  console.log(trustText);

  const dataArr = [];

  dataArr.push(label);
  console.log(dataArr);
  const [, ...teamData] = dataArr[0];

  const tagline1 = label[0].tagline1;
  const tagline2 = label[0].tagline2;

  const heading2 = label[0].heading2;

  const circleImgUrl = content[0].pageBuilder[0].image.asset._ref;

  //footer

  const footerTextStr = JSON.stringify(content[0].pageBuilder[5].label);

  console.log(footerTextStr);

  const lets = footerTextStr.slice(1, 7);

  const win = footerTextStr.slice(7, 10);

  const together = footerTextStr.slice(10, 19);

  const footerDescriptionStr = JSON.stringify(
    content[0].pageBuilder[5].tagline
  );

  console.log(footerDescriptionStr);

  const footerDescription1 = footerDescriptionStr.slice(1, 42);

  const footerDescription2 = footerDescriptionStr.slice(44, 82);

  const footerDescription3 = footerDescriptionStr.slice(84, 100);

  return (
    <div className="team-wrapper">
      <Layout>
        <div className="container px-4 w-full">
          <div className="row flex flex-wrap -mx-4">
            <div className="xxs:hidden sm:block">
              <section className="mb-8 relative" id="intro-text">
                <div
                  className="circle-img "
                  style={{
                    backgroundImage: `url(${imageBuilder(circleImgUrl)})`,
                  }}
                ></div>
                <div className="container px-4 w-full">
                  <div className=" h-full flex flex-wrap -mx-4 justify-center relative xxs:mt-28 xl:top-28 ">
                    <div
                      className="heading relative self-center text-center break-words"
                      ref={introText}
                    >
                      <h1 className="span-h1 text-2.8 leading-1 font-medium break-words text-center  relative sm:text-5 lg:text-8xl">
                        {" "}
                        {title2} <br /> {title3} <br />{" "}
                        <span className="home-h1 text-2.8 sm:text-5 lg:text-8xl">
                          {" "}
                          {spanHeading}
                        </span>{" "}
                      </h1>
                      <h1 className="text-clip text-center text-2.8 font-display mt-4 bg-clip-text sm:text-5 lg:text-8.4">
                        {" "}
                        {trustText}
                      </h1>
                      <img
                        src="/images/down-arrow.png"
                        alt=""
                        className="mt-3 mx-auto"
                      />
                    </div>
                  </div>

                  <div className='h-2.5 my-5 mx-auto w-full'></div>

                  <div className="flex flex-wrap -mx-4">
                    <div className="self-center text-center  px-4 break-words relative xxs:flex-grow-0 xxs:flex-shrink-0 xxs:w-full xxs:max-w-full xl:top-52 ">
                      <p className="small-text xxs:text-1.26 sm:text-lg lg:text-2xl lg:leading-1.65">
                        {tagline1}
                      </p>
                      <div className='h-2.5 my-5 mx-auto w-full'></div>
                      <img
                        src="/images/down-arrow.png"
                        alt=""
                        className="mt-14 mx-auto"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap xxs:mx-auto ">
                    <div className="self-center text-center px-4 relative break-words xxs:flex-shrink-0 xxs:flex-grow-0 xxs:max-w-full xxs:w-full top-46">
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
                        {tagline2}
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

              {teamArr.map((el, index) => (
                <section
                  className=" xxs:w-full xxs:min-w-full relative z-30 sm:mt-20 lg:mt-12 xl:mt-52 sm:h-100v"
                  id={ `${el.id}-image`}
                >
                  <div className="container px-4 w-full ">
                    <div className="row relative flex flex-wrap -mx-4 justify-center lg:top-10  ">
                      <div className={el.classImg}>
                        <div className={`${el.id}Img`}>
                          <img
                            src={imageBuilder(el.image.asset._ref)}
                            alt=""
                            className=" relative xxs:mx-auto sm:w-auto sm:justify-center sm:top-40 sm:h-45 sm:max-w-screen-xl"
                          />
                        </div>
                      </div>
                      <div
                        className="flex flex-col  px-4 w-full z-20 relative xxs:min-w-full xxs:w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 sm:text-right lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-40 self-center"
                        id={`${el.id}-xl-content`}
                      >
                        <div className="heading pb-4 ">
                          <h1 className="home-h1 text-6xl xxs:leading-1 xxs:mb-2 sm:text-2.5 lg:text-3.8 lg:leading-0.9">
                            {el.heading}
                          </h1>
                          <h3 className="text-4xl uppercase font-display font-black leading-1 xxs:text-white xxs:span-h1 xxs:text-3.12 sm:text-4xl lg:text-2 sm:text-navy-blue lg:mt-6">
                            {" "}
                            {el.designation}
                          </h3>
                          <div className="para">
                            <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 sm:leading-1.65 sm:text-lg lg:leading-1.65 lg:text-2xl">
                              {el.tagline}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}

              {/* <section
                className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 lg:mt-12 xl:mt-52 sm:h-100v"
                id="sanjay-image"
              >
                <div className="container px-4 w-full">
                  <div className="row flex flex-wrap -mx-4 justify-center">
                    <div className="relative px-4 w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50  sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                      <div className="img" ref={sanjayImg}>
                        <img
                          src="/images/sanjay-fullshot.png"
                          alt=""
                          className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center sm:h-45 sm:w-auto sm:max-w-screen-xl  "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col  px-4 w-full z-20 relative xxs:min-w-full xxs:w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-4 sm:text-left self-center" id='sanjay-xl-content'>
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
                    <div className="relative px-4 w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 sm:-ml-12 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                      <div className="img" ref={cecilImg}>
                        <img
                          src="/images/cecil-fullshot.png"
                          alt=""
                          className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center  lg:-mr-28 sm:max-w-screen-xl sm:w-auto sm:h-45 "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col   px-4 w-full z-20 relative  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-4  sm:text-right self-center" id='cecil-xl-content'>
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
                    <div className="relative px-4 w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-top-40 sm:-ml-24 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                      <div className="img" ref={brianImg}>
                        <img
                          src="/images/brian-fullshot.png"
                          alt=""
                          className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center sm:w-auto sm:max-w-screen-xl sm:h-45 "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col px-4 w-full z-20 relative   sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0 self-center sm:text-left " id='brianh-xl-content'>
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
              </section> */}
            </div>

            <div className="sm:hidden">
              <section className="mb-8 relative" id="intro-text">
                <div
                  className="circle-img "
                  style={{
                    backgroundImage: `url(${imageBuilder(circleImgUrl)})`,
                  }}
                ></div>
                <div className="container px-4 w-full">
                  <div className=" h-full flex flex-wrap -mx-4 justify-center relative xxs:mt-28 xl:mt-80 ">
                    <div className="heading relative self-center text-center break-words">
                      <h1 className="span-h1 text-2.8 leading-1 font-medium break-words text-center  relative sm:text-5 lg:text-8xl">
                        {" "}
                        {title2} <br /> {title3} <br />{" "}
                        <span className="home-h1 text-2.8 sm:text-5 lg:text-8xl">
                          {" "}
                          transperancy{" "}
                        </span>{" "}
                      </h1>
                      <h1 className="text-clip text-center text-2.8 font-display mt-4 bg-clip-text sm:text-5 lg:text-8.4">
                        {" "}
                        {trustText}
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
                        {tagline1}
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

                      <p className="small-text text-center xxs:text-xl xxs:leading-1.65 sm:text-lg lg:text-2xl xxs:mt-4 lg:leading-1.65">
                        {tagline2}
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

              {teamArr.map((el, index) => (
                <section
                  className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 xxs:mt-9 "
                  id="brandon-image"
                >
                  <div className="container px-4 w-full ">
                    <div className="row flex flex-wrap -mx-4 justify-center ">
                      <div className="relative px-4 w-full xxs:min-w-full">
                        <div className="img">
                          <img
                            src={imageBuilder(el.image.asset._ref)}
                            alt=""
                            className=" xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto "
                          />
                        </div>
                      </div>
                      <div
                        className="flex flex-col  px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-48  self-center "
                        id={`${el.id}-content-mob`}
                      >
                        <div className="heading pb-4 ">
                          <h1 className="home-h1 text-6xl xxs:leading-1 xxs:mb-2 ">
                            {el.heading}
                          </h1>
                          <h3 className="text-4xl uppercase font-display font-black leading-1 xxs:text-white xxs:span-h1 xxs:text-3.12 ">
                            {" "}
                            {el.designation}
                          </h3>
                          <div className="para">
                            <p className="small-text mt-4 xxs:text-xl xxs:leading-1.65 ">
                              {el.tagline}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
            <section className="grated-pattern-teams relative lg:-top-12 xl:mt-64  2xl:-top-12">
              <Form
                heading1={lets}
                heading2={win}
                heading3={together}
                description1={footerDescription1}
                description2={footerDescription2}
                description3={footerDescription3}
              />
            </section>
          </div>
        </div>
        <Floaters />
   
      </Layout>
      <div id='contact-form'> </div>
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
