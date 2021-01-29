import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Secondpage = ({
  transactionPrice,
  connectionPrice,
  onClick,
  handleClickStart,
  setValue,
}) => {
  return (
    <div className="first-page">
      <div className="flex flex-wrap -mx-4">
        <div className=" flex-shrink-0 flex-grow-0 xxs:w-103 xxs:max-w-115 mb-8">
          <h4 className="font-display text-center uppercase font-black mb-2 text-navy-blue xxs:text-1.75 xxs:leading-1.2 xs:text-2 sm:text-2.3 md:text-3.43 xl:text-4xl">
            compare pricing options
          </h4>
          <div>
            <p className="font-paragraph text-black font-normal text-center leading-1  xxs:text-1.19  xs:text-1.3 sm:text-1.2 md:text-1.75 lg:text-1.8 xl:text-1.4">
              We'll give you two prices: one based on your monthly transaction
              volume and another based on your number of connections. You decide
              which pricing option works best for you.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 edi-calculator-fields">
          <div className="flex flex-col flex-wrap px-1 py-0 content-between justify-center flex-shrink-0 flex-grow-0 w-6/12 max-w-50 xxs:pt-6 ">
            <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1 xs:text-1.2 sm:text-1.3 md:text-1.75 ">
              Transactions based price per month
            </h6>

            <h1 className="edi-calculator-input font-display font-black leading-1 mb-2 xxs:text-2.1 xs:text-3.43 xl:text-4.125 xxs:pt-14 xxs:pb-16 xs:pt-12 xs:pb-12 sm:pb-16 sm:pt-16 ">
              <sup>$</sup>
              <span> {transactionPrice}</span>
            </h1>
          </div>

          <div className="flex flex-col flex-wrap px-1 py-0 content-between justify-center flex-shrink-0 flex-grow-0 w-6/12 max-w-50 xxs:pt-6">
            <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1  xs:text-1.2 sm:text-1.3 md:text-1.75 ">
              Connections based price per month
            </h6>

            <h1 className="edi-calculator-input font-display font-black leading-1 mb-2 pt-14 pb-16 xxs:text-2.1 xl:text-4.125 xs:text-3.43 xxs:pt-14 xxs:pb-16 xs:pt-12 xs:pb-12 sm:pb-16 sm:pt-16">
              <sup>$</sup>
              <span> {connectionPrice}</span>
            </h1>
          </div>
        </div>
        <div className="w-full mx-auto relative bottom-6 btn-className xxs:mt-16 xs:mt-14 sm:mt-10 ">
          <div className='absolute flex flex-row flex-wrap items-center justify-center w-full '>  
          <div className=" flex-shrink-0 flex-grow-0 xxs:w-6/12 xxs:max-w-50 xxs:pl-0 xxs:pr-4 md:pl-16 md:pr-14 md:w-6/12 md:max-w-50  ">
            <button
              onClick={onClick}
              className="my-2 uppercase btn-double-outline btn-double-outline--pink btn-double-outline--outline-primary w-full border-0 bg-transparent "
            >
              <span className="uppercase font-display font-normal ">next</span>
            </button>
          </div>

          <div className=" flex-shrink-0 flex-grow-0 w-6/12 max-w-50 xxs:pl-4 xxs:pr-1 md:pl-16 md:pr-14 md:w-6/12 md:max-w-50  ">
            <button
              onClick={onClick}
              className="my-2 uppercase btn-double-outline btn-double-outline--pink btn-double-outline--outline-primary w-full order-0 bg-transparent "
            >
              <span className="uppercase font-display font-normal ">next</span>
            </button>
          </div>
          <div className="mt-4  relative w-6/12 max-w-50 text-center ">
            <button
              onClick={handleClickStart}
              className="start-btn text-black font-smallText underline  first-start-btn xxs:text-1.1875"
            >
              start over
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
