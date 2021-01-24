import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const thirdpage = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="flex-grow-0 flex-shrink-0 relative px-4 mt-16 text-center xxs:w-full xxs:max-w-full ">
        <h4 className="font-display text-center uppercase font-black mb-2 text-navy-blue xxs:text-2 xxs:leading-1.2">
          custom edi integration
        </h4>
        <p2 className="text-black font-paragraph xxs:text-1 font-medium">
          We offer custom mapping to connect to your trading partners flat free
          of $750 each.
        </p2>
      </div>
      <div className="edi-calculator-fields mt-2">
        <div className=" relative px-4 w-full xxs:mt-20">
          <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1">
            How many will you need?
          </h6>
          <input
            type="text"
            placeholder="#"
            className="edi-calculator-input font-display font-black leading-1 mb-2 pt-12 pb-12 xxs:text-3.43"
          />
        </div>
      </div>
    </div>
  );
};

export default thirdpage;
