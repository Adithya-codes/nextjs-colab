import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import StartButton from "./StartButton";

const FirstPage = ({
  transaction,
  connection,
  setTransaction,
  setConnection,
  handleClick,

  setValue,
}) => {
  const trans = useRef(transaction);
  console.log(setTransaction);
  return (
    <div className="first-page">
      <div className="flex flex-wrap -mx-4">
        <div className=" flex-shrink-0 flex-grow-0 xxs:w-103 xxs:max-w-115 mb-8">
          <h4 className="font-display text-center uppercase font-black mb-2 text-navy-blue xxs:text-1.75 xxs:leading-1.2 xs:text-2 sm:text-2.3 md:text-3.43 xl:text-4xl">
            compare pricing options
          </h4>
          <div>
            <p className="font-paragraph text-black font-normal text-center leading-1  xxs:text-1.19 xs:text-1.3 sm:text-1.2 md:text-1.3 lg:text-1.8 xl:text-1.4">
              We'll give you two prices: one based on your monthly transaction
              volume and another based on your number of connections. You decide
              which pricing option works best for you.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 edi-calculator-fields">
          <div className="flex flex-col flex-wrap px-1 py-0 content-between justify-center flex-shrink-0 flex-grow-0 w-6/12 max-w-50 ">
            <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1 xs:text-1.2 md:text-1.75 lg:text-1.7">
              Transactions per month
            </h6>

            <p className="text-black font-normal font-paragraph mb-2 leading-1 xxs:flex-1 xxs:text-1.1875  xs:text-1.3 sm:text-1.2 md:text-1.6 lg:text-1.7">
              How many total <u>transactions </u> do you project each month?
            </p>

            <input
              ref={trans}
              name="monthlyTransaction"
              placeholder="#"
              id="transaction"
              value={transaction}
              onChange={(e) => setTransaction(e.target.value)}
              type="text"
              className="edi-calculator-input font-display font-black leading-1 mb-2  xxs:text-2 xs:text-3.43 xxs:pt-14 xxs:pb-12 xs:pt-6 xs:pb-6 sm:pt-9 sm:pb-9 xl:text-4.125  xl:pb-14"
            />
          </div>

          <div className="flex flex-col flex-wrap px-1 py-0 content-between justify-center flex-shrink-0 flex-grow-0 w-6/12 max-w-50">
            <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1 xs:text-1.2 md:text-1.75 lg:text-1.7 ">
              Number of Connections
            </h6>

            <p className="text-black font-normal font-paragraph mb-2 leading-1 xxs:flex-1 xxs:text-1.1875 xs:text-1.3 sm:text-1.2 md:text-1.6 lg:text-1.7">
              How many EDI <u> conncections </u> do you need?
            </p>

            <input
              name="monthlyPartners"
              placeholder="#"
              value={connection}
              onChange={(e) => setConnection(e.target.value)}
              id="connection"
              type="text"
              className="edi-calculator-input font-display font-black leading-1 mb-2  xxs:text-2  xxs:pt-9 xxs:pb-12 xs:text-3.43 xs:pt-6 xs:pb-6 xl:text-4.125 xl:pb-14"
            />
          </div>
        </div>
        <div className=" w-full mx-auto relative bottom-6 mt-10 btn-class sm:mt-14 xl:mt-16 edi-button ">
          <div className="flex flex-wrap flex-shrink-0 flex-grow-0 absolute justify-center items-center w-full max-w-full md:w-6/12 md:max-w-50 md:ml-25  ">
            <button
              onClick={handleClick}
              className="my-2 uppercase btn-double-outline btn-double-outline--pink btn-double-outline--outline-primary w-full border-0 bg-transparent  "
            >
              <span className="uppercase font-display font-normal sm:text-lg ">next</span>
            </button>
            <div className=" xxs:mt-8 xs:mt-4">
              <button className="start-btn text-black font-smallText  xxs:text-1.1875">
                <StartButton
                  setValue={setValue}
                  setConnection={setConnection}
                  setTransaction={setTransaction}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
