import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import Layout from "../components/Layout";
import Form from "../components/Form";
import HubspotForm from "react-hubspot-form";

import * as gtag from "../lib/gtag";
import { getFaqData } from "../lib/api";

const Faq = ({ content }) => {
  const handleFormSubmit = () => {
    gtag.event({
      action: "formSubmit",
      category: "Form",
      label: "faqPage",
      value: "1",
    });
  };

  let dataArr = [];

  console.log("test");
  console.log(content, "data");

  const label = content[0].pageBuilder;

  label.map((el, index) => {
    dataArr.push({
      question: el.label,
      answer: el.text.children.text,
    });
  });
  console.log(dataArr);

  return (
    <div className=" faq-wrapper w-full overflow-x-hidden">
      <Layout>
        <div className="pt-24 pb-24 mx-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 ">
              <div className=" mx-auto w-full px-4 relative sm:flex-grow-0 sm:flex-shrink-0 sm:max-w-5/6 sm:w-5/6">
                <div>
                  <h1 className="text-clip mt-16 mb-2 py-5  text-center font-display xxs:text-5 xs:text-7xl md:text-9xl">
                    {" "}
                    FAQs
                  </h1>

                  {dataArr.map((posts, id) => (
                    <div
                      key={id}
                      className="py-6 border-b border-white border-solid "
                    >
                      <h4 className="faq-h4 xxs:text-1.6 leading-1.2 sm:text-1.8  lg:text-2 xl:text-2.3">
                        {posts.question}
                      </h4>
                      <p className="small-text text-1.6 text-black my-4 font-medium xxs:leading-1.65 xxs:text-xl sm:text-lg lg:text-2xl lg:leading-1.65">
                        {posts.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <section
            className="py-12 relative grated-pattern-footer "
            id="faq-page"
          >
            <div className="container px-4 w-full">
              <div className="row flex flex-wrap -mx-4 relative sm:mx-auto xxs:top-28 sm:top-16 xl:top-20  ">
                <div className="relative w-full px-4 sm:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50 ">
                  <div className="heading ">
                    <h1 className="home-h1 font-display mb-4  mx-auto xxs:leading-0.9 xxs:text-5xl sm:text-3.43 lg:text-h1  sm:text-left lg:text-right">
                      Let's <br /> win <br /> together
                    </h1>
                  </div>
                  <div className="para">
                    <p className="small-text  xxs:leading-1.65 xxs:text-1.35 sm:text-lg sm:text-left lg:text-2xl lg:leading-1.65 lg:text-right">
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
                    onSubmit={handleFormSubmit}
                    onReady={(form) => console.log("Form ready!")}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Faq;

export async function getStaticProps({ preview = false }) {
  const content = await getFaqData(preview);

  return {
    props: { content, preview },
    revalidate: 1,
  };
}
