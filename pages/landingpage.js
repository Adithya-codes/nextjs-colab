import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import HubspotForm from "react-hubspot-form";
import * as gtag from "../lib/gtag";

import Calculator from "../components/calculator/EdiCalculator";
import { APP as asset } from "../helpers/constants";
import { getLandingPageData } from "../lib/api";
import { imageBuilder } from "../lib/sanity";
const landing = ({ content }) => {
  const handlePlayBtn = () => {
    gtag.event({
      action: "videoplayed",
      category: "video",
      label: "lp-video",
      value: "1",
    });
  };

  const handlePauseBtn = () => {
    gtag.event({
      action: "videopaused",
      category: "video",
      label: "lp-video",
      value: "1",
    });
  };

  console.log(content);

  const data = content[0];

  var dataArr = [];

  dataArr = content[0].pageBuilder;

  console.log(dataArr);

  //video section

  const videoDescription = data.pageBuilder[0].description;

  const videoHeading = data.pageBuilder[0].heading;

  const vidoeHeadingOutline = videoHeading.slice(0, 23);
  const videoHeadingSpan = videoHeading.slice(23, 50);

  //globe section

  const globeHeading = data.pageBuilder[1].heading;
  const globeDescription = data.pageBuilder[1].description;

  //quickly slash sec

  const quicklyDescription = data.pageBuilder[2].description;
  const quicklyHeading = data.pageBuilder[2].heading;

  const quicklyHeadingOutline = quicklyHeading.slice(0, 19);
  console.log(quicklyHeadingOutline);

  const quicklyHeadingSpan = quicklyHeading.slice(19, 32);
  console.log(quicklyHeadingSpan);

  //octopus section

  const octopusSection = data.pageBuilder[9];

  const octopusHeading = octopusSection.heading1;

  const octopusImage = octopusSection.backgroundImage.asset._ref;

  console.log(octopusHeading);

  const octopusSpanHeading = octopusSection.spanHeading;

  const listing1 = octopusSection.listing1;
  const listing2 = octopusSection.listing2;
  const listing3 = octopusSection.listing3;
  const listing4 = octopusSection.listing4;
  const listing5 = octopusSection.listing5;
  const listing6 = octopusSection.listing6;

  console.log(listing1);

  //save25%

  const save25Description = data.pageBuilder[3].description;

  //app-section

  var servicesData = [];

  servicesData.push(
    data.pageBuilder[4],
    data.pageBuilder[5],
    data.pageBuilder[6],
    data.pageBuilder[7]
  );

  //footer-section

  const footerHeading = data.pageBuilder[8].label
  console.log(footerHeading);

  let make = footerHeading.slice(0,5);

  let the = footerHeading.slice(5,8);

  let connection = footerHeading.slice(8,20)

  const footerDescription = data.pageBuilder[8].tagline;

  const footerDescription1 = footerDescription.slice(0, 82);



  const footerDescription2 = footerDescription.slice(82, 98);

  console.log(footerDescription1,footerDescription2);



  const [bg, setBg] = useState("");

  useEffect(() => {
    if (process.browser) {
      window.innerWidth > 1020 && setBg(1);
    }
  }, []);

  return (
    <div className="landing-wrapper" id="landing-page">
      <div className="sections-container">
        <div className="container mx-auto xxs:px-0.0625 sm:px-0.625 ">
          <div className=" video-sectionflex flex-wrap mx-auto w-full items-center">
            <div className="px-1 w-full mb-12 xxs:ml-0 xxs:mr-auto ">
              <div className="video-title text-center">
                <h1 className="home-h1 text-center xxs:text-2.81 sm:text-3.8 xl:text-4.125">
                  {" "}
                  {vidoeHeadingOutline} <br />
                  <span className="span-h1 mt-4 -px-2 xxs:text-2.1 sm:text-2.5 xl:text-3.8 xxs:font-light xxs:leading-0.9">
                    {" "}
                    {videoHeadingSpan}
                  </span>{" "}
                </h1>
              </div>

              <p className="small-text xxs:text-1.26 text-center sm:mt-4 xl:text-2xl">
                {" "}
                {videoDescription}
              </p>
            </div>

            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://res.cloudinary.com/docn0mvoh/video/upload/v1600679125/ACE_Video_V2_NoURL_g3nc5s.mp4"
                width="100%"
                height="100%"
                playing={true}
                controls={true}
                light="../images/thumbnail.png"
                playIcon={
                  <img src="/images/play-button-white.svg" className=" w-24" />
                }
                onPlay={handlePlayBtn}
                onPause={handlePauseBtn}
              />
            </div>
          </div>

          <section className="h-45" id="the-globe-split">
            <div className="container xxs:px-0.0625 sm:px-0.625">
              <div className=" flex flex-col items-start order-2 px-2 text-right xxs:flex-shrink-0 xxs:flex-grow-0 xxs:max-w-full xxs:mt-28 lg:w-4/6 lg:max-w-66.6 lg:ml-33 xl:max-w-58.3 xl:w-58.3">
                <div className="title text-right relative  ">
                  <img
                    src="/images/svg/IDC-Nav-Logo.svg"
                    alt=""
                    className="w-8.12 -top-8 relative xxs:-right-56 xs:-right-64 sm:-right-34 hidden "
                  />
                  <h1 className="span-h1 xxs:text-4xl xs:text-2.81 sm:text-3.43 lg:text-4.125 xxs:leading-1.2 sm:leading-1 xxs:mt-44 sm:mt-28 lg:mt-36">
                    {" "}
                    {globeHeading}
                  </h1>
                </div>

                <div className="inner-para relative mt-2 w-full ">
                  <p className="small-text xxs: text-1.23 lg:text-1.45 ">
                    {" "}
                    {globeDescription}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="lp-blue-part px-0">
            <div className="container xxs:px-0.0625 sm:px-0.625">
              <div className="relative  w-full flex flex-col items-center  mx-auto mb-12 xxs:flex-shrink-0 xxs:flex-grow-0 xxs:max-w-full lg:w-5/6 lg:max-w-83.3 lg:px-4 lg:ml-offset xl:ml-offset xl:text-left ">
                <h1 className="home-h1 xxs:text-2.3 sm:text-3.8 lg:text-4.125 xl:text-left xl:-ml-20">
                  {" "}
                  {quicklyHeadingOutline}
                  <br />
                  <span className="span-h1 lg:text-6.87">
                    {quicklyHeadingSpan}
                  </span>
                </h1>
                <p className="small-text xxs:text-1.125 mt-4 sm:ml-6 lg:ml-0 lg:font-medium lg:text-2xl lg:leading-1.65 lg:text-left ">
                  {quicklyDescription}
                </p>
              </div>

              <div className="edi-calc lg:-mt-12 xl:-mt-44 w-full ">
                <Calculator />
              </div>

              <div
                className="octopus-image relative w-full xxs:pb-36 xl:ml-offset z-40"
                style={
                  bg
                    ? {
                        backgroundImage:`url(${imageBuilder(octopusImage)})`,
                      }
                    : null
                }
              >
                <div className="octopus-title xxs:pb-12 xxs:px-0 xxs:pt-12 lg:px-6 xl:px-4 xl:pt-4 ">
                  <h1 className="home-h1 xxs:text-3.38 lg:text-h1 xxs:leading-0.9">
                    {" "}
                    {octopusHeading} <br />{" "}
                    <span className="span-h1 lg:text-5 ">
                      {" "}
                      {octopusSpanHeading}
                    </span>{" "}
                  </h1>
                </div>

                <div className="octopus-list ">
                  <div className="-mx-4 px-4">
                    <div className="relative flex flex-col self-center px-8">
                      <ul className="mt-0 px-4 list-disc">
                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2 xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75  ">
                          {listing1}
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75   ">
                          {listing2}
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75   ">
                          {listing3}
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75    ">
                          {listing4}
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75   ">
                          {listing5}
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75    ">
                          {listing6}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col self-center border-t-4 border-white border-solid xl:mt-23">
                <div className="title text-center mt-12">
                  <h1 className="home-h1 xxs:text-2.5 lg:text-h1">
                    <span className="span-h1 xxs:text-3.8 xxs:leading-0.8 xxs:font-light lg:text-10">
                      save 25%
                    </span>
                    <br />
                    on your next software
                    <br />
                    development project
                  </h1>

                  <div className="para xxs:px-6 xxs:mt-4">
                    <p className="small-text xxs:text-xl xxs:leading-1.65 sm:text-1.125 lg:text-2xl lg:leading-1.65">
                      A U.S. - owned company, IDC uses offshore resources to
                      lower your <br />
                      software development costs. And our excellent customer
                      service
                      <br />
                      gives you a U.S.-Style business experience. We offer a
                      wide variety
                      <br />
                      of development and business services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="lp-grated-pattern relative" id="app-form-section">
            <div className="container xxs:px-0.0625 sm:px-0.625 py-12">
              <div className="relative flex -mx-4 px-4 text-center justify-center pb-12 sm:flex-wrap sm:flex-grow-0 sm:flex-shrink-0 sm:max-w-full sm:flex-row">
                <ul className=" pl-0 list-none xxs:block xxs:relative xxs:top-0 sm:flex flex-wrap flex-row justify-between ">
                  {servicesData.map((post, index) => (
                    <li
                      key={post.heading}
                      className="w-15.62 mx-auto uppercase xxs:mb-4"
                    >
                      <img
                        src={imageBuilder(post.backgroundImage.asset._ref)}
                        alt=""
                        className="w-6.25 mb-5 text-center justify-center max-w-full xxs:ml-20"
                      />

                      <h2 className=" font-display text-navy-blue font-medium xxs:text-1.75">
                        {post.heading}
                      </h2>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex xxs:flex-col sm:flex-nowrap sm:flex-row">
                <div className=" text-right relative z-40  sm:flex-grow-0 sm:flex-shrink-0 sm:w-50 sm:max-w-50 xxs:px-4 sm:px-0 xxs:mt-20 sm:-mt-10 xl:w-6/12">
                  <span className=" absolute top-14 xxs:left-24 xs:left-36 xl:left-46">
                    <img
                      src="../images/svg/lp-footer-logo.svg"
                      className="xxs:w-40.3 xl:w-7/12"
                      alt="footer-logo"
                    />
                  </span>
                  <div className="heading">
                    <h1 className="home-h1 font-display mb-2 mx-auto xxs:text-3.12 sm:text-6xl lg:text-h1 xl:leading-1">
                  {make}<br />  {the} <br /> {connection}
                    </h1>
                  </div>

                  <div className="para">
                    <p className="small-text xxs:text-lg xxs:leading-1.65 sm:text-1.125 lg:text-2xl lg:leading-1.65">
                   {footerDescription1}
                      <br />
                 {footerDescription2}
                      <br />
                    </p>
                  </div>
                </div>
                <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6 sm:flex-grow-0 sm:flex-shrink-0 sm:max-w-50 xl:ml-4 sm:w-6/12">
                  <HubspotForm
                    portalId="7830205"
                    formId="2954081d-a37c-4045-bfa3-aa032ef25418"
                    // onSubmit={handleFormSubmit}
                    onReady={(form) => console.log("Form ready!")}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default landing;

export async function getStaticProps({ preview = false }) {
  const content = await getLandingPageData(preview);

  return {
    props: { content, preview },
    revalidate: 1,
  };
}
