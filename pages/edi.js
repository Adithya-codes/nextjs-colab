import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import Calculator from "../components/calculator/Edicalculator";


import HubspotForm from "react-hubspot-form";

const edi = () => {
  const logos = [
    {
      name: "Tyson_1",
      alt: "tyson",
    },
    {
      name: "datamars",
      alt: "datamars",
    },
    {
      name: "butterball",
      alt: "aramark",
    },
    {
      name: "kockfoods",
      alt: "aramark",
    },
    {
      name: "aramark",
      alt: "aramark",
    },
    {
      name: "harrison",
      alt: "harrison",
    },
    {
      name: "innova-zones",
      alt: "innovo-zones",
    },
    {
      name: "alatrade",
      alt: "alatrade",
    },
  ];

  return (
    <div className="edi-wrapper">
      <Layout>
      <div className="sections-container">
        <section className="brain-container" id="the-brain" style={{zIndex:25}}>
          <div className="brain-img "> </div>
          <div className="container mx-auto w-full xxs:px-0.0625 sm:p-0.625">
            <div className="row flex flex-wrap -mx-4 relative"style={{zIndex:15}}>
              <div className="brain-content relative self-center flex flex-col px-4 xxs:w-full xxs:text-center sm:text-left xxs:mx-auto sm:ml-0 xxs:pt-60 xxs:min-h-43.75 sm:pt-0 sm:flex-shrink-0 sm:flex-grow-0 sm:max-w-58.3 sm:w-58.3  md:ml-offset" id='text-connection'>
                <h1 className="home-h1 xxs:text-6xl sm:text-5.3 lg:text-6.2 xl:text-7.81 leading-0.8 text-9xl ">
                  {" "}
                  <span className="span-h1"> EDI </span> is in <br /> our{" "}
                  <span className="span-h1"> dna. </span>
                </h1>
                <p className="small-text xxs:text-1.2 sm:text-1.6 xl:text-1.7 leading-1.65">
                  The IDC team has years of experience building custom
                  Electronic Data Interchange (EDI) systems. That’s why Armor
                  Connect Engine (ACE) gives you benefits other systems don’t –
                  from easier implementation to higher security. And you can get
                  pricing in an instant.
                </p>
                <h3 className=" text-4xl xxs:text-2 mt-10 span-h1 font-black uppercase">
                  {" "}
                  how much will you pay?{" "}
                </h3>
                <div className='flex flex-wrap -mx-4 relative md:flex-nowrap z-0'>
                  <div className='w-full relative px-4 xxs:min-w-full md:w-6/12 md:max-w-50 md:min-w-50 '>
                  <button className="btn-double-outline pl-0 mx-auto mt-8 w-full">
                      <span>
                        <a className="btn-text xxs:" href="#">
                          {" "}
                          get instant pricing{" "}
                        </a>
                      </span>
                    </button>
                  </div>
                  <div className="relative px-4 w-full xxs:min-w-full md:w-6/12 md:max-w-50 md:min-w-50">
                    <button className="btn-double-outline pl-0 mx-auto w-full md:mt-8">
                      <span>
                        <a className="btn-text xxs:" href="#">
                          {" "}
                          why choose ace?{" "}
                        </a>
                      </span>
                    </button>
                  </div>

                </div>
               
                <div className='w-full px-4 relative self-center sm:flex-grow-0 sm:flex-shrink-0 sm:w-6/12 sm:max-w-50'>

                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          {" "}
          <Calculator />{" "}
        </div>

        <section id="feat-container" className="z-50">
          <div className="container mx-auto w-full xxs:px-0.0625 sm:p-0.625">
            <div className="w-full relative flex flex-wrap -mx-4">
              <div className=" px-0 py-3.125 xxs:h-100v sm:h-60v">
                <div className=" flex-shrink-0 flex-wrap-0 w-41.6 max-w-41">
                  <div
                    className="feat-img xxs:top-80 xxs:left-0 xxs:w-full xxs:h-full sm:w-6/12 sm:top-52 sm:left-13.5"
                    id="oct-0"
                  >
                    <div className="feat-logo text-center h-auto relative -top-56 sm:-top-48">
                      <img
                        src="/images/svg/ace-white-logo.svg"
                        alt="ace-logo"
                        className=" w-22.5 text-center mx-auto max-w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative px-4 w-full md:flex-grow-0 md:flex-shrink-0 md:w-41.6 md:max-w-41">
                  <div className="text w-full fixed  h-auto z-40 xxs:top-0 xxs:py-4 md:pt-20 md:w-35 md:left-45">
                    <h1 className="home-h1 hidden text-left xxs:text-2.5 xxs:leading-1 md:text-3.43">
                      why armor connect engiene leads the way in edi?
                    </h1>
                    <p className="small-text xxs:text-1.3 xxs:pt-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="connection-container">
          <div className="container mx-auto w-full xxs:px-0.0625 sm:p-0.625 xxs:pt-12">
            <div className=" relative flex flex-wrap -mx-4 lg:flex-nowrap">
              <div className=" relative self-center xxs:p-6 xxs: border-white border-b-2 border-solid lg:border-none sm:p-0 lg:flex lg:flex-row">
                <div className=" w-full  relative flex flex-wrap -mx-4 lg:w-6/12 lg:max-w-50 lg:border-white lg:border-solid lg:border-r-2 ">
                  <div className=" w-full relative px-4 text-left  sm:flex-shrink-0 sm:flex-grow-0 sm:w-full sm:max-w-full lg:text-right ">
                    <h3 className="text-6xl home-h1 mb-3 font-black uppercase xxs:text-2.8 sm:text-3.43 ">
                      {" "}
                      connections{" "}
                    </h3>
                    <p className="small-text  leading-1.2 font-normal mb-2 xxs:text-1.2">
                      We provide affordable, reliable EDI services to these
                      companies through the Armor Connect Engine.
                    </p>
                  </div>
                </div>
                <div className="px-4 w-103 relative flex flex-row flex-wrap  justify-center self-center sm:flex-grow-0 sm:flex-shrink-0 sm:w-full sm:max-w-full lg:w-6/12 lg:max-w-50">
                  <div className="text-center lg:text-left ">
                    {logos.map((logo) => (
                      <img
                        src={`/images/company/${logo.name}.png`}
                        alt={`${logo.alt}`}
                        className="h-auto mx-5  my-3 xxs:max-w-8 inline-block sm:max-w-9.3 "
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='grated-pattern-edi relative ' id='edi-footer'> 
            <div className="container mx-4 w-full">
            <div className="row flex flex-wrap -mx-4 ">
              <div className="relative w-full px-4 sm:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50">
                <div className="heading ">
                <h1 className="home-h1 font-display  mx-auto xxs:text-5xl sm:hidden">
                accelerate <br /> your data <br /> transfer <br /> with ace
                      </h1>
                  <h1 className="home-h1 font-display  mx-auto sm:text-6xl xxs:hidden sm:block">
                  accelerate <br /> your data <br /> transfer <br /> with ace
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
              <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6 sm:top-12 sm:flex-grow-0 sm:flex-shrink-0 sm:w-6/12 sm:max-w-50">
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
 
      </div>
      </Layout>
    </div>
  );
};

export default edi;
