import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const fourthpage = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="flex-grow-0 flex-shrink-0 relative px-4  text-center xxs:w-full xxs:max-w-full ">
        <h4 className="font-display text-center uppercase font-black mb-2 text-navy-blue xxs:text-1.75 xxs:leading-1.2">
          your pricing summary
        </h4>
      </div>
      <div className='flex flex-wrap -mx-4 relative edi-calculator-single text-black'>
          <div className='w-full px-4 relative py-6 flex-shrink-0 flex-grow-0 max-w-full'>
              <div className='flex flex-wrap -mx-4 relative border-black border-b-2 border-solid'>
                <div className='flex content-start relative px-4 w-full'>
                 <p className=' mb-2 font-paragraph font-normal leading-1 text-black xxs:text-1.1875'>Cost per month based on EDI connections/month</p>
                </div>
                <div className=' relative px-4 w-full flex self-center justify-center'>
                  <h3>
                    <sup className='font-display font-medium text-pink'> $</sup>
                    <span className='text-3.38 font-display font-medium text-pink'>0</span>
                  </h3>
                </div>

              </div>
              <div className='flex flex-wrap -mx-4 relative border-black border-b-2 border-solid'>
                <div className='flex content-start relative px-4 w-full'>
                <p className=' mb-2 font-paragraph font-normal leading-1 text-black xxs:text-1.1875 xxs: mt-2'>Cost per month based on EDI connections/month</p>
                </div>
                <div className=' relative px-4 w-full flex self-center justify-center'>
                  <h3>
                    <sup className='font-display font-medium text-pink'> $</sup>
                    <span className='text-3.38 font-display font-medium text-pink'>0</span>
                  </h3>
                </div>

              </div>

          </div>

      </div>
    </div>
  );
};

export default fourthpage;
