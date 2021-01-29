import Head from "next/head";
import Link from "next/link";

const Calculatorform = ({handleClickThankYou}) => {
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4 flex-shrink-0 flex-grow-0 max-w-full">
        <p className=" font-paragraph font-normal mb-2 leading-1  xxs:text-1.1875 sm:text-1.2 md:text-1.7 lg:text-1.75 xl:text-1.45">
          Complete this form and one of our team members will contact you soon.
        </p>
        <p className=" font-paragraph font-normal mb-2 leading-1  xxs:text-1.1875 sm:text-1.2 md:text-1.7 lg:text-1.75 xl:text-1.45">
          Don't worry we hate spam too. We'll never sell or share your
          information
        </p>
        <div>
          <div
            className="relative px-4 w-full
               xs:mt-8 lg:mt-14"
          >
            <div className="flex flex-wrap -mx-4 xl:ml-25">
              <div className="relative px-4 w-full mb-4 xl:flex-shrink-0 xl:flex-grow-0 xl:w-65 xl:max-w-70.6">
                <input
                  name="company"
                  type="text"
                  className="form-control  border-navy-blue border-2 border-solid p-8 mt-4 "
                  placeholder="Name"
                />
              </div>
              <div className="relative px-4 w-full mb-4 xl:flex-shrink-0 xl:flex-grow-0 xl:w-65 xl:max-w-70.6 ">
                <input
                  name="company"
                  type="text"
                  className="form-control  border-navy-blue border-2 border-solid p-8 mt-4 "
                  placeholder="Email"
                />
              </div>
              <div className="relative px-4 w-full mb-4 xl:flex-shrink-0 xl:flex-grow-0 xl:w-65 xl:max-w-70.6">
                <input
                  name="company"
                  type="text"
                  className="form-control  border-navy-blue border-2 border-solid p-8 mt-4 "
                  placeholder="Company"
                />
              </div>
            </div>
            <div className=" w-full mx-auto relative bottom-4 btn-class xxs:mt-12 xs:mt-8 lg:mt-20 ">
              <div className="flex flex-wrap flex-shrink-0 flex-grow-0 absolute justify-center items-center w-full max-w-full md:w-45 md:max-w-50 md:ml-27 xl:px-4 ">
                <button
                  onClick={handleClickThankYou}
                  className="my-2 uppercase btn-double-outline btn-double-outline--pink btn-double-outline--outline-primary w-full border-0 bg-transparent  "
                >
                  <span className="uppercase font-display font-normal ">
                    Send
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculatorform;
