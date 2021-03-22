import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { EDI_DATA as ediData, BRAND_LOGOS as logo } from "../helpers/constants";

import Calculator from "../components/calculator/EdiCalculator";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Floaters from "../components/Floaters";

import Form from '../components/HubspotForm'
import {
  gsap,
  TweenMax,
  Power2,
  Power3,
  Power1,
  Power0,
  Linear,
  TimelineLite,
} from "gsap/dist/gsap";
import * as gtag from "../lib/gtag";
import { getEdiData } from "../lib/api";
import { imageBuilder } from "../lib/sanity";

gsap.registerPlugin(ScrollTrigger);

const Edi = ({ content }) => {
  const handleFormSubmit = () => {
    gtag.event({
      action: "formSubmit",
      category: "Form",
      label: "ediPage",
      value: "1",
    });
  };

  useEffect(() => {
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".brain-img",
    //     pin: true,
    //     scrub: 0.35,
    //   },
    // });

    // tl.fromTo(
    //   ".brain-img",
    //   { duration: 0.75, yPercent: "550px", ease: Power2.easeOut },
    //   { duration: 0.75, yPercent: "-550px", ease: Linear.easeOut }
    // );

    


    gsap.from('.brain-img',{
   
      y: "550px",
      duration:0.75,

      ease: "power2.Out",
      
    });


  
      
  

    
      
  }, []);

  /* 1.take the container into an array and and loop through for each , 
     2.Create timeline - apply effects and duration and autoalpha ( 0-1) for opacity to child elements ( from - to),
     3.After timeline is created u need to add the animation to scroll trigger , 

     focus on  onenter and onleave for toggling classes to positon change  .*/

  useEffect(() => {
    const item = gsap.utils.toArray(".feat-item");
    let tl = gsap.timeline();

    console.log(item);

    const spaceBetween = 5000;
    const triggerDuration = 1000;

    item.forEach((el, i) => {
      var octopus = gsap.utils.toArray(".feat-octopus");
      var title = gsap.utils.toArray(".feat-title");

      tl.fromTo(
        el,
        {
          autoAlpha: 0,
          duration: 0.1,
          delay: 0,
          opacity: 0,
          ease: "Power1.easeInOut",
        },
        {
          autoAlpha: 1,
          duration: 0.1,
          delay: 0,
          opacity: 0,
          ease: "Power1.easeInOut",
        }
      ).fromTo(
        title,
        { xPercent: 40, duration: 0.1, ease: Power1.easeInOut, autoAlpha: 0 },
        {
          xPercent: 20,
          duration: 0.1,
          ease: "Power1.easeInOut",
          autoAlpha: 1,
          ScrollTrigger: {
            trigger: "#feat-container",
            start: "top top-=" + spaceBetween * i,
            end: "+=" + triggerDuration,
            toggleActions: "play none none reverse",
            pin: true,

            scrub: 1,

            onLeave: () => {},
          },
        }
      );
    });

    ScrollTrigger.create({
      trigger: "#feat-container",
      start: "top top",
      animation: tl,
      toggleActions: "play none none reverse",
      scrub: true,
      pin: true,

      end: "+=" + (spaceBetween * (item.length - 1) + triggerDuration),
      pin: true,
    });
  }, []);

  console.log(content ? content : null);

  const section1 = content[0].pageBuilder[1];

  const description = section1.description;
  console.log(description);

  const heading1 = JSON.stringify(section1.heading);
  const edi = heading1.slice(1, 4);
  const dna = heading1.slice(14, 18);
  const our = heading1.slice(11, 14);

  const title2 = heading1.slice(5, 10);

  const brainImg = section1.backgroundImage.asset._ref;

  console.log(brainImg);

  const section2 = content[0].pageBuilder[2];

  const heading2 = section2.heading;

  const landscapeImg = section2.backgroundImage.asset._ref;

  const connectionSection = content[0].pageBuilder[3];

  const connectionsText = connectionSection.heading;

  const connectionsDescription = connectionSection.description;

  const images = content[0].pageBuilder[0];

  const brandLogos = [];
  brandLogos.push(images);

  const logo1 = brandLogos[0].image1.asset._ref;
  const logo2 = brandLogos[0].image2.asset._ref;
  const logo3 = brandLogos[0].image3.asset._ref;
  const logo4 = brandLogos[0].image4.asset._ref;

  const logo5 = brandLogos[0].image5.asset._ref;
  const logo6 = brandLogos[0].image6.asset._ref;
  const logo7 = brandLogos[0].image7.asset._ref;
  const logo8 = brandLogos[0].image8.asset._ref;

  //  const logosImg = `logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8`

  const dataArr = [];

  dataArr.push(logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8);

  console.log(dataArr);

  //footer

  const footerDescriptionStr = JSON.stringify(
    content[0].pageBuilder[4].description
  );

  console.log(footerDescriptionStr);

  const footerDescription1 = footerDescriptionStr.slice(1, 42);

  const footerDescription2 = footerDescriptionStr.slice(45, 82);

  const footerDescription3 = footerDescriptionStr.slice(86, 103);

  const footerText = JSON.stringify(content[0].pageBuilder[4].heading);

  const accelerate = footerText.slice(1, 12);

  const yourData = footerText.slice(12, 22);

  const transfer = footerText.slice(22, 30);

  const withAce = footerText.slice(30, 39);

  return (
    <div className="edi-wrapper">
      <Layout>
        <div className="sections-container ">
          <section
            className="brain-container sm:h-100v"
            id="the-brain"
            style={{ zIndex: 25 }}
          >
            <div
              className="brain-img "
              style={{
                backgroundImage: `url(${imageBuilder(brainImg)})`,
              }}
            >
              {" "}
            </div>
            <div className="container mx-auto w-full xxs:px-0.0625 sm:p-0.625">
              <div
                className="row flex flex-wrap -mx-4 relative"
                style={{ zIndex: 15 }}
              >
                <div
                  className="brain-content relative self-center flex flex-col px-4 xxs:w-full xxs:text-center sm:text-left xxs:mx-auto sm:ml-0 xxs:pt-60 xxs:min-h-43.75  sm:flex-shrink-0 sm:flex-grow-0 sm:max-w-58.3 sm:w-58.3  md:ml-offset"
                  id="text-connection"
                >
                  <h1 className="home-h1 xxs:text-5 xxs:leading-0.8 mb-2 xs:text-6xl sm:text-5.3 lg:text-6.25 xl:text-7.81 sm:leading-0.8 text-9xl ">
                    {" "}
                    <span className="span-h1"> {edi} </span> {title2} <br />{" "}
                    {our}
                    <span className="span-h1"> {dna} </span>
                  </h1>
                  <p className="small-text xxs:leading-1.65 xxs:text-2xl sm:text-1.6 xl:text-1.7 ">
                    {description}
                  </p>
                  <h3 className=" text-4xl xxs:text-2 mt-10 span-h1 font-black uppercase lg:mt-6 ">
                    {" "}
                    {heading2}
                  </h3>
                  <div className="flex flex-wrap -mx-4 relative md:flex-nowrap z-0 edi-button sm:mt-4 lg:mt-2">
                    <div className="w-full relative px-4 xxs:min-w-full md:w-6/12 md:max-w-50 md:min-w-50  sm:z-20  ">
                      <button className="btn-double-outline pl-0 mx-auto w-full">
                        <span>
                          <a className="btn-text xxs:" href="#calc-section">
                            {" "}
                            get instant pricing{" "}
                          </a>
                        </span>
                      </button>
                    </div>
                    <div className="relative px-4 w-full xxs:min-w-full md:w-6/12 md:max-w-50 md:min-w-50 sm:z-20 ">
                      <button className="btn-double-outline pl-0 mx-auto w-full ">
                        <span>
                          <a className="btn-text xxs:" href="#feat-container">
                            {" "}
                            why choose ace?{" "}
                          </a>
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="w-full px-4 relative self-center sm:flex-grow-0 sm:flex-shrink-0 sm:w-6/12 sm:max-w-50"></div>
                </div>
              </div>
            </div>
          </section>
          <div
            style={{ backgroundImage: `url(${imageBuilder(landscapeImg)})` }}
          />
          <div className="z-40 ">
            {" "}
            <Calculator />{" "}
          </div>

          <section id="feat-container" className="z-50">
            {ediData.map((index, i) => (
              <div className="container mx-auto w-full xxs:px-0.0625 sm:p-0.625">
                <div className="w-full relative flex flex-wrap -mx-4">
                  <div
                    className=" feat-item px-0 py-3.125 xxs:h-100v sm:h-60v"
                    id={`oct${index.id}`}
                  >
                    <div className=" flex-shrink-0 flex-wrap-0 w-41.6 max-w-41">
                      <div className="feat-octopus xxs:top-80 xxs:left-0 xxs:w-full xxs:h-full sm:w-6/12 sm:top-52 sm:left-13.5">
                        <div className="feat-logo text-center h-auto relative -top-56 sm:-top-10 lg:-top-9 sm:-left-16">
                          <img
                            src="/images/svg/ace-white-logo.svg"
                            alt="ace-logo"
                            className=" w-22.5 text-center mx-auto max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative px-4 w-full md:flex-grow-0 md:flex-shrink-0 md:w-41.6 md:max-w-41">
                      <div className=" feat-text text w-full fixed  h-auto z-40 xxs:top-0 xxs:py-4 md:pt-20 md:w-35 md:left-45">
                        <h1 className=" feat-title home-h1 text-left xxs:text-2.5 xxs:leading-1 md:text-3.43 lg:text-4.125">
                          {index.title}
                        </h1>
                        <p className="small-text xxs:text-1.3 xxs:pt-3 ">
                          {" "}
                          {index.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

        
          </section>

          <section className="connection-container">
            <div className="container mx-auto w-full xxs:px-0.0625 sm:p-0.625 ">
              <div className=" relative flex flex-wrap -mx-4 lg:flex-nowrap">
                <div className=" relative self-center xxs:p-6 xxs: border-white border-b-2 border-solid lg:border-none sm:p-0 lg:flex lg:flex-row">
                  <div className=" w-full  relative flex flex-wrap -mx-4 lg:w-6/12 lg:max-w-50 lg:border-white lg:border-solid lg:border-r-2 ">
                    <div className=" w-full relative px-4 text-left  sm:flex-shrink-0 sm:flex-grow-0 sm:w-full sm:max-w-full lg:text-right ">
                      <h3 className="text-6xl home-h1 mb-3 font-black uppercase xxs:text-2.8 sm:text-3.43 xl:text-3.5 ">
                        {connectionsText}
                      </h3>
                      <p className="small-text  leading-1.2 font-normal mb-2 xxs:text-1.2">
                        {connectionsDescription}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 w-103 relative flex flex-row flex-wrap  justify-center self-center sm:flex-grow-0 sm:flex-shrink-0 sm:w-full sm:max-w-full lg:w-6/12 lg:max-w-50">
                    <div className="text-center sm:text-left ">
                      {dataArr.map((logo) => (
                        <img
                          src={imageBuilder(logo)}
                          alt=""
                          className="h-auto mx-5  my-3 xxs:max-w-8 inline-block sm:max-w-9.3 "
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="grated-pattern-edi relative " id="edi-footer">
            <div className="container px-4 mx-4 w-full xl:mx-auto">
              <div className="row flex flex-wrap xxs:-mx-12 sm:-mx-4 2xl:mx-auto 2xl:-mt-6 ">
                <div className="relative w-full px-4 lg:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50">
                  <div className="heading xl:-mt-10">
                    <h1 className="home-h1 font-display  mx-auto xxs:text-3.12 xxs:leading-1 sm:hidden">
                      {accelerate} <br /> {yourData} <br /> {transfer} <br />{" "}
                      {withAce}
                    </h1>
                    <h1 className="home-h1 font-display  mx-auto sm:text-3.43 xxs:hidden sm:block lg:text-h1">
                      {accelerate} <br /> {yourData} <br /> {transfer} <br />{" "}
                      {withAce}
                    </h1>
                  </div>
                  <div className="para mt-2">
                    <p className="small-text xxs:text-xl xxs:leading-1.65 sm:text-lg lg:leading-1.65 lg:text-2xl">
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
        </div>
        <div id='contact-form'> </div>
      </Layout>
    </div>
  );
};

export default Edi;

export async function getStaticProps({ preview = false }) {
  const content = await getEdiData(preview);

  return {
    props: { content, preview },
    revalidate: 1,
  };
}
