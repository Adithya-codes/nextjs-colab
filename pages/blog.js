import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import { BLOG_INDEX as data } from "../helpers/constants";
import Form from '../components/HubspotForm'
import * as gtag from "../lib/gtag";
import { getAllPostsForHome } from "../lib/api";
import { useEffect } from "react";
import CoverImage from "../components/blog/CoverImage";
import { imageBuilder } from "../lib/sanity";

const Blog = ({ allPosts, preview }) => {
  //GA-page-tracking-code
  const handleFormSubmit = () => {
    gtag.event({
      action: "formSubmit",
      category: "Form",
      label: "blogPage",
      value: "1",
    });
  };

  useEffect(() => {
    console.log("test");
    console.log(allPosts, "all posts");
  }, []);

  return (
    <div className="blog-wrapper">
      <Layout>
        <section className="py-24 px-3">
          <div className="w-full px-4 mx-auto max-w-80 ">
            <div className="-mx-4 flex flex-wrap">
              <div className="mt-16 mx-auto grid grid-flow-row sm:grid-cols-2">
                {allPosts.map((post, index) => (
                  <div
                    className="card relative m-2 min-w-30v border-white border-2 border-solid bg-none "
                    key={index}
                  >
                    <div className="card-img top-0 relative xxs:px-5  sm:px-0">
                      <CoverImage
                        className=" flex-shrink-0 w-full pointer-events-none"
                   
                        title={post.title}
                        imageObject={post.coverImage}
                        url={imageBuilder(post.coverImage).url()}
                      />{" "}
                      <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                        <button className="card-btn btn font-display">
                          read more
                        </button>
                      </Link>{" "}
                    </div>
                    <div className="card-body flex-grow flex-shrink w-auto min-h-1 p-5">
                    <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                      <h5 className="card-title text-1.3 xxs:leading-1.2 font-display font-medium uppercase mb-4 cursor-pointer">
                   
                          {" "}
                          {post.title}
                     
                      </h5>
                      </Link>

                      <h6 className="authour text-0.9 leading-1.4 font-button italic normal-case my-3">
                        {post.author.name}
                      </h6>
                      <p className="text-1.2 font-smallText leading-1.4 font-medium normal-case ">
                        {post.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 relative grated-pattern-footer sm:-mt-16 lg:pb-16">
          <div className="container px-4 w-full">
            <div className="row flex flex-wrap -mx-4 sm:mx-auto relative sm:top-24 ">
              <div className="relative w-full px-4 sm:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50">
                <div className="heading">
                  <h1 className="home-h1 font-display xxs:text-5xl mb-4 sm:text-3.43 sm:leading-0.9 sm:text-left sm:mt-4 lg:text-h1 lg:text-right">
                    let's <br /> win <br /> together
                  </h1>
                </div>
                <div className="para">
                  <p className="small-text sm:leading-1.65 xxs:text-xl lg:text-2xl lg:leading-1.65 sm:text-lg sm:text-left  lg:text-right">
                    High-quality services. Affordable prices.
                    <br />
                    Trusted guidance. Get it all with IDC.
                    <br />
                    Contact us today.
                    <br />
                  </p>
                </div>
              </div>
            <Form/>
                  <div id='contact-form'> </div>
            </div>
          </div>
        </section>
        
      </Layout>
    </div>
  );
};

export default Blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
