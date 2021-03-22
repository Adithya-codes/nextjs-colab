//blogdetail page

import Head from "next/head";
import Link from "next/link";

import { getAllPostsWithSlug } from "../../lib/api";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "@sanity/block-content-to-react/lib/targets/dom";
import { imageBuilder } from "../../lib/sanity";
import Form from "../../components/HubspotForm";
import Layout from "../../components/Layout";

const blogDetail = ({ content }) => {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },

    marks: {
      internalLink: ({ mark, children }) => {
        return <a href={mark.url}>{children}</a>;
      },

      link: ({ mark, children }) => {
        const { blank, href } = mark;
        return blank ? (
          <a href={href} target="_blank" rel="noopener">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
    },
  };

  console.log(content[0]);

  const handleClick = () => {
    if (process.browser) {
      var slug = JSON.stringify(window.location.href);
      console.log(slug);

      if (slug.includes("blog")) {
        slug = slug + "#contact-form";
        console.log(slug);
        var URL = slug.replace(/\"/g, "");
      }

      window.location.href = URL;
      console.log(window.location.href);
    }
  };

  //footer

  const footerTextStr = JSON.stringify(content[0].label);

  console.log(footerTextStr);
  const lets = footerTextStr.slice(1, 7);

  const win = footerTextStr.slice(7, 10);
  const together = footerTextStr.slice(10, 19);

  const footerDescriptionStr = JSON.stringify(content[0].tagline);

  console.log(footerDescriptionStr);

  const footerDescription1 = footerDescriptionStr.slice(1, 42);

  const footerDescription2 = footerDescriptionStr.slice(44, 82);

  const footerDescription3 = footerDescriptionStr.slice(84, 101);

 
  return (
    <div className="blog-detail-wrapper">
      <Layout>
        <section className="py-24">
          <div className="container px-4">
            <div className="row w-full -mx-4">
              <div className="ml-auto mr-auto px-4 relative w-full sm:max-w-83.3 sm:flex-shrink-0 sm:flex-grow-0 sm:w-5/6 ">
                <div className="blog-space mt-16">
                  <button onClick={handleClick}>click me</button>
                  <img
                    src={imageBuilder(content[0].coverImage.asset._ref)}
                    className="blog-header-img min-w-full h-auto max-w-full pb-12"
                  ></img>
                  <div className="blog-content">
                    <h2 className="font-display font-medium uppercase mb-8 xxs:text-2.5 xxs:leading-0.9">
                      {content[0].title}
                    </h2>
                    <h6 className="authour text-0.9 leading-1.4 font-button italic normal-case mb-6">
                      By {content[0].author.name}
                    </h6>
                    <BlockContent
                      className=" font-smallText font-medium blog-content xxs:text-2xl xxs:leading-1.4 "
                      blocks={content[0].body}
                      serializers={serializers}
                      projectId="7nubkyjs"
                      dataset="production"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-12 relative grated-pattern-footer "
          id="blog-detail-page"
        >
          <div className="container px-4 w-full">
            <div className="row flex flex-wrap -mx-4 relative sm:mx-auto xxs:top-24 sm:top-16 xl:top-22  ">
              <div className="relative w-full px-4 sm:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50 ">
                <div className="heading xl:-mt-10 ">
                  <h1 className="home-h1 font-display mb-4  mx-auto xxs:leading-1 xxs:text-5xl sm:text-3.43 lg:text-h1  sm:text-left lg:text-right">
                    {lets} <br /> {win} <br /> {together}
                  </h1>
                </div>
                <div className="para">
                  <p className="small-text  xxs:leading-1.65 xxs:text-1.35 sm:text-lg sm:text-left lg:text-2xl lg:leading-1.65 lg:text-right">
                    {footerDescription1}

                    <br />

                    {footerDescription2}

                    <br />

                    {footerDescription3}

                    <br />
                  </p>
                </div>
              </div>
              <Form />
            </div>
          </div>
        </section>
        <div id="contact-form"> </div>
      </Layout>
    </div>
  );
};

export default blogDetail;

export const getServerSideProps = async ({ params }) => {
  const post = await getAllPostsWithSlug(params.slug);

  return {
    props: {
      content: post,
    },
  };
};
