import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import HubspotForm from "react-hubspot-form";

const Team = () => {

  const data = ()=>
  {
    [
      {
        name:'t.brandon barker',
        desg:'founder & ceo',
        content: `An accomplished C-level executive, Brandon continually
        sets extremely high standards for himself and the IDC
        team. He’s also the co–founder and COO of Innova
        Zones, a technology-centric organization providing
        integrated management services to Fortune 1000
        companies across diverse industry sectors. Before
        that, he had a successful career with Justin Brands,
        where he provided leadership and innovation in sales,
        marketing, product development and brand management.`,
        class:'order-1'
      },
      {
        name:'sanjay bhati',
        desg:'founder & coo',
        content: `An accomplished C-level executive, Brandon continually
        sets extremely high standards for himself and the IDC
        team. He’s also the co–founder and COO of Innova
        Zones, a technology-centric organization providing
        integrated management services to Fortune 1000
        companies across diverse industry sectors. Before
        that, he had a successful career with Justin Brands,
        where he provided leadership and innovation in sales,
        marketing, product development and brand management.`,
        class:'order-1'
      },
    ]
  }
  return (
    <div className="team-wrapper">
      <Layout>
        <div className="container px-4 w-full">
          <div className="row flex flex-wrap -mx-4">
            <section className="mb-8">
              <div className="circle-img "></div>
              <div className="container px-4 full">
                <div className=" h-full flex flex-wrap -mx-4 justify-center pt-16 ">
                  <div className="heading self-center text-center break-words ">
                    <h1 className="span-h1 text-2.8 leading-0.8 font-medium break-words text-center mt-16 relative sm:text-5 lg:text-8xl">
                      {" "}
                      it's about <br /> technology, <br />{" "}
                      <span className="home-h1 text-2.8 sm:text-5 lg:text-8xl">
                        {" "}
                        transperancy{" "}
                      </span>{" "}
                    </h1>
                    <h1 className="text-clip text-center text-2.8 font-display mt-4 bg-clip-text sm:text-5 lg:text-8.4">
                      {" "}
                      + trust.{" "}
                    </h1>
                    <img
                      src="/images/down-arrow.png"
                      alt=""
                      className="mt-3 mx-auto"
                    />
                  </div>
                </div>

                 <div className="flex flex-wrap -mx-4">
                  <div className="self-center text-center px-4 break-words relative xxs:flex-grow-0 xxs:flex-shrink-0 xxs:w-full xxs:max-w-full xxs:mt-14 ">
                    <p className="small-text xxs:text-xl sm:text-lg lg:text-2xl lg:leading-1.65">
                      Like many big ideas, International Development Connection
                      arose from a need. Two brothers – both successful U.S.
                      entrepreneurs – wanted to take advantage of overseas
                      software development, but ran into several common
                      problems. Questionable quality. Poor planning. Logistical
                      errors. Miscommunication. But when they met an overseas
                      development team whose dedication to excellence matched
                      their own, IDC was born.
                    </p>
                  </div>
                </div> 

                <div className="flex flex-wrap xxs:my-14 xxs:mx-auto ">
                  <div className="self-center text-center px-4 relative break-words xxs:flex-shrink-0 xxs:flex-grow-0 xxs:max-w-full xxs:w-full">
                    <div className="flex flex-wrap -mx-4 ">
                      <div className="col-10  text-justify px-4 relative xxs:flex-shrink-0 xxs:flex-grow-0 xxs:max-w-83.3 xxs:w-10/12 xxs:ml-5">
                        <h1
                          className="span-h1 text-8xl text-center w-75 font-thin text-stroke-0 mt-16 xxs:text-2.8 xxs:w-80 
                       xxs:mt-4 sm:text-3.43 lg:text-5.2 xl:text-8xl lg:-ml-40 xl:-ml-16 sm:w-75 sm:-ml-64"
                        >
                          {" "}
                          when you choose idc,
                        </h1>
                      </div>
                    </div>
                    <p className="small-text text-center xxs:text-xl sm:text-lg lg:text-2xl xxs:mt-4 lg:leading-1.65">
                      you get a business partnership with full accountability
                      and trust, combined with the cost savings associated with
                      offshore development. Every member of our team has a
                      passion for problem solving and a commitment to serving
                      our customers.
                    </p>
                    <img
                      src="/images/down-arrow.png"
                      alt=""
                      className="mt-3 mx-auto"
                    />
                  </div>
                </div>
              </div>
            </section>
            
         
            <section className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 xxs: mt-9 sm:mt-0">
              <div className="container px-4 w-full sm: mt-12 lg:mt-24 ">
                <div className="row flex flex-wrap -mx-4 justify-center ">
                  <div className="relative px-4 w-full xxs:min-w-full  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm: -top-40  lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-0">
                    <div className="img">
                      <img
                        src="/images/Brandon-fullshot.png"
                        alt=""
                        className="xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center sm:h-45 sm:w-auto sm:object-scale-down   "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-left px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-40  sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-12  ">
                    <div className="heading pb-4">
                      <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-4xl lg:text-3.8 lg:leading-0.9">
                   t.brandon barker
                      </h1>
                      <h3 className="text-4xl span-h1  uppercase font-display font-bold xxs:text-3.12 sm:text-4xl lg:text-2.8">
                        {" "}
                  founder & ceo
                      </h3>
                      <div className="para">
                        <p className="small-text mt-4 xxs:text-xl sm:text-lg lg:leading-1.65 lg:text-2xl">
                        An accomplished C-level executive, Brandon continually
        sets extremely high standards for himself and the IDC
        team. He’s also the co–founder and COO of Innova
        Zones, a technology-centric organization providing
        integrated management services to Fortune 1000
        companies across diverse industry sectors. Before
        that, he had a successful career with Justin Brands,
        where he provided leadership and innovation in sales,
        marketing, product development and brand management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          <section className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 lg:mt-12">
              <div className="container px-4 w-full">
                <div className="row flex flex-wrap -mx-4 justify-center">
                  <div className="relative px-4 w-full xxs:min-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 sm:-ml-12 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                    <div className="img">
                      <img
                        src="/images/sanjay-fullshot.png"
                        alt=""
                        className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-right co px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-40 sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0  sm:text-left ">
                    <div className="heading pb-4">
                      <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-4xl lg:text-3.8">
                        sanjay bhati
                      </h1>
                      <h3 className="text-4xl span-h1  uppercase font-display font-bold xxs:text-3.12 sm:text-4xl lg:text-2.8">
                        {" "}
                        founder & coo
                      </h3>
                      <div className="para">
                        <p className="small-text mt-4 xxs:text-xl sm:text-lg lg:text-2xl lg:leading-1.65">
                          Sanjay Bhati has “been there, done that.” In his 25+
                          years in business, he’s handled a wide range of key
                          functions, from finance to accounts to human
                          resources. In the past two decades, Sanjay has held
                          senior positions in shared services, outsourcing and
                          human resources. He’s an expert in outsourcing, having
                          led many companies through organization design,
                          strategy development, delivery center setup,
                          transition management and continuous improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> 
            <section className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 lg:mt-12">
              <div className="container px-4 w-full">
                <div className="row flex flex-wrap -mx-4 justify-center">
                  <div className="relative px-4 w-full xxs:min-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 sm:-ml-12 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                    <div className="img">
                      <img
                        src="/images/cecil-fullshot.png"
                        alt=""
                        className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-left co px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-40 sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0 sm:text-left  ">
                    <div className="heading pb-4">
                      <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-4xl lg:text-3.8">
                      cecil bostany
                      </h1>
                      <h3 className="text-4xl span-h1  uppercase font-display font-bold xxs:text-3.12 sm:text-4xl lg:text-2.8">
                        {" "}
                         founder & cfo
                      </h3>
                      <div className="para">
                        <p className="small-text mt-4 xxs:text-xl sm:text-lg sm:text-left lg:text-2xl lg:leading-1.65">
                        Cecil brings a wealth of financial expertise to IDC. He’s
                  advised and worked with software companies for 40+ years and
                  has 25+ years of experience with venture capital companies,
                  publicly traded firms and mergers & acquisitions. A CPA
                  since 1980, Cecil was a partner with an international
                  accounting firm and has served clients in a variety of
                  industries, including technology and life sciences,
                  manufacturing, food and beverage, and automotive.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> 
            <section className="xxs:h-auto xxs:w-full xxs:min-w-full relative z-30 lg:mt-12">
              <div className="container px-4 w-full">
                <div className="row flex flex-wrap -mx-4 justify-center">
                  <div className="relative px-4 w-full xxs:min-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50  sm:max-w-50 sm:-mr-12 sm:-top-40 sm:-ml-12 sm:order-2 lg:w-2/6 lg:max-w-33.3 lg:min-w-33.3 lg:top-12 ">
                    <div className="img">
                      <img
                        src="/images/brian-fullshot.png"
                        alt=""
                        className=" items-end xxs:w-full xxs:h-full xxs:min-w-full xxs:block xxs:mx-auto xxs:justify-center "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-right co px-4 w-full z-20 relative xxs:min-w-full xxs:w-full xxs:-top-40 sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:min-w-50 sm:max-w-50 lg:w-7/12 lg:max-w-58.3 lg:min-w-58 lg:top-0  sm:text-left ">
                    <div className="heading pb-4">
                      <h1 className="home-h1 text-6xl xxs:mb-2 sm:text-4xl lg:text-3.8">
                   t.brian barker
                      </h1>
                      <h3 className="text-4xl span-h1 leading-1 uppercase font-display font-bold xxs:text-3.12 sm:text-4xl lg:text-2.8">
                        {" "}
                       director/
                       founder
                      </h3>
                      <div className="para">
                        <p className="small-text mt-4 xxs:text-xl sm:text-lg lg:text-2xl lg:leading-1.65">
                        A member of the IDC Board of Directors, Brian is an
                  experienced business executive who offers valuable insights
                  in multiple areas, from daily operations to offshore
                  software development. He co-founded Innova Zones in 2015
                  with Brandon Barker, and before that was COO of the
                  Integrated Advantage Group, where he served on the Board of
                  Directors. He has also held leadership positions at Cintas
                  and the Vincit Group. Currently, Brian is the CEO and
                  Chairman of the Board of Innova Zones.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> 
            <section className='grated-pattern-teams relative'> 
            <div className="container mx-4 w-full">
            <div className="row flex flex-wrap -mx-4 ">
              <div className="relative w-full px-4 sm:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50">
                <div className="heading ">
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
        </div>
      </Layout>
    </div>
  );
};

export default Team;
