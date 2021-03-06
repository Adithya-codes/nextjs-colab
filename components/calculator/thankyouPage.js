import Head from "next/head";
import Link from "next/link";


const ThankyouPage = ()=>
{
return(
    <div className=' w-full flex flex-wrap mx-auto  mt-12 xl:mt-4'>
        <div className=' w-full max-w-full relative mb-11 text-center xxs:px-4 sm:px-2 md:px-4   '>
            <h2 className='text-navy-blue  font-bold leading-3.2 sm:leading-3.7 uppercase xxs:text-2 xs:text-2.5 sm:text-3.43 md:text-4.125 md:leading-5 xl:text-7xl xl:leading-1.2'>your information has been sent.</h2>
        </div>

        <div className=' w-full max-w-full relative text-center xxs:px-4 sm:px-2 md:px-4 xl:px-4 '>
            <h2 className='text-navy-blue font-bold leading-3.2 sm:leading-3.7 uppercase xxs:text-2 xs:text-2.5 sm:text-3.43 md:text-4.125 md:leading-5 xl:text-7xl xl:leading-1.2'>we'll make the connection soon!</h2>
        </div>

    </div>
)
}

export default  ThankyouPage;
