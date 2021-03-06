import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const ThirdPage = ({handleClick ,handleClickStart ,setCount, setValue}) => {
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="flex-grow-0 flex-shrink-0 relative px-4 mt-4 text-center xxs:w-full xxs:max-w-full ">
        <h4 className="font-display text-center uppercase font-black mb-2 text-navy-blue xxs:text-2 xs:text-2 sm:text-2.3 xxs:leading-1.2  md:text-3.43 xl:text-4xl">
          custom edi integration
        </h4>
        <p2 className="text-black font-paragraph xxs:text-1 sm:text-1.2 md:text-1.75 xl:text-1.6 font-medium">
          We offer custom mapping to connect to your trading partners flat free
          of $750 each.
        </p2>
      </div>
      <div className="edi-calculator-fields mt-2">
        <div className=" relative px-4 w-full xxs:mt-20 md:flex-shrink-0 md:flex-grow-0 md:w-6/12 md:max-w-50 md:ml-25">
          <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1 xs:text-1.2 md:text-1.75">
            How many will you need?
          </h6>
          <input
            type="text"
            placeholder="#"
            onChange={(e)=> setCount(e.target.value)}
            className="edi-calculator-input font-display font-black leading-1 mb-2 xxs:text-3.43 xl:text-4.125 xxs:pt-12 pb-14 xs:pt-14 xs:pb-14 lg:pt-12 lg:pb-10 "
          />
        </div>
      </div>
      <div className=" w-full mx-auto relative mt-10 bottom-4 btn-class xxs:mt-16 xl:mt-8 ">
          <div className="flex flex-wrap flex-shrink-0 flex-grow-0 absolute justify-center items-center w-full max-w-full md:w-6/12 md:max-w-50 md:ml-24 xl:ml-25 xl:px-4">
            <button
              onClick={handleClick}
              className="my-2 uppercase btn-double-outline btn-double-outline--pink btn-double-outline--outline-primary w-full border-0 bg-transparent  "
            >
              <span className="uppercase font-display font-normal ">Calculate</span>
            </button>
            <div className="mt-4">
              <button
              onClick={handleClickStart} 
              className="start-btn text-black font-smallText underline xxs:text-1.1875">
              start-over
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default  ThirdPage;
