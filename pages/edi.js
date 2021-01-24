import Head from "next/head";
import Link from "next/link";
import Image from "next/image";import Firstpage from "../components/calculator/firstPage";
import Secondpage from "../components/calculator/secondPage";
import Thirdpage from "../components/calculator/thirdpage";
import Fourthpage from "../components/calculator/fourthpage";



import Layout from "../components/Layout";
import HubspotForm from "react-hubspot-form";


const edi = () => {
  const logos = [
    {
      name: "tyson",
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
      name: "kochfoods",
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
      <div className="sections-container">
        <section className="brain-container " id="the-brain">
          <div className="brain-img"> </div>
          <div className="container mx-auto w-full xxs:px-0.0625">
            <div className="row flex flex-wrap -mx-4 relative ">
              <div className="brain-content relative self-center flex flex-col px-4 xxs:w-full xxs:text-center xxs:mx-auto xxs:pt-60 xxs:min-h-43.75 z-30">
                <h1 className="home-h1 xxs:text-6xl sm:text-5.3 lg:text-6.2 xl:text-7.2 leading-0.8 text-9xl ">
                  {" "}
                  <span className="span-h1"> EDI </span> is in <br /> our{" "}
                  <span className="span-h1"> dna. </span>
                </h1>
                <p className="small-text xxs:text-1.2 leading-1.65">
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
                <div className="w-full relative flex flex-wrap -mx-4 ">
                  <div className="relative px-4 w-full xxs:min-w-full ">
                    <button className="btn-double-outline pl-0 mx-auto mt-8">
                      <span>
                        <a className="btn-text xxs:" href="#">
                          {" "}
                          get instant pricing{" "}
                        </a>
                      </span>
                    </button>
                  </div>
                  <div className="relative px-4 w-full xxs:min-w-full">
                    <button className="btn-double-outline pl-0 mx-auto">
                      <span>
                        <a className="btn-text xxs:" href="#">
                          {" "}
                          why get ace{" "}
                        </a>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="edi-calculator h-auto relative py-10 z-40"
          id="calc-section"
        >
          <div className="container mx-auto px-0.0625 w-full ">
            <div className="flex flex-wrap self-center bg-white border-yellowBtn border-solid border-4 rounded-2xl py-3 px-0 xxs:h-50 xs:h-53 xxs:min-h-43.75 xxs:w-auto xxs:mx-auto ">
              <div className="px-8 ml-offset xxs:flex-shrink-0 xxs:flex-grow-0 xxs:w-5/6 xxs:max-w-83.3 xxs:text-center">
                <div>
                  <div className="relative w-full px-4 py-4 xxs:flex-grow-0 xxs:flex-shrink-0 xxs:w-full xxs:max-w-full">
                    <img
                      src="/images/svg/ace-logo.svg"
                      alt="ace-logo"
                      className=" align-middle mb-4 h-auto w-full max-w-12.5"
                    />
                  </div>

                  <Firstpage/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="feat-container" className="z-50">
          <div className="container mx-auto w-full xxs:px-0.0625">
            <div className="w-full relative flex flex-wrap -mx-4">
              <div className=" px-0 py-3.125 xxs:h-100v sm:h-60v">
                <div className=" flex-shrink-0 flex-wrap-0 w-41.6 max-w-41">
                  <div
                    className="feat-img xxs:top-80 xxs:left-0 xxs:w-full xxs:h-full"
                    id="oct-0"
                  >
                    <div className="feat-logo text-center h-auto relative -top-56">
                      <img
                        src="/images/svg/ace-white-logo.svg"
                        alt="ace-logo"
                        className=" w-22.5 text-center mx-auto max-w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative px-4 w-full">
                  <div className="text w-full relative h-auto z-40 xxs:top-0 xxs: py-4">
                    <h1 className="home-h1 text-left xxs:text-2.5 xxs:leading-1">
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
          <div className="container mx-auto w-full xxs:px-0.0625 xxs:pt-12">
            <div className="w-full relative flex flex-wrap -mx-4">
              <div className=" relative self-center xxs:p-6 xxs: border-white border-b-2 border-solid">
                <div className="w-full relative flex flex-wrap -mx-4">
                  <div className=" w-full relative px-4 text-left ">
                    <h3 className="text-6xl home-h1 mb-3 font-black uppercase xxs: text-2.8 ">
                      {" "}
                      connections{" "}
                    </h3>
                    <p className="small-text text-left leading-1.2 font-normal mb-2 xxs:text-1.2">
                      We provide affordable, reliable EDI services to these
                      companies through the Armor Connect Engine.
                    </p>
                  </div>
                </div>
                <div className="px-4 w-full relative flex flex-row flex-wrap justify-center">
                  <div className="text-center">
                    {logos.map((logo) => (
                      <img
                        src={`/images/company/${logo.name}.png`}
                        alt={`${logo.alt}`}
                        className="h-auto mx-5 my-3 xxs:max-w-8"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default edi;
