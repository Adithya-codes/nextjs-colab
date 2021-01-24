import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react"
import StartButton from './startButton'

const Firstpage = ({
  transaction,
  connection,
  setTransaction,
  setConnection,
  handleClick,
  handleClickStart,
  setValue,
  handleChangeTrans,
}) => {
  const trans = useRef(transaction)
  console.log(setTransaction);
  return(
  <div className="first-page">
    <div className="flex flex-wrap -mx-4">
      <div className=" flex-shrink-0 flex-grow-0 xxs:w-103 xxs:max-w-115 mb-8">
        <h4 className="font-display text-center uppercase font-black mb-2 text-navy-blue xxs:text-1.75 xxs:leading-1.2">
          compare pricing options
        </h4>
        <div>
          <p className="font-paragraph text-black font-normal text-center leading-1  xxs:text-1.19">
            We'll give you two prices: one based on your monthly transaction
            volume and another based on your number of connections. You decide
            which pricing option works best for you.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 edi-calculator-fields">
        <div className="flex flex-col flex-wrap px-1 py-0 content-between justify-center flex-shrink-0 flex-grow-0 w-6/12 max-w-50 ">
          <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1">
            Transactions per month
          </h6>

          <p className="text-black font-normal font-paragraph mb-2 leading-1 xxs:flex-1 xxs:text-1.1875">
            How many total transactions do you project each month?
          </p>

          <input
           ref={trans}
           name="monthlyTransaction"
           placeholder="#"
           id="transaction"
           value={transaction}
           onChange={handleChangeTrans}
           type="text"
            className="edi-calculator-input font-display font-black leading-1 mb-2 pt-7 pb-7 xxs:text-2 "
          />
        </div>

        <div className="flex flex-col flex-wrap px-1 py-0 content-between justify-center flex-shrink-0 flex-grow-0 w-6/12 max-w-50">
          <h6 className="font-display uppercase text-black font-black leading-1.2 mt-4 mb-2 break-normal xxs:text-1">
            Connections per month
          </h6>

          <p className="text-black font-normal font-paragraph mb-2 leading-1 xxs:flex-1 xxs:text-1.1875">
            How many EDI conncections do you need?
          </p>

          <input
            name="monthlyPartners"
            placeholder="#"
            value={connection}
            onChange={e => setConnection(e.target.value)}
            id="connection"
            type="text"
            className="edi-calculator-input font-display font-black leading-1 mb-2 pt-7 pb-7 xxs:text-2 "
          />
        </div>
      </div>
      <div className="flex flex-wrap w-full -mx-4 absolute bottom-0 left-0 right-0  mt-4 btn-className ">
                      <div
                        className=" flex-shrink-0 flex-grow-0 w-full max-w-full mb-16  ml-16 mr-12"
                      >
                        <button
                        
                          className="my-2 uppercase btn-double-outline btn-double-outline--pink btn-double-outline--outline-primary w-70.3 border-0 bg-transparent "
                        >
                          <span className='uppercase font-display font-normal '>next</span>
                        </button>
                         <div className='mt-4'> 
                        <button
                      
                          className="start-btn text-black font-smallText underline ml-20 block first-start-btn xxs:text-1.1875"
                        >
                          <StartButton
                setValue={setValue}
                setConnection={setConnection}
                setTransaction={setTransaction}
              />
                        </button>
                        </div>
                      
                      </div>
                    </div>
    </div>
  </div>
  )
};

export default Firstpage;
