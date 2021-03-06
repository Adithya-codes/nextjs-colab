import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import HubspotForm from "react-hubspot-form";
import * as gtag from '../lib/gtag';

import Calculator from "../components/calculator/EdiCalculator";
import {APP as data } from '../helpers/constants'

const landing = () => {

  console.log(data)

  const handlePlayBtn = ()=>
  {
    gtag.event({ action: "videoplayed", category: "video", label: "lp-video", value: "1" });
  }

  const handlePauseBtn = ()=>
  {
    gtag.event({ action: "videopaused", category: "video", label: "lp-video", value: "1" });
  }
  return (
    <div className="landing-wrapper" id='landing-page'>
      <div className="sections-container">
        <div className="container mx-auto xxs:px-0.0625 sm:px-0.625 ">
          <div className=" video-sectionflex flex-wrap mx-auto w-full items-center">
            <div className="px-1 w-full mb-12 xxs:ml-0 xxs:mr-auto ">
              <div className="video-title text-center">
                <h1 className="home-h1 text-center xxs:text-2.81 sm:text-3.8 xl:text-4.125">
                  {" "}
                  EDI pricing is complex. <br />
                  <span className="span-h1 mt-4 -px-2 xxs:text-2.1 sm:text-2.5 xl:text-3.8 xxs:font-light xxs:leading-0.9">
                    {" "}
                    but saving money is easy.
                  </span>{" "}
                </h1>
              </div>

              <p className="small-text xxs:text-1.26 text-center sm:mt-4 xl:text-2xl">
                {" "}
                Watch our brief video about Armor Connect Engine.
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
                playIcon={<img src='/images/play-button.png' className=' w-2/12'/>}
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
                  <h1 className="span-h1 xxs:text-4xl xs:text-2.81 sm:text-3.43 lg:text-4.125 xxs:leading-1.2 sm:leading-1 xxs:mt-12 sm:mt-28 lg:mt-36">
                    {" "}
                    cut your edi and software development costs.{" "}
                  </h1>
                </div>

                <div className="inner-para relative mt-2 w-full ">
                  <p className="small-text xxs: text-1.23 lg:text-1.45 ">
                    {" "}
                    If you’re like many businesses, you need to reduce costs
                    right now. International Development Connection (IDC) can
                    help you trim your budget while keeping your goals on track.{" "}
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
                  quickly slash your
                  <br />
                  <span className="span-h1 lg:text-6.87"> EDI expenses.</span>
                </h1>
                <p className="small-text xxs:text-1.125 mt-4 sm:ml-6 lg:ml-0 lg:font-medium lg:text-2xl lg:leading-1.65 lg:text-left ">
                  Armor Connect Engine (ACE) is a next-generation Electronic
                  Data Interchange (EDI)
  
                  system that could save you thousands of dollars a year.
                  Exactly how much can you
                  save? Find out immediately with the pricing calculator below.
                </p>
              </div>

              <div className="edi-calc lg:-mt-12 xl:-mt-44 w-full ">
                <Calculator />
              </div>

              <div className="octopus-image relative w-full xxs:pb-36 xl:ml-offset z-40">
                <div className="octopus-title xxs:pb-12 xxs:px-0 xxs:pt-12 lg:px-6 xl:px-4 xl:pt-4 ">
                  <h1 className="home-h1 xxs:text-3.38 lg:text-h1 xxs:leading-0.9">
                    {" "}
                    here's why ace is your <br />{" "}
                    <span className="span-h1 lg:text-5 ">
                      {" "}
                      next- generation edi system:{" "}
                    </span>{" "}
                  </h1>
                </div>

                <div className="octopus-list ">
                  <div className="-mx-4 px-4">
                    <div className="relative flex flex-col self-center px-8">
                      <ul className="mt-0 px-4 list-disc">
                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2 xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75  ">
                          More cost-effective than other EDI platforms
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75   ">
                          Full customization to your ERP system
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75   ">
                          Accepts the most-used EDI formats, plus custom files
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75    ">
                          Highly secure with all secure file transfer protocols
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75   ">
                          Easily scalable as your needs change
                        </li>

                        <li className=" small-text font-normal text-white mb-6 xxs:leading-1.2  xxs:text-1.26 xs:text-1.4 sm:text-1.6 lg:text-1.75    ">
                          Full disaster recovery options
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col self-center border-t-4 border-white border-solid xl:mt-23">
                <div className="title text-center mt-12">
                  <h1 className="home-h1 xxs:text-2.87 lg:text-h1">
                    <span className="span-h1 xxs:text-5.3 xxs:leading-0.8 xxs:font-light lg:text-10">
                      save 25%
                    </span>
                    <br />
                    on your next software
                    <br />
                    development project
                  </h1>

                  <div className="para xxs:px-6 xxs:mt-4">
                    <p className="small-text xxs:text-1.3 sm:text-1.125 lg:text-2xl lg:leading-1.65">
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
                  {data.map((post,index)=> (
                  <li key={post.title} className="w-15.62 mx-auto uppercase xxs:mb-4">
                    <img
                      src={`../images/icons/${post.image}.png`}
                      alt=""
                      className="w-6.25 mb-5 text-center justify-center max-w-full xxs:ml-20"
                    />

                    <h2 className=" font-display text-navy-blue font-medium xxs:text-1.75">
                    {post.title}
                    </h2>
                  </li>))}

            
                </ul>
              </div>
              <div className='flex xxs:flex-col sm:flex-nowrap sm:flex-row'> 
              <div className=" text-right relative z-40  sm:flex-grow-0 sm:flex-shrink-0 sm:w-58.3 sm:max-w-58 xxs:px-4 sm:px-0 xxs:mt-20 sm:-mt-10 xl:w-5/12">
                  <div className="heading">
                 
                    <h1 className="home-h1 font-display mb-2 mx-auto xxs:text-3.12 sm:text-6xl lg:text-h1 xl:leading-1">
                   make <br /> the <br /> connection
                    </h1>
                  </div>

                  <div className="para">
                    <p className="small-text xxs:text-xl xxs:leading-1.65 sm:text-1.125 lg:text-2xl lg:leading-1.65">
                      High-quality services. Affordable prices.
                      <br />
                      Trusted guidance. Get it all with IDC.
                      <br />
                    
                    </p>
                  </div>
                </div>
                <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6 sm:flex-grow-0 sm:flex-shrink-0 sm: max-w-50 sm:w-6/12">
                  <HubspotForm
                    portalId="7830205"
                    formId="138fc0a1-fbc3-4e84-a27c-98b6cce7a9da"
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
