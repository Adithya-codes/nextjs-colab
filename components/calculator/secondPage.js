import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Secondpage = () => {
  return(
  <div className="first-page">
    <div className="flex flex-wrap -mx-4">
      <div className=" flex-shrink-0 flex-grow-0 xxs:w-103 xxs:max-w-115 mb-8">
        <h4 className="font-display text-center uppercase font-black mb-2 text-navy-blue xxs:text-1.75 xxs:leading-1.2">
          compare pricing options
        </h4>
        <div>
          <p className="font-paragraph text-black font-normal text-center leading-1  xxs:text-1.19">
            We'll give you two prices: one based on your monthly transaction
            volume and another based on your number of connections. You decide
            which pricing option works best for you.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 edi-calculator-fields">
        <div className="flex flex-col flex-wrap px-1 py-0 content-between justify-center flex-shrink-0 flex-grow-0 w-6/12 max-w-50 xxs:pt-6 ">
          <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1">
            Transactions based price per month
          </h6>

        

          <input
            type="text"
            placeholder="#"
            className="edi-calculator-input font-display font-black leading-1 mb-2 pt-12 pb-12 xxs:text-3.12 "
          />
        </div>

        <div className="flex flex-col flex-wrap px-1 py-0 content-between justify-center flex-shrink-0 flex-grow-0 w-6/12 max-w-50 xxs:pt-6">
          <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1">
            Connections based price per month
          </h6>

        

          <input
            type="text"
            placeholder="#"
            className="edi-calculator-input font-display font-black leading-1 mb-2 pt-12 pb-12 xxs:text-3.12"
          />
        </div>
      </div>
    </div>
  </div>
  )
};

export default Secondpage;
