import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {useState,useEffect} from 'react'

const Fourthpage = ({
  connection,
  connectionPrice,
  handleClickStart,
  handleClickForm,
  count,
  setValue,
}) => {

  const[number, setNumber] = useState(0)

  useEffect(() => {
    setNumber(count)
    
  }, [count])
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="flex-grow-0 flex-shrink-0 relative px-4  text-center xxs:w-full xxs:max-w-full ">
        <h4 className="font-display text-center uppercase font-black mb-2 text-navy-blue xxs:text-1.75 xxs:leading-1.2 xs:text-2 sm:text-2.3  md:text-3.43">
          your pricing summary
        </h4>
      </div>
      <div className="flex flex-wrap -mx-4 relative edi-calculator-single text-black ">
        <div className="w-full px-4 relative py-6 flex-shrink-0 flex-grow-0 max-w-full">
          <div className="flex -mx-4 relative border-black border-b-2 border-solid xxs:flex-wrap sm:flex-nowrap">
            <div className="flex content-start relative text-center px-4 w-full md:flex-grow-0 md:flex-shrink-0 md:w-6/12 md:max-w-50">
              <p className=" mb-2 pb-6 font-paragraph font-normal leading-1 text-black xxs:text-1.1875 xs:text-1.3 md:text-1.7 xxs:flex-1 xxs:w-0">
                Cost per month based on EDI connections/month
              </p>
            </div>
            <div className=" relative px-4 w-full flex self-center justify-center sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50">
              <h3>
                <sup className="font-display font-medium text-pink"> $</sup>
                <span className=" font-display font-medium text-pink xxs:text-3.38 xs:text-6xl">
                {connectionPrice}
                </span>
              </h3>
            </div>
          </div>
          <div className="flex  -mx-4 relative border-black border-b-2 border-solid xxs:flex-wrap sm:flex-nowrap">
            <div className="flex content-start relative px-4 w-full md:flex-grow-0 md:flex-shrink-0 md:w-6/12 md:max-w-50">
              <p className=" mb-2 pb-6 font-paragraph font-normal leading-1 text-black xxs:text-1.1875 xs:text-1.3 xxs: mt-4 md:text-1.7 ">
              One-time fee for &nbsp;
              <span
                  
                  style={{ textDecoration: "underline" }}
                >
                  
                 <strong> {count} </strong> &nbsp;
                </span>
                   custom <br/> EDI integration mappings:
              </p>
            
            </div>
            <div className=" relative px-4 w-full flex self-center justify-center sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50">
              <h3>
                <sup className="font-display font-medium text-pink"> $</sup>
                <span className=" font-display font-medium text-pink xxs:text-3.38 xs:text-6xl">
                  {count*750}
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row -mx-4 flex flex-wrap xxs:px-2 lg:mt-8">
          <p className="font-paragraph text-center text-black xxs:text-0.93 xs:text-1.2 sm:text-1.3 lg:text-1.6 xl:text-1.8 sm:mt-8 xl:mt-2">
            Like what you see? Take the next step with no obligation. Let's have
            a no-pressure conversation about your needs
          </p>
        </div>
        <div className="w-full max-w-full relative px-4">
          <div className="flex flex-wrap -mx-4 text-center">
            <div className=" flex-shrink-0 flex-grow-0 relative px-4 w-full max-w-full">
              <div className=" w-full mx-auto relative mt-8 bottom-4 btn-class lg:mt-20 xl:mt-16  ">
                <div className="flex flex-wrap flex-shrink-0 flex-grow-0 absolute justify-center items-center w-full max-w-full md:w-6/12 md:max-w-50 md:ml-25  ">
                  <button
                    onClick={handleClickForm}
                    className="my-2 uppercase btn-double-outline btn-double-outline--pink btn-double-outline--outline-primary w-full border-0 bg-transparent  "
                  >
                    <span className="uppercase font-display font-normal ">
                      next
                    </span>
                  </button>
                  <div className="mt-4">
                    <button
                      onClick={handleClickStart}
                      className="start-btn text-black font-smallText underline xxs:text-1.1875"
                    >
                      start-over
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthpage;
