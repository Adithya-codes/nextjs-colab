import React from 'react'
import HubspotForm from "react-hubspot-form";


const Form = ({heading1,heading2,heading3,description1,description2,description3})=>
{
    return(

        <div className="container mx-4 w-full">
        <div className="row flex flex-wrap -mx-4 xl:mx-auto ">
          <div className="relative w-full px-4 sm:text-right z-40 align-top sm:flex-shrink-0 sm:flex-grow-0 sm:w-6/12 sm:max-w-50 ">
            <div className="heading ">
            <h1 className="home-h1 font-display  mx-auto xxs:mb-2 xxs:text-5xl sm:hidden">
                  {heading1} {heading2} {heading3}
                  </h1>
              <h1 className="home-h1 font-display mb-4  mx-auto sm:text-3.43 lg:text-h1 xxs:hidden sm:block sm:text-left lg:text-right">
              {heading1}<br /> {heading2} <br /> {heading3}
              </h1>
            </div>
            <div className="para">
              <p className="small-text  xxs:leading-1.65 xxs:text-xl sm:text-lg sm:text-left lg:text-2xl lg:leading-1.65 lg:text-right">
             {description1}
                <br />
             {description2}
                <br />
       {description3}
                <br />
              </p>
            </div>
          </div>
          <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6 sm:top-12 sm:flex-grow-0 sm:flex-shrink-0 sm:w-6/12 sm:max-w-50">
            <HubspotForm
              portalId="7830205"
              formId="138fc0a1-fbc3-4e84-a27c-98b6cce7a9da"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
            />
          </div>
        </div>
      </div>
    )
}

export default Form