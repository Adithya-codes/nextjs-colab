import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import HubspotForm from "react-hubspot-form";

const Blog = () => {
  const data =  [
    {
      title: "EDI Custom-Built for Healthcare",
      author: "By Shadab Ahmed, EDI Integration Specialist",
      content: `The healthcare and insurance industries generate a massive amount of sensitive data, and much of that data
       involves communication between health care institutions,
       healthcare providers, insurance carriers and patients...`,
      image: "blog-7",
    },
    {
      title: " Less Money, Fewer Headaches Through End-to-End EDI Support",
      author: "By T. Brandon Barker, Founder and CEO",
      content: ` In the last blog, I talked
      about how the Armor Connect Engine is bringing a new level of price
      transparency to the EDI
      industry. We’re also making things easier and more affordable in another area: customer support....`,
      image: "blog-6",
    },
    {
      title: " BRINGING EASIER PRICING TO THE EDI INDUSTRY",
      author: " By T. Brandon Barker, Founder and CEO",
      content: `When my brother and I started a tech company called Innova
      Zones in 2015, we needed an EDI provider to help us exchange
      information with our trading partners...`,
      image: "blog-5",
    },
    {
      title: "  WHY LARAVEL IS OUR FAVORITE PHP FRAMEWORK",
      author: "By Karthiyayini Muthuraj, Technical Lead",
      content: ` When you are creating custom software applications, one of the first decisions you need to make is
      what you are going to
      use for backend development – the programming code that works behind the scenes to improve the user
      experience...`,
      image: "blog-4",
    },
    {
      title: "  THREE WAYS THE ARMOR CONNECT ENGINE CAN SAVE YOU MONEY ON EDI.",
      author: "  By T. Brandon Barker, Founder and CEO",
      content: ` Companies around the globe in a wide variety of industries
      utilize Electronic Data Transmission (EDI) to communicate
      with one another faster, more securely and with greater
      reliability. An EDI system that is integrated with your
      Enterprise Resource Planning (ERP) system can help improve
      business processes and streamline communication within
      your supply chain...`,
      image: "blog-3",
    },
    {
      title: "WHAT IS EDI? AND WHY DOES IT MATTER RIGHT NOW?",
      author: " By T. Brandon Barker, Founder and CEO",
      content: `   As a software development company, IDC is ready to tackle
      all kinds of projects, from cool apps to custom websites.
      But we’re also a managed services provider. Because of our
      special expertise in document transfer, we’ve created an
      Electronic Data Interchange (EDI) system of our own. It’s
      called the Armor Connect Engine (ACE), and we’re excited
      about its many possibilities...`,
      image: "blog-2",
    },
    {
      title: "    Hi, we're IDC. Nice to meet you.",
      author: "   By T. Brandon Barker, Founder and CEO",
      content: `  When we started laying the groundwork for International
      Development Connection(IDC) over a year ago, I had no idea
      we'd be opening our new business in the middle of a world
      wide pandemic. Are we crazy? Companies are closing,
      unemployment is skyrocketing and the economy is in a
      tailspin...`,
      image: "blog-1",
    },
  ];
  return (
    <div className="blog-wrapper">
      <Layout>
        <section className="py-24 px-3">
          <div className="w-full px-4 mx-auto max-w-80 ">
            <div className="-mx-4 flex flex-wrap">
              <div className="mt-16 mx-auto grid grid-flow-row sm:grid-cols-2">
                {data.map((posts) => (
                  <div className="card relative m-2 min-w-30v border-white border-2 border-solid bg-none ">
                    <div className="card-img top-0 relative">
                      <img
                        src={`/images/${posts.image}.jpg`}
                        alt="blog-header-img"
                        className=" flex-shrink-0 w-full "
                      />
                      <button className="card-btn font-display">
                        {" "}
                        <Link href="#">read more</Link>{" "}
                      </button>
                    </div>
                    <div className="card-body flex-grow flex-shrink w-auto min-h-1 p-5">
                      <h5 className="card-title text-1.3 font-display font-medium uppercase mb-3">
                        {posts.title}
                        <h6 className="authour text-0.9 leading-1.4 font-display font-bold italic normal-case mb-3">
                          {posts.author}
                        </h6>
                        <p className="text-1.2 font-smallText leading-1.4 font-medium normal-case ">
                          {posts.content}
                        </p>
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 relative grated-pattern-footer">
          <div className="container mx-4 w-full">
            <div className="row flex flex-wrap -mx-4">
              <div className="relative w-full px-4 sm:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50">
                <div className="heading">
                  <h1 className="home-h1 font-display  mx-auto xxs:text-5xl sm:hidden">
                    let's <br /> win <br /> together
                  </h1>
                  <h1 className="home-h1 font-display  mx-auto sm:text-6xl xxs:hidden sm:block">
                    let's <br /> win <br /> together
                  </h1>
                </div>
                <div className="para">
                  <p className="small-text xxs:text-xl sm:text-lg">
                    High-quality services. Affordable prices.
                    <br />
                    Trusted guidance. Get it all with IDC.
                    <br />
                    Contact us today.
                    <br />
                  </p>
                </div>
              </div>
              <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6 sm:flex-grow-0 sm:flex-shrink-0 sm:w-6/12 sm:max-w-50">
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
      </Layout>
    </div>
  );
};

export default Blog;
