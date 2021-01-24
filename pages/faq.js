import Head from "next/head";
import Link from "next/link";
import HubspotForm from "react-hubspot-form";
import Layout from "../components/Layout";

const faq = () => {
  const data = [
    {
      question: `What makes International Development Connection (IDC)
                different from other software developers?`,
      answer: `  We combine the affordability of offshore software
                development with a U.S.-style business experience. With IDC,
                clients benefit from the talents of skilled developers while
                enjoying better communication and accountability from a
                U.S.-based project manager. The result: higher quality, less
                frustration and lower costs. We also have a passion for what
                we do, which fuels our enthusiasm and your success.`,
    },
    {
      question: `  What kinds of software development projects do you handle?`,
      answer: ` IDC can help you with mobile applications, websites,
                customized software tools and more. We can also supple ment
                the efforts of your in-house software development team for
                specific IT projects. If you have questions,contact us and
                we’ll give you the answers you need.`,
    },
    {
      question: ` How much can I save using IDC for software development?`,
      answer: `   On average, we believe we can save our clients 25% over
                other software developers. Plus, since our technology stacks
                are scalable, you can protect your investment and add
                functionality as your project evolves.`,
    },
    {
      question: `  What is the Armor Connect Engine (ACE)?`,
      answer: `  ACE is an Electronic Data Interchange (EDI) system we
                developed in-house and are making available to businesses as
                a managed service provider. In today’s global business
                environment, companies need to exchange electronic business
                documents with one another quickly and securely. ACE allows
                you to transfer a wide range of data in a standardized
                format, from purchase orders to invoices to inventory data.
                It offers several key benefits compared to other types of
                data transmission, including reduced costs, increased speed
                and more productive relationships with your clients and
                partners.`,
    },
    {
      question: ` What makes the Armor Connect Engine better?`,
      answer: `    Deployed through the Amazon Web Services cloud, ACE provides
                all of the traditional benefits of EDI, from high security
                to excellent scalability and availability. We go the extra
                mile, providing customized services to connect ACE to your
                company’s ERP system. As your EDI service provider, we’ll
                deliver seamless integration and secure EDI transactions,
                day after day. ACE also offers greater price transparency
                compared to other providers.`,
    },
    {
      question: `  How much can I save using ACE for my EDI solutions?`,
      answer: `     Probably quite a bit of money. You can get an estimate in a
      few minutes with our online calculator. Just fill out a few
      questions and you’ll get your pricing instantly. It’s an
      all-digital process, with no human interaction – eliminating
      the usual time and hassle of getting an EDI estimate. In a
      time when many companies are looking for ways to cut
      expenses, making us your EDI service provider could be a
      quick way to achieve that goal.`,
    },
    {
      question: `   What kinds of companies use ACE for EDI?`,
      answer: `    Businesses of all types and sizes choose ACE for its speed,
      reliability and price transparency. Whether you have 100 EDI
      transactions a month or 10,000, we believe you’ll save money
      using ACE.`,
    },
  ];

  return (
    <div className=" faq-wrapper w-full overflow-x-hidden">
      <Layout>
        <div className="pt-24 pb-24 mx-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 ">
              <div className=" mx-auto w-full px-4 relative sm:flex-grow-0 sm:flex-shrink-0 sm:max-w-5/6 sm:w-5/6">
                <div>
                  <h1 className="text-clip mt-16 mb-2 py-5  text-center font-display xs:text-7xl md:text-9xl">
                    {" "}
                    FAQs{" "}
                  </h1>
                  {data.map((posts) => (
                    <div className="py-6 border-b border-white border-solid ">
                      <h4 className="faq-h4 ">{posts.question}</h4>
                      <p className="small-text text-1.6 text-black my-4 font-medium xs:leading-1.65 xs:text-xl sm:text-lg lg:text-2xl lg:leading-1.65">
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
                <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6 sm:flex-grow-0 sm:flex-shrink-0 sm:w-6/12 sm:max-w-50 sm:top-12">
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

export default faq;
