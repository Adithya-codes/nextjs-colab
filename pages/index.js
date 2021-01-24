import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import HubspotForm from "react-hubspot-form";

const Home = () => {
  return (
    <div className="home-wrapper ">
      <Layout>
        <div className="sections-continer">
          <section className=''>
            <div className="container px-4 w-full xxs:mt-20 sm:mt-32 ">
              <div className="flex flex-wrap -mx-4 h-full sm:flex-nowrap lg:-mx-2 xl:-mx-4">
                <div className="globe-content flex flex-col self-center w-full px-4 z-30 xxs:min-w-58 sm:flex-grow-0 sm:flex-shrink-0 sm:max-w-50 sm:min-w-50 sm:w-3/6 lg:ml-offset">
                  <div className="heading">
                    <h1 className="home-h1-main font-display xxs:text-5xl md:text-3.43 lg:text-5.3 xl:text-globe">
                      {" "}
                      make the <br /> connection.{" "}
                    </h1>
                  </div>

                  <div className="para">
                    <p class="small-text mt-2 sm:text-xl md:text-lg lg:text-2xl lg:leading-1.65 leading-4 overflow-x-hidden xxs:text-xl ">
                      When you’re developing software, the right partner makes
                      all the difference in the world. IDC is your global link
                      to superior software development. We offer a better way to
                      get the job done, with U.S.-based project managers leading
                      talented teams of offshore developers.
                    </p>
                  </div>
                </div>

                <div className="globe-pic w-full px-4 relative z-10 xxs:mx-auto md:flex-shrink-0 md:flex-grow-0 md:max-w-41 md:w-41.6 md:-ml-12">
                  <div className="globe-img relative bg-no-repeat bg-100 h-25 xxs:bg-center xxs:w-full sm:w-full  md:-top-16 lg:top-12 xl:top-14 xl:h-33">
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="lg:mt-40 lg:z-50 ">
            <div className="container mt-8 px-4 w-full z-30">
              <div className="flex flex-wrap  -mx-4 h-full md:flex-nowrap lg:ml-offset  ">
                <div className="unicorn-pic w-full px-4 relative z-40 xxs:ml-0 sm:-ml-10 sm:flex-grow-0 sm:flex-shrink-0 sm:w-1/2 sm:max-w-50">
                  <div className="unicorn-img relative bg-no-repeat xxs:bg-center bg-100 w-full h-30 top-12 xl:h-35 sm:-ml-12"></div>
                </div>
                <div className="unicorn-content text-right flex flex-col self-center w-full px-4 xxs:min-w-58 sm:flex-shrink-0 sm:flex-grow-0 sm:w-1/2 sm:min-w-50 sm:max-w-50 lg:w-41.6 lg:max-w-41 lg:min-w-41 lg:-ml-12">
                  <div className="heading">
                    <h1 className="home-h1 font-display xxs:text-3.12 leading-1 md:text-h1">
                      {" "}
                      where <br /> software <br /> dreams <br /> come true{" "}
                    </h1>
                  </div>

                  <div className="para">
                    <p class="small-text mt-2  sm:text-xl lg:text-2xl lg:leading-1.65 leading-4 overflow-x-hidden xxs:text-xl ">
                      You want great results at an affordable price. With IDC,
                      that’s exactly what you get. Mobile applications.
                      Customized websites. EDI systems. We do it all – on
                      target, on time, on budget.
                    </p>
                    <button className="btn-double-outline float-right  mt-4">
                      <span>
                        <a className="btn-text xxs:" href="#">
                          {" "}
                          learn what we do{" "}
                        </a>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="h-93.5 ">
            <div className=" blue-part">
              <div className="container mt-8 px-4 w-full">
                <div className="flex flex-wrap -mx-4 h-full justify-center md:flex-nowrap lg:ml-offset">
                  <div className="oct-content relative flex flex-col self-center px-4 z-40 xxs:mt-50 sm:flex-grow-0 sm:flex-shrink-0 sm:w-5/6 sm:max-w-83.3 xl:mt-25">
                    <div className="oct-img self-center"></div>
                    <div className="heading relative z-50">
                      <h1 className="home-h1 xxs:text-5xl leading-1 text-center sm:text-3.43 lg:text-h1 ">
                        {" "}
                        custom edi with
                        <br />
                        <span className="span-h1 lg:text-h1">
                          {" "}
                          instant pricing{" "}
                        </span>{" "}
                      </h1>
                    </div>
                    <div className="para z-50">
                      <p class="small-text text-center xxs:text-xl sm:text-lg lg:text-2xl lg:leading-1.65 leading-1.75">
                        We’ve even developed a product of our own: the Armor
                        Connect Engine (ACE). You can see pricing in seconds
                        with our online calculator. And unlike many providers,
                        we provide custom integration with your ERP system.
                      </p>
                      <button className="btn-double-outline mx-auto mt-4">
                        <span>
                          <a className="btn-text xxs:" href="#">
                            {" "}
                            calculate your fees{" "}
                          </a>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="hand-section h-90">
          <div className="hands-img">
            <div className="container mt-8 px-4 w-full">
              <div className="flex flex-wrap -mx-4 md:h-full justify-center lg:flex-nowrap lg:">
                <div className="hand-content relative flex flex-col self-center px-4 z-50 xxs:text-center xxs:mt-28  sm: sm:flex-shrink-0 sm:flex-grow-0 sm:w-full sm:max-w-full sm:text-left  lg:w-70.3 lg:max-w-70.6 lg:text-left">
                  <div className="heading">
                    <h1 className="home-h1 xxs:text-5xl leading-1  sm:text-h1">
                      {" "}
                      a relationship <br />
                      <span className=" text-globe xxs:text-3.43 sm:text-globe">
                        {" "}
                        built to last{" "}
                      </span>{" "}
                    </h1>
                  </div>

                  <div className="para">
                    <p class="small-text text-center xxs:text-xl sm:text-lg lg:text-2xl lg:leading-1.65 sm:text-left">
                      At IDC, we've always got your back. We're more than your
                      software developer or EDI provider - we're your partner,
                      dedicated to your success today and tomorrow.
                    </p>
                    <button className="btn-double-outline mx-auto mt-4 sm:float-left">
                      <span>
                        <a className="btn-text xxs:" href="#">
                          {" "}
                          meet the team{" "}
                        </a>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

          <section className="hand-section ">
            <div className="hands-img">
              <div className="container mt-8 px-4 w-full xl:pt-40">
                <div className="flex flex-wrap -mx-4 h-full  md:flex-nowrap lg:ml-offset">
                  <div className="hand-content flex flex-col self-center relative px-4 w-full xxs:pt-40% xxs:text-center md:flex-grow-0 md:flex-shrink-0 md:w-full md:max-w-full lg:w-4/6 lg:max-w-66.6 md:pt-0 md:text-left">
                    <div className="heading">
                      <h1 className="home-h1 xxs:text-5xl leading-1  sm:text-3.43">
                        {" "}
                        a relationship <br />
                        <span className=" text-globe xxs:text-3.43 sm:text-h1">
                          {" "}
                          built to last{" "}
                        </span>{" "}
                      </h1>
                    </div>

                    <div className="para">
                      <p class="small-text text-center xxs:text-xl sm:text-lg lg:text-2xl lg:leading-1.65 sm:text-left">
                        At IDC, we've always got your back. We're more than your
                        software developer or EDI provider - we're your partner,
                        dedicated to your success today and tomorrow.
                      </p>
                      <button className="btn-double-outline mx-auto mt-4 sm:float-left">
                        <span>
                          <a className="btn-text xxs:" href="#">
                            {" "}
                            meet the team{" "}
                          </a>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container w-full max-w-full px-4">
                <div className="row flex flex-nowrap mx-4">
                  <div className="left left-0 -ml-20 xxs:hidden sm:block ">
                    <img
                      src="/images/left-hand.png"
                      className="w-full flex-shrink-0 flex-grow-0 sm:w-full max-w-full p-0 "
                    />
                  </div>
                  <div className="right relative -mr-20 xxs:hidden sm:block right-0">
                    <img
                      src="/images/right-hand.png"
                      className="w-full flex-shrink-0 flex-grow-0 sm:w-full max-w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mountain-sec ">
            <div className="mountain-img z-10 relative">
              <div className="container px-4 w-full z-40 md:pt-40 ">
                <div className="flex flex-wrap -mx-2 h-full xxs:pt-0 sm:flex-nowrap ">
                  <div className="mountain-content text-right relative z-40  sm:flex-grow-0 sm:flex-shrink-0 sm:w-1/2 sm:max-w-50 sm:-mt-12">
                    <div className="heading">
                      <h1 className="home-h1 font-display  mx-auto xxs:text-5xl sm:hidden">
                        let's win together
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
                  <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6">
                    <HubspotForm
                      portalId="7830205"
                      formId="138fc0a1-fbc3-4e84-a27c-98b6cce7a9da"
                      onSubmit={() => console.log("Submit!")}
                      onReady={(form) => console.log("Form ready!")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
