import React, { useEffect, useState } from "react";
import Firstpage from "./FirstPage";
import Secondpage from "./SecondPage";
import Thirdpage from "./ThirdPage";
import Fourthpage from "./FourthPage";
import Form from "./CalculatorForm";
import Thankyoupage from "./ThankyouPage";
import * as gtag from '../../lib/gtag';

const EdiCalculator = () => {
  const [transaction, setTransaction] = useState(null);
  const [transactionPrice, setTransactionPrice] = useState(null);
  const [transPrice, setTransPrice] = useState(null);

  const [connection, setConnection] = useState(null);
  const [connectionPrice, setConnectionPrice] = useState("00");
  const [value, setValue] = useState(1);
  const [count, setCount] = useState(null);

  const handleClickFirstpage = () => {
    setValue(2);
  };

  const handleClickSecondpage = () => {
    setValue(3);
  };

  const handleClickThirdpage = () => {
    setValue(4);
  };

  const handleClickFourthpage = () => {
    setValue(5);
  };

  const handleClickThankYou = () => {
    setValue(6);
    gtag.event({ action: "formSubmit", category: "Form", label: "calculator-form", value: "1" });
  };


  

  const handleClickStart = async () => {
    setValue(1);
    setConnection(null);
    setTransaction(null);
    setCount(null);
  };

  //firstpage onchange event

  // const handleChangeTransaction = event => {
  //   const transaction = event.target.value

  //   setTransaction(transaction)
  // }

  // const handleChangeConnection = event => {
  //   const connection = event.target.value
  //   setConnection(connection)
  // }

  useEffect(() => {
    console.log("test connection");
    setConnectionPrice(Math.ceil(connection) * 250);
  }, [connection]);

  useEffect(() => {
    setTransactionPrice(Math.ceil(transaction / 250) * 250);
  }, [transaction]);

  return (
    <section
      className="edi-calculator table h-auto relative  z-40 xxs:py-6 sm:py-10 xl:mt-16 xl:pt-48 2xl:mt-0 2xl:pt-0  xs:mx-auto"
      id="calc-section"
    >
      <div className="container mx-auto px-0.0625 w-full xs:px-0.625 ">
        <div
          className="flex flex-wrap self-center bg-white border-yellowBtn border-solid border-4 rounded-2xl py-3 px-0 xxs:h-51 sm:h-50 md:h-53 lg:h-55 xl:h-48
        xxs:min-h-43.75 xxs:w-auto xxs:mx-auto  "
        >
          <div className="px-4 ml-offset relative xxs:flex-shrink-0 xxs:flex-grow-0 xxs:w-5/6 xxs:max-w-83.3 xxs:text-center">
            <div>
              <div className="flex justify-center w-full px-4 py-4 xxs:flex-grow-0 xxs:flex-shrink-0 xxs:w-full xxs:max-w-full ">
                <img
                  src="/images/svg/ace-logo.svg"
                  alt="ace-logo"
                  className=" align-middle mb-4 h-auto w-full max-w-12.5 text-center"
                />
              </div>
              <div id="calc-triger">
                {(value === 1 && (
                  <Firstpage
                    transaction={transaction}
                    connection={connection}
                    handleClick={handleClickFirstpage}
                    setTransaction={setTransaction}
                    setConnection={setConnection}
                  />
                )) ||
                  (value === 2 && (
                    <Secondpage
                      handleClick={handleClickSecondpage}
                      transactionPrice={transactionPrice}
                      connectionPrice={connectionPrice}
                      handleClickStart={handleClickStart}
                    />
                  )) ||
                  (value === 3 && (
                    <Thirdpage
                      handleClick={handleClickThirdpage}
                      handleClickStart={handleClickStart}
                      setCount={setCount}
                    />
                  )) ||
                  (value === 4 && (
                    <Fourthpage
                      connection={connection}
                      connectionPrice={connectionPrice}
                      handleClickStart={handleClickStart}
                      handleClick={handleClickFourthpage}
                      count={count}
                    />
                  )) ||
                  (value === 5 && (
                    <Form handleClickThankYou={handleClickThankYou} />
                  )) ||
                  (value === 6 && <Thankyoupage />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdiCalculator;
