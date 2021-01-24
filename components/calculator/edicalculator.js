import React, { useEffect, useRef, useState } from "react";
import Firstpage from './firstPage'
import Secondpage from "./secondPage";
import Thirdpage from "./thirdPage";
import Fourthpage from "./fourthpage";

const ediCalculator = () => {

    const [transaction, setTransaction] = useState(null)
    const [transactionPrice, setTransactionPrice] = useState(null)
    const [transPrice, setTransPrice] = useState(null)
  
    const [connection, setConnection] = useState(null)
    const [connectionPrice, setConnectionPrice] = useState("00")
    const [value, setValue] = useState(1)
    const [count, setCount] = useState(null)
  
    const handleClick = () => {
      setValue(2)
    }
    console.log(value)
  
    const handleClickComp = () => {
      setValue(3)
    }
  
    console.log(value)
  
    const handleClickPriceSum = () => {
      setValue(4)
    }
  
    const handleClickForm = () => {
      setValue(5)
    }
  
    const handleClickThankYou = () => {
      setValue(6)
    }
    console.log(value)
  
    const handleClickStart = async () => {
      setValue(1)
      setConnection(null)
      setTransaction(null)
    }
  
    const handleChangeTrans = event => {
      const transaction = event.target.value
  
      setTransaction(transaction)
    }
  
    console.log(transaction)
  
    const handleChangeCtion = event => {
      const connection = event.target.value
      setConnection(connection)
    }
  
    useEffect(() => {
      setConnectionPrice(Math.ceil(connection) * 250)
    }, [connection])
  
    useEffect(() => {
      setTransactionPrice(Math.ceil(transaction / 250) * 250)
    }, [transaction])
  
    console.log({ transactionPrice })
    console.log({ connectionPrice })
  
  return(

  <section
    className="edi-calculator h-auto relative py-10 z-40"
    id="calc-section"
  >
    <div className="container mx-auto px-0.0625 w-full ">
      <div className="flex flex-wrap self-center bg-white border-yellowBtn border-solid border-4 rounded-2xl py-3 px-0 xxs:h-50 xs:h-53 xxs:min-h-43.75 xxs:w-auto xxs:mx-auto ">
        <div className="px-8 ml-offset xxs:flex-shrink-0 xxs:flex-grow-0 xxs:w-5/6 xxs:max-w-83.3 xxs:text-center">
          <div>
            <div className="relative w-full px-4 py-4 xxs:flex-grow-0 xxs:flex-shrink-0 xxs:w-full xxs:max-w-full">
              <img
                src="/images/svg/ace-logo.svg"
                alt="ace-logo"
                className=" align-middle mb-4 h-auto w-full max-w-12.5"
              />
            </div>
            <div id="calc-triger">
      {(value === 1 && (
        <FirstPage
          transaction={transaction}
          connection={connection}
          handleClick={handleClick}
          setTransaction={setTransaction}
          setConnection={setConnection}
          handleChangeTrans={handleChangeTrans}
          handleClickStart={handleClickStart}
          setValue={setValue}
        />
      )) ||
        (value === 2 && (
          <SecondPage
            onClick={handleClickComp}
            transactionPrice={transactionPrice}
            connectionPrice={connectionPrice}
            handleClickStart={handleClickStart}
            setValue={setValue}
          />
        )) ||
        (value === 3 && (
          <Thirdpage
            onClick={handleClickPriceSum}
            handleClickStart={handleClickStart}
            setCount={setCount}
            setValue={setValue}
          />
        )) ||
        (value === 4 && (
          <Fourthpage
            connection={connection}
            connectionPrice={connectionPrice}
            handleClickStart={handleClickStart}
            handleClickForm={handleClickForm}
            count={count}
            setValue={setValue}
          />
        )) ||
        (value === 5 && (
          <Calcform handleClickThankYou={handleClickThankYou} />
        )) ||
        (value === 6 && <Thankyou />) ||
        (value === 7 && (
          <FirstPage
            handleClickStart={handleClickStart}
            setTransaction={setTransaction}
            setConnection={setConnection}
          />
        ))}
    </div>

          
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default ediCalculator;
