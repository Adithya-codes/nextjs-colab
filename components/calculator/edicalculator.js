import React, { useEffect, useRef, useState } from "react";
import Firstpage from './FirstPage'
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Form from './Calculatorform';

const EdiCalculator = () => {

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
      setCount(null)
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
    className="edi-calculator table h-auto relative py-10 z-40 xs:mx-auto"
    id="calc-section"
  >
    <div className="container mx-auto px-0.0625 w-full xs:px-0.625 ">
      <div className="flex flex-wrap self-center bg-white border-yellowBtn border-solid border-4 rounded-2xl py-3 px-0 xxs:h-51 sm:h-50 md:h-53 lg:h-55 xl:h-48
        xxs:min-h-43.75 xxs:w-auto xxs:mx-auto  ">
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
          handleClick={handleClick}
          setTransaction={setTransaction}
          setConnection={setConnection}
          handleChangeTrans={handleChangeTrans}
          handleClickStart={handleClickStart}
          setValue={setValue}
        />
      )) ||
        (value === 2 && (
          <Secondpage
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
          <Form handleClickThankYou={handleClickThankYou} />
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

export default EdiCalculator;
