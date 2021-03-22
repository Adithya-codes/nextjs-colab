import React from 'react'
import HubspotForm from "react-hubspot-form";

const Form = ()=>

{

    const handleFormSubmit = () => {
        gtag.event({
          action: "formSubmit",
          category: "Form",
          label: "homePage",
          value: "1",
        });
      };

    return(
        <div className="form relative z-30 px-4 w-full mb-11 xxs:mt-6 sm:flex-grow-0 sm:flex-shrink-0 sm:w-6/12 sm:max-w-50">
        <HubspotForm
          portalId="7830205"
          formId="138fc0a1-fbc3-4e84-a27c-98b6cce7a9da"
          onSubmit={handleFormSubmit}
          onReady={(form) => console.log("Form ready!")}
        />
      </div>
    )



}

export default Form;